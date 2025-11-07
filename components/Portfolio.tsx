'use client'

import { motion } from 'framer-motion'
import { Building2, Factory, Store, Landmark, Zap, Leaf } from 'lucide-react'

export function Portfolio() {
  const investments = [
    {
      icon: Building2,
      title: 'Commercial Real Estate',
      location: 'Lagos, Nigeria',
      value: '$250M',
      return: '+15.8%',
      description: 'Premium office complexes and retail centers in prime business districts',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      location: 'Nairobi, Kenya',
      value: '$180M',
      return: '+22.3%',
      description: 'State-of-the-art manufacturing facilities for consumer goods',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
    },
    {
      icon: Store,
      title: 'Retail Portfolio',
      location: 'Accra, Ghana',
      value: '$120M',
      return: '+18.5%',
      description: 'Strategic investments in leading retail chains and e-commerce platforms',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
    },
    {
      icon: Landmark,
      title: 'Financial Services',
      location: 'Johannesburg, SA',
      value: '$320M',
      return: '+19.7%',
      description: 'Equity stakes in banking, insurance, and fintech companies',
      image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80'
    },
    {
      icon: Zap,
      title: 'Energy & Infrastructure',
      location: 'Cairo, Egypt',
      value: '$280M',
      return: '+25.1%',
      description: 'Renewable energy projects and critical infrastructure development',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
    },
    {
      icon: Leaf,
      title: 'Agriculture & Agritech',
      location: 'Kigali, Rwanda',
      value: '$95M',
      return: '+21.4%',
      description: 'Sustainable agriculture and innovative agritech solutions',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80'
    }
  ]

  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wide">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our Investment Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A diversified portfolio of strategic investments across Africa's most promising sectors and markets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investments.map((investment, index) => (
            <motion.div
              key={investment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 to-accent-500/80 z-10" />
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <investment.icon className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{investment.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{investment.location}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold">
                      {investment.return}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {investment.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Value</span>
                    <span className="text-xl font-bold gradient-text">{investment.value}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Portfolio Performance</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">$1.25B</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total AUM</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">+20.3%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Annual Return</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Investments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">African Countries</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
