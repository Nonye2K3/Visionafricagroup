'use client'

import { motion } from 'framer-motion'
import { Car, Wrench, Smartphone, Shirt } from 'lucide-react'
import Link from 'next/link'

export function Categories() {
  const categories = [
    {
      icon: Car,
      name: 'Automobile',
      count: 250,
      color: 'from-blue-500 to-cyan-500',
      href: '/shop?category=automobile',
      description: 'Vehicles, parts & accessories'
    },
    {
      icon: Wrench,
      name: 'Buildware',
      count: 320,
      color: 'from-orange-500 to-red-500',
      href: '/shop?category=buildware',
      description: 'Construction & building materials'
    },
    {
      icon: Smartphone,
      name: 'Electronics',
      count: 450,
      color: 'from-purple-500 to-pink-500',
      href: '/shop?category=electronics',
      description: 'Latest tech & gadgets'
    },
    {
      icon: Shirt,
      name: 'Fashion',
      count: 380,
      color: 'from-green-500 to-emerald-500',
      href: '/shop?category=fashion',
      description: 'Clothing, shoes & accessories'
    }
  ]

  return (
    <section id="categories" className="py-24 px-4 relative bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wide">Shop by Category</span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline mt-4 mb-6">
            Explore Our Categories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Browse our carefully curated selection across four main categories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={category.href}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full"
                >
                  {/* Category Header */}
                  <div className={`relative h-40 bg-gradient-to-br ${category.color} p-6 flex items-center justify-center`}>
                    <category.icon className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-white text-xs font-bold">{category.count}+</span>
                    </div>
                  </div>
                  
                  {/* Category Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold font-headline mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {category.description}
                    </p>
                    <div className="text-primary-500 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300 inline-block">
                      Browse {category.name} →
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl inline-block">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Can't find what you're looking for?
            </p>
            <Link
              href="#contact"
              className="text-primary-500 hover:text-primary-600 font-semibold"
            >
              Contact our support team →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
