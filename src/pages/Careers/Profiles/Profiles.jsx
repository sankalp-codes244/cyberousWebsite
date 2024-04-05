import React from 'react'
import ProfileCard from '../../../components/ProfileCard'

const Profiles = () => {
  const profileData = [
    {
      id : 0,
      name:'Cyber Security Intern',
      desc: ["Conduct vulnerability assessments and penetration testing. ", "Participate in security awareness training. ", "Document security processes and procedures. ", "Assist with various security tasks and projects. "],
      location : 'Remote',
      type:'Internship Job',
      Qualifications:'Currently pursuing a master degree or graduate',
      benefits : ['Hands-on experience in the field of cyber security.', 'Opportunity to work alongside experienced professionals and gain valuable mentorship.', 'Exposure to cutting-edge technologies and industry best practices.', 'Potential for future full-time employment opportunities based on performance and business needs.'],
      How_to_Apply: "Interested candidates should submit their resume and cover letter here or mail us at info@cyberous.in .Please include Job profile name in the subject line.",
    },
    {
      id : 1,
      name:'Graphic Designer Intern',
      desc: ["Assist in creating visual assets for digital and print materials. ", "Execute design projects from concept to final deliverySupport in maintaining brand consistency across various platforms. ", "Participate in creative meetings and provide input on design ideas. ", "Learn and apply design principles and industry trends. "],
      location : 'Remote',
      type:'Internship Job',
      Qualifications:" Pursuing a degree in Graphic Design, Visual Arts, or related fieldProficiency in graphic design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign or Canva)",
      benefits : ['Gain hands-on experience in a professional design environmentMentorship from experienced designers', 'Opportunity to work on diverse projects and build a portfolio'],
      How_to_Apply: "Interested candidates should submit their resume and cover letter here or mail us at info@cyberous.in .Please include Job profile name in the subject line.",
    },
  ]
  return (
    <div>
      <div className='bg-custom-buttonColor-Green md:flex px-14 p-2 hidden '>
        <div className='w-1/2'>
          <h1 className='text-xl text-white font-Roboto'>
            Profile
          </h1>
        </div>
        <div className='w-1/2'>
          <h1 className='text-xl  text-white font-Roboto'>
            Description
          </h1>
        </div>
      </div>
      <div>
        {
          profileData.map((item) => (
            <ProfileCard
            id ={item.id}
            name ={item.name}
            desc ={item.desc}
            location = {item.location}
            type = {item.type}
            qualifications = {item.Qualifications}
            benefits = {item.benefits}
            howtoapply ={item.How_to_Apply}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Profiles