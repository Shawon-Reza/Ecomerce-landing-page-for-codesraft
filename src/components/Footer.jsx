import { Link } from 'react-router'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-black border-t border-yellow-500/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-bold text-yellow-500">⌚ Reza

              </span>
            </Link>
            <p className="font-body text-gray-400 text-sm leading-relaxed">
              Luxury timepieces crafted for those who appreciate the finer things in life. Premium watches, premium service.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <a href="#featured" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Collection
                </a>
              </li>
              <li>
                <a href="#reviews" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Reviews
                </a>
              </li>
              <li>
                <Link to="/cart" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Cart
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-white font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                <p className="font-body text-gray-400 text-sm">
                  123 Luxury Avenue, Swiss City 8000
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-500 flex-shrink-0" />
                <a href="tel:+41123456789" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  +41 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-500 flex-shrink-0" />
                <a href="mailto:info@reza
                .com" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  info@reza
                  .com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-500/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <p className="font-body text-gray-400 text-sm">
              &copy; {currentYear} reza
              Luxury Watches. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <a href="#" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="font-body text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
