import HeroSection from '../components/HeroSection'
import Navigation from '../components/Navigation'

import SimpleNav from '../components/SimpleNav'


export default function HomePage() {
    return (
        <div className="min-h-screen">
            <SimpleNav />
            {/* <Navigation /> */}
            <HeroSection />

        </div>
    )
}
