'use client'

import Link from 'next/link'
import { Building2, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/#about' },
      { label: 'Services', href: '/#services' },
      { label: 'Portfolio', href: '/#portfolio' },
      { label: 'Contact', href: '/#contact' },
    ],
    services: [
      { label: 'Wealth Management', href: '/#services' },
      { label: 'Corporate Finance', href: '/#services' },
      { label: 'Real Estate', href: '/#services' },
      { label: 'Private Equity', href: '/#services' },
    ],
    resources: [
      { label: 'Shop', href: '/shop' },
      { label: 'Market Insights', href: '#' },
      { label: 'Investment Guide', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold text-white">Vision Africa Group</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading investment solutions across Africa, empowering businesses and individuals 
              to achieve their financial goals through innovative strategies and expert guidance.
            </p>
            <div className="space-y-2">
              <a href="mailto:info@visionafricagroup.com" className="flex items-center space-x-2 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@visionafricagroup.com</span>
              </a>
              <a href="tel:+2341234567890" className="flex items-center space-x-2 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+234 123 456 7890</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Vision Africa Investment Group Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 flex items-center justify-center transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
