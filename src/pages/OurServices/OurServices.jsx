import React from 'react'
import { Images } from '../../assets'

const OurServices = () => {
  return (
    <div className='w-full h-full '>
      <div className='bg-white pt-12'>
        <div className='flex justify-center'>
        <h1 className='text-black text-5xl font-bold'>Our Services</h1>
        </div>
        <div className='flex justify-center'>
        <div className="h-1 w-56 bg-custom-buttonColor-Green mt-6 rounded-full mb-4"></div>
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-row w-4/5 h-full shadow-xl'>
            <div className='w-1/4 border-r border-custom-greyBorderColor border-solid'>
              <div className='ml-10 mt-14'>
                <img src={Images.OurServicesimg1} alt='Our Service Image 1' className=' bg-slate-100 rounded-full' />
                <h1 className='font-bold text-black text-2xl mt-8'>Training</h1>
                <p className='mt-6 text-xl text-custom-fontColor-grey mr-10'>
                  Embark on a journey to mastery with our Ethical Hacking Training. At Cyberous, we equip students with practical skills, readying them for real-life cyber challenges. With a stellar 5-star Google rating, trust us to elevate your cybersecurity expertise and career prospects.
                </p>
                <button>
                  <div className='mt-8 w-10 h-10 rounded-full bg-custom-buttonColor-Green flex justify-center'>
                    <img src={Images.whiteArrow} className='p-2' />
                  </div>
                </button>
              </div>
            </div>
            <div className='w-1/4 border-r border-custom-greyBorderColor border-solid mb-6'>
              <div className='ml-10 mt-14'>
                <img src={Images.OurServicesimg2} alt='Our Service Image 1' className=' bg-slate-100 rounded-full' />
                <h1 className='font-bold text-black text-2xl mt-8'>VAPT</h1>
                <p className='mt-6 text-xl text-custom-fontColor-grey mr-10'>
                  Enhance your digital defenses with Cyberous' VAPT services. Our expert team conducts comprehensive Vulnerability Assessment and Penetration Testing, ensuring robust protection against cyber threats. Rely on our 5-star Google-rated services to safeguard your assets effectively
                </p>
                <button>
                  <div className='mt-8 w-10 h-10 rounded-full bg-custom-buttonColor-Green flex justify-center'>
                    <img src={Images.whiteArrow} className='p-2' />
                  </div>
                </button>
              </div>
            </div>
            <div className='w-1/4 border-r border-custom-greyBorderColor border-solid mb-6'>
              <div className='ml-10 mt-14'>
                <img src={Images.OurServicesimg3} alt='Our Service Image 1' className=' bg-slate-100 rounded-full' />
                <h1 className='font-bold text-black text-2xl mt-8'>Consultancy</h1>
                <p className='mt-6 text-xl text-custom-fontColor-grey mr-10'>
                  Elevate your cybersecurity strategy with Cyberous' Consultancy services. Our expert consultants specialize in crafting custom strategies to fortify your digital landscape against ever-evolving threats. Trust us to guide you through proactive risk management and implement robust defense solutions tailored to your unique needs. With Cyberous by your side, navigate the complex world of cybersecurity with confidence and resilience.
                </p>
                <button>
                  <div className='mt-8 w-10 h-10 rounded-full bg-custom-buttonColor-Green flex justify-center'>
                    <img src={Images.whiteArrow} className='p-2' />
                  </div>
                </button>
              </div>
            </div>
            <div className='w-1/4 '>
              <div className='ml-10 mt-14'>
                <img src={Images.OurServicesimg4} alt='Our Service Image 1' className=' bg-slate-100 rounded-full' />
                <h1 className='font-bold text-black text-2xl mt-8'>Red Teaming</h1>
                <p className='mt-6 text-xl text-custom-fontColor-grey mr-10'>
                  Boost your cybersecurity resilience with Cyberous' Red Teaming service. Our expert team simulates real-world cyber attacks to uncover vulnerabilities and enhance your defense strategy. Trust Cyberous to deliver comprehensive Red Teaming solutions, tailored to fortify your digital infrastructure against sophisticated threats.
                </p>
                <button>
                  <div className='mt-8 w-10 h-10 rounded-full bg-custom-buttonColor-Green flex justify-center'>
                    <img src={Images.whiteArrow} className='p-2' />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices