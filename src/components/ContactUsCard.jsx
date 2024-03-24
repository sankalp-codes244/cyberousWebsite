import React from 'react'
import { Images } from '../assets'
import SideArrow from '../assets/Svgs/SideArrow'
import { Link } from 'react-router-dom'
const ContactUsCard = ({ head, desc, link }) => {
  return (
    <div className='relative border border-solid border-black p-4 bg-custom-buttonColor-Green w-80 h-full md:w-72 md:h-80 rounded-xl shadow-lg'>
      <h1 className='text-2xl md:text-4xl font-bold font-serif text-white p-4'>
        {head}
      </h1>
      <p className='mb-6 p-4 text-xl md:text-2xl text-white'>
        {desc}
      </p>
      <div className='absolute bottom-2 md:bottom-10'>
          <p className='px-4  text-white text-xl'>
            {link}
          </p>
      </div>
    </div>
  )
}

export default ContactUsCard