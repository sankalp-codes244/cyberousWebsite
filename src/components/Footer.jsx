import React from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../assets'



const Footer = () => {
  return (
    <div className='flex flex-col bg-custum-bg-dark pt-10'>
      <div className='flex flex-col md:flex-row  '>
        <div className='md:w-1/3 h-auto md:h-full ml-8 mt-8'>
          <h1 className='text-white text-2xl font-bold mb-5 ml-8'>Services</h1>
          <div>
            <ol className="list-none">
              <li className="md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Cyber Security Training
              </li>
              <li className=" md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Corporate Training
              </li>
              <li className=" md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                VAPT
              </li>
              <Link to='/services/consultancy'>
                <li className=" md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Consultancy
                </li>
              </Link>
              <Link to='/services/redteaming'>
                <li className=" md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Red Teaming
                </li>
              </Link>
            </ol>
          </div>
        </div>
        <div className=' md:w-1/3 h-full ml-8 mt-8'>
          <h1 className='text-white text-2xl font-bold mb-5 ml-8'>Quick Links</h1>
          <ol className="list-none">
            <Link to='/training'>
              <li className=" md:w-24 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Training
              </li>
            </Link>
            <Link to='/services'>
              <li className=" md:w-32 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Our Services
              </li>
            </Link>
            <Link to='/about'>
              <li className=" md:w-24 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                About Us
              </li>
            </Link>
            <Link to='/blog'>
              <li className=" md:w-24 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Blog
              </li>
            </Link>
            <Link to='/contact'>
              <li className=" md:w-24 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Support
              </li>
            </Link>
            {/* Add other list items */}
          </ol>
        </div>
        <div className=' md:w-1/3 h-full ml-8 md:mr-10 md:mt-0'>
          <h1 className='text-white text-2xl font-bold mb-5 ml-5 mt-8'>
            News Letter
          </h1>
          <div>
            <h1 className='text-custom-fontColor-Dark ml-5  md:mr-10'>
              Stay informed about cybersecurity risks. Get the latest security updates directly to your email inbox
            </h1>
            <div className="flex flex-col md:flex-row items-center mt-6 ">
              <div className=" rounded-lg mb-4 md:mb-0">
                <input
                  name="emailHandle"
                  type="email"
                  className="mt-4 ml-5 h-10 px-4 focus-visible:ring-4 duration-500 text-white bg-custum-bg-dark  border border-solid border-white w-80 rounded-lg
                  "
                  placeholder="Enter your email"
                />
              </div>
              <button className="mt-4 ml-4 bg-custom-buttonColor-Green hover:bg-custom-buttonColor-GreenDark text-white font-bold py-2 px-4 rounded">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        <div className="pt-6 ml-12 md:mt-20 justify-center md:justify-normal flex  md:p-10 ">

          <Link to={'https://www.facebook.com/cyberous.in?mibextid=dGKdO6'}>
            <img src={Images.facebookLight} alt="Facebook" className=" h-10 w-10 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300 mr-4 " />
          </Link>
          <Link to={'https://www.instagram.com/cyberous_?igsh=bndreTYxMnIxemxn'}>
            <img src={Images.instagramLight} alt="Instagram" className="h-10 w-10 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300 mr-4" />
          </Link>
          <Link to={'https://www.linkedin.com/company/cyberous'}>
            <img src={Images.linkedinLight} alt="LinkedIn" className="h-10 w-10 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300 mr-4" />
          </Link>
          <Link to={'https://twitter.com/cyberousinfosec'}>
            <img src={Images.xLight} alt="LinkedIn" className="h-10 w-10 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300 mr-4 " />
          </Link>
        </div>
        <div className='pr-4 md:pr-48'>
          <img src={Images.FiveStarReview} className='h-20 w-20 lg:h-72 lg:w-72 rounded-full mb-4' />
        </div>
      </div>
      <div className='h-full bg-black md:px-24'>
        <h1 className='ml-32 pt-4 text-white text-base font-bold'> <span>© 2024 Cyberous</span> reserved</h1>
        <div className=''>
          <ol className="grid grid-cols-2 md:flex md:flex-row list-none my-6">
            <Link to={'/terms'}>
            <li className="md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
              
              Terms & Conditions
            </li>
            </Link>
            <Link to='/privacyPolicy'>
            <li className=" md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
              
              Privacy Policy
            </li>
            </Link>
            <Link to={'/DMCA'}>
            <li className=" md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
              
              DMCA Policy
            </li>
            </Link>
            <Link to='/disclaimer'>
              <li className=" md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                
                Disclaimer
              </li>
            </Link>

          </ol>
        </div>

      </div>

    </div>
  )
}

export default Footer