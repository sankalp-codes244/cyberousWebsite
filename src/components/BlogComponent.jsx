import React from 'react'
import { Link } from 'react-router-dom'

const BlogComponent = ({image,name,desc,navigation}) => {
  return (
    <div className='border shadow-lg w-full lg:w1/3 rounded-lg hover:scale-105 duration-300'>
          <img src={'https://cdn.hashnode.com/res/hashnode/image/upload/v1712068632891/773f81fe-1d9c-4b44-8014-3710e4f8cd4b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'} className='w-full rounded-t-lg object-contain' />
          <div className='p-4'>
            <h2 className='text-xl lg:text-2xl pb-3 font-bold text-center font-__Inter_aaf875'>How to Build a Career in Cybersecurity in 2024?</h2>
            <p className='text-gray-600 text-justify font-__Inter_aaf875 mx-2'>In an increasingly digital world fraught with evolving threats, cybersecurity has emerged as a critical profession, safeguarding organizations, individuals, and nations against malicious cyber activities. A cybersecurity career encompasses a wide array of roles, each contributing to the overarching goal of protecting digital assets, maintaining privacy, and ensuring the integrity of systems and networks.</p>
            <div className='flex justify-center items-center'>

            <Link to={'https://cyberous.hashnode.dev/how-to-build-a-career-in-cybersecurity-in-2024'} className='bg-custom-buttonColor-Green text-white font-bold py-2 lg:w-3/5  px-16  rounded-full mt-4 md:mt-8 hover:bg-custom-buttonColor-GreenLight focus:outline-none focus:shadow-outline text-center'>Read More</Link>
            </div>
            </div>

          
         </div>
  )
}

export default BlogComponent