'use client'

import { motion } from 'framer-motion'
import { Sun, Music, Zap, Package, Sparkles, Building2 } from 'lucide-react'
import Link from 'next/link'

export function Brands() {
  const brands = [
    {
      name: 'OMNI',
      tagline: 'Complete Solutions',
      description: 'Comprehensive range of products and services designed to meet all your business and lifestyle needs with premium quality and reliability.',
      icon: Package,
      color: 'from-blue-500 to-cyan-500',
      features: ['Multi-Category Products', 'Quality Assurance', 'Nationwide Delivery']
    },
    {
      name: 'TOGO Solar',
      tagline: 'Sustainable Energy',
      description: 'Leading provider of solar energy solutions across Africa, bringing clean, affordable, and sustainable power to homes and businesses.',
      icon: Sun,
      color: 'from-yellow-500 to-orange-500',
      features: ['Solar Panels', 'Installation Services', 'Energy Consulting']
    },
    {
      name: 'SHILE Music',
      tagline: 'Sound of Africa',
      description: 'Promoting African music talent and connecting artists with global audiences through innovative music production and distribution services.',
      icon: Music,
      color: 'from-purple-500 to-pink-500',
      features: ['Artist Management', 'Music Production', 'Distribution']
    }
  ]

  return (
    <section id="brands" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wide">Our Brands</span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline mt-4 mb-6">
            Trusted Brands, Proven Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our diverse portfolio of brands serves various sectors across Africa, 
            each committed to delivering exceptional value and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Brand Header with Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${brand.color} p-8 flex flex-col justify-between`}>
                  <div className="flex items-center justify-between">
                    <brand.icon className="w-12 h-12 text-white opacity-90" />
                    <Sparkles className="w-6 h-6 text-white opacity-60" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-headline text-white mb-1">{brand.name}</h3>
                    <p className="text-white/90 text-sm font-semibold">{brand.tagline}</p>
                  </div>
                </div>

                {/* Brand Content */}
                <div className="p-8">
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {brand.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {brand.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/shop"
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Explore Products →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-12 rounded-3xl text-center"
        >
          <Building2 className="w-16 h-16 mx-auto mb-6 text-primary-500" />
          <h3 className="text-2xl font-bold font-headline mb-4">Growing Portfolio</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            We're constantly expanding our brand portfolio to serve more sectors and markets 
            across Africa. Each brand is carefully developed to meet specific market needs with 
            uncompromising quality and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              <span className="text-primary-600 dark:text-primary-400 font-semibold">Consumer Goods</span>
            </div>
            <div className="px-6 py-3 bg-accent-100 dark:bg-accent-900/30 rounded-full">
              <span className="text-accent-600 dark:text-accent-400 font-semibold">Energy Solutions</span>
            </div>
            <div className="px-6 py-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <span className="text-purple-600 dark:text-purple-400 font-semibold">Entertainment</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
