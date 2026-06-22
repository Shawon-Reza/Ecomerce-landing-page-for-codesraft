import { useParams, Link } from 'react-router'
import { useState } from 'react'
import { FaStar, FaShoppingCart, FaArrowLeft, FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

import 'swiper/css/thumbs'
import { products } from '../data/products'
import { useCartStore } from '../store/cartStore'
import Footer from '../components/Footer'
import SimpleNav from '../components/SimpleNav'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id))
  const [quantity, setQuantity] = useState(1)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [added, setAdded] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F5F4F4] flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-4xl text-stone-900 mb-4">Product Not Found</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded transition-colors"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem({ ...product, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#F5F4F4]">

      <SimpleNav />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors font-body"
        >
          <FaArrowLeft />
          Back to Products
        </Link>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg overflow-hidden border border-stone-200 shadow-sm mb-4 h-96">
              <div className="w-full h-full flex items-center justify-center text-8xl">
                <img src={product.image} alt="Watch" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Thumbnail */}
            <Swiper
              modules={[FreeMode, Thumbs]}
              onSwiper={setThumbsSwiper}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="h-24"
            >
              {product.gallery.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-stone-100 rounded-lg h-24 border border-stone-200 cursor-pointer flex items-center justify-center hover:border-amber-400 transition-colors">
                    <span className="text-4xl">⌚</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 bg-amber-100 border border-amber-300 text-amber-700 text-xs font-bold rounded">
                  {product.category}
                </span>
                {product.bestSeller && (
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
                    Best Seller
                  </span>
                )}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl text-stone-900 mb-4">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-200">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} />
                ))}
              </div>
              <span className="font-body text-stone-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="font-body text-stone-400 line-through mb-2">
                ${(product.price * 1.15).toLocaleString()}
              </p>
              <p className="font-display text-5xl text-amber-600 font-bold">
                ${product.price.toLocaleString()}
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-stone-600 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8 pb-8 border-b border-stone-200">
              <h3 className="font-display text-xl text-stone-800 mb-4">Product Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 font-body text-stone-600">
                    <FaCheck className="text-amber-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8 flex items-center gap-4">
              <span className="font-display text-stone-800">Quantity:</span>
              <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors font-bold"
                >
                  −
                </button>
                <span className="px-6 py-2 font-display text-stone-900 text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-display text-xl font-bold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 mb-4"
            >
              <FaShoppingCart />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </motion.button>

            {/* Info Boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-stone-200 rounded-lg p-4 shadow-sm">
                <p className="font-body text-stone-500 text-xs uppercase tracking-widest mb-1">Free Shipping</p>
                <p className="font-display text-stone-800">Worldwide</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-4 shadow-sm">
                <p className="font-body text-stone-500 text-xs uppercase tracking-widest mb-1">Returns</p>
                <p className="font-display text-stone-800">30 Days Guarantee</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 border-t border-stone-200">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-display text-3xl text-stone-900 mb-8"
            >
              Related Products
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="group bg-white rounded-lg overflow-hidden border border-stone-200 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-400/15"
                  >
                    <div className="h-48 bg-stone-100 flex items-center justify-center text-5xl">
                      ⌚
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-stone-900 group-hover:text-amber-600 transition-colors mb-2">
                        {item.name}
                      </h3>
                      <p className="font-display text-xl text-amber-600">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  )
}
