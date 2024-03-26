import React from 'react'
import { Images } from '../../../assets'
import ConsultancyServices from './ConsultancyServices'

const Consultancy = () => {
  return (
    <div >
      <div className='relative'>
        <img src={Images.aboutBg} className='md:h-full md:w-full' />
        <div className='w-3/4'>
          <p className='text-3xl text-white absolute top-1/3 md:hidden left-10 md:left-1/3'>
            Our Consultancy Services
          </p>
          <p className='hidden text-xl md:text-3xl md:block md:text-justify absolute top-0 md:top-1/3 md:left-1/4 md:right-1/4 text-white'>
            Welcome to Cyberous, your premier destination for expert Cybersecurity Consultancy services. Our mission is to empower organizations with robust security strategies and proactive measures to safeguard their digital assets from ever-evolving cyber threats.
          </p>
          <button className='bg-custom-fontColor-grey absolute top-1/2 left-1/4 md:left-1/2 md:right-2/3 w-1/2 md:w-64 h-10 rounded-full shadow-lg  hover:bg-custom-greyBorderColor'>
            Get a Free Consultation
          </button>
        </div>
      </div>

      <div className='flex flex-col text-center'>
        <h1 className='text-3xl lg:text-4xl mt-4'>Our Services</h1>
        <div className='flex justify-center'>
          <div className="h-1 w-20 lg:w-32 bg-custom-buttonColor-Green mt-4 rounded-full"></div>
        </div>
        <h1 className='text-3xl lg:text-5xl text-black font-bold mt-4'>Overview of our Consultancy Services</h1>
      </div>

      {/* Overview Services Text */}
      <div className='flex justify-center'>
        <div className='w-full lg:w-2/3 px-4 lg:px-0'>
          <p className='m-6 mb-12 text-base lg:text-xl text-black text-justify '>
            In an era of rapid technological evolution and accelerated digital adoption, Cyberous cybersecurity and privacy team transforms risk into opportunity. Safeguarding every layer of your organization, we unlock new possibilities securely.
          </p>
          {/* <div className='bg-custom-fontColor-grey h-1 w-full '></div> */}
          <p className='mt-12 m-6  text-base lg:text-xl text-black text-justify'>
            Our team of strategic and technical subject matter experts comprehensively grasp your cybersecurity requirements. We embark on assessing, developing, implementing, and managing next-generation solutions customized to your specifications. Aligned with your dedication to safeguarding data and enhancing business resilience, we stand by your side.
          </p>

          <p className='mx-6 mb-10 text-base lg:text-xl text-black text-justify'> 
            To foster secure growth and minimize risk, it's imperative that your cybersecurity strategy remains adaptable and responsive to your evolving business landscape.

          </p>
        </div>
      </div>
      <ConsultancyServices/>
    </div>
  )
}

export default Consultancy