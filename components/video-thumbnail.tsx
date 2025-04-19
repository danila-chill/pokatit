"use client"

import { useEffect, useRef } from "react"

interface VideoThumbnailProps {
  videoUrl: string
  onClick: () => void
}

export default function VideoThumbnail({ videoUrl, onClick }: VideoThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (!video || !canvas) return

    video.crossOrigin = "anonymous"
    video.src = videoUrl

    video.addEventListener("loadeddata", () => {
      // Seek to 1 second to avoid black frame at the beginning
      video.currentTime = 1
    })

    video.addEventListener("seeked", () => {
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      // Draw the video frame on the canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    })

    return () => {
      video.removeEventListener("loadeddata", () => {})
      video.removeEventListener("seeked", () => {})
    }
  }, [videoUrl])

  return (
    <div
      className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <canvas ref={canvasRef} className="w-full h-full object-cover" />
      <video ref={videoRef} className="hidden" muted />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </div>
    </div>
  )
}
