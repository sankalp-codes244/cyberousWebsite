import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row w-full bg-custum-bg-dark'>
        <div className='w-full md:w-1/3 h-auto md:h-96 ml-8 mt-8'>
          <h1 className='text-white text-2xl font-bold mb-5 ml-8'>Services</h1>
          <div>
            <ol className="list-none">
              <li className="w-full md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Cyber Security Training
              </li>
              <li className="w-full md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Corporate Training
              </li>
              <li className="w-full md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                VAPT
              </li>
              <li className="w-full md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Consultancy
              </li>
              <li className="w-full md:w-52 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Red Teaming
              </li>
              {/* Add other list items */}
            </ol>
          </div>
        </div>
        <div className='w-full md:w-1/3 h-auto md:h-96 ml-8 mt-8'>
          <h1 className='text-white text-2xl font-bold mb-5 ml-8'>Quick Links</h1>
          <ol className="list-none">
            <Link to='about'>
              <li className="w-full md:w-24 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Training
              </li>
            </Link>
            <Link to='about'>
              <li className=" w-28 md:w-40 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Our Services
              </li>
            </Link>
            <Link to='about'>
              <li className="w-full md:w-24 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                About Us
              </li>
            </Link>
            <Link to='about'>
              <li className="w-full md:w-24 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Blog
              </li>
            </Link>
            <Link to='about'>
              <li className="w-full md:w-24 text-custom-fontColor-Dark ml-5 mb-2 hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Support
              </li>
            </Link>
            {/* Add other list items */}
          </ol>
        </div>
        <div className='w-full md:w-1/3 h-auto md:h-96 ml-8 md:mr-10 md:mt-0'>
          <h1 className='text-white text-2xl font-bold mb-5 ml-5 mt-8'>
            News Letter
          </h1>
          <div>
            <h1 className='text-custom-fontColor-Dark ml-5 md:mr-10'>
              Stay informed about cybersecurity risks. Get the latest security updates directly to your email inbox, keeping you ahead of potential threats.
            </h1>
            <div className="flex flex-col md:flex-row items-center mt-6 ">
              <div className="bg-gray-900 rounded-lg mb-4 md:mb-0">
                <input
                  name="emailHandle"
                  type="email"
                  className="mt-4 ml-5 h-10 px-2 text-white bg-custum-bg-dark focus:outline-none border border-solid border-white w-80 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <button className="mt-4 ml-4 bg-custom-buttonColor-Green hover:bg-custom-buttonColor-GreenDark text-white font-bold py-2 px-4 ">
                Sign Up
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className='h-24 w-full bg-black'>
        <h1 className='ml-32 pt-4 text-white text-base'> © <span className='text-custom-buttonColor-Green underline'>Cyberous</span> , All rights Reserved</h1>
      </div>
    </div>
  )
}

export default Footer