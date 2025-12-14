'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full relative">
        {/* Logo ganz links */}
        <Link
          href="/"
          className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2
                     text-sm lg:text-base font-normal tracking-[0.05em] uppercase"
        >
          ESV
        </Link>

        {/* Navigation - Mobile & Desktop */}
        <div className="flex max-w-7xl mx-auto px-6 lg:px-12 py-6 lg:py-8 justify-end gap-4 lg:gap-10">
          <Link href="#music" className="nav-menu-link text-xs lg:text-sm tracking-[0.15em] uppercase inline-block hover:text-highlight transition-colors pb-2">
            Music
          </Link>
          <Link href="#contact" className="nav-menu-link text-xs lg:text-sm tracking-[0.15em] uppercase inline-block hover:text-highlight transition-colors pb-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
