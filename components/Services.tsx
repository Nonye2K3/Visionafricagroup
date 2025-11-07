'use client'

import { motion } from 'framer-motion'
import { Package, TrendingUp, ShoppingBag, Shirt, Globe2, Truck } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Package,
      title: 'Product Sourcing',
      description: 'We connect you with reliable manufacturers and suppliers worldwide, ensuring you get the best quality products at competitive prices for the African market.',
      features: ['Global Supplier Network', 'Quality Assurance', 'Competitive Pricing', 'Product Verification']
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Distribution',
      description: 'Comprehensive marketing strategies and robust distribution networks designed specifically for African markets, helping your products reach the right customers.',
      features: ['Market Analysis', 'Brand Strategy', 'Distribution Channels', 'Sales Support']
    },
    {
      icon: Shirt,
      title: 'Custom Fashion & Style',
      description: 'Bespoke fashion solutions including custom apparel, accessories, and style consultancy services tailored to modern African aesthetics and international trends.',
      features: ['Custom Design', 'Quality Fabrics', 'Local Production', 'International Trends']
    },
    {
      icon: ShoppingBag,
      title: 'Retail Solutions',
      description: 'End-to-end retail management solutions from inventory systems to customer experience optimization for both physical and online stores.',
      features: ['Inventory Management', 'POS Systems', 'E-commerce Setup', 'Staff Training']
    },
    {
      icon: Globe2,
      title: 'International Trade',
      description: 'Facilitating cross-border trade with expertise in import/export regulations, customs clearance, and international logistics across African markets.',
      features: ['Import/Export', 'Customs Clearance', 'Documentation', 'Trade Compliance']
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'Efficient logistics and supply chain management ensuring timely delivery and optimal inventory levels across multiple African countries.',
      features: ['Warehousing', 'Transport Management', 'Supply Chain Optimization', 'Track & Trace']
    }
  ]

  return (
    <section id="services" className="py-24 px-4 relative bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline mt-4 mb-6">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From sourcing to delivery, we provide end-to-end solutions that help your business 
            thrive in African markets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass p-12 rounded-3xl">
            <h3 className="text-3xl font-bold font-headline mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let our experienced team help you navigate African markets and achieve your business goals.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary-500/30"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
