import React, { useEffect }  from 'react'
import { Images } from '../../../../assets'
import Methodology from './Methodology/Methodology'
import EvaluateBusiness from './EvaluateBusiness/EvaluateBusiness'
import OurApproach from './OurApproach/OurApproach'
import BrandsTrustUs from '../../../Homepage/BrandsTrustUs/BrandsTrustUs'
import Testemonial from '../../../Homepage/Testimonial/Testemonial'
import Faqs from './FAQs/Faqs'
import PageHeader from './PageHeader/PageHeader'
import NamesYouKnow from '../../RedTeaming/NamesYouKnow/NamesYouKnow'
// import { Images } from '../../../assets'

const SourceCode = () => {

  const boxData = [
    {
      id: 0,
      headingText: 'Automated',
      paragraphText: "Leverage cutting-edge automated tools to conduct an initial analysis of your source code. This phase involves using industry-leading scanning tools to identify common vulnerabilities, coding flaws, and potential security risks. Automated analysis provides a rapid assessment of your codebase, laying the groundwork for a more detailed examination. Enhance your application's security with our advanced Automated Tool-Based Analysis today!",
    },
    {
      id: 1,
      headingText: 'Manual',
      paragraphText: "Complement automated results with manual tool-based analysis conducted by our seasoned experts. This step involves a hands-on review of the source code, focusing on intricate details that automated tools might overlook. Our experts meticulously examine code structures, logic flows, and security controls to identify nuanced vulnerabilities and ensure a thorough assessment. Strengthen your application's security with our comprehensive Manual Tool-Based Examination today!",
    },
    
  ]

  const approachData = [
    {
      id: 0,
      name: 'Initial Analysis',
      description: "Our experts conduct a thorough examination of the codebase to gain a comprehensive understanding of its structure, architecture, and key components. This initial analysis sets the foundation for the subsequent stages of the review, allowing us to identify potential areas of focus and prioritize our efforts effectively. We aim to uncover any immediate red flags, understand the overall code quality, and gather insights that will guide our approach in the subsequent manual and automated assessments. Elevate your application's security with our comprehensive codebase examination process today!",
      imgUrl: Images.SCOurApproachImg1,
      type: 'Initial_Analysis'
    },
    {
      id: 1,
      name: 'Security Controls',
      description: "In this phase, we focus on scrutinizing the implementation of security measures within the codebase. Our experts meticulously assess the presence and effectiveness of security controls, such as encryption algorithms, access controls, input validation mechanisms, and other relevant security protocols. This in-depth analysis aims to identify any vulnerabilities or weaknesses in the implementation of security features, ensuring that the code adheres to industry best practices and security standards. By evaluating the robustness of security controls, we enhance the overall resilience of the application against potential cyber threats and unauthorized access. Strengthen your application's security with our comprehensive security controls assessment today!",
      imgUrl: Images.SCOurApproachImg2,
      type: 'Security_Controls'

    },
    {
      id: 2,
      name: 'Vulnerability Identification',
      description: "This phase involves a careful scrutiny of your application's real-world behavior under various scenarios. Our experts analyze runtime interactions, API calls, and data flow, uncovering potential vulnerabilities and security weaknesses that might emerge during actual usage. This dynamic analysis provides actionable insights to fortify your Android app against real-world cyber threats, ensuring its resilience in dynamic and evolving digital landscapes. Enhance your Android app's security with our comprehensive dynamic analysis process today!",
      imgUrl: Images.SCOurApproachImg3,
      type: 'Vulnerability_Identification'

    },
    {
      id: 3,
      name: 'Code Quality Assessment',
      description: "Our experts employ a systematic approach to identify and catalog potential vulnerabilities in the codebase. Leveraging both automated tools and manual analysis, we meticulously review the source code for common security pitfalls, coding errors, and vulnerabilities that could be exploited by attackers. This phase goes beyond routine checks, aiming to uncover both known and unknown vulnerabilities, ensuring a comprehensive assessment. By providing a detailed inventory of vulnerabilities, including their severity levels, we empower your development team with actionable insights to prioritize and address issues effectively, fortifying the application against potential exploits and security risks. Strengthen your application's security with our comprehensive vulnerability assessment process today!",
      imgUrl: Images.SCOurApproachImg4,
      type: 'Code_Quality_Assessment'

    },
    {
      id: 4,
      name: 'Third-Party Libraries Analysis',
      description: "Our experts meticulously assess the libraries for known vulnerabilities, outdated versions, and potential security risks. By leveraging specialized tools and manual scrutiny, we ensure that the third-party components adhere to the latest security standards. This phase is crucial for identifying and mitigating security issues that may arise from dependencies, safeguarding your application against vulnerabilities introduced by external code sources. Our comprehensive analysis provides actionable insights, enabling you to make informed decisions about library usage and ensuring a robust security posture for your application. Strengthen your application's security with our thorough library vulnerability assessment process today!",
      imgUrl: Images.SCOurApproachImg5,
      type: 'Third-Party_Libraries_Analysis'

    },
    {
      id: 5,
      name: 'Secure Coding Best Practices',
      description: "We delve into evaluating the overall adherence to secure coding principles throughout the application's source code. Our experts meticulously examine the codebase to ensure compliance with industry-recognized secure coding guidelines and best practices. This includes but is not limited to proper input validation, secure data storage, robust authentication and authorization mechanisms, and protection against common vulnerabilities like SQL injection and cross-site scripting. Through manual inspection and automated tools, we identify instances where secure coding practices can be reinforced or enhanced. Strengthen your application's security with our comprehensive secure coding assessment process today!",
      imgUrl: Images.SCOurApproachImg6,
      type: 'Secure_Coding_Best_Practices'

    },
    {
      id: 6,
      name: 'Remediation Recommendations',
      description: "We provide detailed and actionable insights to address the vulnerabilities and security issues identified during the analysis. Our experts craft comprehensive recommendations that guide your development team in effectively remediating the identified issues, ensuring a strengthened security posture for your application. The remediation recommendations are presented in a clear and prioritized manner, allowing your team to focus on addressing the most critical vulnerabilities first. Each recommendation includes practical steps and guidance on how to implement the necessary changes, empowering your development team to mitigate security risks efficiently. Strengthen your application's security with our comprehensive remediation recommendations today!",
      imgUrl: Images.SCOurApproachImg7,
      type: 'Remediation_Recommendations'

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
  const data = [
    {
      id: 1,
      name: "Aman",
      title: "Consultant",
      desc: "Cyberous source code review service provided invaluable insights into our software's security. Their thorough analysis uncovered vulnerabilities that could have compromised our system's integrity. Thanks to Cyberous, we've been able to implement robust security measures and ensure the safety of our code. Highly recommended for anyone seeking comprehensive security solutions!",
      image: Images.user,
    },
    {
      id: 2,
      name: "Ritwik",
      title: "Consultant",
      desc: "We were impressed by the depth of expertise Cyberous demonstrated during our source code review. Their team identified critical vulnerabilities in our codebase and provided clear, actionable recommendations for remediation. Their professionalism and attention to detail were evident throughout the process. Cyberous has become our trusted partner for all our security needs.",
      image: Images.user,
    },
    {
      id: 3,
      name: "Vinay",
      title: "Manager",
      desc: "Cyberous source code review service helped us uncover security flaws that we were previously unaware of. Their team's meticulous examination of our codebase and detailed report provided us with valuable insights into potential vulnerabilities. With their guidance, we've been able to strengthen our software's security and protect our users' data. Cyberous is the real deal when it comes to cybersecurity.",
      image: Images.user,
    },
    {
      id: 4,
      name: "Abhijeet",
      title: "CEO",
      desc: "Kudos to Cyberous for their exceptional source code review service. Their team conducted a comprehensive assessment of our codebase, identifying potential security risks and providing actionable recommendations for improvement. Their expertise and professionalism made the process smooth and efficient. We're grateful for Cyberous insights and highly recommend their services to anyone in need of robust security solutions.",
      image: Images.user,
    },
    {
      id: 5,
      name: "Vaibhav",
      title: "Assistant Manager",
      desc: "Cyberous source code review service surpassed our expectations. Their team's in-depth analysis uncovered vulnerabilities that could have posed serious risks to our application's security. Their detailed report and recommendations enabled us to address these issues promptly and effectively. Working with Cyberous has been a game-changer for our software development process. We wholeheartedly recommend their services to anyone looking to enhance their code's security.",
      image: Images.user,
    },
    {
      id: 6,
      name: "Nitin",
      title: "Assistant Manager",
      desc: "Choosing Cyberous for our source code review was one of the best decisions we made for our software's security. Their team's expertise and attention to detail were evident throughout the assessment process. Their thorough analysis and actionable recommendations have helped us bolster our code's defenses and ensure its integrity. Cyberous is our go-to partner for all our cybersecurity needs, and we couldn't be happier with the results.",
      image: Images.user,
    }
  ];
  
  
  
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
            Experience a thorough examination of your application's source code with our Source Code Review service. Our methodology involves automated tool-based scans to identify common vulnerabilities and manual tool-based analysis by seasoned experts for a meticulous review. Going beyond, we perform a vulnerability assessment to unveil advanced risks and offer comprehensive remediation recommendations. This holistic approach ensures a robust evaluation of your codebase, fortifying your application against potential threats and ensuring the integrity of your software solutions. Strengthen your application's security with our comprehensive Source Code Review process today!
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

export default SourceCode;