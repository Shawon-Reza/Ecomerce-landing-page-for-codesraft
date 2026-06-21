import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { FaStar, FaShoppingCart } from 'react-icons/fa'
import { products } from '../data/products'
import { useCartStore } from '../store/cartStore'

export default function FeaturedProducts() {
  const addItem = useCartStore((state) => state.addItem)
  const featured = products.slice(0, 4)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="featured" className="py-20 bg-gradient-to-b from-black via-neutral-900 to-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-yellow-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Collection
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">Featured Timepieces</h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto">
            Handpicked selections from our premium collection. Each watch is a masterpiece of engineering and design.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link to={`/product/${product.id}`}>
                <div className="group relative bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg overflow-hidden border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-700 hover:scale-102 h-full flex flex-col hover:shadow-lg hover:shadow-yellow-500/20 ">
                  {/* Image Container */}
                  <div className="relative h-64 bg-neutral-700 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-yellow-500/10 to-transparent flex items-center justify-center text-6xl">
                      <img src={product.image} alt={product.name} className='w-full h-full object-cover' />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display text-lg text-white group-hover:text-yellow-500 transition-colors">
                        {product.name}
                      </h3>
                      {product.bestSeller && (
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                          Best
                        </span>
                      )}
                    </div>

                    <p className="font-body text-gray-400 text-sm mb-3">{product.category}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} size={14} />
                        ))}
                      </div>
                      <span className="font-body text-gray-400 text-xs">({product.reviews})</span>
                    </div>

                    <p className="font-body text-gray-400 text-sm flex-grow line-clamp-2 mb-3">
                      {product.description}
                    </p>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between mt-auto">
                      <p className="font-display text-2xl text-yellow-500">${product.price.toLocaleString()}</p>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          addItem(product)
                        }}
                        className="p-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg transition-colors duration-300"
                      >
                        <FaShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/#featured"
            className="group inline-flex items-center gap-2 px-8 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold rounded transition-all duration-300"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
