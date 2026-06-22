import { motion } from 'framer-motion'
import { FaClock, FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa'

export default function WhyChooseUs() {
  const features = [
    {
      icon: FaClock,
      title: 'Timeless Quality',
      description: 'Each watch is meticulously crafted with premium materials and expert precision.',
    },
    {
      icon: FaShieldAlt,
      title: 'Authentic Guarantee',
      description: 'Every timepiece comes with authenticity certificate and lifetime warranty.',
    },
    {
      icon: FaTruck,
      title: 'Free Shipping',
      description: 'Complimentary worldwide shipping on all orders. Insured and tracked delivery.',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Dedicated customer service team ready to assist you anytime, anywhere.',
    },
  ]

  return (
    <section className="py-20 bg-[#D8D1CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-stone-600 text-sm font-semibold uppercase tracking-widest mb-4">
            Why Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 mb-4">Why Choose Chronos</h2>
          <p className="font-body text-stone-600 max-w-2xl mx-auto">
            We&apos;re not just selling watches. We&apos;re offering an experience of luxury and craftsmanship.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white border border-stone-200 rounded-lg p-8 hover:border-stone-400 hover:shadow-lg hover:shadow-stone-300/50 transition-all duration-700 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-center mb-4 group-hover:border-stone-400 transition-colors"
                  >
                    <Icon className="text-amber-600 text-2xl" />
                  </motion.div>

                  <h3 className="font-display text-xl text-stone-800 mb-2">{feature.title}</h3>
                  <p className="font-body text-stone-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white shadow-sm border border-stone-200 rounded-lg p-10"
        >
          <div className="text-center">
            <p className="font-display text-4xl text-amber-600 mb-2">50K+</p>
            <p className="font-body text-stone-600 text-sm">Satisfied Customers</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl text-amber-600 mb-2">500+</p>
            <p className="font-body text-stone-600 text-sm">Products in Stock</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl text-amber-600 mb-2">99%</p>
            <p className="font-body text-stone-600 text-sm">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl text-amber-600 mb-2">24/7</p>
            <p className="font-body text-stone-600 text-sm">Customer Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
