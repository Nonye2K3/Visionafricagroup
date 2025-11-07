'use client'

import { motion } from 'framer-motion'
import { Package, Briefcase, Home, Zap, Smartphone, TrendingUp, Leaf, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export function Categories() {
  const categories = [
    {
      icon: Package,
      name: 'Consumer Goods',
      count: 250,
      color: 'from-blue-500 to-cyan-500',
      href: '/shop?category=consumer-goods'
    },
    {
      icon: Briefcase,
      name: 'Business Services',
      count: 180,
      color: 'from-purple-500 to-pink-500',
      href: '/shop?category=business-services'
    },
    {
      icon: Home,
      name: 'Real Estate',
      count: 120,
      color: 'from-green-500 to-emerald-500',
      href: '/shop?category=real-estate'
    },
    {
      icon: Zap,
      name: 'Technology',
      count: 340,
      color: 'from-yellow-500 to-orange-500',
      href: '/shop?category=technology'
    },
    {
      icon: Smartphone,
      name: 'Electronics',
      count: 280,
      color: 'from-indigo-500 to-blue-500',
      href: '/shop?category=electronics'
    },
    {
      icon: TrendingUp,
      name: 'Investments',
      count: 95,
      color: 'from-red-500 to-pink-500',
      href: '/shop?category=investments'
    },
    {
      icon: Leaf,
      name: 'Agriculture',
      count: 150,
      color: 'from-green-600 to-lime-500',
      href: '/shop?category=agriculture'
    },
    {
      icon: ShoppingCart,
      name: 'Retail',
      count: 420,
      color: 'from-purple-600 to-indigo-500',
      href: '/shop?category=retail'
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
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wide">Categories</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Browse our diverse range of products and services across multiple industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link href={category.href}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-center mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {category.count} items
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
