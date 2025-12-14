const socials = [
  { name: 'Spotify', href: '#spotify' },
  { name: 'Instagram', href: '#instagram' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UC2_AEQ6l0jRk9FgwduhTUuw' },
  { name: 'Apple Music', href: '#apple' },
  { name: 'Email', href: 'mailto:contact@enzosv.com' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 py-20 lg:py-32 bg-gradient-to-b from-background to-[#141414]"
    >
      <h2 className="text-4xl lg:text-6xl font-light tracking-tight uppercase mb-12 lg:mb-20">
        Connect
      </h2>

      <div className="max-w-2xl text-center">
        <p className="text-lg lg:text-xl text-accent leading-relaxed mb-12">
          For bookings, press, or collaborations
          <br />
          get in touch below.
        </p>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-10 justify-center mt-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.name === 'YouTube' ? '_blank' : undefined}
              rel={social.name === 'YouTube' ? 'noopener noreferrer' : undefined}
              className="contact-link text-sm tracking-[0.2em] uppercase relative inline-block py-2 hover:text-highlight transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
