import BestSellers from '../components/BestSellers'
import CustomerReviews from '../components/CustomerReviews'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navigation from '../components/Navigation'
import Newsletter from '../components/Newsletter'

import SimpleNav from '../components/SimpleNav'
import WhyChooseUs from '../components/WhyChooseUs'


export default function HomePage() {
    return (
        <div className="min-h-screen">
            <SimpleNav />
            {/* <Navigation /> */}
            <HeroSection />
            <FeaturedProducts />
            <BestSellers />

            <WhyChooseUs />
            <CustomerReviews />
            <Newsletter />
            <Footer />

        </div>
    )
}
