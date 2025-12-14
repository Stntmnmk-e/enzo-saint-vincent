const socials = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/enzosaintvincent',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/enzosaintvincent',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC2_AEQ6l0jRk9FgwduhTUuw',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  {
    name: 'Apple Music',
    href: 'https://music.apple.com/artist/enzosaintvincent',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.595-.706 10.495 10.495 0 0 0-2.013-.174C17.65 0 17.354 0 12 0s-5.65 0-5.966.011a10.495 10.495 0 0 0-2.013.174 5.022 5.022 0 0 0-1.595.706C1.31 1.624.565 2.624.248 3.934a9.23 9.23 0 0 0-.24 2.19C0 6.44 0 6.74 0 12s0 5.56.008 5.876c.005.72.086 1.45.24 2.19.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 0 0 1.595.706c.648.174 1.32.259 2.013.174C6.35 24 6.646 24 12 24s5.65 0 5.966-.011a10.495 10.495 0 0 0 2.013-.174 5.022 5.022 0 0 0 1.595-.706c1.118-.732 1.863-1.732 2.18-3.043.154-.74.235-1.47.24-2.19.008-.316.008-.616.008-5.876s0-5.56-.008-5.876zm-5.025 11.115c0 .795-.645 1.44-1.44 1.44a1.44 1.44 0 0 1-1.44-1.44v-5.76c0-.192-.156-.348-.348-.348h-.096c-.192 0-.348.156-.348.348v5.76c0 .795-.645 1.44-1.44 1.44a1.44 1.44 0 0 1-1.44-1.44v-8.64c0-.795.645-1.44 1.44-1.44.795 0 1.44.645 1.44 1.44v.456c0 .192.156.348.348.348h.096c.192 0 .348-.156.348-.348v-.456c0-.795.645-1.44 1.44-1.44.795 0 1.44.645 1.44 1.44v8.64z"/>
      </svg>
    )
  },
  {
    name: 'Email',
    href: 'mailto:contact@enzosv.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    )
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 py-20 lg:py-32 bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <h2 className="text-4xl lg:text-6xl font-light tracking-tight uppercase mb-12 lg:mb-16 text-center">
          Connect
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-lg lg:text-xl text-white/50 leading-relaxed">
            For bookings, press, or collaborations
            <br />
            get in touch below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.name !== 'Email' ? '_blank' : undefined}
              rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] backdrop-blur-sm p-8 lg:p-10 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.2] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.15)]"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accent */}
              <div className="absolute -top-px -right-px w-8 h-8 border-t border-r border-white/30 opacity-0 group-hover:opacity-100 group-hover:w-12 group-hover:h-12 transition-all duration-500" />

              <div className="relative flex flex-col items-center text-center gap-4">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {social.icon}
                </div>

                {/* Name */}
                <span className="text-sm lg:text-base tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
                  {social.name}
                </span>

                {/* Underline animation */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white/50 group-hover:w-16 transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>

        {/* Email highlight section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-white/5 blur-xl" />
            <a
              href="mailto:contact@enzosv.com"
              className="relative text-sm lg:text-base tracking-[0.25em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300 px-6 py-3 border border-white/10 hover:border-white/30 inline-block"
            >
              contact@enzosv.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
