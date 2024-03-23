import React from 'react'
import { Images } from '../../../assets'
import ServicesCard from '../../../components/ServicesCard'

let servicesData = [
  {
    id: 0,
    img: Images.OurServicesimg1,
    servicesDescription: `Strengthen digital defenses with Cyberous' VAPT services. Our expert team conducts thorough Vulnerability Assessment and Penetration Testing, ensuring robust protection against cyber threats. Rely on our 5-star Google-rated services to safeguard your assets effectively.`,
    serviceText: 'VAPT'
  },
  {
    id: 1,
    img: Images.OurServicesimg2,
    servicesDescription: 'Embark on a journey to mastery with our Ethical Hacking Training. At Cyberous, we equip students with practical skills, readying them for real-life cyber challenges. With a stellar 5-star Google rating, trust us to elevate your cybersecurity expertise and career prospects.',
    serviceText: 'Training'
  },
  {
    id: 2,
    img: Images.OurServicesimg3,
    servicesDescription: `Elevate your cybersecurity with Cyberous Consultancy. Our experts craft custom strategies to fortify your digital landscape. Trust us for proactive risk management and robust defense solutions. Navigate the cyber world with confidence and resilience.`,
    serviceText: 'Consultancy'
  },
  {
    id: 3,
    img: Images.OurServicesimg4,
    servicesDescription: `Enhance cybersecurity resilience with Cyberous' Red Teaming service. Our experts simulate real-world attacks to uncover vulnerabilities and fortify your defense strategy. Trust us for comprehensive solutions tailored to safeguard your digital infrastructure against sophisticated threats.`,
    serviceText: 'Red Teaming'
  },
]

const OurServices = () => {
  return (
    <div className='w-full h-full pt-8'>
      <div className='bg-white pt-12'>
        <h1 className='text-black text-3xl md:text-5xl text-center font-serif pt-5 font-bold'>Our Services</h1>
        <div className="justify-center flex p-6 pb-10">
          <div className="h-1 w-40 md:w-64 bg-custom-buttonColor-Green"></div>
        </div>
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
