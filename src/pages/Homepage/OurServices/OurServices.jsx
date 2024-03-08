import React from 'react'
import { Images } from '../../../assets'
import ServicesCard from '../../../components/ServicesCard'

let servicesData = [
  {id:0,
    img: Images.OurServicesimg1,
    servicesDescription: `Enhance your digital defenses with Cyberous' VAPT services. Our expert team conducts comprehensive Vulnerability Assessment and Penetration Testing, ensuring robust protection against cyber threats. Rely on our 5-star Google-rated services to safeguard your assets effectivel`,
    serviceText:'VAPT'},
  {id:1,
    img: Images.OurServicesimg2,
    servicesDescription: 'Embark on a journey to mastery with our Ethical Hacking Training. At Cyberous, we equip students with practical skills, readying them for real-life cyber challenges. With a stellar 5-star Google rating, trust us to elevate your cybersecurity expertise and career prospects.',
    serviceText:'Training'},
  {id:2,
    img: Images.OurServicesimg3,
    servicesDescription: `Elevate your cybersecurity strategy with Cyberous' Consultancy services. Our expert consultants specialize in crafting custom strategies to fortify your digital landscape against ever-evolving threats. Trust us to guide you through proactive risk management and implement robust defense solutions tailored to your unique needs. With Cyberous by your side, navigate the complex world of cybersecurity with confidence and resilience.`,
    serviceText:'consultancy'},
  {id:3,
    img: Images.OurServicesimg4,
    servicesDescription: `Boost your cybersecurity resilience with Cyberous' Red Teaming service. Our expert team simulates real-world cyber attacks to uncover vulnerabilities and enhance your defense strategy. Trust Cyberous to deliver comprehensive Red Teaming solutions, tailored to fortify your digital infrastructure against sophisticated threats.`,
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
