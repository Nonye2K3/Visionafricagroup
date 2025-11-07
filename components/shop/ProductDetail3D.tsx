'use client'

import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, Share2, Check, TrendingUp, Shield, Award } from 'lucide-react'
import { getProductById } from '@/lib/products'
import { Product3DViewer } from '@/components/3D/Product3DViewer'

interface ProductDetail3DProps {
  productId: string
}

export function ProductDetail3D({ productId }: ProductDetail3DProps) {
  const product = getProductById(productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400">The requested product could not be found.</p>
        </div>
      </div>
    )
  }

  const features = [
    { icon: TrendingUp, text: 'High Growth Potential' },
    { icon: Shield, text: 'Secure Investment' },
    { icon: Award, text: 'Verified Opportunity' },
    { icon: Check, text: 'Due Diligence Completed' }
  ]

  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: 3D Product Viewer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-3xl overflow-hidden p-8 sticky top-24">
              <Product3DViewer product={product} />
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg bg-gray-200 dark:bg-gray-800 cursor-pointer hover:ring-2 hover:ring-primary-500 transition-all"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full">
                  {product.category.replace('-', ' ')}
                </span>
                {product.featured && (
                  <span className="px-3 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= product.rating
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-end space-x-2 mb-4">
                <span className="text-5xl font-bold gradient-text">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-xl text-gray-500 mb-2">{product.currency}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Check className="w-5 h-5 text-green-500" />
                <span className={product.inStock ? 'text-green-500' : 'text-red-500'}>
                  {product.inStock ? 'Available' : 'Sold Out'}
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.text} className="glass p-4 rounded-xl flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <button className="flex-1 px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary-500/50 flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Invest Now</span>
              </button>
              <button className="px-6 py-4 border-2 border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300">
                <Heart className="w-5 h-5" />
              </button>
              <button className="px-6 py-4 border-2 border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Additional Info */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Investment Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Investment</span>
                  <span className="font-semibold">${product.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Expected ROI</span>
                  <span className="font-semibold text-green-500">18-25% annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Investment Period</span>
                  <span className="font-semibold">3-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Risk Level</span>
                  <span className="font-semibold text-yellow-500">Moderate</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
