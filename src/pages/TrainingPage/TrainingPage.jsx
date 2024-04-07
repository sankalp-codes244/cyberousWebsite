import React, { useEffect } from 'react'
import { Images } from '../../assets'
import SideArrow from '../../assets/Svgs/SideArrow'
import TrainingPageCard from '../../components/TrainingPageCard'
import Training from '../Homepage/Training/Training'
import Testemonial from '../Homepage/Testimonial/Testemonial'
import Faqs from '../Homepage/FAQs/Faqs'
import MediaGallery from '../Homepage/MediaGallery/MediaGallery'

const TrainingPage = () => {

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  
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
      path: '/training/advanceeh'
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
      image: Images.ourcources5,
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

  return (
    <div className='h-full'>
      <div className='text-center relative bg-no-repeat bg-cover bg-center h-screen object-cover' style={{ backgroundImage: `url(${Images.aboutBg})`, }}>
        <div className='h-full bg-black bg-opacity-50 flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-__Inter_aaf875 font-bold text-white'>Our Training</h1>
          <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto  rounded-full"></div>
          <h2 className='text-xl sm:text-2xl lg:text-3xl text-white font-bold font-__Inter_aaf875'>ISO:27001:2013 CERTIFIED COMPANY</h2>
        </div>
      </div>

      <div className='bg-custom-greyBorderColor md:p-10 py-32'>
        <h1 className='font-bold text-xl md:text-4xl text-center font-Roboto p-4 py-10'>Unlock Your Cybersecurity Career Potential with Cyberous' Comprehensive Cybersecurity Program</h1>
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
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow /> Comprehensive Training</li>
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow /> Practical Skills Development</li>
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow /> Industry Recognition</li>
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow /> Expert Guidance</li>
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow /> Career Advancement</li>
              <li className='text-lg md:text-xl py-1 font-medium '> <SideArrow /> Tailored Learning Experience</li>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <h1 className='font-Roboto text-center text-xl md:text-3xl p-5 md:p-10 font-bold'>
          Why choose Cyberous as your partner in your cybersecurity journey?
        </h1>
        <div className='flex justify-center '>
          <div className='grid grid-cols-1 md:grid-cols-3 w-3/4 py-10'>
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

      <div className='py-24 bg-custom-greyBorderColor'>
        <div className='flex justify-center'>
          <div className='md:w-3/4'>
            <h1 className='text-center text-xl md:text-3xl font-Roboto py-6'>Cyber Security Course - Tailored Training to Suit Your Organizational Requirements!</h1>
          </div>
        </ div>
        <div className='md:flex md:flex-row p-4 md:p-10 md:px-40'>
          <img src={Images.Trainingpageimg2} className='w-full md:w-2/5' />
          <div className='px-4'>
            <h1 className=' text-xl md:text-3xl font-Roboto my-4 md:mt-8'>Cyber Security Training By Industry Experts</h1>
            <p className='text-justify text-lg my-8'>
              Cyberous provides top-notch Cybersecurity Training led by highly qualified and certified experts boasting extensive industry experience. Gain insights into the latest hacking methodologies and practical applications of cutting-edge tools to tackle evolving security challenges in real-time. Our instructors hold prestigious certifications like CEH, OSCP, ensuring comprehensive knowledge transfer. With exceptional communication skills, our trainers offer precise explanations and foster interactive learning environments. Enhance your proficiency through diverse resources, testing tools, and hands-on simulations. Enroll in our SEO-optimized Cybersecurity Course to achieve your security objectives effectively.
            </p>
          </div>
        </div>
      </div>


      <div className='bg-custom-black-color py-8'>
        <h1 className='text-center text-3xl md:text-5xl font-bold text-white font-Roboto'>What We Offer</h1>
        <div className='md:flex md:justify-center py-4'>
          <div className='md:w-11/12'>
            <p className='text-white font-__Inter_aaf875 text-center text-sm md:text-base px-3'>
              Craw Security offers a high level of technical education to students. clients, and partners in the IT Industry, and we have well-qualified. certified, and experienced trainers whoprovide nothing but the best in the businese We have training programs with a good reputation in the intemational market and a vast intemational alum base.
            </p>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='md:w-10/12'>
            <div className='grid grid-cols-1 md:grid-cols-3 p-10 md:p-0 md:py-6'>
              <div className='grid grid-cols-1 gap-4'>
                <div className='border border-solid border-custom-greyBorderColor p-10  my-4 md:my-0'>
                  <h1 className='text-white font-bold text-xl font-__Inter_aaf875 text-center'>Live Online Training</h1>
                  <p className='text-white font-__Inter_aaf875 text-base text-center py-4'>Gain expertise from anywhere with interactive live online training sessions tailored to your schedule and learning needs.</p>
                </div>
                <div className='border border-solid border-custom-greyBorderColor p-10 '>
                  <h1 className='text-white font-bold text-xl font-__Inter_aaf875 text-center'>Internship</h1>
                  <p className='text-white font-__Inter_aaf875 text-base text-center py-4'>Unlock hands-on experience and valuable industry insights with our internship program, propelling your career forward</p>
                </div>
              </div>
              <div className='my-10 md:my-0 p-5 md:p-10 bg-custom-buttonColor-Green text-white md:mx-5'>
                <h1 className='text-white font-bold text-xl font-__Inter_aaf875 text-center'>
                  4+ Years of Experience
                </h1>
                <p className='text-white font-__Inter_aaf875 text-base text-center py-4'>Cyberous is a leading cybersecurity firm dedicated to fortifying digital infrastructures against evolving threats. With innovative solutions and expert guidance, we empower organizations to navigate the complexities of cyberspace securely, ensuring peace of mind in an ever-changing digital landscape.</p>
                <div className='flex justify-center mt-4'>
                  <button className='h-1/2 w-2/3 p-3 md:p-6 bg-white rounded-md text-black font-__Inter_aaf875'> Book Your Demo</button>
                </div>

              </div>
              <div className='md:flex md:flex-col gap-5'>
                <div className='border border-solid border-custom-greyBorderColor p-10  my-4 md:my-0'>
                  <h1 className='text-white font-bold text-xl font-__Inter_aaf875 text-center'>Corporate Training</h1>
                  <p className='text-white font-__Inter_aaf875 text-base text-center py-4'>Transform your workforce with customized corporate training, empowering them to thrive in today's digital age.</p>
                </div>
                <div className='border border-solid border-custom-greyBorderColor p-10 '>
                  <h1 className='text-white font-bold text-xl font-__Inter_aaf875 text-center'>Job Assistance</h1>
                  <p className='text-white font-__Inter_aaf875 text-base text-center py-4'>Receive dedicated job assistance to secure rewarding opportunities in the cybersecurity field and advance your career with confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-10 flex flex-col lg:flex-row md:flex:row '>
        <div className='lg:w-2/3'>
          <h1 className='text-center text-2xl md:text-4xl font-Roboto font-bold py-5'>
            Online Cyber Security Diploma
          </h1>
          <p className='lg:text-2xl pt-6 font-__Inter_aaf875 text-center md:px-10 md:text-justify '>
            Embark on a transformative journey in cybersecurity with Cyberous' comprehensive diploma programs, available in durations of 6 months and 1 year. Delve into cutting-edge techniques and industry best practices under the guidance of seasoned experts, equipping yourself with the skills needed to safeguard digital assets effectively. Whether you're looking to kickstart your career or enhance your expertise, our flexible programs offer the perfect pathway to success in the dynamic realm of cybersecurity
          </p>
        </div>
        <div className='lg:w-1/3 lg:flex gap-4 '>
          <div className='border w-full rounded-xl shadow-xl p-5'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold font-__Inter_aaf875 pb-4'>6 months</h1>
            <ul className='px-3'>
              <li className='text-lg font-__Inter_aaf875'> <SideArrow /> Linux Fundamentals
Networking Fundamentals</li>
              <li className='text-lg font-__Inter_aaf875'> <SideArrow />Python Programming</li>
              <li className='text-lg font-__Inter_aaf875'> <SideArrow /> Web Application & Network Penetration Testing</li>
              <li className='text-lg font-__Inter_aaf875'> <SideArrow /> Mobile Application Penetration Testing</li>
            </ul>
            <button className='bg-custom-buttonColor-Green hover:bg-green-600 duration-300 text-white font-__Inter_aaf875 p-2 rounded-md w-full mt-4'>Read more</button>
          </div>
          <div className='border w-full  rounded-xl shadow-xl p-5'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold font-__Inter_aaf875 pb-4'>1 year</h1>
            <ul className='px-2'>
              <li className='text-lg font-__Inter_aaf875'> <SideArrow /> 6 Months Diploma +</li>
              <li className='text-lg font-__Inter_aaf875'> <SideArrow /> Cloud Penetration Testing 
API Penetration Testing </li>
              <li className='text-lg font-__Inter_aaf875'> <SideArrow /> IOT Internet of Things</li>
              <li className='text-lg font-__Inter_aaf875'> <SideArrow /> Cloud Security</li>
              <li className='text-lg font-__Inter_aaf875'> <SideArrow /> Career Advancement</li>
            </ul>
            <button className='bg-custom-buttonColor-Green hover:bg-green-600 duration-300 text-white font-__Inter_aaf875 p-2 rounded-md w-full mt-10'>Read more</button>

          </div>
         
        </div>
      </div>
      <div>

      </div>
      <div>
        <Training programs={programs}/>
      </div>
      <div>
        <MediaGallery/>
      </div>
      <div>
        <Training programs={programs} />
      </div>

      <div className='py-10'>
        <Testemonial/>
      </div>
      <div>
        <Faqs faqData={faqData}/>
      </div>
    </div>
  )
}

export default TrainingPage