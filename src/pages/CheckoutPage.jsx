import { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaCheck, FaCreditCard, FaLock } from 'react-icons/fa'
import { useCartStore } from '../store/cartStore'
import Footer from '../components/Footer'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const items = useCartStore((state) => state.items)
  const getTotalPrice = useCartStore((state) => state.getTotalPrice)
  const clearCart = useCartStore((state) => state.clearCart)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  const [orderPlaced, setOrderPlaced] = useState(false)
  const [errors, setErrors] = useState({})

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-4xl text-white mb-4">Your Cart is Empty</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded transition-colors"
          >
            <FaArrowLeft />
            Back to Shopping
          </Link>
        </div>
      </div>
    )
  }

  const totalPrice = getTotalPrice()
  const taxPrice = totalPrice * 0.1
  const finalPrice = totalPrice + taxPrice

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required'
    if (!formData.country.trim()) newErrors.country = 'Country is required'
    if (!formData.cardName.trim()) newErrors.cardName = 'Card holder name is required'
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required'
    if (!formData.expiry.trim()) newErrors.expiry = 'Expiry date is required'
    if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setOrderPlaced(true)
      clearCart()
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6 }}
            className="text-6xl mb-6 inline-block"
          >
            ✓
          </motion.div>
          <h2 className="font-display text-4xl text-white mb-4">Order Placed!</h2>
          <p className="font-body text-gray-400 mb-2">
            Thank you for your purchase, {formData.firstName}.
          </p>
          <p className="font-body text-gray-400 mb-8">
            We&apos;ll send a confirmation email to {formData.email}
          </p>
          <p className="font-body text-yellow-500 font-semibold">
            Redirecting to home in 3 seconds...
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors font-body mb-8"
          >
            <FaArrowLeft />
            Back to Cart
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl text-white">Checkout</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              {/* Customer Information */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="font-display text-2xl text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Customer Information
                </h2>

                <div className="bg-neutral-800 border border-yellow-500/20 rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-gray-400 text-sm mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.firstName ? 'border-red-500' : 'border-yellow-500/30'
                          }`}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block font-body text-gray-400 text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.lastName ? 'border-red-500' : 'border-yellow-500/30'
                          }`}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-gray-400 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.email ? 'border-red-500' : 'border-yellow-500/30'
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block font-body text-gray-400 text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.phone ? 'border-red-500' : 'border-yellow-500/30'
                        }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </motion.section>

              {/* Shipping Address */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="font-display text-2xl text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Shipping Address
                </h2>

                <div className="bg-neutral-800 border border-yellow-500/20 rounded-lg p-6 space-y-4">
                  <div>
                    <label className="block font-body text-gray-400 text-sm mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.address ? 'border-red-500' : 'border-yellow-500/30'
                        }`}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-gray-400 text-sm mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.city ? 'border-red-500' : 'border-yellow-500/30'
                          }`}
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label className="block font-body text-gray-400 text-sm mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.state ? 'border-red-500' : 'border-yellow-500/30'
                          }`}
                      />
                      {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-gray-400 text-sm mb-2">Zip Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.zipCode ? 'border-red-500' : 'border-yellow-500/30'
                          }`}
                      />
                      {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                    </div>
                    <div>
                      <label className="block font-body text-gray-400 text-sm mb-2">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.country ? 'border-red-500' : 'border-yellow-500/30'
                          }`}
                      />
                      {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Payment Method */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-display text-2xl text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Payment Method
                </h2>

                <div className="bg-neutral-800 border border-yellow-500/20 rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3 p-3 border-2 border-yellow-500 rounded-lg bg-yellow-500/5">
                    <FaCreditCard className="text-yellow-500" />
                    <span className="font-body text-white">Credit Card</span>
                  </div>

                  <div>
                    <label className="block font-body text-gray-400 text-sm mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.cardName ? 'border-red-500' : 'border-yellow-500/30'
                        }`}
                    />
                    {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
                  </div>

                  <div>
                    <label className="block font-body text-gray-400 text-sm mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.cardNumber ? 'border-red-500' : 'border-yellow-500/30'
                        }`}
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-gray-400 text-sm mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.expiry ? 'border-red-500' : 'border-yellow-500/30'
                          }`}
                      />
                      {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
                    </div>
                    <div>
                      <label className="block font-body text-gray-400 text-sm mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        className={`w-full px-4 py-2 bg-neutral-700 border rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors ${errors.cvv ? 'border-red-500' : 'border-yellow-500/30'
                          }`}
                      />
                      {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <FaLock />
                    Secure payment processing
                  </div>
                </div>
              </motion.section>

              {/* Place Order Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-display text-lg font-bold rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                <FaCheck />
                Place Order
              </motion.button>
            </form>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-neutral-800 border border-yellow-500/20 rounded-lg p-6 sticky top-24">
              <h2 className="font-display text-2xl text-white mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between pb-3 border-b border-yellow-500/10">
                    <div>
                      <p className="font-body text-white">{item.name}</p>
                      <p className="font-body text-gray-400 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-body text-yellow-500">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-t border-yellow-500/20">
                <div className="flex justify-between font-body text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-body text-gray-400 text-sm">
                  <span>Tax (10%)</span>
                  <span>${taxPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-body text-gray-400 text-sm">
                  <span>Shipping</span>
                  <span className="text-green-500 font-semibold">Free</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <span className="font-display text-white">Total</span>
                <span className="font-display text-3xl text-yellow-500">
                  ${finalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
