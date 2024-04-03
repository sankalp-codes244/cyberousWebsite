import React from 'react'
import { Images } from '../../assets'
import About from '../Homepage/AboutUs/About'
import Profiles from './Profiles/Profiles'

const Career = () => {
  const profileData = [
    {
      id : 0,
      name:'Cyber Security Intern',
      desc: ["Conduct vulnerability assessments and penetration testing", "Participate in security awareness training", "Document security processes and procedures", "Assist with various security tasks and projects "],
      location : 'Remote',
      type:'Internship Job',
      Qualifications:'Currently pursuing a master degree or graduate',
      benefits : ['Hands-on experience in the field of cyber security.', 'Opportunity to work alongside experienced professionals and gain valuable mentorship.', 'Exposure to cutting-edge technologies and industry best practices.', 'Potential for future full-time employment opportunities based on performance and business needs.'],
      How_to_Apply: "Interested candidates should submit their resume and cover letter here or mail us at info@cyberous.in .Please include Job profile name in the subject line.",
    },
    {
      id : 1,
      name:'Graphic Designer Intern',
      desc: ["Assist in creating visual assets for digital and print materials", "Execute design projects from concept to final deliverySupport in maintaining brand consistency across various platforms", "Participate in creative meetings and provide input on design ideas", "Learn and apply design principles and industry trends"],
      location : 'Remote',
      type:'Internship Job',
      Qualifications:" Pursuing a degree in Graphic Design, Visual Arts, or related fieldProficiency in graphic design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign or Canva)",
      benefits : ['Gain hands-on experience in a professional design environmentMentorship from experienced designers', 'Opportunity to work on diverse projects and build a portfolio'],
      How_to_Apply: "Interested candidates should submit their resume and cover letter here or mail us at info@cyberous.in .Please include Job profile name in the subject line.",
    },
  ]
  return (
    <div>
    <div className='bg-custom-black-color h-screen'>
        <div className='flex justify-center flex-col text-white py-40 md:p-60'>
            <h1 className='font-Roboto text-center p-4 text-5xl'>Join us and transform the World</h1>
            <h1 className='font-Roboto text-center text-custom-fontColor-Green text-2xl'>Start your career with Cyberous</h1>
            <p className='font-Roboto text-base md:text-lg my-4 px-4 text-center '>
            Diploma in Cyber Security, also known as Diploma in Information Security, trains students for industrial work methodologies with job assistance.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 px-20 md:px-0'>
              <button className='w-full md:w-1/2 h-16 my-10 sm:m-0 md:m-10 bg-custom-buttonColor-Green text-white duration-300 border border-solid border-green-700 rounded-lg text-base md:ml-52'>
                Contact Us +91 81999 85888</button>
              <button className='relative bg-transparent w-full md:w-1/2 h-16 sm:m-0 md:m-10 hover:bg-custom-buttonColor-Green hover:text-white text-green-500 duration-300 border border-solid border-custom-buttonColor-Green rounded-lg text-base md:ml-10'> 
              <img src={Images.chevronDown}  className='absolute invert -rotate-90 left-4 top-3 border-2 rounded-full border-solid border-black p-2  w-8 md:w-10 '/>
              Apply Now</button>
            </div>
        </div>
    </div>
    <div>
      <Profiles profileData={profileData} />
    </div>
    <div>
    <About/>
    </div>
    </div>
  )
}

export default Career