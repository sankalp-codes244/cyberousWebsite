import React, { useEffect } from 'react'
import { Images } from '../../../../assets'
import Methodology from './Methodology/Methodology'
import EvaluateBusiness from './EvaluateBusiness/EvaluateBusiness'
import OurApproach from './OurApproach/OurApproach'
import BrandsTrustUs from '../../../Homepage/BrandsTrustUs/BrandsTrustUs'
import Testemonial from '../../../Homepage/Testimonial/Testemonial'
import Faqs from './FAQs/Faqs'
import PageHeader from './PageHeader/PageHeader'
import NamesYouKnow from '../../RedTeaming/NamesYouKnow/NamesYouKnow'

const IOSPT = () => {
  const data = [
    {
      id: 1,
      name: "Amit Sharma",
      title: "iOS Developer",
      desc: "Cyberous iOS penetration testing service was exceptional. Their thorough examination of our app uncovered vulnerabilities we hadn't considered. Their detailed report and recommendations helped us strengthen our app's security. We highly recommend Cyberous for iOS security testing.",
      image: Images.user
    },
    {
      id: 2,
      name: "Sneha Gupta",
      title: "App Security Analyst",
      desc: "Impressed with Cyberous iOS penetration testing service. They identified critical security flaws in our app and provided clear guidance on how to address them. Thanks to Cyberous, we've been able to enhance our app's security measures. Trustworthy and professional – Cyberous is our top choice for mobile security.",
      image: Images.user
    },
    {
      id: 3,
      name: "Rohit Patel",
      title: "iOS Security Engineer",
      desc: "Cyberous iOS penetration testing service was thorough and insightful. They uncovered vulnerabilities in our app that we hadn't considered. Their comprehensive report enabled us to improve our app's security posture effectively. Cyberous is a trusted partner for all our mobile security needs.",
      image: Images.user
    },
    {
      id: 4,
      name: "Priya Verma",
      title: "App Developer",
      desc: "Hats off to Cyberous for their outstanding iOS penetration testing service. They identified vulnerabilities in our app and provided practical solutions for mitigation. Working with Cyberous has been a positive experience, and we highly recommend their services to anyone in need of mobile security testing.",
      image: Images.user
    },
    {
      id: 5,
      name: "Arun Khanna",
      title: "Mobile App Security Specialist",
      desc: "Cyberous iOS penetration testing service was invaluable for our app's security. Their expertise in identifying vulnerabilities and providing actionable recommendations was exceptional. With their help, we were able to strengthen our app's security and protect our users' sensitive data. Cyberous is our trusted partner for mobile security testing.",
      image: Images.user
    },
    {
      id: 6,
      name: "Neha Singh",
      title: "iOS Security Consultant",
      desc: "Choosing Cyberous for our iOS penetration testing was the right decision. Their team conducted a comprehensive assessment of our app's security, identifying potential vulnerabilities and providing clear guidance on how to address them. Thanks to Cyberous, we were able to enhance our app's security measures and ensure the safety of our users' information. Highly recommend their services for anyone developing iOS apps.",
      image: Images.user
    }
  ];
  
  
  const boxData = [
    {
      id: 0,
      headingText: 'Black box testing',
      paragraphText: "Begin Your Security Journey with Black Box Testing. Experience a Simulated Cyber Intrusion by Our Experts, Identifying System Weaknesses from an Outsider's Perspective. Our Method Empowers Your System to Withstand External Threats in the Ever-Changing Cybersecurity Landscape. Boost Your Security Posture with Comprehensive Testing Today!",
    },
    {
      id: 1,
      headingText: 'Grey box testing',
      paragraphText: "Achieve Security Harmony with Gray Box Testing. Our Method Harmonizes External Perspective with System Insight, Blending Black Box and White Box Strengths. With Partial Internal Knowledge, We Conduct Nuanced Assessments, Emulating Attacker Approaches. Experience Transparent, Effective Vulnerability Analysis for Thorough Evaluations Without Compromising Real-World Simulation. Optimize Your Security Strategy Today!",
    },
    {
      id: 2,
      headingText: 'White box testing',
      paragraphText: "Unlock Your Digital Fortress with White Box Testing. Experience a Deep Dive into System Security with Our Comprehensive Approach. Our Experts Scrutinize Internal Architecture, Source Code, and Algorithms, Leaving No Stone Unturned. Gain Insights into System Robustness and Identify Vulnerabilities for Enhanced Protection. Safeguard Your Digital Assets with White Box Testing Today!",
    }
  ]

  const approachData = [
    {
      id: 0,
      name: 'Device Profiling and Enumeration',
      description: "Kickstart the IoT penetration testing process with a thorough analysis of the wide array of IoT devices present in your ecosystem. By pinpointing device specifications, communication protocols, and possible attack vectors, this detailed profiling establishes a solid foundation for grasping the interconnected devices. This approach facilitates a more precise and impactful penetration testing strategy, enhancing overall effectiveness and security posture.",
      imgUrl: Images.IoTPTApproach1,
      type: 'Device_Profiling_and_Enumeration'
    },
    {
      id: 1,
      name: 'Network Architecture Analysis',
      description: "Explore the complex network framework underpinning IoT devices. Analyze communication channels, protocols, and data pathways to reveal potential weaknesses in network setups. This examination is designed to guarantee smooth and secure data exchange between IoT devices and backend systems, bolstering the ecosystem's resilience and security posture.",
      imgUrl: Images.IoTPTApproach2,
      type: 'Network_Architecture_Analysis'

    },
    {
      id: 2,
      name: 'Firmware and Software Security Assessment',
      description: "Conduct a comprehensive assessment of IoT device firmware and software security. Scrutinize the code to uncover vulnerabilities, evaluate adherence to secure coding standards, and pinpoint potential exploits. This critical step plays a key role in safeguarding device integrity and bolstering security within the software layer of the IoT infrastructure.",
      imgUrl: Images.IoTPTApproach3,
      type: 'Firmware_and_Software_Security_Assessment'

    },
    {
      id: 3,
      name: 'Authentication and Access Controls',
      description: "Evaluate the efficiency of authentication methods and access controls deployed across the IoT environment. Guarantee that solely authorized entities engage with devices and systems, thwarting unauthorized entry and safeguarding sensitive data against potential breaches.",
      imgUrl: Images.IoTPTApproach4,
      type: 'Authentication_and_Access_Controls'

    },
    {
      id: 4,
      name: 'Data Encryption and Privacy Measures',
      description: "Analyze the encryption techniques utilized to protect data both during transmission and storage within the IoT network. Assess privacy protocols to shield sensitive data, ensuring alignment with data protection regulations. This process prioritizes data confidentiality and integrity across the entirety of the IoT ecosystem.",
      imgUrl: Images.IoTPTApproach5,
      type: 'Data_Encryption_and_Privacy_Measures'

    },
    {
      id: 5,
      name: 'Physical Security Evaluation',
      description: "Perform a detailed examination of the physical security elements of IoT devices, uncovering potential vulnerabilities associated with tampering, unauthorized access, or device compromise. This comprehensive approach guarantees a thorough evaluation, covering both digital and physical security aspects within the IoT infrastructure.",
      imgUrl: Images.IoTPTApproach6,
      type: 'Physical_Security_Evaluation'

    },
    {
      id: 6,
      name: 'Incident Response Testing',
      description: "Conduct realistic scenario simulations to evaluate the effectiveness of incident response protocols within your IoT setup. Measure the system's ability to detect, react to, and recover from security breaches. This proactive approach strengthens cybersecurity readiness, enhancing the overall resilience of your IoT environment.",
      imgUrl: Images.IoTPTApproach7,
      type: 'Incident_Response_Testing'

    },

  ]

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='h-full'>
      <div className='bg-white'>
        <PageHeader/>
        {/* Heading Text */}
        <div className='flex flex-col text-center'>
          <h1 className='text-2xl md:text-3xl mt-4 font-serif font-bold'>Our Services</h1>
          <div className='flex justify-center'>
            <div className="h-1 w-20  lg:w-32 bg-custom-buttonColor-Green mt-4 rounded-full"></div>
          </div>
          <h1 className='font-serif text-3xl lg:text-5xl mt-4'>Overview of Our Services</h1>
        </div>

        {/* Overview Services Text */}
        <div className='flex justify-center'>
          <div className='w-full lg:w-2/3 px-4 lg:px-0'>
            <p className='m-6 mb-12 text-base lg:text-xl text-black text-justify'>
            Strengthen the security of your iOS applications with our iOS Application Penetration Testing service. Our reliable approach, which combines automated and manual assessments, thoroughly explores your app's architecture, data flow, and security protocols. By utilizing dynamic and static analyses, we detect vulnerabilities, evaluate data storage integrity, examine network communication, and perform comprehensive authentication and authorization tests. Our detailed reports offer actionable insights, empowering you to enhance the security of your iOS applications against evolving cybersecurity threats and build user trust in the integrity of your digital assets.

            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-center'>
          <div className="h-1 w-4/5 lg:w-2/3 bg-custom-greyBorderColor rounded-full"></div>
        </div>
      </div>

      {/* Subpages */}
      <Methodology boxData={boxData} />
      <EvaluateBusiness />
      <OurApproach approachData={approachData} />
      {/* <BrandsTrustUs />
       */}
      <NamesYouKnow/>
      <Testemonial data={data}/>
      <Faqs faqData={faqData} />
    </div>
  )

}

export default IOSPT