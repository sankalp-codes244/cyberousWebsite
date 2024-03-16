import React, { useEffect } from 'react'
import CarouselElement from '../../components/CarouselElement'
import { Images } from '../../assets'
import OurServices from '../Homepage/OurServices/OurServices'
import About from './AboutUs/About'
import WhyChooseUs from '../Homepage/WhyChooseUs/WhyChooseUs'
import Training from './Training/Training'
import IndustrialRecognition from './IndustrialRecognition/IndustrialRecognition'
import BrandsTrustUs from './BrandsTrustUs/BrandsTrustUs'
import Testemonial from './Testimonial/Testemonial'
import MediaGallery from './MediaGallery/MediaGallery'

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
      image: Images.ourcources1,
      type: 'bug_bounty'
    },
    {
      id: 2,
      title: 'Advanced Ethical Hacking',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.ourcources2,
      type: 'Advanced_Ethical_Hacking'
    },
    {
      id: 3,
      title: 'Linux Fundamental',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.ourcources3,
      type: 'Linux_Fundamental'
    },
    {
      id: 4,
      title: 'Cyber Security Diploma',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.ourcources4,
      type: 'Cyber_Security_Diploma'
    },
    {
      id: 5,
      title: 'Application Development',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.ourcources5,
      type: 'Application_Development' 
    },
    {
      id: 6,
      title: 'Advanced Ethical Hacking',
      description: 'Smart CCTV Security Systems That Fits Your Business',
      image: Images.ourcources2,
      type: 'Advanced_Ethical_Hacking'
    },
  ];

const whyChooseUs = [
  {
    id: 0,
    description: 'EXPERT Training',
    img:Images.whychooseus2,
  },
  {
    id: 1,
    description: 'Quality Service ',
    img:Images.whychooseus3,
  },
  {
    id: 2,
    description: '24X7 Hour Support',
    img:Images.whychooseus4,
  },
  {
    id: 3,
    description: 'Expert consultancy ',
    img:Images.whychooseus5,
  },
  // {
  //   id: 4,
  //   description: 'Comprehensive Threat Detection and Prevention',
  //   img:Images.whychooseus5,
  // },
  // {
  //   id: 5,
  //   description: 'Tailored Solutions for Specific Needs',
  //   img:Images.whychooseus5,
  // },
]



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="home" className='min-h-screen'>
        <CarouselElement getImages={imgData} />
      </div>
      <div id="about" className='min-h-screen bg-white'>
        <About/>
      </div>
      <div id="services" className='min-h-screen bg-white'>
        <OurServices/>
      </div>
      <div id="chooseus" className='min-h-screen bg-white'>
        <WhyChooseUs whyUs={whyChooseUs}/>
      </div>
      <div id="industrialrec" className='min-h-full bg-white'>
        <IndustrialRecognition/>
      </div>
      <div id="training" className='min-h-screen bg-white'>
        <Training programs={programs}/>
      </div>
      <div id="brands" className='min-h-full bg-white'>
        <BrandsTrustUs/>
      </div>
      <div id="testimonials" className='min-h-full bg-white'>
        <Testemonial/>
      </div>
      <div id="gallery" className='min-h-full bg-white'>
        <MediaGallery/>
      </div>
    </>
  );
};
export default Homepage;