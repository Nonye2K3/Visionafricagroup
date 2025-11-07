'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Briefcase, Building, PieChart, Globe, Shield, DollarSign, LineChart } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Wealth Management',
      description: 'Comprehensive wealth management solutions tailored to high-net-worth individuals and families, focusing on long-term growth and preservation.',
      features: ['Portfolio Management', 'Estate Planning', 'Tax Optimization', 'Risk Management']
    },
    {
      icon: Briefcase,
      title: 'Corporate Finance',
      description: 'Strategic financial advisory services for businesses seeking growth capital, mergers & acquisitions, or restructuring solutions.',
      features: ['M&A Advisory', 'Capital Raising', 'Restructuring', 'Valuation Services']
    },
    {
      icon: Building,
      title: 'Real Estate Investment',
      description: 'Diversified real estate investment opportunities across commercial, residential, and mixed-use developments in key African markets.',
      features: ['Property Development', 'REIT Management', 'Asset Management', 'Market Analysis']
    },
    {
      icon: PieChart,
      title: 'Portfolio Management',
      description: 'Active and passive investment strategies designed to optimize returns while managing risk across diverse asset classes.',
      features: ['Equity Investments', 'Fixed Income', 'Alternative Assets', 'ESG Investing']
    },
    {
      icon: Globe,
      title: 'International Trade Finance',
      description: 'Comprehensive trade finance solutions facilitating cross-border commerce and investment across African markets.',
      features: ['Trade Financing', 'Export Credit', 'Letter of Credit', 'Supply Chain Finance']
    },
    {
      icon: Shield,
      title: 'Risk Advisory',
      description: 'Expert risk assessment and mitigation strategies to protect your investments and ensure sustainable growth.',
      features: ['Risk Assessment', 'Compliance', 'Insurance Solutions', 'Crisis Management']
    },
    {
      icon: DollarSign,
      title: 'Private Equity',
      description: 'Strategic investments in high-growth African companies with strong fundamentals and exceptional management teams.',
      features: ['Growth Capital', 'Buyouts', 'Venture Capital', 'Exit Strategies']
    },
    {
      icon: LineChart,
      title: 'Market Research',
      description: 'In-depth market intelligence and research services providing actionable insights for informed investment decisions.',
      features: ['Market Analysis', 'Due Diligence', 'Industry Reports', 'Economic Forecasts']
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
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive Investment Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From wealth management to corporate finance, we offer a full spectrum of investment 
            services designed to meet your unique financial goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
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
            <h3 className="text-3xl font-bold mb-4">Ready to Grow Your Wealth?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let our experienced team help you navigate African markets and achieve your financial goals.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary-500/50"
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
