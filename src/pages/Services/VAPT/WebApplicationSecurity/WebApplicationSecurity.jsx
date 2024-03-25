import React, { useEffect }  from 'react'
import { Images } from '../../../../assets'
import Testemonial from '../../../Homepage/Testimonial/Testemonial'
import Methodology from './Methodology/Methodology'
import EvaluateBusiness from './EvaluateBusiness/EvaluateBusiness'
import OurApproach from './OurApproach/OurApproach'
import Faqs from './FAQs/Faqs'
import BrandsTrustUs from '../../../Homepage/BrandsTrustUs/BrandsTrustUs'

const WebApplicationSecurity = () => {

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
      description: "Our specialists delve deep into the intricacies of your system's architecture, meticulously examining individual components to identify potential entry points for thorough security testing. With a comprehensive understanding, we establish the foundation for a customized and efficient security evaluation, leaving no aspect overlooked in our commitment to protect your digital assets.",
      imgUrl: Images.Approach1,
      type: 'Requirement_Analysis'
    },
    {
      id: 1,
      name: 'Threat Modeling',
      description: "Our team meticulously crafts a robust threat model, precisely tailored to the intricacies of your web applications. Through in-depth analysis, we identify potential threats, vulnerabilities, and attack vectors. This proactive approach allows us to prioritize testing efforts, concentrating on the most critical areas to fortify your digital defenses effectively. We ensure a comprehensive and targeted security testing strategy that leaves no room for unforeseen risks.",
      imgUrl: Images.Approach2,
      type: 'Threat_Modeling'

    },
    {
      id: 2,
      name: 'Authentication_& Authorization Testing',
      description: "Embark on the essential journey of user access management with 'Authentication and Authorization Testing,' a thorough assessment aimed at strengthening the security of your web application. During this crucial phase, our specialists explore the complexities of authentication and authorization mechanisms in depth. Through meticulous testing, we guarantee resilient access control, preventing unauthorized access and enhancing the protection of sensitive data.",
      imgUrl: Images.Approach3,
      type: 'Authentication_&_Authorization_Testing'

    },
    {
      id: 3,
      name: 'Session Management',
      description: "Our specialists meticulously examine the nuances of your session management capabilities, ensuring secure token generation, transmission, and validation. This thorough assessment is essential for maintaining robust session handling and preventing unauthorized access to sensitive data. By upholding the highest standards in session security, we enhance the overall resilience of your web application, offering a strong defense against potential security threats in the ever-changing digital environment.",
      imgUrl: Images.Approach4,
      type: 'Session_Management'

    },
    {
      id: 4,
      name: 'Data Input Validation',
      description: "During this critical stage, we meticulously examine and validate all incoming data, ensuring that user inputs meet the specified criteria. By strengthening your application against prevalent vulnerabilities like SQL injection and cross-site scripting (XSS), we establish a strong defense, preserving the integrity and confidentiality of your data. Our thorough data input validation serves as a proactive measure, substantially decreasing the likelihood of malicious attacks and improving the overall security stance of your web application.",
      imgUrl: Images.Approach5,
      type: 'Data_Input_Validation'

    },
    {
      id: 5,
      name: 'Error Handling Inspection',
      description: "During this crucial stage, we meticulously evaluate how your application reacts to unforeseen situations and errors. By scrutinizing error-handling mechanisms and logging procedures, we guarantee that your application not only delivers a secure response but also maintains transparency in its operations. Our thorough examination of error-handling practices is an essential element in constructing a strong defense against unexpected scenarios, improving both the security and user experience of your web application.",
      imgUrl: Images.Approach6,
      type: 'Error_Handling_Inspection'

    },
    {
      id: 6,
      name: 'Business Logic Testing',
      description: "During this crucial stage, our specialists examine the intricate logic underpinning your application's essential functions. By detecting and resolving potential security issues, we ensure the durability of your business logic against exploitation. This comprehensive assessment surpasses standard security protocols, ensuring that the core operations of your web application are immune to malicious intent. Our business logic testing serves as a strategic defense, enhancing the dependability and security of your digital infrastructure.",
      imgUrl: Images.Approach7,
      type: 'Business_Logic_Testing'

    },
    {
      id: 7,
      name: 'Client Side Security Analysis',
      description: "In this comprehensive inspection, we thoroughly review the security measures applied on the client side, encompassing scripts, APIs, and other components. Our specialists meticulously analyze potential vulnerabilities to guarantee the secure functioning of client-side elements. Strengthening the client-side security framework not only shields against potential exploits but also enhances the overall integrity of your web application. This meticulous assessment is a pivotal aspect of our dedication to providing a resilient and secure digital experience for both you and your users.",
      imgUrl: Images.Approach8,
      type: 'Client_Side_Security_Analysis'

    },
    {
      id: 8,
      name: 'Database Connection & Assesment',
      description: "During this critical stage of our Web Application Security Testing methodology, we explore the intricate layers of your database connections. Our experienced specialists meticulously evaluate the strength of database configurations, closely examining for any potential vulnerabilities and security weaknesses. By scrutinizing data storage methods, access controls, and encryption protocols, we guarantee the confidentiality and integrity of your sensitive data. This assessment goes beyond surface-level examination, offering insights into potential vulnerabilities that could expose your database to cyber threats.",
      imgUrl: Images.Approach9,
      type: 'Database_Connection_&_Assesment'

    },
    {
      id: 9,
      name: 'Dos Resilience Testing',
      description: "Secure your web application against disruptive cyber threats and guarantee uninterrupted service with our 'Denial of Service (DoS) Resilience Testing.' In this pivotal stage, we evaluate your application's capability to withstand denial-of-service attacks. Through simulating diverse attack scenarios, we measure its resilience, pinpointing potential vulnerabilities, and reinforcing defenses. This rigorous testing guarantees that your web application can sustain availability and functionality, even amidst malicious attempts to disrupt service.",
      imgUrl: Images.Approach10,
      type: 'Dos_Resilience_Testing'

    },
    {
      id: 10,
      name: 'Reporting and Documentation',
      description: "After conducting thorough testing, we create an extensive report summarizing the results, which include identified vulnerabilities, their severity levels, and actionable insights for remediation. This transparent and detailed documentation acts as a guide for enhancing the security of your web application. Our objective is not only to identify issues but also to provide you with precise and actionable recommendations, enabling you to implement an effective and timely mitigation plan. With our comprehensive reporting, you acquire a thorough comprehension of your web application's security status and a strong basis for continuous enhancement.",
      imgUrl: Images.Approach11,
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
        {/* Heading Text */}
        <div className='flex flex-col text-center'>
          <h1 className='text-3xl lg:text-4xl mt-4'>Our Services</h1>
          <div className='flex justify-center'>
            <div className="h-1 w-20 lg:w-32 bg-custom-buttonColor-Green mt-4 rounded-full"></div>
          </div>
          <h1 className='text-3xl lg:text-5xl text-black font-bold mt-4'>Overview of Our Services</h1>
        </div>

        {/* Overview Services Text */}
        <div className='flex justify-center'>
          <div className='w-full lg:w-2/3 px-4 lg:px-0'>
            <p className='m-6 mb-12 text-base lg:text-xl text-custom-fontColor-grey text-justify'>
              Benefit from robust protection for your digital assets through our Web Application Security Testing service. Our skilled team utilizes state-of-the-art methodologies, such as Black Box, Gray Box, and White Box Testing, to meticulously assess your web applications. We delve beyond surface-level vulnerabilities, addressing intricate business logic flaws for a thorough security evaluation. Our service adheres to industry standards like OWASP10, SANS25, and OSSTMM, offering both on-premises and off-premises application security testing. With a proven roadmap honed through years of experience, we safeguard online platforms, mobile applications, and cloud environments effectively, leaving no space for cyber threats.
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
      <BrandsTrustUs />
      <Testemonial />
      <Faqs faqData={faqData} />
    </div>
  )
}

export default WebApplicationSecurity;