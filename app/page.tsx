import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Music from '@/components/Music'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Music />
      <Contact />
      <Footer />
    </main>
  )
}
