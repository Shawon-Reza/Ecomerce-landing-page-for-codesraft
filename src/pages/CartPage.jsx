import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { FaTrash, FaArrowLeft, FaArrowRight, FaShoppingCart } from 'react-icons/fa'
import { useCartStore } from '../store/cartStore'
import Footer from '../components/Footer'
import SimpleNav from '../components/SimpleNav'
import Navigation from '../components/Navigation'

export default function CartPage() {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const getTotalPrice = useCartStore((state) => state.getTotalPrice)
  const clearCart = useCartStore((state) => state.clearCart)

  const totalPrice = getTotalPrice()
  const taxPrice = totalPrice * 0.1
  const shippingPrice = items.length > 0 ? 0 : 0
  const finalPrice = totalPrice + taxPrice + shippingPrice

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F5F4F4] flex flex-col">
        {/* <SimpleNav /> */}
        <Navigation />

        <div className="flex-grow flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="font-display text-4xl text-stone-900 mb-4">Your Cart is Empty</h2>
            <p className="font-body text-stone-600 mb-8 max-w-md mx-auto">
              Discover our collection of luxury watches and start building your cart.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors"
            >
              <FaShoppingCart />
              Continue Shopping
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F4F4] flex flex-col">
      <SimpleNav />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors font-body mb-8"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl text-stone-900">Shopping Cart</h1>
          <p className="font-body text-stone-500 mt-2">({items.length} items)</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="space-y-4"
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="group bg-white border border-stone-200 hover:border-amber-400 rounded-lg p-6 shadow-sm transition-all duration-300"
                >
                  <div className="flex gap-6">
                    {/* Image */}
                    <div className="w-24 h-24 bg-stone-100 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                      <img src={
                        item.image || "No Image"
                      } alt="watch" className='w-full h-full object-cover rounded-lg' />
                    </div>

                    {/* Details */}
                    <div className="flex-grow">
                      <Link
                        to={`/product/${item.id}`}
                        className="font-display text-lg text-stone-900 hover:text-amber-600 transition-colors block mb-2"
                      >
                        {item.name}
                      </Link>
                      <p className="font-body text-stone-500 text-sm mb-2">{item.category}</p>
                      <p className="font-display text-xl text-amber-600">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity and Remove */}
                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <FaTrash />
                      </button>

                      <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 font-body text-stone-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <p className="font-display text-lg text-stone-900">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Continue Shopping */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={clearCart}
              className="mt-8 px-6 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-body rounded-lg transition-all"
            >
              Clear Cart
            </motion.button>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white border border-stone-200 rounded-lg p-8 shadow-md sticky top-24">
              <h2 className="font-display text-2xl text-stone-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-stone-200">
                <div className="flex justify-between font-body text-stone-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-body text-stone-600">
                  <span>Tax (10%)</span>
                  <span>${taxPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-body text-stone-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
              </div>

              <div className="flex justify-between mb-8 pb-8 border-b border-stone-200">
                <span className="font-display text-xl text-stone-900">Total</span>
                <span className="font-display text-3xl text-amber-600">
                  ${finalPrice.toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout"
                className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors mb-4"
              >
                Proceed to Checkout
                <FaArrowRight />
              </Link>

              <button className="w-full py-2 border border-stone-300 text-stone-600 hover:text-amber-600 hover:border-amber-500 font-body rounded-lg transition-colors">
                Continue Shopping
              </button>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-stone-200 space-y-3">
                <p className="font-body text-xs text-stone-500 text-center">✓ 100% Secure Checkout</p>
                <p className="font-body text-xs text-stone-500 text-center">✓ 30-Day Money Back Guarantee</p>
                <p className="font-body text-xs text-stone-500 text-center">✓ Free Shipping Worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
