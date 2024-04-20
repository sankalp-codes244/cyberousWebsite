import React, { useEffect } from 'react'
import BrandsTrustUs from '../Homepage/BrandsTrustUs/BrandsTrustUs';
import IndustrialRecognition from '../Homepage/IndustrialRecognition/IndustrialRecognition';
import Testemonial from '../Homepage/Testimonial/Testemonial';
import MediaGallery from '../Homepage/MediaGallery/MediaGallery';
import { Images } from '../../assets';
import { Link } from 'react-router-dom';
import NamesYouKnow from './RedTeaming/NamesYouKnow/NamesYouKnow';

const Services = () => {
  useEffect(() => {
    // window.scrollTo(0, 0); 
  }, []);
  const data = [
    {
      id: 1,
      name: "Gaurav",
      title: "CEO",
      desc: "Choosing Cyberous was a game-changer for our business. Their VAPT team meticulously uncovered weaknesses in our systems, allowing us to fortify our defenses effectively. We feel much more secure now.",
      image: Images.user,
    },
    {
      id: 2,
      name: "Smith",
      title: "",
      desc: "Working with Cyberous was a breeze. Their VAPT team was professional and efficient, providing detailed reports that helped us strengthen our defenses. Their consultancy services were insightful, and the Red Teaming exercise was a wake-up call. Cyberous is now our go-to for cybersecurity.",
      image: Images.user,
    },
    {
      id: 3,
      name: "Shubham",
      title: "CEO",
      desc: "We were impressed by Cyberous' professionalism and expertise. Their VAPT services were thorough, and their consultancy provided practical recommendations tailored to our needs. We highly recommend Cyberous for securing your business.",
      image: Images.user,
    },
    {
      id: 4,
      name: "John Smith",
      title: "CEO",
      desc: "Choosing Cyberous for our Red Teaming service was a game-changer. Their team simulated real-world attack scenarios with precision and expertise. The insights gained were invaluable, allowing us to identify and address critical vulnerabilities in our defenses. Cyberous' Red Teaming service is a must for any organization serious about fortifying their cybersecurity posture.",
      image: Images.user,
    },
    {
      id: 5,
      name: "Aman",
      title: "Tech Expert",
      desc: "Cyberous Web Penetration Testing service has revolutionized our online presence. Their expertise in web security ensured that our platform is robust against potential threats, while their proactive approach guarantees continuous protection. We highly recommend Cyberous for anyone seeking reliable web security solutions.",
      image: Images.user,
    },
    {
      id: 6,
      name: "Rohan",
      title: "Manager",
      desc: "Partnering with Cyberous for cybersecurity consultancy was a game-changer for our company. Their team of experts provided invaluable guidance tailored to our specific needs, helping us navigate complex security challenges with confidence. With Cyberous' support, we've strengthened our defenses and enhanced our overall security posture. Highly recommend Cyberous for comprehensive cybersecurity solutions.",
      image: Images.user,
    }
  ];
  
  return (
    <div className='h-full'>
      {/* Background section */}
      <div className='text-center relative bg-no-repeat bg-cover bg-center h-screen object-cover' style={{ backgroundImage: `url(${Images.aboutBg})`, }}>
        <div className='h-full bg-black bg-opacity-50 flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold font-__Inter_aaf875 text-white'>Services</h1>
          <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
          <h2 className='text-xl sm:text-2xl lg:text-3xl text-white font-bold font-__Inter_aaf875'>We Do More Than Just A Scanner, We Are Your Comprehensive Security Team.</h2>
        </div>
      </div>

      {/* Company info */}
      <div className='flex flex-col justify-center py-8'>
        <h1 className='text-3xl text-center md:text-5xl font-bold font-__Inter_aaf875 '>Our Company</h1>
        <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
        <div className='flex justify-center'>
          <div className='w-full md:w-3/4'>
            <p className='text-2xl mx-4 lg:text-3xl lg:mx-32 text-center font-__Inter_aaf875'>
              "Cyberous offers a comprehensive range of cybersecurity services dedicated to ensuring your <span className='text-custom-buttonColor-GreenDark font-bold font-__Inter_aaf875'> success.</span>"
            </p>
          </div>
        </div>
      </div>


      {/* Service details */}
      <div className='px-4 lg:px-32 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
          <div className='flex flex-col'>
            <div className='flex  flex-row items-center mx-10 md:mx-40'>
              <p className='text-9xl text-green-500 font-__Inter_aaf875 font-bold '>4+</p>
              <div className='w-24'>
                <p className='text-basefont-sans mt-10 text-custom-fontColor-grey font-bold font-__Inter_aaf875 md:mt-20'>Year's of Excellence Services</p>
              </div>
            </div>
            <div className='flex justify-center'>
              <p className='w-2/3 md:w-3/4 text-2xl font-__Inter_aaf875 md:text-4xl mt-8 m-4 md:mr-10 font-bold'>
                Learn More About Our Success Stories
              </p>
            </div>
          </div>
          <div className='text-lg text-justify mt-10 md:mt-20 font-__Inter_aaf875'>
            Welcome to Cyberous, your premier cyber security partner. Specializing in ethical hacking training, VAPT services covering web, network, mobile, and cloud platforms, as well as red teaming and consultancy solutions. Founded in 2020 by Mr. Yogesh Saini, renowned for training over 10,000 students globally and 2,500+ corporate employees. Recognized as a Top 10 CEO in Jaipur, Rajasthan. Cyberous is committed to empowering individuals and organizations while ensuring a secure digital future. Join us in safeguarding your digital assets today.
          </div>
        </div>
      </div>
      {/* We Excel section */}
      <div className='text-center my-10'>
        <h2 className='text-3xl lg:text-4xl font-bold font-__Inter_aaf875'>Our Services</h2>
        <p className='text-green-500 text-2xl lg:text-5xl my-4 font-__Inter_aaf875'>What do We Offer?</p>
        <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
      </div>
      <div className='flex justify-center'>
        <div className='md:w-4/5 bg-custom-greyBorderColor my-8' >
          <div className='flex flex-col lg:flex-row justify-around p-4 lg:p-10'>
            <div className='text-lg lg:text-2xl mb-8 xl:mr-6 lg:mb-0'>
              <ul className='text-green-500 space-y-4 '>
              <Link to='/training'>
                <li className='font-__Inter_aaf875'>
                  <div className='flex flex-row'>
                    <img src={Images.checkMark} className='h-6 w-6 m-2' />
                    <p className='font-bold'> Ethical Hacking Training </p>
                  </div>
                  <div font-__Inter_aaf875 className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'>Elevate your cybersecurity skills with our expert-led Ethical Hacking Training programs.</p>
                  </div>
                </li>
              </Link>

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
                  <Link to='/services/networksecurity'>
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
                  <Link to='/services/iossecurity'>
                    <div className='flex flex-row'>
                      <img src={Images.checkMark} className='h-6 w-6 m-2' />
                      <p className='font-bold font-__Inter_aaf875'>IOS Application Penetration Testing</p>
                    </div>
                  </Link>
                  <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'>Secure your iOS apps against cyber threats with our specialized Penetration Testing services.</p>
                  </div>
                </li>
                <li className='font-__Inter_aaf875'>
                  <Link to='/services/androidsecurity'>
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
                  <Link to='/services/source-code-review'>
                    <div className='flex flex-row'>
                      <img src={Images.checkMark} className='h-6 w-6 m-2' />
                      <p className='font-bold font-__Inter_aaf875'>  Source Code Review </p>
                    </div>
                  </Link>
                  <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>
                    <p className='pl-10'>Strengthen your software security with our meticulous Source Code Review assessments.</p>
                  </div>
                </li>
                <li className='font-__Inter_aaf875'>
                  <Link to='/services/apisecurity'>
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
                  <Link to='/services/IoTsecurity'>
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
                      <p className='font-bold font-__Inter_aaf875'>  Cyber Security Consultancy</p>
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
                      <p className='font-bold font-__Inter_aaf875'>  Red Teaming </p>
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




      <div className='text-center relative bg-no-repeat bg-center h-32 pt-10 bg-white'>
        <div className='h-full  bg-opacity-50 flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold text-black font-serif'>Brands that Trust us </h1>
          <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
        </div>
      </div>


      {/* Service List */}
      <div id="brands" className='min-h-full bg-white'>
        {/* <BrandsTrustUs /> */}
        <NamesYouKnow/>
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


      <div id="brands" className='min-h-full bg-white'>
        <IndustrialRecognition />
      </div>
      <div id="testimonials" className='min-h-full bg-white'>
        <Testemonial data={data} />
      </div>
      <div id="gallery" className='min-h-full bg-white'>
        <MediaGallery />
      </div>
    </div>
  );
}

export default Services