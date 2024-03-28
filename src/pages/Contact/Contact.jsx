import React, { useState, useEffect } from 'react'
import { Images } from '../../assets'
import ContactUsCard from '../../components/ContactUsCard'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


import { Select, Option } from '@material-tailwind/react'
import { useCountries } from "use-react-countries";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
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


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col p-4 mt-4 md:mt-40 w-full md:w-1/2'>
          <h1 className='pr-20  text-5xl md:text-8xl  md:pr-0 font-bold text-center font-marker'>
            Contact Us
          </h1>
          <h1 className='text-2xl md:text-4xl py-10 text-center md:py-20'>
            Need to Talk? We're Listening....
          </h1>
        </div>
        <img src={Images.contactUsImg1} className='p-4 w-full h-full md:w-1/2' />
      </div>

      <div className='bg-custom-black-color'>
        <h1 className='text-xl text-white md:text-3xl font-sans text-center p-6'>
          What works best for you ?
        </h1>
        <div className='flex justify-center'>
          <div className='w-4/5'>
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
          <form method='post' action='https://script.google.com/macros/s/AKfycbx34rOuohgQsxuLAF4lg9P5lt0wVSnG4xBoZXCM3l55m4YRmHJr6PlbkeRCa-x4XLIN/exec' className='w-full md:w-1/2  rounded-xl'>
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


            <div className='py-4 px-12'>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Contacted For
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-300"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Training
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            VAPT
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Red Teaming
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Consultancy
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                    </div>

                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <div className='p-4 px-8 '>
              <p className='text-xl text-black py-4'>Your Comment  <span className='text-2xl md:text-4xl text-red-700'> * </span></p>
              <input name='message' className='h-36 w-11/12 md:w-1/2 rounded-lg font-serif text-black p-4' type='text' placeholder=''>
              </input>
            </div>
            <div className='flex justify-center py-6'>
              <label className='submit'>
                submit
              <input value='Submit' type='submit' id='submit'/>
              </label>
            </div>
          </form>
        </div>



      </div>


    </div>
  )
}

export default Contact;