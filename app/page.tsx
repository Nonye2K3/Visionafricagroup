'use client'

import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Portfolio } from '@/components/Portfolio'
import { Contact } from '@/components/Contact'
import { Background3D } from '@/components/3D/Background3D'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 3D Background Layer */}
      <Background3D />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
