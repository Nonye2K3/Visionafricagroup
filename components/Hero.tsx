'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Globe, Award, Package } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold">
                Vision Africa Group
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-headline leading-tight"
            >
              Your Link to
              <span className="block bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 bg-clip-text text-transparent">
                What's Next
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Connecting African markets with world-class products and services. 
              From product sourcing to distribution, we're your trusted partner in 
              building successful businesses across the continent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/#about"
                className="group px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 flex items-center space-x-2 hover:shadow-lg hover:shadow-primary-500/30"
              >
                <span className="font-semibold">About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#services"
                className="px-8 py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 font-semibold"
              >
                Our Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold font-headline bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-headline bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-headline bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl space-y-4 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-headline">Product Sourcing</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Access to premium products from global manufacturers
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl space-y-4 hover:shadow-xl transition-all duration-300 mt-8"
              >
                <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-headline">Marketing</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Strategic marketing solutions for African markets
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl space-y-4 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-headline">Distribution</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Seamless distribution networks across the continent
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl space-y-4 hover:shadow-xl transition-all duration-300 mt-8"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-headline">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Award-winning service and customer satisfaction
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
