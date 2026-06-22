import { useState } from 'react'
import { Link } from 'react-router'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { useCartStore } from '../store/cartStore'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 border-b border-yellow-600/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-display text-3xl font-bold text-yellow-500 tracking-wider"
            >
              Reza Crafts
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-body text-gray-300 hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <a href="#featured" className="font-body text-gray-300 hover:text-yellow-500 transition-colors">
              Collection
            </a>
            <a href="#reviews" className="font-body text-gray-300 hover:text-yellow-500 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="font-body text-gray-300 hover:text-yellow-500 transition-colors">
              Contact
            </a>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="relative p-2 text-gray-300 hover:text-yellow-500 transition-colors"
            >
              <FaShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-yellow-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-yellow-600/20"
          >
            <Link
              to="/"
              className="block py-2 text-gray-300 hover:text-yellow-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="#featured"
              className="block py-2 text-gray-300 hover:text-yellow-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Collection
            </a>
            <a
              href="#reviews"
              className="block py-2 text-gray-300 hover:text-yellow-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-300 hover:text-yellow-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
