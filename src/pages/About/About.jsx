import React, { useEffect } from 'react';
import { Images } from '../../assets';
import BrandsTrustUs from '../Homepage/BrandsTrustUs/BrandsTrustUs';
import Testemonial from '../Homepage/Testimonial/Testemonial';
import MediaGallery from '../Homepage/MediaGallery/MediaGallery';
import IndustrialRecognition from '../Homepage/IndustrialRecognition/IndustrialRecognition'
import NamesYouKnow from '../Services/RedTeaming/NamesYouKnow/NamesYouKnow'
import Faqs from '../Homepage/FAQs/Faqs'
import { Link } from 'react-router-dom';
const About = () => {
  const data = [
    {
      id: 1,
      name: "Raghav",
      title: "",
      desc: "Cyberous' cybersecurity consultancy service was exceptional. Their team provided valuable insights and guidance tailored to our specific needs, helping us navigate complex security challenges with confidence. With Cyberous' support, we've significantly strengthened our defenses and mitigated potential risks. Highly recommend Cyberous for comprehensive cybersecurity solutions.",
      image: Images.user
    },
    {
      id: 2,
      name: "Rahul Kumar",
      title: "",
      desc: "We were thoroughly impressed by Cyberous' web application penetration testing service. Their team conducted a thorough assessment of our web application, identifying vulnerabilities and providing practical recommendations for remediation. Thanks to Cyberous, we've been able to enhance our application's security measures effectively. Trustworthy and professional – Cyberous is our top choice for web security.",
      image: Images.user
    },
    {
      id: 3,
      name: " Anand",
      title: "",
      desc: "Cyberous' Red Teaming service exceeded our expectations. Their team's simulated attacks were sophisticated and insightful, giving us a clear understanding of our organization's security posture. Their comprehensive report and recommendations enabled us to address vulnerabilities and enhance our defenses. Cyberous is our go-to partner for Red Teaming.",
      image: Images.user
    },
    {
      id: 4,
      name: " Vivek Mishra ",
      title: "",
      desc: "Hats off to Cyberous for their exceptional network penetration testing service. Their team's attention to detail and professionalism were commendable. They identified vulnerabilities in our network infrastructure and provided practical solutions for mitigation. Working with Cyberous has been a positive experience, and we highly recommend their services to anyone in need of network security testing.",
      image: Images.user
    },
    {
      id: 5,
      name: "Ashok ",
      title: "",
      desc: "Cyberous' Android penetration testing service was invaluable for our app's security. Their expertise in identifying vulnerabilities and providing actionable recommendations was exceptional. With their help, we were able to strengthen our app's security and protect our users' sensitive data. Cyberous is our trusted partner for mobile security testing.",
      image: Images.user
    },
    {
      id: 6,
      name: "Abhishek Singh",
      title: "",
      desc: "Cyberous is the finest place to learn ethical hacking and a variety of other topics. The trainers are really pleasant and knowledgeable. The enrollment process was smooth. I completed the course and am now working as a cybersecurity analyst.",
      image: Images.user
    }
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

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the file path
    link.href = '/Cyberous.pdf'; // Assuming the file is in the public directory
    // Set the download attribute to give the file a name
    link.download = 'Cyberous.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger a click event to download the file
    link.click();
    // Clean up: remove the link from the body
    document.body.removeChild(link);
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='h-full'>
      {/* Background section */}
      <div className='text-center relative bg-no-repeat bg-cover bg-center h-screen object-cover' style={{ backgroundImage: `url(${Images.aboutBg})`, }}>
        <div className='h-full bg-black bg-opacity-50 flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-__Inter_aaf875 font-bold text-white'>About Us</h1>
          <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto  rounded-full"></div>
          <h2 className='text-xl sm:text-2xl lg:text-3xl text-white font-bold font-__Inter_aaf875'>ISO:27001:2013 CERTIFIED COMPANY</h2>
        </div>
      </div>

      {/* Company info */}
      <div className='flex flex-col justify-center py-8'>
        <h1 className='text-lg text-center md:text-2xl font-bold font-serif'>Our Company</h1>
        <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full "></div>
        <div className='flex justify-center'>
          <div className='w-full md:w-3/4'>
            <p className='text-2xl mx-4 lg:text-3xl lg:mx-32 text-center font-__Inter_aaf875'>
              "Cyberous offers a comprehensive range of cybersecurity services dedicated to ensuring your <span className='text-custom-buttonColor-GreenDark font-bold'> success.</span>"
            </p>
          </div>
        </div>
      </div>

      {/* Service details */}
      <div className='px-4 lg:px-32 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
          <div className='flex flex-col'>
            <div className='flex  flex-row items-center mx-10 md:mx-40'>
              <p className='text-9xl text-green-500 font-bold font-__Inter_aaf875'>4+</p>
              <div className='w-24'>
                <p className='text-basefont-sans mt-10 text-custom-fontColor-grey font-bold font-__Inter_aaf875 md:mt-20'>Year's of Excellence Services</p>
              </div>
            </div>
            <div className='flex justify-center'>
              <p className='w-2/3 md:w-3/4 text-2xl md:text-4xl mt-8 m-4 md:mt-8 md:m-0 font-__Inter_aaf875 font-bold'>
                Learn More About Our Success Stories
              </p>
            </div>
          </div>
          <div className='text-lg text-justify mt-10 md:mt-20 font-__Inter_aaf875 '>
            Welcome to Cyberous, your premier cyber security partner. Specializing in ethical hacking training, VAPT services covering web, network, mobile, and cloud platforms, as well as red teaming and consultancy solutions. Founded in 2020 by Mr. Yogesh Saini, renowned for training over 10,000 students globally and 2,500+ corporate employees. Recognized as a Top 10 CEO in Jaipur, Rajasthan. Cyberous is committed to empowering individuals and organizations while ensuring a secure digital future. Join us in safeguarding your digital assets today.
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center mt-20 md:pt-40 md:pb-10'>
          <div className='flex flex-col'>
            <p className='font-bold text-3xl md:text-6xl font-__Inter_aaf875'>Download a copy of our <p className='text-green-500 font-__Inter_aaf875 pt-6'>Company Profile</p></p>
            <button
          className="bg-custom-buttonColor-Green text-white font-bold py-2 lg:w-3/5 h-20 px-16  rounded-full mt-4 md:mt-8 hover:bg-custom-buttonColor-GreenLight focus:outline-none focus:shadow-outline flex items-center justify-between "
          
          onClick={handleDownload}
        >
          <img src={Images.downloadicon} className="invert object-contain  w-10 lg:w-10" alt="Download Icon" />
         <p className='text-white text-xl'>Download Brochure</p> 
        </button>
          </div>
        <img src={Images.AboutusIcon} className='mx-20 w-1/4 md:mx-0 opacity-70' />

        </div>
      </div>
    

      {/* We Excel section */}
      <div className='text-center my-20'>
        <h2 className='text-3xl lg:text-4xl font-bold font-serif'>We Excel in Delivering
          <span className='text-green-500 text-2xl lg:text-4xl'> Optimal Solution</span>
        </h2>
        <div className="h-1 w-32 md:w-1/3 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
      </div>
      <div className='flex justify-center'>
        <div className='md:w-4/5 bg-custom-greyBorderColor my-8' >
          <div className='flex flex-col lg:flex-row justify-around p-4 lg:p-10'>
            <div className='text-lg lg:text-2xl mb-8 xl:mr-6 lg:mb-0'>
              <ul className='text-green-500 space-y-4 '>
                <li className='font-__Inter_aaf875'>
                  <div className='flex flex-row'>
                    <img src={Images.checkMark} className='h-6 w-6 m-2' />
                    <p className='font-bold'> Ethical Hacking training </p>
                  </div>
                  <div font-__Inter_aaf875 className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'>Elevate your cybersecurity skills with our expert-led Ethical Hacking Training programs.</p>
                  </div>
                </li>
                <li className='font-__Inter_aaf875'>
                  <Link to='/services/websecurity'>
                    <div className='flex flex-row '>
                      <img src={Images.checkMark} className='h-6 w-6 m-2' />
                      <p className='font-bold font-__Inter_aaf875'> Web Application Penetration Testing </p>
                    </div>
                  </Link>
                  <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'>Ensure your web applications are secure and resilient with our comprehensive Penetration Testing services.</p>
                  </div>
                </li>
                <li className='font-__Inter_aaf875'>
                  <Link to='/services/network'>
                    <div className='flex flex-row'>
                      <img src={Images.checkMark} className='h-6 w-6 m-2' />
                      <p className='font-bold font-__Inter_aaf875'>  Network Penetration Testing </p>
                    </div>
                  </Link>
                  <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'> Identify and mitigate vulnerabilities in your network infrastructure with our thorough Penetration Testing solutions.</p>
                  </div>
                </li>
                <li className='font-__Inter_aaf875'>
                  <Link to='/services/iospt'>
                    <div className='flex flex-row'>
                      <img src={Images.checkMark} className='h-6 w-6 m-2' />
                      <p className='font-bold font-__Inter_aaf875'>IOS Application Penetration Testing</p>
                    </div>
                  </Link>
                  <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'>Secure your iOS apps against cyber threats with our specialized Penetration Testing services</p>
                  </div>
                </li>
                <li className='font-__Inter_aaf875'>
                  <Link to='/services/androidpt'>
                    <div className='flex flex-row'>
                      <img src={Images.checkMark} className='h-6 w-6 m-2' />
                      <p className='font-bold font-__Inter_aaf875'>  Android Application Penetration Testing </p>
                    </div>
                  </Link>
                  <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'>Protect your Android applications from potential breaches with our rigorous Penetration Testing procedures.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='text-lg lg:text-2xl'>
              <ul className=' xl:mr-6 text-green-500 space-y-4' >
                <li className='font-__Inter_aaf875'>
                  <Link to='/services/sourcecode'>
                    <div className='flex flex-row'>
                      <img src={Images.checkMark} className='h-6 w-6 m-2' />
                      <p className='font-bold font-__Inter_aaf875'>  Source Code Review: </p>
                    </div>
                  </Link>
                  <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'>Strengthen your software security with our meticulous Source Code Review assessments.</p>
                  </div>
                </li>
                <li className='font-__Inter_aaf875'>
                  <Link to='/services/apipt'>
                    <div className='flex flex-row'>
                      <img src={Images.checkMark} className='h-6 w-6 m-2' />
                      <p className='font-bold font-__Inter_aaf875'>  API Penetration Testing </p>
                    </div>
                  </Link>
                  <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'>Ensure the integrity of your APIs with our specialized Penetration Testing services.</p>
                  </div>
                </li>
                <li className='font-__Inter_aaf875'>
                  <Link to='/services/iotpt'>
                    <div className='flex flex-row'>
                      <img src={Images.checkMark} className='h-6 w-6 m-2' />
                      <p className='font-bold font-__Inter_aaf875'>  IoT Penetration Testing </p>
                    </div>
                  </Link>
                  <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'>Safeguard your IoT devices and networks from cyber attacks with our comprehensive testing procedures.
                    </p>
                  </div>
                </li>
                <li className='font-__Inter_aaf875'>
                  <Link to='/services/consultancy'>
                    <div className='flex flex-row'>
                      <img src={Images.checkMark} className='h-6 w-6 m-2' />
                      <p className='font-bold font-__Inter_aaf875'>  Cyber Security Consultancy: </p>
                    </div>
                  </Link>
                  <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'>Get tailored cybersecurity solutions and expert guidance to protect your organization's digital assets.</p>
                  </div>
                </li>
                <li className='font-__Inter_aaf875'>
                  <Link to='/services/redteaming'>
                    <div className='flex flex-row'>
                      <img src={Images.checkMark} className='h-6 w-6 m-2' />
                      <p className='font-bold font-__Inter_aaf875'>  Red Teaming: </p>
                    </div>
                  </Link>
                  <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10 font-__Inter_aaf875'>Assess and enhance your organization's security posture with our simulated cyber attack scenarios.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="p-6 bg-custom-buttonColor-GreenDark text-white md:p-6 border border-solid border-black">
        <div className="container mx-auto px-4 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col justify-center">
              <span className="text-3xl md:text-5xl font-__Inter_aaf875 font-bold">30+</span>
              <span className="text-xl md:text-xl p-2 font-__Inter_aaf875">CLIENTS SECURED</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-3xl md:text-5xl font-bold font-__Inter_aaf875">150+</span>
              <span className="text-xl md:text-xl p-2 font-__Inter_aaf875">PROJECTS COMPLETED</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-3xl md:text-5xl font-bold font-__Inter_aaf875">20+</span>
              <span className="text-xl md:text-xl p-2 font-__Inter_aaf875">SKILLED PROFESSIONAL</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-3xl md:text-5xl font-bold font-__Inter_aaf875">12000+</span>
              <span className="text-xl md:text-xl p-2 font-__Inter_aaf875">STUDENTS TRAINED</span>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center relative bg-no-repeat bg-center h-32 pt-10 bg-white'>
        <div className='h-full  bg-opacity-50 flex flex-col justify-center'>
          {/* <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold text-black'>Our Clients</h1> */}
          {/* <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div> */}
        </div>
      </div>



      {/* Service List */}
      <div id="brands" className='min-h-full bg-white pb-10'>
        {/* <BrandsTrustUs /> */}
        <NamesYouKnow />
      </div>
      <div id="brands" className='min-h-full bg-white'>
        <IndustrialRecognition />
      </div>
      <div id="testimonials" className='min-h-full bg-white'>
        <Testemonial data={data} />
      </div>
      <div id="gallery" className='min-h-full bg-white'>
        <MediaGallery />
      </div>
      <div id='faqs' className='min-h-full bg-white'>
        <Faqs faqData={faqData} />
      </div>
    </div>
  );
}

export default About;
