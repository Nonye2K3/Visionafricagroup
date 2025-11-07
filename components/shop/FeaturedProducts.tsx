'use client'

import { motion } from 'framer-motion'
import { getFeaturedProducts } from '@/lib/products'
import { ProductCard } from './ProductCard'

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section id="featured" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wide">Featured</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Premium Investment Opportunities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Handpicked investment products and business opportunities with exceptional returns
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
