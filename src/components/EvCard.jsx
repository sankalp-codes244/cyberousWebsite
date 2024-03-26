import React from 'react'

const EvCard = ({image, heading, paragraph}) => {
  return (
    <div className=' md:p-2 flex justify-center border border-solid bg-white shadow-lg rounded-lg border-l-custom-greyBorderColor m-4'>
        <div className='h-1/5 w-full'>
            <div className='flex justify-center'>
                <img src={image} className='h-32 pointer-events-none select-none' />
            </div>
            <h1 className=' text-center font-bold text-2xl text-black pt-6'>
                {heading}
            </h1>
            <p className='p-6  md:p-0 mt-6 text-xl text-justify text-custom-fontColor-grey  pt-4'>
                {paragraph}
            </p>
        </div>
    </div>
  )
}

export default EvCard