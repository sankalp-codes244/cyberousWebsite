import React from 'react'
import { Images } from '../../assets'
import ServicesCard from '../../components/ServicesCard'

const OurServices = () => {
  return (
    <div className='w-full h-full pt-8'>
      <div className='bg-white pt-12'>
        <h1 className='text-black text-3xl md:text-5xl text-center font-bold pt-5 '>Our Services</h1>
        <div className='flex justify-center'>
          <div className='flex flex-col md:flex-row w-full md:w-4/5 h-full shadow-xl'>
            {[Images.OurServicesimg1, Images.OurServicesimg2, Images.OurServicesimg3, Images.OurServicesimg4].map((image, index) => (
             <ServicesCard image={image} serviceText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
