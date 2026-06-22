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
    <section id="reviews" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-yellow-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">What Our Customers Say</h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto">
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
              className="relative bg-gradient-to-b from-neutral-800 to-neutral-900 border border-yellow-500/20 rounded-lg p-8 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-4 right-4 text-yellow-500/20 text-4xl" />

              {/* Rating */}
              <div className="flex text-yellow-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-gray-300 mb-6 leading-relaxed">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-yellow-500/20">
                <div className="text-3xl">{review.image}</div>
                <div>
                  <p className="font-display text-white">{review.name}</p>
                  <p className="font-body text-gray-400 text-sm">{review.title}</p>
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
          <div className="inline-flex items-center gap-4 bg-neutral-800/50 border border-yellow-500/20 rounded-lg px-8 py-4">
            <div>
              <p className="font-display text-3xl text-yellow-500">4.9/5</p>
              <p className="font-body text-gray-400 text-sm">Average Rating</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-yellow-500/20"></div>
            <div>
              <p className="font-display text-3xl text-yellow-500">2.5K+</p>
              <p className="font-body text-gray-400 text-sm">Customer Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
