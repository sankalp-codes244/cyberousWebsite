import React from 'react'
import { Images } from '../assets'
import { Link } from 'react-feather'

const ServicesCard = ({image,serviceText,serviceName,link}) => {
  return (
    <div className='relative md:w-1/4 bg-white border border-custom-greyBorderColor border-solid'>
    <div className='m-6 mt-14 pb-5 flex justify-center items-center flex-col'>
      <img src={image}  className='h-20 w-20 pointer-events-none select-none bg-slate-100 rounded-full object-contain' />
      <h1 className='mb-4 lg:mb-0 font-bold text-black text-2xl mt-8 font-serif'>{serviceName}</h1>
      <p className='text-xl text-custom-fontColor-grey text-justify lg:p-2 lg:pt-6 '>
        {serviceText}
      </p>
      <div className=''>
      <button className=''>
          <a href={link}>
        <div className='absolute bottom-4 w-10 duration-500 hover:w-20 focus:ring hover:ring-4 active:bg-green-700 ring-green-300  h-10 rounded-full bg-custom-buttonColor-Green flex justify-center'>
          <img src={Images.whiteArrow} className='pointer-events-none select-none p-2' alt='arrow' />
        </div>
          </a>
      </button>
      </div>
    </div>
  </div>
  )
}

export default ServicesCard