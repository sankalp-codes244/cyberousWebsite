import React from 'react'
import { Images } from '../../../assets'
import FormComponent from '../../../components/FormComponent'
import PageHeader from './PageHeader/PageHeader'
import IndustrialRecognition from '../../Homepage/IndustrialRecognition/IndustrialRecognition'
import NamesYouKnow from '../../Services/RedTeaming/NamesYouKnow/NamesYouKnow'
import MediaGallery from '../../Homepage/MediaGallery/MediaGallery'
import Faqs from '../../Homepage/FAQs/Faqs'
import CourseTiles from './CourseTiles/CourseTiles'

const Internship = () => {
  return (
    <div>
      <div>
        <PageHeader />
      </div>
      <div>
        <CourseTiles />
      </div>


      <div>
        <div className='h-full p-6 md:px-20  w-full bg-custom-buttonColor-Green my-10'>
          <div className='md:flex md:flex-row justify-between'>
            <div className='md:flex md:flex-row md:w-3/4'>
              <div className='flex justify-center'>
                <img src={Images.support} className=' invert w-20 h-20 ' />
              </div>
              <div className='flex flex-col'>
                <h1 className='text-center text-white text-xl md:text-2xl font-__Inter_aaf875 font-bold py-1 md:mx-4'>Join Cyber Security Internship Training Program</h1>
                <h1 className='text-center md:text-left text-white text-base font-__Inter_aaf875 font-bold py-1 md:mx-4'>Enroll Now for 1 Year Cyber Security Diploma with Job Assistance **</h1>
                <h1 className='text-center md:text-left text-white text-base font-__Inter_aaf875 font-bold py-1 md:mx-4'>Contact us: +918199985888</h1>
              </div>
            </div>
            <div className='flex justify-center items-center md:w-1/4'>

              <button className='bg-white text-xl  font-__Inter_aaf875 font-bold p-3 w-full text-custom-buttonColor-Green rounded-lg'>
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>



      <div>
        <div className='text-center relative bg-no-repeat bg-cover bg-center h-full md:h-screen object-cover p-6 md:pt-20' style={{ backgroundImage: `url(${Images.internshipbg1})`, }}>
            <h1 className='text-center text-custom-fontColor-Green text-xl md:text-5xl font-__Inter_aaf875 font-bold md:py-20'>
              Cyberous Internship Training Program: Launch Your Cybersecurity Career with Us!
            </h1>
          <div className='grid grid-cols-1 md:grid-cols-2'>
              <p className='text-white font-__Inter_aaf875 text-lg  m-4 p-4 md:text-justify bg-custom-fontColor-Green'>
                Welcome to Cyberous Internship Program – your gateway to hands-on experience and invaluable insights into the world of cybersecurity! Our program offers a dynamic learning environment where interns have the opportunity to work alongside seasoned professionals, tackle real-world challenges, and gain practical skills that set them apart in the industry.
              </p>
              <p className='text-white font-__Inter_aaf875 text-lg  p-4 md:text-justify m-4 bg-custom-fontColor-Green'>
                At Cyberous, we believe in nurturing talent and providing aspiring cybersecurity professionals with the tools they need to succeed. Through mentorship, guided projects, and exposure to cutting-edge technologies, interns not only enhance their technical abilities but also develop critical thinking, problem-solving, and teamwork skills essential for thriving in today's cybersecurity landscape.
              </p>
              <p className='text-white font-__Inter_aaf875 text-lg  md:text-justify m-4 p-4 bg-custom-fontColor-Green'>
                Whether you're a student looking to kickstart your career or an individual seeking a career change, our internship program caters to diverse backgrounds and skill levels. With flexible scheduling options and a supportive learning environment, interns can tailor their experience to suit their goals and interests.

              </p>
              <p className='text-white font-__Inter_aaf875 text-lg  p-4 md:text-justify  m-4 bg-custom-fontColor-Green'>
                Join us at Cyberous Internship Program and embark on a rewarding journey towards becoming a cybersecurity expert. Gain hands-on experience, expand your knowledge, and make meaningful contributions to our mission of securing digital assets against evolving threats. Apply now and take the first step towards a successful career in cybersecurity with Cyberous.
              </p>
          </div>
        </div>
      </div>

      <div className='bg-custom-black-color p-6 md:py-28'>
        <div className='md:flex md:flex-row'>
          <div className='md:w-1/2'>
            <img src={Images.CorporateTrainingbg2} className='w-full md:mt-10' />
          </div>
          <div className='md:w-1/2 md:px-20'>
            <h1 className='text-white text-xl text-left md:text-3xl font-__Inter_aaf875 font-bold py-5'>Find Suitable Placement Assistance from Us</h1>
            <h1 className='text-white text-sm md:text-lg text-left  font-__Inter_aaf875 '>Explore Tailored Placement Assistance with Cyberous</h1>
            <div className=' w-full my-4 bg-custom-fontColor-Dark' style={{ height: 1 }}></div>
          <p className='text-white font-__Inter_aaf875 text-lg text-justify py-2'>
            Embark on your cybersecurity career journey with confidence, supported by Cyberous' tailored placement assistance services. Our team is dedicated to helping you secure rewarding opportunities in the industry through personalized guidance, resume optimization, interview preparation, and networking support.
          </p>
          <p className='text-white font-__Inter_aaf875 text-lg text-justify py-2'>
            With our extensive industry connections and deep understanding of the cybersecurity landscape, we ensure that you're equipped with the tools and resources needed to stand out to potential employers. Whether you're a recent graduate, career changer, or seasoned professional, our placement assistance services are designed to match your unique skills, experience, and career goals.
          </p>
          <p className='text-white font-__Inter_aaf875 text-lg text-justify py-2'>
            Partner with Cyberous and unlock doors to exciting cybersecurity roles. Let us guide you towards success as you navigate the competitive job market and build a fulfilling career in cybersecurity. Connect with us today to explore how our placement assistance can accelerate your career growth.
          </p>
          </div>
        </div>
      </div>
      <div>
        <IndustrialRecognition />
      </div>
      <div>
        <NamesYouKnow />
      </div>
      <div>
        <MediaGallery />
      </div>
      <div>
        <Faqs />
      </div>
    </div>

  )
}

export default Internship