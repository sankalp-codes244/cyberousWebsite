import React from 'react'
import { Images } from '../assets'
import { Link } from 'react-router-dom'
const ServicesCard = ({image,serviceText,serviceName,link}) => {
  return (
    <div className='bg-white border border-custom-greyBorderColor border-solid'>
    <div className='m-6 mt-14 pb-5 flex justify-center items-center flex-col'>
      <img src={image}  className='h-20 w-20 pointer-events-none select-none bg-slate-100 rounded-full object-contain' />
      <h1 className='mb-4 lg:mb-0 font-bold text-black text-2xl mt-8 font-serif'>{serviceName}</h1>
      <p className='text-justify md:text-lg text-black text-xl pt-4 '>
        {serviceText}
      </p>
      <div className=''>
      <button className=''>
          <Link to={link}>
        <div className='absolute bottom-4 w-10 duration-500 hover:w-20 h-10 rounded-full bg-custom-buttonColor-Green flex justify-center'>
          <img src={Images.whiteArrow} className='pointer-events-none select-none p-2' alt='arrow' />
        </div>
          </Link>
      </button>
      </div>
    </div>
  </div>
  )
}

export default ServicesCard