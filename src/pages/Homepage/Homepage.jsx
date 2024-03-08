import React from 'react'
import CarouselElement from '../../components/CarouselElement'
import { Images } from '../../assets'
import OurServices from '../Homepage/OurServices/OurServices'
import About from './AboutUs/About'
import WhyChooseUs from '../Homepage/WhyChooseUs/WhyChooseUs'
import Training from './Training/Training'
import IndustrialRecognition from './IndustrialRecognition/IndustrialRecognition'

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
      title: 'Advanced Ethical Hacking',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
    },
    {
      id: 2,
      title: 'Advanced Ethical Hacking',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
    },
    {
      id: 3,
      title: 'Advanced Ethical Hacking',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
    },
    {
      id: 4,
      title: 'Advanced Ethical Hacking',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
    },
    {
      id: 5,
      title: 'Advanced Ethical Hacking',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
    },
    {
      id: 6,
      title: 'Advanced Ethical Hacking',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.carousalImg3,
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
      <div id="industrialrec" className='min-h-screen bg-white'>
        <IndustrialRecognition/>
      </div>
      <div id="training" className='min-h-screen bg-white'>
        <Training programs={programs}/>
      </div>
    </>
  );
};
export default Homepage;