import LottieComponent from 'lottie-react'
import animationData from "../assets/lotties/404error.json"
import { Link } from 'react-router'
import { FaArrowLeft } from 'react-icons/fa'

const Lottie = LottieComponent.default || LottieComponent

const Not_FoundPage = () => {

    return (
        <div className='relative max-h-screen overflow-hidden flex flex-col items-center justify-center bg-[#68dee0] text-white w-full '>
            <Lottie animationData={animationData} loop={true} className='w-screen' />

            <Link
                to="/"
                className="absolute top-10 left-5 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#68dee0] hover:bg-gray-100 font-bold rounded-full shadow-xl transition-transform duration-700 hover:scale-105 z-10 "
            >
                <FaArrowLeft />
                Back to Home
            </Link>
        </div>
    )
}

export default Not_FoundPage