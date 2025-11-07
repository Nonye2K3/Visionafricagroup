'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users } from 'lucide-react'

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower African businesses and individuals with world-class investment solutions that drive sustainable economic growth and prosperity across the continent.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading investment group in Africa, recognized for innovation, integrity, and exceptional returns that transform lives and communities.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, Excellence, Innovation, and Sustainability guide every decision we make and every relationship we build with our clients.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of seasoned professionals with deep expertise in African markets, committed to delivering exceptional results for our clients.'
    }
  ]

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wide">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Building Africa's Financial Future
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Vision Africa Investment Group Ltd is a premier investment firm dedicated to unlocking 
            opportunities and creating value across African markets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-12 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Founded with a vision to transform the African investment landscape, Vision Africa 
                  Investment Group has grown to become one of the continent's most trusted investment partners.
                </p>
                <p>
                  Our journey began with a simple belief: that African markets hold immense potential 
                  for those who understand them deeply and approach them with integrity and innovation.
                </p>
                <p>
                  Today, we manage over $2 billion in assets and serve more than 500 clients across 
                  multiple African nations, delivering consistent returns and creating lasting value.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years of Excellence</div>
                </div>
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">African Countries</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expert Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
