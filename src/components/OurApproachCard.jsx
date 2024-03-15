
import React from 'react'

const OurApproachCard = ({key, image, description, name}) => {
  return (
    <div className='h-full w-full bg-custom-greyBorderColor'>
        <div className='flex flex-row'>
          <div className='w-1/2 h-1/5 '>
            <div className='flex flex-col p-16'>
              <h1 className='text-3xl text-black m-6'>{name}</h1>
              <p className='text-lg text-black m-6 text-justify'>{description} </p>
            </div>
          </div>
          <div className=' m-6 ml-16'>
            <img src={image} alt='This is an image' className='' />
          </div>
        </div>
      </div>
  )
}

export default OurApproachCard
