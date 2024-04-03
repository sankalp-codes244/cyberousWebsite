import React from 'react'
import { Images } from '../../assets'

const Career = () => {
  return (
    <div className='bg-custom-black-color'>
        <div className='flex justify-center flex-col text-white  p-10'>
            <h1 className='font-Roboto text-center p-4 text-5xl'>Join us and transform the World</h1>
            <h1 className='font-Roboto text-center text-blue-400 text-2xl'>Start your career with Cyberous</h1>
            <div className='flex flex-row justify-center'>
              <button className='bg-transparent w-1/4 h-16 m-10 hover:bg-green-500 hover:text-white text-green-500 duration-300 border border-solid border-green-700 rounded-lg text-base'>
                Contact Us +91 81999 85888</button>
              <button className='relative bg-transparent w-1/4 h-16 m-10 hover:bg-green-500 hover:text-white text-green-500 duration-300 border border-solid border-green-700 rounded-lg text-base'> 
              <img src={Images.chevronDown}  className='absolute invert -rotate-90 left-20 top-3 border-2 rounded-full border-solid border-black p-2 w-10 '/>
              Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default Career