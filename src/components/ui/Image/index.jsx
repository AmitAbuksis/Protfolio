import * as React from "react"
import ResponsiveImage from "./ResponsiveImage"
import { parseImageUrl } from "./image-utils"

const FALLBACK_IMAGE_URL = ""

export const Image = React.forwardRef(
  (
    {
      src,
      fittingType = "fill",
      originWidth,
      originHeight,
      focalPointX,
      focalPointY,
      quality = 90,
      onError,
      ...props
    },
    ref
  ) => {
    const [imgSrc, setImgSrc] = React.useState(src)

    React.useEffect(() => {
      setImgSrc(src)
    }, [src])

    const handleError = React.useCallback(
      (event) => {
        onError?.(event)

        if (
          FALLBACK_IMAGE_URL &&
          imgSrc !== FALLBACK_IMAGE_URL
        ) {
          setImgSrc(FALLBACK_IMAGE_URL)
        }
      },
      [imgSrc, onError]
    )

    if (!imgSrc) {
      return (
        <img
          ref={ref}
          src={FALLBACK_IMAGE_URL}
          data-empty-image
          onError={handleError}
          {...props}
        />
      )
    }

    const parsed =
      imgSrc !== FALLBACK_IMAGE_URL
        ? parseImageUrl(imgSrc)
        : null

    // Unknown provider (or SVG): render a normal img.
    if (!parsed) {
      return (
        <img
          ref={ref}
          src={imgSrc}
          loading="lazy"
          decoding="async"
          onError={handleError}
          data-error-image={
            imgSrc === FALLBACK_IMAGE_URL || undefined
          }
          {...props}
        />
      )
    }

    const focalPoint =
      typeof focalPointX === "number" &&
      typeof focalPointY === "number"
        ? {
            x: focalPointX,
            y: focalPointY,
          }
        : undefined

    const aspectRatio =
      originWidth && originHeight
        ? `${originWidth} / ${originHeight}`
        : undefined

    return (
      <ResponsiveImage
        ref={ref}
        parsed={parsed}
        fittingType={fittingType}
        focalPoint={focalPoint}
        quality={quality}
        aspectRatio={aspectRatio}
        onError={handleError}
        {...props}
      />
    )
  }
)

Image.displayName = "Image"