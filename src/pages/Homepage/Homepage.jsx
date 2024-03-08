import React from 'react'
import CarouselElement from '../../components/CarouselElement'
import { Images } from '../../assets'
import OurServices from '../Homepage/OurServices/OurServices'
import About from './AboutUs/About'
import WhyChooseUs from '../Homepage/WhyChooseUs/WhyChooseUs'
import Training from './Training/Training'

const Homepage = () => {
  let imgData = [
    {
      id:1,
      text:'Empowering Organizations With Tailored Security Solutions Through Expert Consultation.',
      Image: Images.carousalImg1,
    },
    {
      id:2,
      text:'Transforming Individuals into Cyber Guardians Through Expert Training',
      Image: Images.carousalImg2,
    },
    {
      id:3,
      text:'Empowering Organizations With Tailored Security Solutions Through Expert Consultation.',
      Image: Images.carousalImg3,
    }
  ]
  const programs = [
    {
      id: 1,
      title: 'Bug Bounty',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
      type: 'bug_bounty'
    },
    {
      id: 2,
      title: 'Advanced Ethical Hacking',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
      type: 'Advanced_Ethical_Hacking'
    },
    {
      id: 3,
      title: 'Linux Fundamental',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
      type: 'Linux_Fundamental'
    },
    {
      id: 4,
      title: 'Cyber Security Diploma',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
      type: 'Cyber_Security_Diploma'
    },
    {
      id: 5,
      title: 'Application Development',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
      type: 'Application_Development'
    },
    {
      id: 6,
      title: 'Advanced Ethical Hacking',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
      type: 'Advanced_Ethical_Hacking'
    },
  ];

  return (
    <>
      <div className='min-h-screen'>
        <CarouselElement getImages={imgData} />
      </div>
      <div id="about" className='min-h-screen bg-white'>
        <About/>
      </div>
      <div className='min-h-screen bg-white'>
        <OurServices/>
      </div>
      <div id="chooseus" className='min-h-screen bg-white'>
        <WhyChooseUs/>
      </div>
      <div id="chooseus" className='min-h-screen bg-white'>
        <Training programs={programs}/>
      </div>
    </>
  );
};
export default Homepage;