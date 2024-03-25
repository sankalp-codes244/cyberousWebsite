import React from 'react'

const EvCard = ({image, heading, paragraph}) => {
  return (
    <div className='flex justify-center border border-solid bg-white shadow-lg rounded-lg border-l-custom-greyBorderColor m-4'>
        <div className='h-1/5 w-full'>
            <div className='flex justify-center'>
                <img src={image} className='h-32 pointer-events-none select-none' />
            </div>
            <h1 className=' text-center font-bold text-3xl text-black pt-6 '>
                {heading}
            </h1>
            <p className='mt-6 text-xl text-justify text-custom-fontColor-grey p-6 pt-4'>
                {paragraph}
            </p>
        </div>
    </div>
  )
}

export default EvCard