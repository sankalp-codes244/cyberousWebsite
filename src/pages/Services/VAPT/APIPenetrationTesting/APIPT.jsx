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

const APIPT = () => {    
  const data = [
    {
      id: 1,
      name: "Rohan",
      title: "Manager",
      desc: " Cyberous API penetration testing service was a game-changer for our organization. Their team conducted a comprehensive assessment of our APIs, uncovering vulnerabilities we hadn't considered. Their detailed report and recommendations allowed us to address these issues proactively, ensuring the security of our systems. Cyberous is our trusted partner for all our cybersecurity needs.",
      image: Images.user,
    },
    {
      id: 2,
      name: "Ritika",
      title: "Assistant Manager",
      desc: "We were thoroughly impressed by  Cyberous API penetration testing service. Their team's expertise and attention to detail were evident from the start. They identified critical vulnerabilities in our APIs and provided practical recommendations for mitigation. Thanks to Cyberous, we now have confidence in the security of our systems. Highly recommended!",
      image: Images.user,
    },
    {
      id: 3,
      name: "Shalu",
      title: "Assistant Manager",
      desc: " Cyberous API penetration testing service exceeded our expectations. Their team's thorough assessment of our APIs revealed potential security risks that we were unaware of. Their detailed report and recommendations helped us prioritize and address these vulnerabilities effectively. Cyberous has become our trusted advisor for API security, and we highly recommend their services to others.",
      image: Images.user,
    },
    {
      id: 4,
      name: "Rohan",
      title: "",
      desc: "Hats off to Cyberous for their exceptional API penetration testing service. Their team demonstrated deep expertise in assessing the security of our APIs, uncovering vulnerabilities and providing actionable recommendations for remediation. Their professionalism and commitment to excellence were evident throughout the engagement. We're grateful for  Cyberous insights and highly recommend their services.",
      image: Images.user,
    },
    {
      id: 5,
      name: "",
      title: "",
      desc: " Cyberous API penetration testing service was a game-changer for our development team. Their comprehensive assessment of our APIs identified vulnerabilities that could have compromised the security of our applications. Their detailed report and recommendations enabled us to strengthen our API security measures and protect our systems from potential threats. Working with Cyberous has been a positive experience, and we look forward to future collaborations.",
      image: Images.user,
    },
    {
      id: 6,
      name: "",
      title: "",
      desc: "We can't thank Cyberous enough for their outstanding API penetration testing service. Their team's expertise and attention to detail were invaluable in uncovering vulnerabilities in our APIs. Their comprehensive report and actionable recommendations allowed us to enhance our API security posture significantly. Cyberous is our trusted partner for cybersecurity, and we highly recommend their services to anyone seeking to secure their APIs.",
      image: Images.user,
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
      name: 'Requirement Analysis',
      description: "Our seasoned experts conduct an in-depth analysis of your API's architecture, components, and functionalities. This involves comprehending intricate details to ensure a tailored and effective security assessment, safeguarding your digital assets against potential threats and vulnerabilities. By gaining a holistic understanding, we lay the groundwork for a comprehensive evaluation, ensuring no aspect is overlooked in our pursuit of securing your API. Trust our experts for a thorough API security assessment today!",
      imgUrl: Images.APIPTApproachimg1,
      type: 'Requirement_Analysis'
    },
    {
      id: 1,
      name: 'Authentication & Authorization Testing',
      description: "Navigate the critical realm of user access with our 'Authentication and Authorization Testing.' In this pivotal step, our experts delve deep into the intricacies of authentication and authorization mechanisms within your API. By conducting exhaustive testing, we ensure robust access control, thwarting unauthorized entry, and fortifying the safeguarding of sensitive data. This phase acts as a stronghold, ensuring the security of your API against potential breaches and instilling confidence in users that their information is protected with the utmost integrity and diligence. Strengthen your API security with our comprehensive Authentication and Authorization Testing today!",
      imgUrl: Images.APIPTApproachimg2,
      type: 'Authentication_&_Authorization Testing'

    },
    {
      id: 2,
      name: 'Data Input Validation',
      description: "In this crucial phase, our experts meticulously inspect and validate all incoming data to your API. Ensuring that user inputs adhere to the specified criteria, we fortify your application against common vulnerabilities such as SQL injection and cross-site scripting (XSS). This meticulous data input validation is a proactive measure that significantly reduces the risk of malicious attacks, enhancing the overall security posture of your API and instilling confidence in users about the integrity and confidentiality of their data. Strengthen your API security with our meticulous data input validation process today!",
      imgUrl: Images.APIPTApproachimg3,
      type: 'Data_Input_Validation'

    },
    {
      id: 3,
      name: 'Security Controls & Encryption',
      description: "Evaluate the efficiency of authentication methods and access controls deployed across the IoT environment. Guarantee that solely authorized entities engage with devices and systems, thwarting unauthorized entry and safeguarding sensitive data against potential breaches.",
      imgUrl: Images.APIPTApproachimg4,
      type: 'Security_Controls_&_Encryption'

    },
    {
      id: 4,
      name: 'Error Handling Inspection',
      description: "In this essential phase, our experts meticulously assess how your API responds to unexpected situations and errors. By examining error-handling mechanisms and logging practices, we ensure that your API not only provides a secure response but also maintains transparency in its operation. Our comprehensive error-handling inspection is a crucial component of building a robust defense against unforeseen scenarios, enhancing both the security and user experience of your API. Strengthen your API's security and user experience with our thorough error-handling assessment today!",
      imgUrl: Images.APIPTApproachimg5,
      type: 'Error_Handling_Inspection'

    },
    {
      id: 5,
      name: 'Third Party Integrations',
      description: "Our approach includes a thorough examination of third-party integrations within your API. We assess the security implications of external integrations, ensuring resilience to potential risks associated with third-party dependencies. By identifying and mitigating vulnerabilities in these integrations, we contribute to the overall security posture of your API, providing a comprehensive and holistic assessment. Enhance your API's security with our comprehensive third-party integration assessment today!",
      imgUrl: Images.APIPTApproachimg6,
      type: 'Third_Party_Integrations'

    },
    {
      id: 6,
      name: 'Rate Limiting and Throttling',
      description: "To enhance security against potential abuse or attacks, we evaluate the effectiveness of rate limiting and throttling mechanisms in your API. This ensures that your API can handle requests within defined limits, preventing misuse and ensuring a stable and secure operation. By implementing robust rate limiting strategies, we contribute to the overall resilience of your API, safeguarding against potential threats and ensuring a secure user experience. Strengthen your API's security with our comprehensive rate limiting and throttling assessment today!",
      imgUrl: Images.APIPTApproachimg7,
      type: 'Rate_Limiting_and_Throttling'

    },
    {
      id: 7,
      name: 'Data Leakage Prevention',
      description: "Our experts focus on preventing data leakage through your API by assessing data handling practices, response headers, and error messages. This provides a robust defense against potential information disclosure risks. By identifying and addressing vulnerabilities related to data leakage, we contribute to the overall confidentiality and integrity of your API, ensuring a secure environment for sensitive information. Strengthen your API's security with our comprehensive data leakage prevention assessment today",
      imgUrl: Images.APIPTApproachimg8,
      type: 'Data_Leakage_Prevention'

    },
    {
      id: 8,
      name: 'Incident Response Testing',
      description: "We test the effectiveness of your API incident response procedures to ensure readiness for potential security incidents. This involves simulating various scenarios to assess the effectiveness of your response mechanisms, identifying areas for improvement, and ensuring a swift and coordinated response in the event of a security incident. By conducting thorough incident response testing, we contribute to the overall resilience of your API, minimizing potential damages and ensuring a proactive approach to security incidents. Strengthen your API's security with our comprehensive incident response testing today!",
      imgUrl: Images.APIPTApproachimg9,
      type: 'Incident_Response_Testing'

    },
    {
      id: 9,
      name: 'Comprehensive Reporting',
      description: "Our approach concludes with a detailed and comprehensive reporting phase. We provide a thorough assessment of the vulnerabilities, risks, and recommendations identified during the testing process. The report includes actionable insights, prioritized recommendations, and a roadmap for enhancing the security posture of your API. Our comprehensive reporting ensures transparency and empowers you with the information needed to address security concerns effectively, providing a roadmap for ongoing security improvements. Strengthen your API's security with our detailed reporting and actionable recommendations today!",
      imgUrl: Images.APIPTApproachimg10,
      type: 'Comprehensive_Reporting'

    },
    {
      id: 10,
      name: 'Session_Management',
      description: "Our experts meticulously scrutinize the intricacies of your API's session management features, validating secure token generation, transmission, and validation. This exhaustive examination is crucial for maintaining not only robust session handling but also preventing unauthorized access to sensitive data. By ensuring the highest standards in session security, we bolster the overall resilience of your API, providing a steadfast defense against potential security threats in the dynamic digital landscape. Strengthen your API's session security with our meticulous assessment process today!",
      imgUrl: Images.APIPTApproachimg11,
      type: 'Session_Management'

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
            Enhance your digital landscape with our specialized API Penetration Testing service, tailored to safeguard the core of your applications—the API endpoints. Our comprehensive testing approach involves seasoned experts delving deep into your API architecture intricacies. From scrutinizing authentication and authorization mechanisms to validating data inputs, we meticulously identify and address vulnerabilities. Leveraging industry best practices, we provide a thorough assessment, ensuring the robustness of your API infrastructure against potential cyber threats. With our tailored insights and proactive security measures, rest assured that your digital assets are fortified against evolving security challenges in the dynamic digital landscape. Strengthen your API security today!

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
      <NamesYouKnow/>
      {/* <BrandsTrustUs /> */}
      <Testemonial data={data}/>
      <Faqs faqData={faqData} />
    </div>
  )
}

export default APIPT