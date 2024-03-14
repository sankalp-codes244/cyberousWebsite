import React from 'react'
import { Images } from '../../../assets'
import ServicesCard from '../../../components/ServicesCard'

let servicesData = [
  {id:0,
    img: Images.OurServicesimg1,
    servicesDescription: `Enhance your digital defenses with Cyberous' VAPT services. Our expert team conducts comprehensive Vulnerability Assessment and , ensuring robust protection against cyber threats. Rely on our 5-star Google-rated services to safeguard your assets effectively.`,
    serviceText:'VAPT'},
  {id:1,
    img: Images.OurServicesimg2,
    servicesDescription: 'Embark on your mastery journey with Cyberous Ethical Hacking Training. We equip you with practical skills for real-world cyber challenges. Rely on our stellar 5-star Google rating to enhance your cybersecurity expertise and boost your career prospects significantly.',
    serviceText:'Training'},
  {id:2,
    img: Images.OurServicesimg3,
    servicesDescription: `Elevate your cybersecurity strategy with Cyberous' Consultancy. Our experts craft custom strategies to fortify your digital landscape. LorenIpsum Trust us for proactive risk management and tailored defense solutions. Navigate cybersecurity confidently with Cyberous.`,
    serviceText:'consultancy'},
  {id:3,
    img: Images.OurServicesimg4,
    servicesDescription: `Enhance your cybersecurity resilience with Cyberous' Red Teaming service. Our experts simulate real-world cyber attacks to uncover vulnerabilities and fortify your defense strategy. Trust Cyberous for comprehensive Red , tailored to secure your digital infrastructure against sophisticated threats.`,
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
