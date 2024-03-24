import React, { useState, useEffect } from 'react'
import { Images } from '../../assets'
import ContactUsCard from '../../components/ContactUsCard'
import { Link } from 'react-router-dom'
import { Select, Option } from '@material-tailwind/react'
import { useCountries } from "use-react-countries";

const contactData = [
  {
    id: 0,
    name: 'Ask Cyberous',
    desc: 'Check out our FAQs',
    Link: "Go →"
  },
  {
    id: 1,
    name: 'Call Us',
    desc: 'Give your local consumer service hotline a ring',
    Link: "Go →"
  },
  {
    id: 2,
    name: 'Drop A Review',
    desc: 'Find our Google Page',
    Link: "Go →"
  },
  {
    id: 3,
    name: 'Tweet Us',
    desc: "We're just a tweet away @cyberousinfosec",
    Link: "Go →"
  },
  {
    id: 4,
    name: 'Speak Up',
    desc: "if you have a cmpliance concern (we'll keep it confidential)",
    Link: "Go →"
  },
]

const Contact = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChoice, setIsChoice] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const chooseType = () => {

  }
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    // <div>Contact</div>
    <div>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col p-4 mt-4 md:mt-40 w-full md:w-1/2'>
          <h1 className='pr-20  text-5xl md:text-8xl  md:pr-0 font-bold text-center font-marker'>
            Contact Us
          </h1>
          <h1 className='text-2xl md:text-4xl py-10 text-center md:py-20'>
            Need to Talk We're Listening....
          </h1>
        </div>
        <img src={Images.contactUsImg1} className='p-4 w-full h-full md:w-1/2' />
      </div>

      <div className='bg-black'>
        <h1 className='text-xl text-white md:text-3xl font-sans text-center p-6'>
          What works best for you ?
        </h1>
        <div className=''>
          <div className='grid grid-col-1 mx-12 my-2 gap-6 md:gap-4 md:grid-cols-5 '>
            {contactData.map((item) => (
              <Link>
                <ContactUsCard
                  head={item.name}
                  desc={item.desc}
                  link={item.Link}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className=''>
          <h1 className='text-center text-white text-xl p-4'>
            You can also get in touch with us using the
            <Link>
              <span className='font-bold underline '> contact form </span>
              below.
            </Link>
          </h1>
        </div>
      </div>



      <div className='m-8 md:m-20'>
        <h1 className='text-xl font-serif '>
          Leave Us A Message
        </h1>
        <p className='text-lg font sans py-4 text-justify'>
          Your message will be sent to our teams worldwide, who will get back to you as soon as they can. Please be advised that weekends and public holidays might delay response time.
        </p>
        <p className='text-xl py-4'><span className='text-2xl md:text-4xl text-red-700'> * </span>Mandatory Fields </p>
        <p className='text-xl py-6'>
          What would you like to contact us about today?<span className='text-2xl md:text-4xl text-red-700'> * </span>
        </p>

        <div className='bg-custom-greyBorderColor md:w-full'>
          <form className='w-full md:w-1/2  rounded-xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
              <label className='mx-4 text-black text-xl'>
                First Name :
                <input type='text' name='FirstName' className='bg-white h-10 w-full rounded-lg mx-2 px-2 '></input>
              </label>
              <label className='mx-4 text-black text-xl'>
                Last Name :
                <input type='text' name='LastName' className='h-10 w-full rounded-lg mx-2 px-2  bg-white'></input>
              </label>
            </div>
            <div className='flex flex-col md:flex-row p-4 justify-around'>
              <label className='mx-4 text-black text-xl'>
                Phone :
                <input type='number' name='phone' className='h-10 w-full rounded-lg mx-2 px-2  bg-white '></input>
              </label>
              <label className='mx-4 text-black text-xl'>
                Email :
                <input type='email' name='email' className='h-10 w-full rounded-lg mx-2 px-2 bg-white '></input>
              </label>
            </div>
          </form>


          <div className='py-4 px-12'>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="w-auto text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
              type="button"
            >
              {'Contacted For'}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              id="dropdown"
              className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li className='border border-solid border-custom-greyBorderColor'>
                  <button className="w-full text-black block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleDropdown}>
                    Training
                  </button>
                </li>
                <li className='border border-solid border-custom-greyBorderColor'>
                  <button className="w-full block text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleDropdown}>
                    VAPT
                  </button>
                </li>
                <li className='border border-solid border-custom-greyBorderColor'>
                  <button className="w-full block text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleDropdown}>
                    Red Teaming
                  </button>
                </li>
                <li className='border border-solid border-custom-greyBorderColor'>
                  <button className="w-full block text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleDropdown}>
                    Consultancy
                  </button>
                </li>
                <li className='border border-solid border-custom-greyBorderColor'>
                  <button className="w-full block text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleDropdown}>
                    Support
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className='p-4 px-8 '>
            <p className='text-xl text-black py-4'>Your Comment  <span className='text-2xl md:text-4xl text-red-700'> * </span></p>
            <input className='h-36 w-11/12 md:w-1/2 rounded-lg font-serif text-black p-4' type='text' placeholder=''>
            </input>
          </div>
          <div className='flex justify-center py-6'>
            <button className='w-auto text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800'>
              Let's Connect
            </button>
          </div>
        </div>


      </div>


    </div>
  )
}

export default Contact;