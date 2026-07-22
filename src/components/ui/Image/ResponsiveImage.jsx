import * as React from "react"
import { useSize } from "../../../hooks/use-size"
import { cn } from "../../../lib/utils"

import {
  DEFAULT_TRANSFORM_WIDTH,
  buildTransformUrl,
  buildSrcSet,
} from "./image-utils"

const ImageWrapper = React.forwardRef(
  ({ aspectRatio, className, style, children }, ref) => (
    <span
      ref={ref}
      className={cn("relative inline-block", className)}
      style={{
        aspectRatio,
        ...style,
      }}
    >
      {children}
    </span>
  )
)

ImageWrapper.displayName = "ImageWrapper"

const ResponsiveImage = React.forwardRef(
  (
    {
      parsed,
      fittingType = "fill",
      focalPoint,
      quality = 90,
      className,
      style,
      aspectRatio,
      onLoad,
      ...props
    },
    forwardedRef
  ) => {
    const wrapperRef = React.useRef(null)
    const imgRef = React.useRef(null)

    React.useImperativeHandle(forwardedRef, () => imgRef.current)

    const size = useSize(wrapperRef)

    const [loaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
      setLoaded(false)
    }, [parsed])

    const crop = fittingType !== "fit"

    const options = size && {
      width: size.width || DEFAULT_TRANSFORM_WIDTH,
      height: size.height || undefined,
      crop,
      focalPoint: crop ? focalPoint : undefined,
      quality,
    }

    const placeholder =
      options &&
      buildTransformUrl(parsed, {
        ...options,
        width: 20,
        height: options.height
          ? Math.max(
              1,
              Math.round((20 * options.height) / options.width)
            )
          : undefined,
        quality: 20,
      })

    const src = options
      ? buildTransformUrl(parsed, options)
      : undefined

    const srcSet = options
      ? buildSrcSet(parsed, options)
      : undefined

    return (
      <ImageWrapper
        ref={wrapperRef}
        aspectRatio={aspectRatio}
        className={className}
        style={style}
      >
        {!loaded && placeholder && (
          <img
            src={placeholder}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            style={{
              objectFit:
                fittingType === "fit"
                  ? "contain"
                  : "cover",
              filter: "blur(12px)",
              transform: "scale(1.08)",
            }}
          />
        )}

        {src && (
          <img
            ref={imgRef}
            {...props}
            src={src}
            srcSet={srcSet}
            loading="lazy"
            decoding="async"
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-300",
              fittingType === "fit"
                ? "object-contain"
                : "object-cover"
            )}
            style={{
              opacity: loaded ? 1 : 0,
            }}
            onLoad={(e) => {
              setLoaded(true)
              onLoad?.(e)
            }}
          />
        )}
      </ImageWrapper>
    )
  }
)

ResponsiveImage.displayName = "ResponsiveImage"

export default ResponsiveImage