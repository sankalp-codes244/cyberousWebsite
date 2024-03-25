

import { Images } from '../assets'
import SideArrow from '../assets/Svgs/SideArrow'
import { Link } from 'react-router-dom'
const ContactUsCard = ({ head, desc, link }) => {
  return (
    <div className='relative border border-solid border-black p-4 bg-custom-buttonColor-Green w-full h-full shadow-white '>
      <h1 className='text-2xl md:text-4xl font-bold font-serif text-white p-4'>
        {head}
      </h1>
      <p className='mb-6 p-4 text-xl md:text-2xl text-white'>
        {desc}
      </p>
      <div className=''>
          <p className='px-4 absolute bottom-4 text-white text-xl'>
            {link}
          </p>
      </div>
      
    </div>
  )
}

export default ContactUsCard