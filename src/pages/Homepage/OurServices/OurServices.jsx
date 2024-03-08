import React from 'react'
import { Images } from '../../../assets'
import ServicesCard from '../../../components/ServicesCard'

let servicesData = [
  {id:0,
    img: Images.OurServicesimg1,
    servicesDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    serviceText:'VAPT'},
  {id:1,
    img: Images.OurServicesimg2,
    servicesDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    serviceText:'Training'},
  {id:2,
    img: Images.OurServicesimg3,
    servicesDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    serviceText:'consultancy'},
  {id:3,
    img: Images.OurServicesimg4,
    servicesDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    serviceText:'Red Teaming'},
]
 
const OurServices = () => {
  return (
    <div className='w-full h-full pt-8'>
      <div className='bg-white pt-12'>
        <h1 className='text-black text-3xl md:text-5xl text-center font-bold pt-5 pb-6 '>Our Services</h1>
        <div className='flex justify-center'>
          <div className='flex flex-col md:flex-row w-full md:w-4/5 h-full shadow-2xl '>
            {servicesData.map((item,) => (
             <ServicesCard image={item.img} serviceText={item.servicesDescription} key={item.id} serviceName={item.serviceText} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
