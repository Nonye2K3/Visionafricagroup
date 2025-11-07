'use client'

import { motion } from 'framer-motion'
import { Star, ShoppingCart, Eye } from 'lucide-react'
import Link from 'next/link'
import { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/shop/product/${product.id}`}>
        <div className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-800">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {product.featured && (
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full">
                Featured
              </div>
            )}
            {!product.inStock && (
              <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                Sold Out
              </div>
            )}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-3">
                <button className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                  <Eye className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-primary-500 uppercase tracking-wide">
                {product.category.replace('-', ' ')}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold">{product.rating}</span>
                <span className="text-xs text-gray-500">({product.reviews})</span>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className="text-2xl font-bold gradient-text">
                  ${product.price.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">{product.currency}</div>
              </div>
              <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold text-sm">
                View Details
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {product.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
