'use client'

import { useParams } from 'next/navigation'
import { ProductDetail3D } from '@/components/shop/ProductDetail3D'
import { RelatedProducts } from '@/components/shop/RelatedProducts'
import { LayeredBackground3D } from '@/components/3D/LayeredBackground3D'
import { Footer } from '@/components/Footer'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 3-Layer 3D Background */}
      <LayeredBackground3D variant="product" />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <ProductDetail3D productId={productId} />
        <RelatedProducts />
        <Footer />
      </div>
    </main>
  )
}
