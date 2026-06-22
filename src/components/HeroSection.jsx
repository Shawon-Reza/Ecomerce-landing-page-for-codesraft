import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { FaArrowRight } from 'react-icons/fa'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-[#5C5C5C] overflow-hidden flex items-center justify-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="font-body text-yellow-500 text-sm font-semibold uppercase tracking-widest mb-4"
                        >
                            Luxury Timepieces
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="font-display text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight"
                        >
                            Timeless
                            <span className="block text-yellow-500">Elegance</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="font-body text-gray-400 text-lg mb-8 leading-relaxed"
                        >
                            Experience the pinnacle of Swiss craftsmanship. Every second counts when you're wearing perfection. Discover our exclusive collection of luxury watches designed for those who appreciate the finer things.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                to="/#featured"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
                            >
                                Explore Collection
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold rounded transition-all duration-300 transform hover:scale-105">
                                Watch Our Video
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-yellow-500/30"
                        >
                            <div>
                                <p className="font-display text-3xl text-yellow-500">
                                    500+</p>
                                <p className="font-body text-gray-400 text-sm">Happy Clients</p>
                            </div>
                            <div>
                                <p className="font-display text-3xl text-yellow-500">25+</p>
                                <p className="font-body text-gray-400 text-sm">Luxury Brands</p>
                            </div>
                            <div>
                                <p className="font-display text-3xl text-yellow-500">15</p>
                                <p className="font-body text-gray-400 text-sm">Years Experience</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative w-full h-96 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/10 rounded-2xl border border-yellow-500/20 overflow-hidden">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="text-7xl">
                                    <img src="https://m.media-amazon.com/images/I/810iBorUbJL._AC_SL1500_.jpg" alt="Watch box" className='w-full h-full object-cover' />
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-10 -right-10 bg-neutral-800 border border-yellow-500/30 rounded-lg p-4 shadow-xl"
                        >
                            <p className="font-display text-yellow-500 text-sm">Premium Quality</p>
                            <p className="font-body text-gray-300 text-xs">Certified Authentic</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity }}
                            className="absolute -bottom-10 -left-10 bg-neutral-800 border border-yellow-500/30 rounded-lg p-4 shadow-xl"
                        >
                            <p className="font-display text-yellow-500 text-sm">Limited Edition</p>
                            <p className="font-body text-gray-300 text-xs">Exclusive Collections</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
