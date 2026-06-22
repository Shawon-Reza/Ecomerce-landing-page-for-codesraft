import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { products } from '../data/products'

export default function BestSellers() {
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 6)

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gray-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Most Popular
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">Best Sellers</h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            The watches that everyone loves. Discover what makes these timepieces so special.
          </p>
        </motion.div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link to={`/product/${product.id}`}>
                <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-yellow-500/60 transition-all duration-700 hover:scale-103 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/15">
                  {/* Top Badge */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        ⭐ Best Seller
                      </span>
                    </div>
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img src={product.image} alt="Watch" className='w-full h-full object-cover' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display text-xl text-gray-900 group-hover:text-yellow-600 transition-colors mb-1">
                      {product.name}
                    </h3>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} size={12} />
                        ))}
                      </div>
                      <span className="font-body text-gray-500 text-xs">({product.reviews})</span>
                    </div>

                    {/* Description */}
                    <p className="font-body text-gray-600 text-sm line-clamp-2 mb-4">
                      {product.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-body text-xs text-gray-400 line-through">
                          ${(product.price * 1.15).toLocaleString()}
                        </p>
                        <p className="font-display text-2xl text-yellow-500">
                          ${product.price.toLocaleString()}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.preventDefault()}
                        className="px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded transition-colors text-sm"
                      >
                        View
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
