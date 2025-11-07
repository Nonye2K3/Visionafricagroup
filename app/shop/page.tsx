'use client'

import { ShopHero } from '@/components/shop/ShopHero'
import { ProductGrid } from '@/components/shop/ProductGrid'
import { FeaturedProducts } from '@/components/shop/FeaturedProducts'
import { Categories } from '@/components/shop/Categories'
import { Background3D } from '@/components/3D/Background3D'
import { Footer } from '@/components/Footer'

export default function Shop() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 3D Background Layer */}
      <Background3D variant="shop" />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <ShopHero />
        <Categories />
        <FeaturedProducts />
        <ProductGrid />
        <Footer />
      </div>
    </main>
  )
}
