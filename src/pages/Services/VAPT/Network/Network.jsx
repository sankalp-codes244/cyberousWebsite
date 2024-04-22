import React, { useEffect } from 'react'
import { Images } from '../../../../assets'
import Methodology from './Methodlogy/Methodology'
import OurApproach from './OurApproach/OurApproach'
import EvaluateBusiness from './EvaluateBusiness/EvaluateBusiness'
import Faqs from './FAQs/Faqs'
import BrandsTrustUs from '../../../Homepage/BrandsTrustUs/BrandsTrustUs'
import Testemonial from '../../../Homepage/Testimonial/Testemonial'
import PageHeader from './PageHeader/PageHeader'
import NamesYouKnow from '../../RedTeaming/NamesYouKnow/NamesYouKnow'

const Network = () => {
  
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
  const data = [
    {
      id: 1,
      name: "Ravi Sharma",
      title: "Manager",
      desc: "Cyberous network penetration testing service was a game-changer for our company. Their expert team identified vulnerabilities in our network infrastructure that we were previously unaware of. Their detailed report and recommendations helped us strengthen our defenses and protect our sensitive data. Cyberous is our go-to partner for all our cybersecurity needs.",
      image: Images.user
    },
    {
      id: 2,
      name: "Priya Patel",
      title: "Developer",
      desc: "We were thoroughly impressed by Cyberous network penetration testing service. Their team's thorough assessment of our network infrastructure uncovered vulnerabilities that could have put our organization at risk. Their actionable recommendations allowed us to address these issues promptly and effectively. Thanks to Cyberous, we now have confidence in the security of our network.",
      image: Images.user
    },
    {
      id: 3,
      name: "Amit Singh",
      title: "Sales Executive",
      desc: "Cyberous network penetration testing service exceeded our expectations. Their team demonstrated deep expertise in assessing the security of our network, identifying vulnerabilities, and providing practical recommendations for remediation. Their professionalism and commitment to excellence were evident throughout the engagement. We're grateful for Cyberous insights and highly recommend their services.",
      image: Images.user
    },
    {
      id: 4,
      name: "Deepika Gupta",
      title: "Student",
      desc: "Hats off to Cyberous for their exceptional network penetration testing service. Their team's meticulous examination of our network infrastructure uncovered vulnerabilities that we had overlooked. Their comprehensive report and actionable recommendations enabled us to strengthen our network security measures effectively. Working with Cyberous has been a positive experience, and we look forward to future collaborations.",
      image: Images.user
    },
    {
      id: 5,
      name: "Rajesh Khanna",
      title: "Security Analyst",
      desc: "Cyberous network penetration testing service was instrumental in enhancing our cybersecurity posture. Their team's in-depth analysis and thorough testing uncovered vulnerabilities in our network infrastructure that we were previously unaware of. Their detailed report and recommendations provided us with clear guidance on how to mitigate these risks effectively. We highly recommend Cyberous to any organization serious about securing their network.",
      image: Images.user
    },
    {
      id: 6,
      name: "Anonymous",
      title: "Network Administrator",
      desc: "Choosing Cyberous for our network penetration testing was one of the best decisions we made for our organization's security. Their team's expertise and attention to detail were evident throughout the engagement. They identified vulnerabilities in our network infrastructure and provided actionable recommendations for improvement. Thanks to Cyberous, we now have peace of mind knowing that our network is secure. Highly recommend their services to others.",
      image: Images.user
    }
  ];

  
  const approachData = [
    {
      id: 0,
      name: 'Defining Scope',
      description: "During this crucial phase of Network Penetration Testing, we meticulously define the scope of our evaluation. By pinpointing specific assets, network segments, and potential threat vectors, we ensure a precise and focused assessment. This strategic method enables us to customize our testing approaches, zeroing in on the most vital aspects of your network infrastructure. The outcome is a thorough and efficient security assessment that prioritizes the areas most vulnerable to potential cyber threats, equipping you with actionable insights to strengthen your network against evolving risks.",
      imgUrl: Images.NetworkApproachimg1,
      type: 'Defining_Scope'
    },
    {
      id: 1,
      name: 'Information Gathering',
      description: "In this pivotal stage, we conduct thorough mapping and exploration of your network architecture, identifying active devices, services, and potential penetration testing entry points. By attaining a meticulous comprehension of your network environment, we establish the groundwork for a focused and efficient security evaluation. Our specialists employ a combination of automated tools and manual methodologies to extract comprehensive details about network services, systems, and configurations, leaving no detail unnoticed.",
      imgUrl: Images.NetworkApproachimg2,
      type: 'Information_Gathering'

    },
    {
      id: 2,
      name: 'Exploitation and Security Assessment',
      description: "In this dynamic phase, we simulate real-world attacks, exploiting identified vulnerabilities to thoroughly evaluate the security resilience of your network. Our specialists utilize advanced techniques to mimic adversarial tactics, striving to compromise systems and verify the efficacy of current security measures. This stage extends beyond mere identification, offering actionable insights into the potential repercussions of successful exploits.",
      imgUrl: Images.NetworkApproachimg3,
      type: 'Exploitation_and_Security_Assessment'

    },
    {
      id: 3,
      name: 'Post Exploitation Analysis',
      description: "After successful exploits, this crucial phase entails a comprehensive analysis of their impact and repercussions within your network. Our experts evaluate the degree of compromise, potential for lateral movement, and implications of a security breach. Through careful examination of the post-exploitation scenario, we offer you a thorough comprehension of vulnerabilities revealed during an attack.",
      imgUrl: Images.NetworkApproachimg4,
      type: 'Post_Exploitation_Analysis'

    },
    {
      id: 4,
      name: 'Network Traffic Analysis',
      description: "In this essential stage, we conduct a detailed analysis of network traffic to detect anomalies, potential security threats, and unauthorized activities. Our specialists examine patterns, protocols, and communication flows to reveal concealed vulnerabilities and possible malicious behavior. This comprehensive scrutiny offers valuable insights into your network's overall behavior, facilitating proactive detection and mitigation of suspicious patterns.",
      imgUrl: Images.NetworkApproachimg5,
      type: 'Network_Traffic_Analysis'

    },
    {
      id: 5,
      name: 'Reporting and Documentation',
      description: "Following a thorough assessment, we compile a detailed report outlining the findings, identified vulnerabilities, their severity levels, and actionable insights for remediation. This transparent and comprehensive documentation serves as a roadmap for strengthening your network's security posture. Our goal is not just to uncover issues but to empower you with clear and concise recommendations, facilitating an effective and timely mitigation strategy. With our detailed reporting, you gain a comprehensive understanding of your network's security landscape and a solid foundation for ongoing improvement.",
      imgUrl: Images.NetworkApproachimg6,
      type: 'Reporting_and_Documentation'

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
            <p className='m-6 mb-12 text-base lg:text-xl text-justify'>
            Boost Your Network Security with Our Network Penetration Testing Service. Our Comprehensive Approach Includes Black Box, Gray Box, and White Box Testing to Uncover Vulnerabilities and Strengthen Defenses Against Cyber Threats. We Define Scope Precisely, Gather Information Thoroughly, and Execute Exploitation Simulations, Providing Actionable Insights Aligned with Industry Standards Such as OWASP10 and SANS25. With Meticulous Network Traffic Analysis and Transparent Reporting, Enhance Your Network Security Posture and Proactively Mitigate Risks Today!
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
      {/* <BrandsTrustUs /> */}
      <NamesYouKnow/>
      <Testemonial data={data} />
      <Faqs faqData={faqData} />
    </div>
  )
}

export default Network