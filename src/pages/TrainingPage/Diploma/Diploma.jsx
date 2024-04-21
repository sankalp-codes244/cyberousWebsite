import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NamesYouKnow from '../../Services/RedTeaming/NamesYouKnow/NamesYouKnow';
import IndustrialRecognition from '../../Homepage/IndustrialRecognition/IndustrialRecognition';
import Testemonial from '../../Homepage/Testimonial/Testemonial';
import MediaGallery from '../../Homepage/MediaGallery/MediaGallery';
import Faqs from '../../Homepage/FAQs/Faqs';
import { Images } from '../../../assets';
import SideArrow from '../../../assets/Svgs/SideArrow';
import TrainingPageCard from '../../../components/TrainingPageCard';
const Diploma = () => {
  const trainingData = [
    {
      id: 0,
      name: `Live Interactive Learning`,
      desc: [
        `Best For Beginners`,
        `Expert-Led Mentoring Sessions`,
        `Instant doubt clearing`,
      ],
    },
    {
      id: 1,
      name: `Lifetime Access`,
      desc: [
        `Course Access Never Expires`,
        `Free Access to Future Updates`,
        `Unlimited Access to Course Content`,
      ],
    },

    {
      id: 2,
      name: `Hands-On Project Based Learning`,
      desc: [
        `World-Class Instructors`,
        `Expert-Led Mentoring Sessions`,
        `Instant doubt clearing`,
      ],
    },
    {
      id: 3,
      name: `Career Advancement`,
      desc: [
        `World-Class Instructors`,
        `Expert-Led Mentoring Sessions`,
        `Instant doubt clearing`,
      ],
    },
    {
      id: 4,
      name: `Industry Recognised Certification`,
      desc: [
        `Cyberops Training Certificate`,
        `Graded Performance Certificate`,
        `Certificate of Excellence`,
      ],
    },
    {
      id: 5,
      name: `24x7 Support`,
      desc: [
        `One-On-One Learning Assistance`,
        `Help Desk Support`,
        `Resolve Doubts in Real-time`,
      ],
    },
  ];
  const data = [
    {
      id: 1,
      name: "Raghav",
      title: "",
      desc: "cyberous cybersecurity consultancy service was exceptional. Their team provided valuable insights and guidance tailored to our specific needs, helping us navigate complex security challenges with confidence. With cyberous support, we've significantly strengthened our defenses and mitigated potential risks. Highly recommend Cyberous for comprehensive cybersecurity solutions.",
      image: Images.user
    },
    {
      id: 2,
      name: "Rahul Kumar",
      title: "",
      desc: "We were thoroughly impressed by cyberous web application penetration testing service. Their team conducted a thorough assessment of our web application, identifying vulnerabilities and providing practical recommendations for remediation. Thanks to Cyberous, we've been able to enhance our application's security measures effectively. Trustworthy and professional – Cyberous is our top choice for web security.",
      image: Images.user
    },
    {
      id: 3,
      name: " Anand",
      title: "",
      desc: "cyberous Red Teaming service exceeded our expectations. Their team's simulated attacks were sophisticated and insightful, giving us a clear understanding of our organization's security posture. Their comprehensive report and recommendations enabled us to address vulnerabilities and enhance our defenses. Cyberous is our go-to partner for Red Teaming.",
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
      desc: "cyberous Android penetration testing service was invaluable for our app's security. Their expertise in identifying vulnerabilities and providing actionable recommendations was exceptional. With their help, we were able to strengthen our app's security and protect our users' sensitive data. Cyberous is our trusted partner for mobile security testing.",
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
    link.href = '/DiplomaCybersecurity6month.pdf'; // Assuming the file is in the public directory
    // Set the download attribute to give the file a name
    link.download = 'DiplomaCybersecurity6month.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger a click event to download the file
    link.click();
    // Clean up: remove the link from the body
    document.body.removeChild(link);
  };
  const handleDownload1 = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the file path
    link.href = '/12monthsduration.pdf'; // Assuming the file is in the public directory
    // Set the download attribute to give the file a name
    link.download = '12monthsduration.pdf';
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
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-__Inter_aaf875 font-bold text-white'>Diploma in Cybersecurity</h1>
          <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto  rounded-full"></div>
          {/* <h2 className='text-xl sm:text-2xl lg:text-3xl text-white font-bold font-__Inter_aaf875'>ISO:27001:2013 CERTIFIED COMPANY</h2> */}
        </div>
      </div>

      {/* Company info */}
      <div className='flex flex-col justify-center py-8'>
        <h1 className='text-4xl text-center md:text-5xl font-bold font-serif'>Our Motive</h1>
        <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full "></div>
        <div className='flex justify-center'>
          <div className='w-full md:w-3/4'>
            <p className='text-2xl mx-4 lg:text-3xl lg:mx-32 text-center font-__Inter_aaf875'>
              Take your first step towards a successful career in cybersecurity with cyberous comprehensive Diploma in Cybersecurity program. Designed to equip you with the essential skills and knowledge needed to thrive in this rapidly evolving field, our diploma program covers a wide range of topics.
            </p>
          </div>
        </div>
      </div>

      {/* Service details */}
      <div className='px-4 lg:px-32 py-8'>
        <div className='grid '>
          <div className=' w-full'>
            <div className=' flex justify-center items-center '>
              <div className="lg:w-full pt-5 lg:pt-0 lg:flex gap-5 ">
                <div className="border w-full rounded-xl shadow-xl mb-5 lg:mb-0 p-5">
                  <h1 className="text-center text-2xl lg:text-4xl font-bold font-__Inter_aaf875 pb-4">
                    6 months
                  </h1>
                  <ul className="px-3">
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> Linux Fundamentals Networking Fundamentals
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow />
                      Python Programming
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow />
                      Ethical Hacking from Scratch


                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow />
                      Web Application & Network Penetration Testing


                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow />
                      Networking Fundamentals



                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> Mobile Application Penetration Testing
                    </li>
                  </ul>
                  <div className='grid grid-cols-2'>
                    <Link to='/contact'>
                      <button className="bg-custom-buttonColor-Green hover:bg-green-600 duration-300 text-white font-__Inter_aaf875 p-5 rounded-md w-11/12 mt-64 mx-2">
                        Enroll Now
                      </button>
                    </Link>
                    <button onClick={handleDownload} className="bg-custom-buttonColor-Green  hover:bg-green-600 duration-300 text-white font-__Inter_aaf875 p-2 rounded-md w-11/12 mt-64">
                      Download Syllabus
                    </button>
                  </div>

                </div>
                <div className="border w-full  rounded-xl shadow-xl p-5">
                  <h1 className="text-center text-2xl lg:text-4xl font-bold font-__Inter_aaf875 pb-4">
                    1 year
                  </h1>
                  <ul className="px-2">
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> Linux Fundamentals

                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow />Networking Fundamentals
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> Python Programming
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> Web Application & Network Penetration Testing
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> Mobile Application Penetration Testing
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> Cloud Penetration Testing
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> API Penetration Testing
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> IoT Internet of Things
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> Cloud Security
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> Ethical Hacking from Scratch
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> Cloud Penetration Testing API Penetration Testing{" "}
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> IoT Internet of Things
                    </li>
                    <li className="text-lg font-__Inter_aaf875">
                      {" "}
                      <SideArrow /> Cloud Security
                    </li>
                  </ul>
                  <div className='grid grid-cols-2'>
                    <Link to='/contact'>
                      <button className="bg-custom-buttonColor-Green hover:bg-green-600 duration-300 text-white font-__Inter_aaf875 p-5 rounded-md w-11/12 mt-16 mx-2">
                        Enroll Now
                      </button>
                    </Link>
                    <button onClick={handleDownload1} className="bg-custom-buttonColor-Green  hover:bg-green-600 duration-300 text-white font-__Inter_aaf875 p-2 rounded-md w-11/12 mt-16">
                      Download Syllabus
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* We choose section */}

      <div>
        <h1 className="font-Roboto text-center text-xl md:text-3xl p-5 md:p-10 font-bold">
          Why choose Cyberous as your partner in your cybersecurity journey?
        </h1>
        <div className="flex justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-3 w-3/4 py-10">
            {trainingData.map((item) => (
              <TrainingPageCard
                key={item.id}
                id={item.id}
                name={item.name}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center py-8'>
        <h1 className='text-xl text-center md:text-5xl font-bold font-serif'>Dynamic Cybersecurity Education</h1>
        <div className="h-1 w-60 lg:w-1/2 bg-custom-buttonColor-Green my-4 mx-auto rounded-full "></div>
        <div className='flex justify-center'>
          <div className='w-full md:w-3/4'>
            <p className='text-lg mx-4 lg:text-3xl lg:mx-32 text-center font-__Inter_aaf875'>
              Throughout the program, students will engage in hands-on lab exercises, practical assignments, and real-world simulations to reinforce their learning and apply their knowledge in practical scenarios. Additionally, guest lectures and industry insights will be provided to offer a holistic understanding of cybersecurity practices and trends.

            </p>
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
          {/* <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold text-black font-serif'>Brands that Trust us </h1> */}
          {/* <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div> */}
        </div>
      </div>



      {/* Service List */}

      <div id="brands" className='min-h-full bg-white'>
        <IndustrialRecognition />
      </div>

      <div id="gallery" className='min-h-full bg-white'>
        <MediaGallery />
      </div>
      <div id="testimonials" className='min-h-full bg-white'>
        <Testemonial data={data} />
      </div>
      <div id='faqs' className='min-h-full bg-white'>
        <Faqs faqData={faqData} />
      </div>
    </div>
  );
}

export default Diploma;
