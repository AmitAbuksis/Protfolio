const DEFAULT_TRANSFORM_WIDTH = 1024

const DEVICE_PIXEL_RATIOS = [1, 2, 3]

const MAX_DIMENSION = 6000

export { DEFAULT_TRANSFORM_WIDTH, DEVICE_PIXEL_RATIOS }

const clampDim = (n) => Math.min(Math.max(Math.round(n), 1), MAX_DIMENSION)

const clamp01 = (n) => Math.min(1, Math.max(0, n))

export const parseImageUrl = (src) => {
  try {
    const url = new URL(src)

    // -----------------------------
    // Cloudinary
    // -----------------------------
    if (url.hostname.includes("res.cloudinary.com")) {
      const parts = url.pathname.split("/").filter(Boolean)

      const uploadIndex = parts.indexOf("upload")

      if (uploadIndex === -1) return null

      let i = uploadIndex + 1

      // Skip existing transformations if present
      while (
        i < parts.length &&
        !/^v\d+$/.test(parts[i]) &&
        parts[i] !== "images"
      ) {
        i++
      }

      let version = ""

      if (i < parts.length && /^v\d+$/.test(parts[i])) {
        version = parts[i]
        i++
      }

      const publicId = parts
        .slice(i)
        .join("/")
        .replace(/\.[^.]+$/, "")

      return {
        provider: "cloudinary",
        origin: url.origin,
        cloudName: parts[0],
        version,
        publicId,
      }
    }

    // -----------------------------
    // Framer CDN
    // -----------------------------
    const v1Index = url.pathname.indexOf("/v1/")

    const basePath =
      v1Index === -1
        ? url.pathname
        : url.pathname.slice(0, v1Index)

    const filename = basePath.split("/").pop()

    if (!filename || /\.svg$/i.test(filename))
      return null

    return {
      provider: "framer",
      baseUrl: `${url.origin}${basePath}`,
      filename,
    }
  } catch {
    return null
  }
}

const buildCloudinaryUrl = (parsed, options) => {
  const {
    width,
    height,
    crop,
    focalPoint,
    quality,
  } = options

  const transforms = []

  transforms.push(crop ? "c_fill" : "c_fit")

  transforms.push(`w_${clampDim(width)}`)

  if (height) {
    transforms.push(`h_${clampDim(height)}`)
  }

  transforms.push("f_auto")

  transforms.push("q_auto")

  if (quality !== undefined) {
    transforms.push(`q_${quality}`)
  }

  if (crop && focalPoint) {
    transforms.push(
      `g_xy_center`,
      `x_${Math.round((focalPoint.x - 0.5) * 1000)}`,
      `y_${Math.round((focalPoint.y - 0.5) * 1000)}`
    )
  }

  return [
    parsed.origin,
    "image",
    "upload",
    transforms.join(","),
    parsed.version,
    parsed.publicId,
  ].join("/")
}

const buildFramerUrl = (parsed, options) => {
  const {
    width,
    height,
    crop,
    focalPoint,
    quality,
  } = options

  const params = [
    `w_${clampDim(width)}`,
    `h_${clampDim(height || width)}`,
  ]

  if (crop) {
    params.push(
      focalPoint
        ? `fp_${clamp01(focalPoint.x).toFixed(2)}_${clamp01(
            focalPoint.y
          ).toFixed(2)}`
        : "al_c"
    )
  }

  params.push(
    `q_${quality}`,
    "usm_0.66_1.00_0.01",
    "enc_webp",
    "quality_auto"
  )

  const outputName = /\.gif$/i.test(parsed.filename)
    ? parsed.filename
    : parsed.filename.replace(/\.[^.]+$/, "") + ".webp"

  return `${parsed.baseUrl}/v1/${
    crop ? "fill" : "fit"
  }/${params.join(",")}/${outputName}`
}

export const buildTransformUrl = (parsed, options) => {
  switch (parsed.provider) {
    case "cloudinary":
      return buildCloudinaryUrl(parsed, options)

    case "framer":
      return buildFramerUrl(parsed, options)

    default:
      return null
  }
}

export const buildSrcSet = (parsed, options) => {
  return DEVICE_PIXEL_RATIOS.map((dpr) => {
    return `${buildTransformUrl(parsed, {
      ...options,
      width: options.width * dpr,
      height: options.height
        ? options.height * dpr
        : undefined,
    })} ${dpr}x`
  }).join(", ")
}