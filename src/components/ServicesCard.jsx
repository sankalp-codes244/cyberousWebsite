import React from 'react'
import { Images } from '../assets'

const ServicesCard = ({image,serviceText}) => {
  return (
    <div className='md:w-1/4 border-b md:border-b-0 md:border-r border-custom-greyBorderColor border-solid p-4 md:p-0 bg-white'>
    <div className='ml-10 mt-14'>
      <img src={image}  className='bg-slate-100 rounded-full' />
      <h1 className='font-bold text-black text-2xl mt-8'>Service</h1>
      <p className='mt-6 text-xl text-custom-fontColor-grey mr-10'>
        {serviceText}
      </p>
      <button>
        <div className='mt-8 w-10 h-10 rounded-full bg-custom-buttonColor-Green flex justify-center'>
          <img src={Images.whiteArrow} className='p-2' alt='arrow' />
        </div>
      </button>
    </div>
  </div>
  )
}

export default ServicesCard