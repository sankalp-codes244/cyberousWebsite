import React from 'react'
import { Images } from '../../../../assets'
import { Link } from 'react-router-dom'

const AreYouReady = () => {
    return (
        <div className='text-center bg-no-repeat bg-cover bg-center h-screen object-cover p-10' style={{ backgroundImage: `url(${Images.CorporateTrainingbg3})`, }}>
            <div className='flex justify-center'>
                <div className='md:w-1/2 py-20'>
                    <h1 className='font-__Inter_aaf875 font-bold text-xl md:text-2xl text-white'>Let's get started with Cyberous</h1>
                    <h1 className='font-__Inter_aaf875 font-bold text-3xl md:text-5xl text-white py-10'>Are you ready for a better, safer, more productive, stressfree business?</h1>
                    <p className='font-__Inter_aaf875 text-lg md:text-xl text-white py-10'>
                    Stop worrying about Cyber Security problems. Focus on your business. Let us provide the best Cyber Security Services you deserve. Let’s Discuss about your Cyber Security Risks & Requirements.
                    </p>
                    <Link to='/contact'>
                    <button className='bg-custom-gold-color h-10 w-full md:w-1/3 text-xl text-white font-bold font-__Inter_aaf875 hover:bg-yellow-600 shadow-lg rounded-sm'>
                        Contact Us Now
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AreYouReady