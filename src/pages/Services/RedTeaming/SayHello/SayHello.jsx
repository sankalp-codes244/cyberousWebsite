import React from 'react'

const SayHello = () => {
    return (
        <div className='bg-custom-black-color'>
            <div className='px-4 py-20 md:pt-10 md:px-16 md:w-11/12'>
                <h1 className='text-3xl md:text-7xl md:p-0 font-holtwood py-6 text-left text-white'>
                    Say Hello To Your New<span className='text-orange-600'> Favourite Enemy.</span>
                </h1>
                <div className=' md:w-3/4'>
                <p className='text-white text-2xl text-start font-stylish pb-10 md:m-6'>
                Those who take security seriously don’t test their defenses once a year.
                </p>
                <button className='hover:bg-white hover:text-custom-black-color w-full md:mx-20 h-10 md:w-40 font-bold text-white border border-solid border-white'>
                    Contact Us
                </button>
                </div>
            </div>
        </div>
    )
}

export default SayHello