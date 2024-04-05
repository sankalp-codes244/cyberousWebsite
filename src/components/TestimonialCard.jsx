import React from 'react'
import { Images } from '../assets'

const TestimonialCard = ({ image, name, title, desc }) => {
  return (
    <div className='p-6 relative w-96'>
      <div className=" h-full md:w-full border border-solid rounded-lg bg-custom-greyLightColor shadow-lg ">
        <div className=''>
          <img src={Images.commmaImg} className=' h-24 w-24 absolute top-2 right-4 md:h-24 md:w-24' />
        </div>
        <div className="flex flex-row">
          <img
            src={image}
            className="m-1 h-1/2 text-white 4 w-1/4 md:h-30 md:w-30 md:m-0 p-1 md:p-3 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-serif py-4 font-bold text-black text-center">{name}</h1>
            <h1 className="mb-4 text-black text-center">{title}</h1>
          </div>
        </div>
        <p className="text-lg px-4 text-justify text-black ">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard