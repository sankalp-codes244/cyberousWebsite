import React from 'react'

const Profiles = (profileData) => {
  return (
    <div>
        <div className='bg-custom-buttonColor-Green md:flex px-14 hidden mt-10'>
            <div className='w-1/2'>
            <h1 className='text-xl md:text-3xl text-white font-Roboto'>
                Profile
            </h1>
            </div>
            <div className='w-1/2'>
            <h1 className='text-xl md:text-3xl text-white font-Roboto'>
                Description
            </h1>
            </div>
        </div>

    </div>
  )
}

export default Profiles