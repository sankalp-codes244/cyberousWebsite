import React from 'react'
import Methodology from './Methodology/Methodology'
import { Images } from '../../assets'

const About = () => {

const boxData = [
    {
      id: 0,
      headingText: 'Black box testing',
      paragraphText: "Begin a thorough security exploration through Black Box Testing. Picture it as a simulated cyber intrusion, where our specialists, acting as external attackers, meticulously assess your system's defenses. By examining your system from an outsider's perspective, we pinpoint vulnerabilities that could be exploited in real-world situations. This approach not only assesses your system's existing security stance but also strengthens it against potential external threats in the ever-evolving cybersecurity landscape.",
    },
    {
      id: 1,
      headingText: 'Grey box testing',
      paragraphText: "Achieve a balanced fusion of security insight and an external viewpoint through Gray Box Testing. Our strategy combines the advantages of Black Box and White Box methods. Equipped with partial knowledge of your system's internal structure, our specialists execute a detailed assessment. This approach provides a well-rounded perspective, enabling us to simulate an attacker's strategy with restricted internal details. It represents the optimal intersection where transparency intersects with robust vulnerability analysis, guaranteeing a comprehensive evaluation while maintaining realistic simulation.",
    },
    {
      id: 2,
      headingText: 'White box testing',
      paragraphText: "Gain insight into the core of your digital defenses through White Box Testing. Consider it as a thorough examination of your system's security health. Our specialists meticulously scrutinize the internal architecture, source code, and algorithms, leaving no aspect unexplored. This approach not only detects vulnerabilities but also offers insights into the overall strength of your system. Acting as an internal guardian, White Box Testing reinforces your digital assets against potential threats, providing a protective layer that extends beyond the surface.",
    }
  ]
  return (
    <div className='h-full'>

      <div className='bg-white'>
        {/* Heading Text */}
        <div className='flex flex-col text-center border border-black border-solid h-96 bg-cover bg-center relative'
     style={{ backgroundImage: `url(${Images.aboutBg})` }}>
        <div className='flex flex-col justify-center h-full bg-black bg-opacity-50'>
          <h1 className='text-3xl lg:text-3xl font-bold text-white mt-4'> About Us </h1>
          <div className='flex justify-center'>
            <div className="h-1 w-32 bg-custom-buttonColor-Green mt-6 rounded-full"></div>
          </div>
          <h1 className='text-2xl lg:text-3xl text-white font-bold mt-4'> ISO:27001:2013 CERTIFIED COMPANY </h1>
        </div>
      </div>
        <div className='flex flex-col text-center '>
          <h1 className='text-3xl lg:text-3xl  font-bold mt-4'> Our Company </h1>
          <div className='flex justify-center'>
            <div className="h-1 w-32 bg-custom-buttonColor-Green mt-6 rounded-full"></div>
          </div>
          <h1 className='text-3xl lg:text-5xl text-black font-bold mt-4'> Cyberous offers a comprehensive range of cybersecurity services dedicated to ensuring your success. </h1>
        </div>


        {/* Overview Services Text */}
        <div className='flex justify-center flex-col p-40'>
          <div className='flex  justify-center'>
          <div className='text-9xl text-green-500 font-bold text-center'>
          4+
          <p className='text-xl'>
          years 
          of Excellence Services
          </p>
          </div>



          <div className='w-2/3 text-center text-xl'>
          Welcome to Cyberous, your premier cyber security partner. Specializing in ethical hacking training, VAPT services covering web, network, mobile, and cloud platforms, as well as red teaming and consultancy solutions. Founded in 2020 by Mr. Yogesh Saini, renowned for training over 10,000 students globally and 2,500+ corporate employees. Recognized as a Top 10 CEO in Jaipur, Rajasthan, Cyberous is committed to empowering individuals and organizations while ensuring a secure digital future. Join us in safeguarding your digital assets today.

          </div>
          </div>
          
        <div className='flex border border-solid px-36 justify-between'>
          <div className="py-12">
          Download a copy of our Company Profile 

          </div>
          <div className="py-12">
          Download a copy of our Company Profile 

          </div>
          </div>
        </div>
        </div>

      <div >
      <div className='flex justify-center'>
            <div className="h-1 w-4/5 bg-custom-greyBorderColor rounded-full"></div>
          </div>
      </div>
      {/* Subpages */}
      <Methodology boxData={boxData}/>
    </div>
  )
}

export default About