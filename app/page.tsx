'use client'

import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Brands } from '@/components/Brands'
import { Portfolio } from '@/components/Portfolio'
import { Contact } from '@/components/Contact'
import { LayeredBackground3D } from '@/components/3D/LayeredBackground3D'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 3-Layer 3D Background */}
      <LayeredBackground3D />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Brands />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
