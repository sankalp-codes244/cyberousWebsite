import React from 'react'
import { Images } from '../../assets'
import SideArrow from '../../assets/Svgs/SideArrow'
import TrainingPageCard from '../../components/TrainingPageCard'

const TrainingPage = () => {
  const trainingData = [
    {
      id: 0,
      name: `Live Interactive Learning`,
      desc: [`Best For Beginners`, `Expert-Led Mentoring Sessions`, `Instant doubt clearing`,]
    },
    {
      id: 1,
      name: `Lifetime Access`,
      desc: [`Course Access Never Expires`, `Free Access to Future Updates`, `Unlimited Access to Course Content`,]
    },
    
    {
      id: 2,
      name: `Hands-On Project Based Learning`,
      desc: [`World-Class Instructors`, `Expert-Led Mentoring Sessions`, `Instant doubt clearing`,]
    },
    {
      id: 3,
      name: `Career Advancement`,
      desc: [`World-Class Instructors`, `Expert-Led Mentoring Sessions`, `Instant doubt clearing`,]
    },
    {
      id: 4,
      name: `Industry Recognised Certification`,
      desc: [`Cyberops Training Certificate`, `Graded Performance Certificate`, `Certificate of Excellence`,]
    },
    {
      id: 5,
      name: `24x7 Support`,
      desc: [`One-On-One Learning Assistance`, `Help Desk Support`, `Resolve Doubts in Real-time`,]
    },
    
  ]

  return (
    <div className='h-full'>
      <div className='text-center relative bg-no-repeat bg-cover bg-center h-screen object-cover' style={{ backgroundImage: `url(${Images.aboutBg})`, }}>
        <div className='h-full bg-black bg-opacity-50 flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-__Inter_aaf875 font-bold text-white'>Our Training</h1>
          <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto  rounded-full"></div>
          <h2 className='text-xl sm:text-2xl lg:text-3xl text-white font-bold font-__Inter_aaf875'>ISO:27001:2013 CERTIFIED COMPANY</h2>
        </div>
      </div>

      <div className='bg-custom-greyBorderColor'>
        <h1 className='font-bold text-xl md:text-4xl text-center font-Roboto py-10'>Unlock Your Cybersecurity Career Potential with Cyberous' Comprehensive Cybersecurity Program</h1>
        <div className='flex flex-col md:flex-row p-4 md:gap-10'>
          <div className='md:w-1/2'>
            <p className='p-2 text-lg md:text-xl text-justify'>
              Embark on a lucrative career path in cybersecurity with Cyberous' cutting-edge cybersecurity program. Elevate your organization's security posture and minimize IT security risks with our industry-leading training.
            </p>
            <p className='p-2 text-lg md:text-xl text-justify'>
              Our top-tier program equips you with the essential skills and knowledge to effectively safeguard your infrastructure. From implementing robust data protection measures to conducting thorough risk analyses and designing secure cloud-based systems, our curriculum covers it all.
            </p>
            <p className='p-2 text-lg md:text-xl text-justify'>
              Join our Cyber Security Training in India to bridge the gap in specialized cybersecurity knowledge prevalent across industries. With Cyberous, you'll gain the expertise needed to excel in this rapidly growing field.
            </p>
          </div>
          <div className='md:w-1/2'>
            <h1 className='font-roboto text-lg md:text-2xl font-Roboto p-4 font-bold'>
            Key Benefits of Our Cybersecurity Program:
            </h1>
            <ol className='px-4'>
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow/> Comprehensive Training</li>
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow/> Practical Skills Development</li>
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow/> Industry Recognition</li>
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow/> Expert Guidance</li>
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow/> Career Advancement</li>
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow/> Tailored Learning Experience</li>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <h1 className='font-Roboto text-center text-xl md:text-3xl p-5 md:p-10 font-bold'>
        Why choose Cyberous as your partner in your cybersecurity journey?
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          {trainingData.map((item) => (
            <TrainingPageCard 
            id={item.id}
            name={item.name}
            desc={item.desc}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default TrainingPage