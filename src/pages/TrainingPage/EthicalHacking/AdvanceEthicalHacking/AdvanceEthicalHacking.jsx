import React from 'react'
import SideArrow from '../../../../assets/Svgs/SideArrow'
import { Images } from '../../../../assets'
import Testemonial from '../../../Homepage/Testimonial/Testemonial'
import MediaGallery from '../../../Homepage/MediaGallery/MediaGallery'
import Faqs from '../../../Homepage/FAQs/Faqs'
import IndustrialRecognition from '../../../Homepage/IndustrialRecognition/IndustrialRecognition'

const AdvanceEthicalHacking = () => {
  return (
    <div>
      <div className='bg-custom-black-color p-6 md:p-10'>
        <div className='md:flex md:flex:row md:w-3/4'>
          <div>
            <h1 className='text-white font-Roboto text-xl md:text-3xl md:text-center'>Online Web Applicatim Security Course In Denti I Web Application Training</h1>
            <div className='flex flex-col my-4'>
              <div className='flex flex-row '>
                <h1 className='bg-custom-gold-color text-sm w-28 my-2 font-__Inter_aaf875 px-2 text-center rounded-sm'>
                  BestSeller
                </h1>
                <h1 className='text-white font-Roboto text-sm p-2'>
                  5.0
                </h1>
                <h1 className='text-white font-Roboto text-sm p-2'>
                  600+ Reviews
                </h1>
                <h1 className='text-white font-Roboto text-sm p-2'>
                  8500+ Students
                </h1>
              </div>
              <div className='md:flex md:flex-row '>
                <h1 className='text-white font-Roboto text-sm p-2'>
                  Course Duration: <span className='font-bold'> 2 Months </span>
                </h1>
                <h1 className='text-white font-Roboto text-sm p-2'>
                  Course Level: <span className='font-bold'> Intermediate </span>
                </h1>
                <h1 className='text-white font-Roboto text-sm p-2'>
                  Course delivery: <span className='font-bold'> Live Online Sessions </span>
                </h1>
              </div>
              <div className='md:flex md:flex-row'>
                <h1 className='text-white font-Roboto text-sm p-2'>
                  Course Include: <span className='font-bold'> Training and Certification </span>
                </h1>
                <h1 className='text-white font-Roboto text-sm p-2'>
                  Language: <span className='font-bold'> Hindi, English </span>
                </h1>
                <h1 className='text-white font-Roboto text-sm p-2'>
                  Acccrediation by: <span className='font-bold'>Cyberous  </span>
                </h1>
              </div>
              <div className='flex justify-center p-12 my-6 '>
                <div className=' bg-white w-full relative rounded-xl md:w-1/4 p-8'>
                  <h1 className='font-bold text-2xl '>
                    ₹15000.00
                  </h1>
                  <h1 className='absolute font-bold text-base line-through right-20 md:right-10 text-custom-fontColor-grey'>
                    ₹17700
                  </h1>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className='bg-custom-greyLightColor p-10'>
        <h1 className='text-center text-2xl md:text-4xl font-Roboto font-bold'>What You Will Learn</h1>
        <div className='font-bold grid grid-cols-1 md:grid-cols-4 gap-5 py-20 text-xl md:text-2xl font-Roboto'>
          <ol>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'> Ethical Hacking and Cyber Laws</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'> Networking</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'> Footprinting and Recon</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'> Scanning Networks</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'> Enumeration</p>
              </div>
            </li>
          </ol>
          <ol>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>Social Engineering</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>Vulnerability analysis</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>System Hacking</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>Sniffing</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>DOS</p>
              </div>
            </li>
          </ol>
          <ol>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>Session Hijacking</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>Firewall and Honeypots</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>Web Application Attacks</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>Web server Attacks</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>SQL Injection</p>
              </div>
            </li>
          </ol>
          <ol>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>Wireless Security </p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>Social Engineering attacks </p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>Malwares</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>Cryptography</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.checkMark} className='h-6 w-6 m-2' />
                <p className='mt-2'>IOT and cloud hacking</p>
              </div>
            </li>
          </ol>
        </div>
        {/* <div className='flex justify-center'>
          <button className='w-full md:w-1/4 h-12 bg-white border border-solid border-green-500 hover:bg-green-500  rounded-md text-green-500 hover:text-white'>
            Download Course Curriculum
          </button>
        </div> */}
      </div>

      <div className='flex justify-center items-center bg-custom-fontColor-Green'>
        <div className='text-white justify-center items-center  md:w-11/12 grid grid-cols-1 md:grid-cols-3 p-5 md:p-10 lg:p-10 gap-10'>
          <div className='flex flex-row md:justify-center items-center'>
            <img src={Images.ethicalhackingimg2} className='w-10 mx-3  ' />
            <div className='flex flex-col'>
              <h1 className='font-__Inter_aaf875 text-lg md:text-xl '>
                Expert Instruction
              </h1>
              <h1 className='font-__Inter_aaf875 text-base md:text-lg'>
                Find the Right Instructor for you
              </h1>
            </div>
          </div>
          <div className='flex flex-row md:justify-center items-center'>
            <img src={Images.ethicalhackingimg3} className='w-10  mx-3' />
            <div className='flex flex-col'>
              <h1 className='font-__Inter_aaf875 text-lg md:text-xl '>
                Lifetime Access
              </h1>
              <h1 className='font-__Inter_aaf875 text-base md:text-lg'>
                Online and Youtube Videos
              </h1>
            </div>
          </div>
          <div className='flex flex-row md:justify-center items-center'>
            <img src={Images.ethicalhackingimg1} className='w-10 mx-3  ' />
            <div className='flex flex-col'>
              <h1 className='font-__Inter_aaf875 text-lg md:text-xl '>
                Live Instructor-Based Classes
              </h1>
              <h1 className='font-__Inter_aaf875 text-base md:text-lg'>
                Book a Demo Class
              </h1>
            </div>
          </div>
        </div>
      </div>


      <div className='py-20'>
        <IndustrialRecognition />
      </div>
      <div className='py-20'>
        <Testemonial />
      </div>
      <div className='py-20'>
        <MediaGallery />
      </div>
      <div className='py-20'>
        <Faqs />
      </div>
    </div>

  )
}

export default AdvanceEthicalHacking