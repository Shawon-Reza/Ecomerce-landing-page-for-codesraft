import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaArrowRight } from 'react-icons/fa'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-[#6C8196]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white border border-white/60 rounded-xl p-12 overflow-hidden shadow-xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                whileInView={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="inline-block p-3 bg-yellow-500/20 border border-yellow-500/40 rounded-lg mb-4"
              >
                <FaEnvelope className="text-yellow-500 text-3xl" />
              </motion.div>

              <h2 className="font-display text-4xl text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="font-body text-gray-600 max-w-xl mx-auto">
                Subscribe to our newsletter and be the first to know about new collections, exclusive deals, and luxury watch launches.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubscribe} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="group px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all duration-300 flex items-center gap-2 justify-center whitespace-nowrap"
              >
                Subscribe
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>

            {/* Success Message */}
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center text-yellow-500 font-body mt-4"
              >
                ✓ Thank you for subscribing!
              </motion.p>
            )}

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="font-body text-sm text-gray-500">
                ✓ Early Access to Sales
              </div>
              <div className="font-body text-sm text-gray-500">
                ✓ Exclusive Discounts
              </div>
              <div className="font-body text-sm text-gray-500">
                ✓ No Spam Guarantee
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
