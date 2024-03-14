import React from 'react'

const EvCard = ({image, heading, paragraph}) => {
  return (
    <div className='flex justify-center border border-solid border-l-custom-greyBorderColor p-4'>
        <div className='h-1/5 w-full'>
            <div className='flex justify-center'>
                <img src={image} className='h-32 ' />
            </div>
            <h1 className='flex text-center font-bold text-3xl text-black pt-6 pl-6'>
                {heading}
            </h1>
            <p className='mt-6 text-xl text-custom-fontColor-grey mr-10 text-justify p-6 pt-4'>
                {paragraph}
            </p>
        </div>
    </div>
  )
}

export default EvCard