'use client'

import { useEffect, useRef, useState } from 'react'

const tracks = [
  {
    number: '01',
    title: 'Lay',
    subtitle: 'Latest Single • 2025',
    youtubeUrl: 'https://www.youtube.com/watch?v=GNFI4a8iq_0',
    youtubeEmbedId: 'GNFI4a8iq_0',
  },
]

export default function Music() {
  const [visibleTracks, setVisibleTracks] = useState<number[]>([])
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => {
              setVisibleTracks((prev) => [...prev, index])
            }, index * 100)
          }
        })
      },
      { threshold: 0.2 }
    )

    const trackElements = sectionRef.current?.querySelectorAll('[data-index]')
    trackElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="music"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 py-20 lg:py-32 bg-gradient-to-b from-background to-[#141414]"
    >
      <h2 className="text-4xl lg:text-6xl font-light tracking-tight uppercase mb-12 lg:mb-20">
        Music
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-6xl w-full">
        {tracks.map((track, index) => (
          <div
            key={track.number}
            data-index={index}
            className={`group relative bg-white/[0.02] border border-white/[0.05] p-8 lg:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.15] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] ${
              visibleTracks.includes(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="text-xs text-accent tracking-[0.2em] mb-6">
                {track.number}
              </div>
              <h3 className="text-xl lg:text-2xl font-normal mb-3 group-hover:text-highlight transition-colors duration-300">
                {track.title}
              </h3>
              <p className="text-sm text-accent tracking-[0.1em] mb-6">
                {track.subtitle}
              </p>
              <button
                onClick={() => setActiveVideo(track.youtubeEmbedId)}
                className="music-btn text-xs tracking-[0.2em] uppercase px-6 py-3 border border-accent relative overflow-hidden transition-all duration-300 mt-4"
              >
                <span className="relative z-10">Listen</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-highlight transition-colors text-sm tracking-[0.2em] uppercase"
            >
              Close ✕
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm border-0"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}
