import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: 'James Mitchell',
      title: 'CEO, Luxury Brands',
      rating: 5,
      text: 'Outstanding quality and exceptional customer service. My Chronos watch is a testament to precision engineering.',
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      title: 'Fashion Designer',
      rating: 5,
      text: 'The perfect blend of elegance and functionality. I receive compliments every time I wear it.',
      image: '👩‍🎨',
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      title: 'Entrepreneur',
      rating: 5,
      text: 'A worthwhile investment. The craftsmanship and attention to detail are truly remarkable.',
      image: '👨‍💼',
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-[#FFFFE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            Read authentic reviews from our satisfied customers around the world.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative bg-white shadow-xl  border border-gray-200 rounded-xl p-8 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/15 transition-all duration-700 hover:scale-105"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-4 right-4 text-amber-400/30 text-4xl" />

              {/* Rating */}
              <div className="flex text-yellow-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="text-3xl">{review.image}</div>
                <div>
                  <p className="font-display text-gray-900">{review.name}</p>
                  <p className="font-body text-gray-500 text-sm">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reviews Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-8 py-4 shadow-md">
            <div>
              <p className="font-display text-3xl text-amber-500">4.9/5</p>
              <p className="font-body text-gray-500 text-sm">Average Rating</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div>
              <p className="font-display text-3xl text-amber-500">2.5K+</p>
              <p className="font-body text-gray-500 text-sm">Customer Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
