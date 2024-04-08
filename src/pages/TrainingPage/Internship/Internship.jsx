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
        <div className='h-full p-6 md:px-20  w-full bg-custom-buttonColor-Green'>
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
              <button className='bg-white text-xl  font-__Inter_aaf875 font-bold p-3 text-custom-buttonColor-Green rounded-lg'>
                Enroll Now
              </button>
            </div>
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