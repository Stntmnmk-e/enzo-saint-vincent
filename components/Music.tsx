'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const tracks = [
  {
    number: '01',
    title: 'Lay',
    subtitle: 'Latest Single • 2025',
    youtubeUrl: 'https://www.youtube.com/watch?v=GNFI4a8iq_0',
    youtubeEmbedId: 'GNFI4a8iq_0',
    spotifyUrl: 'https://open.spotify.com/artist/enzosaintvincent',
    appleMusicUrl: 'https://music.apple.com/artist/enzosaintvincent',
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
      className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 py-20 lg:py-32 bg-gradient-to-b from-background via-[#0d0d0d] to-[#141414] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <h2 className="text-4xl lg:text-6xl font-light tracking-tight uppercase mb-16 lg:mb-24 text-center">
          Latest Release
        </h2>

        <div className="max-w-5xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={track.number}
              data-index={index}
              className={`group relative transition-all duration-700 ${
                visibleTracks.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] backdrop-blur-sm overflow-hidden">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Glow effect on hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 p-8 lg:p-12 xl:p-16 relative">
                  {/* Left side - Album/Artist Image */}
                  <div className="lg:col-span-2 flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-sm">
                      {/* Main image container with border and effects */}
                      <div className="relative w-full h-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all duration-500">
                        <Image
                          src="/images/hero.png"
                          alt={track.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                        />

                        {/* Dark overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent" />

                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>

                      {/* Decorative corner frames */}
                      <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-white/40 group-hover:w-16 group-hover:h-16 transition-all duration-500" />
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-white/40 group-hover:w-16 group-hover:h-16 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Right side - Track Info */}
                  <div className="lg:col-span-3 flex flex-col justify-center space-y-6">
                    <div>
                      <div className="text-xs text-white/40 tracking-[0.25em] uppercase mb-3">
                        {track.subtitle}
                      </div>
                      <h3 className="text-5xl lg:text-7xl font-light tracking-tight uppercase mb-6 group-hover:text-white/90 transition-colors duration-300">
                        {track.title}
                      </h3>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => setActiveVideo(track.youtubeEmbedId)}
                        className="music-btn text-xs tracking-[0.2em] uppercase px-8 py-4 border border-white/30 relative overflow-hidden transition-all duration-300 hover:border-white/60"
                      >
                        <span className="relative z-10">Watch Video</span>
                      </button>
                    </div>

                    {/* Platform Links */}
                    <div className="flex items-center gap-6 pt-4">
                      <span className="text-xs text-white/30 tracking-[0.2em] uppercase">
                        Stream On
                      </span>
                      <div className="flex gap-4">
                        <a
                          href={track.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-background transition-all duration-300"
                          aria-label="YouTube"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>
                        <a
                          href={track.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-background transition-all duration-300"
                          aria-label="Spotify"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                        </a>
                        <a
                          href={track.appleMusicUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-background transition-all duration-300"
                          aria-label="Apple Music"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.595-.706 10.495 10.495 0 0 0-2.013-.174C17.65 0 17.354 0 12 0s-5.65 0-5.966.011a10.495 10.495 0 0 0-2.013.174 5.022 5.022 0 0 0-1.595.706C1.31 1.624.565 2.624.248 3.934a9.23 9.23 0 0 0-.24 2.19C0 6.44 0 6.74 0 12s0 5.56.008 5.876c.005.72.086 1.45.24 2.19.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 0 0 1.595.706c.648.174 1.32.259 2.013.174C6.35 24 6.646 24 12 24s5.65 0 5.966-.011a10.495 10.495 0 0 0 2.013-.174 5.022 5.022 0 0 0 1.595-.706c1.118-.732 1.863-1.732 2.18-3.043.154-.74.235-1.47.24-2.19.008-.316.008-.616.008-5.876s0-5.56-.008-5.876zm-5.025 11.115c0 .795-.645 1.44-1.44 1.44a1.44 1.44 0 0 1-1.44-1.44v-5.76c0-.192-.156-.348-.348-.348h-.096c-.192 0-.348.156-.348.348v5.76c0 .795-.645 1.44-1.44 1.44a1.44 1.44 0 0 1-1.44-1.44v-8.64c0-.795.645-1.44 1.44-1.44.795 0 1.44.645 1.44 1.44v.456c0 .192.156.348.348.348h.096c.192 0 .348-.156.348-.348v-.456c0-.795.645-1.44 1.44-1.44.795 0 1.44.645 1.44 1.44v8.64z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-white/30 group-hover:w-12 group-hover:h-12 transition-all duration-500" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-white/30 group-hover:w-12 group-hover:h-12 transition-all duration-500" />
            </div>
          ))}
        </div>
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
