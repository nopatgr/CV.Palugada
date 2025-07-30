"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface VideoBackgroundProps {
  src: string
  poster?: string
  className?: string
  children?: React.ReactNode
  overlay?: boolean
  overlayOpacity?: number
  position?: "center" | "top" | "bottom" | "top-shifted"
}

export function VideoBackground({
  src,
  poster,
  className = "",
  children,
  overlay = true,
  overlayOpacity = 0.6,
  position = "top-shifted",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      video.play().catch((error) => {
        console.warn("Video autoplay failed:", error)
      })
    }

    const handleError = () => {
      setHasError(true)
      console.warn("Video failed to load")
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  const getObjectPosition = () => {
    switch (position) {
      case "top":
        return "object-top"
      case "bottom":
        return "object-bottom"
      case "top-shifted":
        return "object-[50%_20%]" // Shifted up more for better text positioning
      default:
        return "object-center"
    }
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover ${getObjectPosition()} transition-opacity duration-1000 ${
          isLoaded && !hasError ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload="metadata"
      >
        <source src={src} type="video/webm" />
        <source src={src.replace(".webm", ".mp4")} type="video/mp4" />
      </video>

      {/* Fallback Background */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#171C21] via-[#3640F0]/20 to-[#171C21]" />
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#171C21]/60 via-[#171C21]/70 to-[#171C21]/60 transition-opacity duration-1000"
          style={{ opacity: isLoaded && !hasError ? overlayOpacity : 0.8 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
