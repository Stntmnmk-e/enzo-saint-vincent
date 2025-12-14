'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      {/* Content */}
      <div className="flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0 bg-gradient-to-r from-background via-background/90 to-transparent order-2 lg:order-1">
        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight uppercase mb-12 lg:mb-16 animate-fade-in-up animate-delay-500">
          Enzo
          <br />
          Saint
          <br />
          Vincent
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fade-in-up animate-delay-700">
          <Link
            href="#music"
            className="hero-btn-primary text-center text-xs lg:text-sm tracking-[0.15em] uppercase px-6 lg:px-8 py-3 lg:py-4 border border-foreground relative overflow-hidden z-10"
          >
            <span className="relative z-10">Listen Now</span>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="relative h-[60vh] lg:h-screen bg-black order-1 lg:order-2 overflow-hidden">
        <div
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="absolute inset-0 w-full h-[110%]"
        >
          <Image
            src="/images/hero.png"
            alt="Enzo Saint Vincent - Indie rock artist performing on stage with atmospheric lighting"
            fill
            priority
            className="object-cover object-center opacity-0 animate-fade-in animate-delay-300"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {/* Dark overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>
    </section>
  )
}
