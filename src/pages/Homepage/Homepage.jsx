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
import FormComponent from '../../components/FormComponent'
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
      description: 'Identifying and reporting security vulnerabilities in web applications.',
      image: Images.ourcources1,
      type: 'bug_bounty',
      path: '/training/bugbounty'
    },
    {
      id: 2,
      title: 'Advanced Ethical Hacking',
      description: 'Advanced techniques in ethical hacking and cybersecurity.',
      image: Images.ourcources2,
      type: 'Ethical_Hacking',
      path: '/training/ethicalhacking'
    },
    {
      id: 3,
      title: 'Linux Fundamentals',
      description: 'Fundamental concepts and practices of Linux operating system.',
      image: Images.ourcources2,
      type: 'Linux_Fundamental',
      path: '/training/bugbounty'
    },
    {
      id: 4,
      title: 'Cyber Security Diploma',
      description: 'Comprehensive training program covering various aspects of cybersecurity.',
      image: Images.ourcources4,
      type: 'Cyber_Security_Diploma',
      path: '/training/diploma'
    },
    // {
    //   id: 5,
    //   title: 'Application Development',
    //   description: 'Development of secure and robust applications.',
    //   image: Images.ourcources5,
    //   type: 'Application_Development' ,
    //   path: '/training/linuxfundamentals'
    // },
    {
      id: 6,
      title: 'Linux Fundamentals',
      description: 'Fundamental concepts and practices of Linux operating system.',
      image: Images.ourcources2,
      type: 'Ethical_Hacking',
      path: '/training/linuxfundamentals'
    },
    {
      id: 7,
      title: 'Web Application Penetration Testing',
      description: 'Assessing security vulnerabilities of web applications.',
      image: Images.hackerAA,
      type: 'Ethical_Hacking',
      path: '/training/webpt'
    },
    {
      id: 8,
      title: 'Bug Bounty',
      description: 'Identifying and reporting security vulnerabilities in web applications.',
      image: Images.ourcources1,
      type: 'Ethical_Hacking',
      path: '/training/bugbounty'
    },
    {
      id: 9,
      title: 'Mobile Application Penetration Testing',
      description: 'Assessing security vulnerabilities of mobile applications.',
      image: Images.MobileAppPenetrationTesting,
      type: 'Ethical_Hacking',
      path: '/training/mobilept'
    },
    {
      id: 10,
      title: 'Network Penetration Testing',
      description: 'Evaluating network security vulnerabilities rigorously.',
      image: Images.NetworkPenetrationTesting,
      type: 'Ethical_Hacking',
      path: '/training/networkpt'
    },
];

const whyChooseUs = [
  {
    id: 0,
    description: 'Expert Training',
    img:Images.whychooseus2,
  },
  {
    id: 1,
    description: '24/7 Hour Support',
    img:Images.whychooseus4,
  },
  {
    id: 2,
    description: 'Quality Service ',
    img:Images.whychooseus3,
  },
  {
    id: 3,
    description: 'Expert Consultancy ',
    img:Images.whychooseus5,
  },
]
const data = [
  {
    id: 1,
    name: "Gaurav",
    title: "CEO",
    desc: "Choosing Cyberous was a game-changer for our business. Their VAPT team meticulously uncovered weaknesses in our systems, allowing us to fortify our defences effectively. We feel much more secure now.",
    image: Images.user,
  },
  {
    id: 2,
    name: "Gaurav",
    title: "Security Manager",
    desc: "Working with Cyberous was a breeze. Their VAPT team was professional and efficient, providing detailed reports that helped us strengthen our defenses. Their consultancy services were insightful, and the Red Teaming exercise was a wake-up call. Cyberous is now our go-to for cybersecurity.",
    image: Images.user,
  },
  {
    id: 3,
    name: "Shubham",
    title: "CEO",
    desc: "We were impressed by Cyberous professionalism and expertise. Their VAPT services were thorough, and their consultancy provided practical recommendations tailored to our needs. We highly recommend Cyberous for securing your business.",
    image: Images.user,
  },
  {
    id: 4,
    name: "Palki",
    title: "Student",
    desc: "I've enrolled in Cyberous L1, L2, and L3 training programs, and I must say they are highly structured and informative. Cyberous offers a full range of training with instructors you can rely on. My trainer, Mr. Yogesh Saini, is experienced and well-informed.",
    image: Images.user,
  },
  {
    id: 5,
    name: "Raj Rajeshwari",
    title: "Student",
    desc: "I must say, the Ethical Hacking training program at Cyberous is amazing. They will teach you from scratch to advanced level. I highly recommend Cyberous as your partner in your cybersecurity journey.",
    image: Images.user,
  },
  {
    id: 6,
    name: "Muskan Jindal",
    title: "Student",
    desc: "Learning skills from cyberous is great. Teachers are wonderful, they helps you to brush your skills and learn new technical skills. Moreover  the main focus is on hands on practice which is must to survive in the corporate world.",
    image: Images.user,
  }
];



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
        <Testemonial data={data}/>
      </div>
      <div id="gallery" className='my-36'>
        <MediaGallery/>
      </div>
      <div>
        <Faqs/>
      </div>
    </>
  );
};
export default Homepage;