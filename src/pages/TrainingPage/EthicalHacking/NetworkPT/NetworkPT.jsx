import React, { useEffect } from 'react'
import Faqs from '../../../Homepage/FAQs/Faqs';
import MediaGallery from '../../../Homepage/MediaGallery/MediaGallery';
import Testemonial from '../../../Homepage/Testimonial/Testemonial';
import IndustrialRecognition from '../../../Homepage/IndustrialRecognition/IndustrialRecognition';
import { Images } from '../../../../assets';
import FormComponent from '../../../../components/FormComponent';

const NetworkPT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='relative'>
      <img src={Images.ethicalhackingimg10} className='hidden md:block bg-custom-custom-blackbg absolute right-0 top-20' />
      <div className='flex justify-center bg-custom-custom-blackbg'>
        <div className='md:w-4/5'>
          <div className='w-full p-4 md:px-20 md:py-10'>
            <div className='md:flex md:flex-row justify-between'>
              <div className='py-8 md:px-0'>
                <h1 className='text-white font-Roboto font-bold text-lg md:text-4xl py-4'> Network Penetration Testing Course</h1>
                <div className='flex flex-row gap-2'>
                     <div className='flex justify-center items-center'>

                  <h1 className='bg-custom-gold-color text-xs md:text-sm p-1 px-2 md:w-auto font-__Inter_aaf875 text-center rounded-sm my-3'>
                    BestSeller
                  </h1>
                  </div>
                  <div className='flex flex-row'>
                    <h1 className='text-white font-Roboto text-xs p-2 mt-2 md:text-sm'>
                      5.0
                    </h1>
                    <img src={Images.star} className='w-2 h-2 md:w-3 md:h-3 mt-5' />
                    <img src={Images.star} className='w-2 h-2 md:w-3 md:h-3 mt-5' />
                    <img src={Images.star} className='w-2 h-2 md:w-3 md:h-3 mt-5' />
                    <img src={Images.star} className='w-2 h-2 md:w-3 md:h-3 mt-5' />
                    <img src={Images.star} className='mr-4 w-2 h-2 md:w-3 md:h-3 mt-5' />
                  </div>
                  <h1 className='text-white font-Roboto text-xs py-2 mt-2 md:text-sm'>
                    400+ Reviews
                  </h1>
                  <h1 className='text-white font-Roboto text-sm py-2 mt-2 md:text-sm'>
                    7000+ Students
                  </h1>
                </div>

                <div className='md:flex md:flex-row'>
                  <div className='grid grid-cols-1 md:grid-cols-2 my-4 md:w-full md:mt-16'>
                    <div className=''>
                      <div className='flex flex-row'>
                        <img src={Images.ethicalhackingimg9} className='w-4 mx-2 invert object-contain' />
                        <h1 className='text-white font-Roboto text-base my-2'>
                          Course Duration: <span className='font-bold'> 2 Months </span>
                        </h1>
                      </div>
                      <div className='flex flex-row'>
                        <img src={Images.ethicalhackingimg8} className='w-4 mx-2 invert object-contain ' />
                        <h1 className='text-white font-Roboto text-base my-2'>
                          Course Level: <span className='font-bold'> Expert </span>
                        </h1>
                      </div>
                      <div className='flex flex-row'>
                        <img src={Images.ethicalhackingimg7} className='w-4 mx-2 invert object-contain ' />
                        <h1 className='text-white font-Roboto text-base my-2'>
                          Course delivery: <span className='font-bold'> Live Online Sessions </span>
                        </h1>
                      </div>
                      <div className='flex flex-row'>
                        <img src={Images.ethicalhackingimg6} className='w-4 mx-2 invert object-contain ' />
                        <h1 className='text-white font-Roboto text-base my-2'>
                          Course Include: <span className='font-bold'> Training and Certification </span>
                        </h1>
                      </div>
                      <div className='flex flex-row'>
                        <img src={Images.ethicalhackingimg5} className='w-4 mx-2 invert object-contain ' />
                        <h1 className='text-white font-Roboto text-base my-2'>
                          Language: <span className='font-bold'> Hindi, English </span>
                        </h1>
                      </div>
                      <div className='flex flex-row'>
                        <img src={Images.ethicalhackingimg4} className='w-4 mx-2 invert object-contain ' />
                      <h1 className='text-white font-Roboto text-base my-2'>
                          Accreditation by: <span className='font-bold'>Cyberous  </span>
                        </h1>
                      </div>
                    </div>
                    <div className='hidden md:block md:w-full p-6 mt-20'>
                      <div className=' bg-white w-full relative  rounded-sm md:w-3/4 md:mt-20 h-1/2 p-5'>
                        <h1 className='font-bold text-2xl '>
                          ₹15000.00
                        </h1>
                        <h1 className='absolute font-bold text-base line-through right-20 md:right-5 md:bottom-2 text-custom-fontColor-grey'>
                          ₹25000.00
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
               <div className='md:mx-5'>
                  <div className='w-full h-12 lg:w-80 flex justify-evenly px-12 items-center hover:bg-green-700 border border-solid border-green-500 bg-green-500  rounded-md text-white'>
                    <img src={Images.download} className=' w-6 invert' />
                    <p className='font-medium'>Download Syllabus</p>
                  </div>
                </div>
              </div>
              <div className='md:ml-20 w-full md:w-1/2'>
                <FormComponent />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='bg-custom-greyLightColor p-10'>
        <h1 className='text-center text-2xl md:text-5xl font-serif font-bold'>What You Will Learn</h1>
        <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto  rounded-full"></div>
        <div className='font-bold grid grid-cols-1 md:grid-cols-2 py-20 text-xl md:text-2xl font-__Inter_aaf875'>
           <ol className='grid gap-2'>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Network Mapping and Discovery</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Service Enumeration and Version Detection</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Vulnerability Scanning and Assessment</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Exploitation of Common Network Services</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Password Cracking and Brute Force Attacks</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Man-in-the-Middle (MITM) Attacks</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>ARP Spoofing and Poisoning</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>DHCP Spoofing and Rogue DHCP Server Attacks</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>DNS Spoofing and Cache Poisoning</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Wireless Network Penetration Testing</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Bluetooth Security Assessment</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>VLAN Hopping and Trunking Exploitation</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Network Traffic Analysis and Packet Sniffing</p>
              </div>
            </li>
          </ol>
           <ol className='grid gap-2'>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Firewall and IDS/IPS Evasion Techniques</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Exploitation of Router and Switch Misconfigurations</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>VoIP Infrastructure Penetration Testing</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>VPN Security Assessment and Exploitation</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>IPv6 Security Testing and Transition Mechanisms Assessment</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Network Device Hardening Assessment  </p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Network-Based Denial of Service (DoS) and Distributed DoS (DDoS) Attacks</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Advanced Post-Exploitation Techniques (Pivoting, Lateral Movement)</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Data Exfiltration Techniques and Countermeasures</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Network Segmentation and VLAN Security Assessment</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Zero-Day Vulnerability Research and Exploitation</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Wireless LAN Controller (WLC) Security Assessment</p>
              </div>
            </li>
            <li className=''>
              <div className='flex flex-row'>
                <img src={Images.accept} className='h-6 w-6 m-2' />
                <p className='mt-2'>Incident Response Planning and Network Forensics</p>
              </div>
            </li>
          </ol>
        </div>

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
      <div className='bg-custom-greyBorderColor p-2 justify-between md:p-20 md:flex md:flex-row'>
        <div className='flex flex-col md:w-1/2'>
               <h1 className='text-center   font-serif font-bold text-2xl md:text-4xl py-6'>
            Why to Join Cyberous Training Program?
          </h1>
        <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto  rounded-full"></div>
          <div className='flex'>
            <div className='grid grid-cols-1 text-xl md:text-2xl font-__Inter_aaf875 px-6'>
              <div>
                 <ol className='grid gap-2'>
                  <li className=''>
                    <div className='flex flex-row'>
                      <img src={Images.accept} className='h-6 w-6 m-2' />
                      <p className='mt-2'>Comprehensive Curriculum</p>
                    </div>
                  </li>
                  <li className=''>
                    <div className='flex flex-row'>
                      <img src={Images.accept} className='h-6 w-6 m-2' />
                      <p className='mt-2'>Experienced Instructors</p>
                    </div>
                  </li>
                  <li className=''>
                    <div className='flex flex-row'>
                      <img src={Images.accept} className='h-6 w-6 m-2' />
                      <p className='mt-2'>Hands-On Learning</p>
                    </div>
                  </li>
                  <li className=''>
                    <div className='flex flex-row'>
                      <img src={Images.accept} className='h-6 w-6 m-2' />
                      <p className='mt-2'>Career Advancement</p>
                    </div>
                  </li>
                  <li className=''>
                    <div className='flex flex-row'>
                      <img src={Images.accept} className='h-6 w-6 m-2' />
                      <p className='mt-2'> Flexible Learning Options</p>
                    </div>
                  </li>
                  <li className=''>
                    <div className='flex flex-row'>
                      <img src={Images.accept} className='h-6 w-6 m-2' />
                      <p className='mt-2'>Industry Recognition</p>
                    </div>
                  </li>
                  <li className=''>
                    <div className='flex flex-row'>
                      <img src={Images.accept} className='h-6 w-6 m-2' />
                      <p className='mt-2'>Supportive Community</p>
                    </div>
                  </li>
                  <li className=''>
                    <div className='flex flex-row'>
                      <img src={Images.accept} className='h-6 w-6 m-2' />
                      <p className='mt-2'>Affordable Pricing</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Images.ethicalhackingimg11} className=' w-full object-contain md:m-20'/>
        </div>
      </div>

      <div className='p-10'>
    <h1 className='text-center text-2xl font-serif md:text-4xl  font-bold py-6'>
          Cyberous Student Awards
        </h1>        <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto  rounded-full"></div>

      
        <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <img src={Images.certificate1} className='p-4'/>
          <img src={Images.certificate2} className='p-4'/>
          <img src={Images.certificate3} className='p-4'/>
        </div>
        </div>
      </div>
      <div className='pt-20'>
        <IndustrialRecognition />
      </div>
      <div className='py-20'>
        <Testemonial />
      </div>
      <div className='pb-20'>
        <MediaGallery />
      </div>
      <div className='py-20'>
        <Faqs />
      </div>
    </div>

  )
}

export default NetworkPT