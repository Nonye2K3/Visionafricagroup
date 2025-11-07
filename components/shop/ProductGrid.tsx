'use client'

import { motion } from 'framer-motion'
import { products } from '@/lib/products'
import { ProductCard } from './ProductCard'

export function ProductGrid() {
  return (
    <section id="deals" className="py-24 px-4 relative bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wide">All Products</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Browse All Opportunities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our complete catalog of investment products and business solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
