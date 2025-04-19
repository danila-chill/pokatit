"use client"

import { useState } from "react"

const videos = [
  {
    id: 1,
    title: "Тренировка в школе ПОКАТИТ",
    videoId: "IlUnoDbFxjE",
    isShort: true,
  },
  {
    id: 2,
    title: "Хоккейная тренировка",
    videoId: "7C0XBXytVyg",
    isShort: true,
  },
  {
    id: 3,
    title: "Техника катания",
    videoId: "XxFQpPraBSo",
    isShort: true,
  },
  {
    id: 4,
    title: "Мастерство владения клюшкой",
    videoId: "_jXBUBJNL_U",
    isShort: true,
  },
  {
    id: 5,
    title: "Полная тренировка",
    videoId: "fOoyVwHi60Q",
    isShort: false,
  },
]

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const getYouTubeEmbedUrl = (videoId: string, isShort: boolean) => {
    if (isShort) {
      return `https://www.youtube.com/embed/${videoId}?loop=1&rel=0`
    }
    return `https://www.youtube.com/embed/${videoId}?rel=0`
  }

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  return (
    <div>
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button onClick={() => setActiveVideo(null)} className="absolute -top-10 right-0 text-white text-2xl">
              ✕
            </button>
            <iframe
              src={activeVideo}
              className="w-full aspect-video rounded-lg"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group aspect-video"
            onClick={() => setActiveVideo(getYouTubeEmbedUrl(video.videoId, video.isShort))}
          >
            <img
              src={getThumbnailUrl(video.videoId) || "/placeholder.svg"}
              alt={video.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="none"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white font-medium">{video.title}</h3>
              <span className="text-white/70 text-sm">{video.isShort ? "YouTube Shorts" : "YouTube"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
