import { useEffect } from "react"
import { Link } from "react-router-dom"

const ContactUsCard = ({ head, desc, link,nav }) => {
  if(nav=== "#msg"){
    return (
      <a href = {nav} className='relative shadow-2xl border-black p-4 pb-10 bg-custom-orange-colorlight w-full h-full rounded-md'>
        <h1 className='md:text-2xl font-sans text-custom-greyLightColor pl-4 pt-4'>
          {head}
        </h1>
        <p className='pb-8 ml-4 mt-4 text-lg text-custom-greyLightColor'>
          {desc}
        </p>
        <div className=''>
            <p className='px-4 absolute bottom-4 text-custom-greyLightColor text-lg'>
              {link}
            </p>
        </div>
        </a>
        )

  }
  
  return (
    <Link to={nav} className='relative shadow-2xl border-black p-4 pb-10 bg-custom-orange-colorlight w-full h-full rounded-md'>
      <h1 className='md:text-2xl font-sans text-custom-greyLightColor pl-4 pt-4'>
        {head}
      </h1>
      <p className='pb-8 ml-4 mt-4 text-lg text-custom-greyLightColor'>
        {desc}
      </p>
      <div className=''>
          <p className='px-4 absolute bottom-4 text-custom-greyLightColor text-lg'>
            {link}
          </p>
      </div>
      
    </Link>
  )
}

export default ContactUsCard