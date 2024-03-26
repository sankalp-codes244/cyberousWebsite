import React from 'react'
import Testimonials from '../../Homepage/Testimonial/Testemonial'
import IndustrialRecognition from '../../Homepage/IndustrialRecognition/IndustrialRecognition'
import Footer from '../../../components/Footer'
import { Images } from '../../../assets'

const RedTeaming = () => {
  return (
    <div>
      <div className='text-center bg-no-repeat bg-cover bg-center h-screen object-cover' style={{ backgroundImage: `url(${Images.RedteamingHeader})`, }}>
        <div className='p-10 md:py-10 md:px-20'>
          <div className='bg-orange-500  md:w-1/2 '>
            <h1 className='text-4xl md:text-7xl pl-2 font-holtwood pr-24 py-6 md:pr-36'>
              Red Team Services
            </h1>
            <p className='text-xl text-start font-stylish p-4 pb-32'>
            Experience a revolution in red teaming with our innovative approach, extending beyond the constraints of traditional consultancy exercises. Our method ensures constant threat detection and highly effective deflection strategies, offering unparalleled security solutions.
            </p>
          </div>
        </div>
      </div>
      <IndustrialRecognition />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default RedTeaming