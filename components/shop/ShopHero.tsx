'use client'

import { motion } from 'framer-motion'
import { Search, ShoppingBag, TrendingUp, Award } from 'lucide-react'
import { useState } from 'react'

export function ShopHero() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold">
              Premium African Products & Services
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Vision Africa
              <span className="block gradient-text">Marketplace</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover premium products, investment opportunities, and business solutions 
              from Africa's leading enterprises and innovators.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative glass rounded-full p-2 shadow-lg">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, services, or investments..."
                className="w-full pl-14 pr-4 py-4 bg-transparent outline-none text-gray-900 dark:text-gray-100"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors font-semibold">
                Search
              </button>
            </div>
          </motion.div>

          {/* Feature Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8"
          >
            <div className="glass p-6 rounded-2xl">
              <ShoppingBag className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">1000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Premium Products</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-accent-500 mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <Award className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Verified Sellers</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
