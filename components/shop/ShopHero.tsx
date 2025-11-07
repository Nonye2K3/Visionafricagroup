'use client'

import { motion } from 'framer-motion'
import { Search, ShoppingBag, TrendingUp, Award, Tag } from 'lucide-react'
import { useState } from 'react'

export function ShopHero() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative px-4 pt-32 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* HUGE SALE Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="relative px-8 py-16 md:py-24 text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <Tag className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Limited Time Offer</span>
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold font-headline text-white mb-4"
            >
              HUGE SALE
              <span className="block text-accent-200">UP TO 70% OFF</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-8"
            >
              Exclusive deals on premium products across all categories
            </motion.p>
            
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold hover:bg-accent-500 hover:text-white transition-all duration-300 shadow-xl"
            >
              Shop Now
            </motion.button>
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight">
              Vision Africa
              <span className="block bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Marketplace
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover premium products from trusted brands across Africa. 
              From automobiles to fashion, find everything you need in one place.
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
                placeholder="Search for products..."
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
              <div className="text-2xl font-bold font-headline bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-1">1000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Premium Products</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-accent-500 mx-auto mb-3" />
              <div className="text-2xl font-bold font-headline bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-1">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <Award className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-2xl font-bold font-headline bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-1">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Verified Sellers</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
