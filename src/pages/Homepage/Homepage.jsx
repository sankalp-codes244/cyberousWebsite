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
import ContactUs from './ContactUs/ContactUs'
import NamesYouKnow from '../Services/RedTeaming/NamesYouKnow/NamesYouKnow'
import Faqs from './FAQs/Faqs'
const Homepage = () => {
  const faqData = [
    {
      id: 0,
      name: 'How does Web Application Security Testing ensure digital asset protection?',
      description: " In Web Application Security Testing, we conduct thorough Requirement Analysis, delving into the nuances of your application's architecture. This ensures a tailored and effective security assessment, leaving no aspect overlooked in safeguarding your digital assets."
    },
    {
      id: 1,
      name: 'Why is Threat Modeling crucial for web application security?',
      description: " Threat Modeling crafts a robust model, identifying potential threats, vulnerabilities, and attack vectors. This proactive approach prioritizes testing efforts on critical areas, fortifying your digital defenses effectively and ensuring a comprehensive security testing strategy."
    },
    {
      id: 2,
      name: 'What is the significance of Authentication & Authorization Testing?',
      description: " Authentication & Authorization Testing ensures robust user access control. Our experts examine authentication and authorization mechanisms, conducting exhaustive testing to thwart unauthorized entry and fortify the safeguarding of sensitive data."
    },
    {
      id: 3,
      name: 'How does Security Testing protect against unforeseen risks?',
      description: " Through comprehensive Threat Modeling, we identify potential threats and vulnerabilities, allowing us to prioritize testing efforts.This ensures a targeted security testing strategy, mitigating unforeseen risks and fortifying your web application's overall security posture."
    },
    {
      id: 4,
      name: 'What role does Vulnerability Assessment play in web application security?',
      description: " Vulnerability Assessment involves a meticulous examination to identify and address vulnerabilities. This critical step ensures a proactive approach to security, allowing for timely mitigation and safeguarding your web application against potential cyber threats."
    }
  ]
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
    description: '24/7 Hour Support',
    img:Images.whychooseus4,
  },
  {
    id: 3,
    description: 'Expert Consultancy ',
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
      <div id="about" className='min-h-screen '>
        <About/>
      </div>
      <div id="services" className='min-h-screen'>
        <OurServices/>
      </div>
      <div id="chooseus" className='min-h-screen'>
        <WhyChooseUs whyUs={whyChooseUs}/>
      </div>
      <div id="industrialrec" className='min-h-full'>
        <IndustrialRecognition/>
      </div>
      <div id="training" className='min-h-screen'>
        <Training programs={programs}/>
      </div>
      <div id="brands" className='min-h-full'>
        <ContactUs/>
      </div>
      <div id="brands" className='h-screen'>
        {/* <BrandsTrustUs/> */}
        <NamesYouKnow/>
      </div>
      <div id="testimonials" className='my-20'>
        <Testemonial/>
      </div>
      <div id="gallery" className='my-36'>
        <MediaGallery/>
      </div>
      <div>
        <Faqs faqData={faqData}/>
      </div>
    </>
  );
};
export default Homepage;