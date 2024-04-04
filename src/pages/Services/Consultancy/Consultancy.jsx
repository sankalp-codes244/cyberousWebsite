import { useEffect, useState } from "react";
import { Images } from "../../../assets";
import ConsultancyServices from "./ConsultancyServices";
import Data from "../../../assets/Svgs/Data";
import Web from "../../../assets/Svgs/Web";
import Money from "../../../assets/Svgs/Money";
import Security from "../../../assets/Svgs/Security";
import Cctv from "../../../assets/Svgs/Cctv";
import Training from "../../../assets/Svgs/Training";

import Callicon from "../../../assets/Svgs/Callicon";
import Mailicon from "../../../assets/Svgs/Mailicon";
import FormComponent from "../../../components/FormComponent";
import Faqs from "../../Homepage/FAQs/Faqs";

const Cards = ({ image, name, desc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=' w-full h-relative relative shadow-md bg-white rounded-md hover:bg-green-500 duration-200 hover:scale-105'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

    >
      <div className={`py-28 lg:py-20 lg:px-10 `}>
        <div className='p-6 flex justify-center items-center w-28 top-3 left-3 overflow-hidden shadow-md rounded-full absolute'
          style={{ backgroundColor: isHovered ? 'white' : '#68D391', transform: isHovered ? 'scale(1.1) rotate(20deg)' : 'scale(1)', transition: 'all 0.3s', }}
        >
          {image}
        </div>
        <div className="pt-10 lg:pt-28">

          <p className={`text-2xl lg:text-4xl font-semibold text-left ${isHovered ? 'text-white' : 'text-black'} p-6`}>{name}</p>
          <p className={`text-base lg:text-2xl text-left ${isHovered ? 'text-white' : 'text-black'} px-6`}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

const Consultancy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  const consultancyData = [
    {
      id: 0,
      heading: 'Cyber security Consultancy',
      desc: "Cyberous offers expert cybersecurity consultancy to fortify your defenses and navigate the evolving threat landscape with confidence.",
      image: <Web />,
    },
    {
      id: 1,
      heading: 'Scalable Infrastructure design',
      desc: "We help preserve your business value by protecting sensitive data while assessing and maintaining compliance with regulatory and contractual requirements.",
      image: <Data />,
    },
    {
      id: 2,
      heading: 'Attack and PenetrationCost-effective optimization',
      desc: "You pay for the resources you use. Our budget-friendly services will only maximize your benefits without compromising performance.",
      image: <Money />,
    },
    {
      id: 3,
      heading: 'Security Implementation',
      desc: "With our DevOps-friendly solutions, you can encourage cooperation between the development and operations teams.",
      image: <Security />,
    }, {
      id: 4,
      heading: 'Continuous Monitoring',
      desc: "24/7 monitoring and management of your cloud infrastructure and applications. Assistance with achieving and maintaining compliance with various industry regulations.",
      image: <Cctv />,
    }, {
      id: 5,
      heading: ' Personalized Training for clients',
      desc: "Our group of skilled experts is committed to providing excellent cloud solutions. We provide personalized support and service to each client.",
      image: <Training />,
    },
  ]

  return (
    <div>
      <div
        className="md:h-screen py-40 text-center relative bg-no-repeat mix-blend-multiply bg-cover bg-center h-full object-cover"
        style={{ backgroundImage: `url(${Images.WebAppHeaderimg1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 -z-40"></div>
        
        <h1 className="text-center text-2xl md:text-6xl font-serif font-bold p-6 text-white">
          Our Consultancy Services
        </h1>
        <div className="flex justify-center">
          <div className="md:w-3/4">
            <p className="text-white text-center lg:text-2xl p-6 px-10 md:px-40">
              Welcome to Cyberous, your premier destination for expert
              Cybersecurity Consultancy services. Our mission is to empower
              organizations with robust security strategies and proactive
              measures to safeguard their digital assets from ever-evolving
              cyber threats.
            </p>
            <button className="w-1/2 h-16 md:w-1/4  text-white hover:text-custom-buttonColor-Green font-Roboto bg-custom-buttonColor-Green hover:bg-white rounded-full duration-300 active:bg-green-800 text-lg md:text-2xl">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center py-14">
        <h1 className="text-3xl lg:text-4xl mt-4">OVERVIEW</h1>
        <div className="flex justify-center">
          <div className="h-1 w-20 lg:w-32 bg-custom-buttonColor-Green mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Overview Services Text */}
      <div className="lg:flex lg:flex-row sm:flex-col justify-center py-10">
        <div className="w-full lg:w-2/3 px-4 lg:px-9">
          <h1 className="text-3xl m-6 lg:text-5xl text-black font-bold mt-4 ">
            Overview of our Consultancy Services
          </h1>
          <p className="m-6 mb-12 text-base lg:text-xl text-black text-justify ">
            In an era of rapid technological evolution and accelerated digital
            adoption, Cyberous cybersecurity and privacy team transforms risk
            into opportunity. Safeguarding every layer of your organization, we
            unlock new possibilities securely.
          </p>
          {/* <div className='bg-custom-fontColor-grey h-1 w-full '></div> */}
          <p className="mt-12 m-6  text-base lg:text-xl text-black text-justify">
            Our team of strategic and technical subject matter experts
            comprehensively grasp your cybersecurity requirements. We embark on
            assessing, developing, implementing, and managing next-generation
            solutions customized to your specifications. Aligned with your
            dedication to safeguarding data and enhancing business resilience,
            we stand by your side.
          </p>

          <p className="mx-6 mb-10 text-base lg:text-xl text-black text-justify">
            To foster secure growth and minimize risk, it's imperative that your
            cybersecurity strategy remains adaptable and responsive to your
            evolving business landscape.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={Images.Human}
            alt="WebAppHeaderimg1"
            className=" sm:w-full object-contain lg:aspect-video"
          />
        </div>
      </div>
      <ConsultancyServices />
      <div className="lg:flex lg:flex-row sm:flex-col justify-center py-10">
        <div className="w-full  px-4 lg:px-9">
          <h1 className="text-3xl m-6 lg:text-5xl text-black textc font-bold mt-4">
            A leader's playbook to Cybersecurity
          </h1>
          <p className="m-6 mb-12 text-base lg:text-xl text-black text-justify ">
            At Cyberous, we specialize in helping leaders think innovatively in
            today's rapidly evolving digital landscape. Success requires staying
            ahead of trends, being relevant, innovative, and ambitious. Security
            remains paramount in this business mindset. Through innovative and
            resilient approaches, companies can effectively adapt, adopt, and
            secure their digital framework. Our cybersecurity consultancy
            services are designed to help you achieve this.
          </p>
          {/* <div className='bg-custom-fontColor-grey h-1 w-full '></div> */}
          <p className="mt-12 m-6  text-base lg:text-xl text-black text-justify">
            We facilitate secure business transformations step by step. Our
            focus encompasses managing security strategy, ensuring compliance
            and trust, safeguarding data and assets, optimizing business
            processes, architecting security platforms, and enhancing security
            resilience plans. With our core principles of "Advise. Implement.
            Manage.," we deliver industry-relevant cybersecurity consulting
            solutions tailored to your requirements. Cyberous stands out due to
            our attention to detail, deep technical expertise, integrated
            approach, and unwavering commitment to excellence.
          </p>

          <p className="mx-6 mb-10 text-base lg:text-xl text-black text-justify">
            To foster secure growth and minimize risk, it's imperative that your
            cybersecurity strategy remains adaptable and responsive to your
            evolving business landscape.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={Images.securityPlayboy}
            alt="WebAppHeaderimg1"
            className=" sm:w-full object-contain p-3 lg:p-0 lg:aspect-video"
          />
        </div>
      </div>
      <div className='py-10 md:py-40 text-center bg-no-repeat bg-cover  bg-center  object-contain' style={{ backgroundImage: `url(${Images.bgGreen})`, backgroundAttachment: 'fixed' }}>
        <h1 className='text-3xl lg:text-6xl font-semibold py-4 text-white pb-10'>Our Cybersecurity Consulting services</h1>
        <div className='flex flex-wrap lg:grid lg:grid-cols-3 lg:flex-nowrap gap-14 p-6 m-8 justify-center'>
          {/* <div className="h-1 w-20 lg:w-32 bg-custom-buttonColor-Green mt-4 rounded-full"></div> */}
          {consultancyData.map((data) => {

            return (
              <Cards name={data.heading} desc={data.desc} image={data.image} />
            )
          })}


        </div>
      </div>
      <div>
        <div className="p-6 bg-custom-buttonColor-GreenDark text-white md:p-20">
          <div className="container mx-auto px-4 ">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col justify-center">
                <span className="text-3xl md:text-5xl font-bold">30+</span>
                <span className="text-xl md:text-3xl">CLIENTS SECURED</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-3xl md:text-5xl font-bold">150+</span>
                <span className="text-xl md:text-3xl">PROJECTS COMPLETED</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-3xl md:text-5xl font-bold">20+</span>
                <span className="text-xl md:text-3xl">SKILLED PROFESSIONAL</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-3xl md:text-5xl font-bold">12000+</span>
                <span className="text-xl md:text-3xl">STUDENTS TRAINED</span>
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col lg:flex-row my-28">
            <div className=" w-full lg:w-1/2 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <p className="text-center text-2xl font-bold lg:text-5xl mt-10 mb-5">4.9 / 5</p>
                <div className="flex mb-5">
                  {[1, 2, 3, 4, 5].map((data) => {
                    return (
                      <img src={Images.star} alt="star" className="w-8 h-8 lg:w-14 lg:h-14" />
                    )
                  })}

                </div>
                <p className="text-sm lg:text-xl text-center  font-semibold">By 1000+ clients and 5000+ Customers</p>
                <div className="my-5">
                  <a href="tel:+918199985888" className="flex justify-center items-center">
                    <Callicon />
                    <div className="">
                      <p className="font-bold text-xs lg:text-lg">
                        CALL FOR ADVICE NOW!
                      </p>
                      <p className="font-bold text-2xl lg:text-4xl">
                        +91 9876543210
                      </p>
                    </div>
                  </a>
                </div>
                <div className="mb-5">
                  <a href="mailto:+918199985888" className="flex justify-center items-center">
                    <Mailicon />
                    <div className="">
                      <p className="font-bold text-xs lg:text-lg">
                        SAY HELLO!
                      </p>
                      <p className="font-bold text-xl lg:text-4xl">
                        cyberous@gmail.info
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className=" flex justify-center items-center lg:w-1/2">

              <FormComponent />

            </div>
          </div>
        </div>
        <div id="brands" className='min-h-full bg-white'>
          <Faqs faqData={faqData} />
        </div>

      </div>

    </div>
  );
};

export default Consultancy;
