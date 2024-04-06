
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import LinkButtons from './LinkButtons';

import { Images } from '../assets';

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left" onMouseLeave={() => setIsOpen(false)} onMouseEnter={() => setIsOpen(true)}>
      <div>
        <Menu.Button  onMouseLeave={() => setIsOpen(false)} onMouseEnter={() => setIsOpen(!isOpen)} className="inline-flex w-full justify-center rounded-md py-2  lg:font-bold  text-center">
          <div>
            <LinkButtons links='Training' isOpen={isOpen} />
          </div>
          <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 ${isOpen ? 'rotate-180' : ''} duration-300`} aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition linear duration-200" // Adjust the duration here (e.g., duration-500)
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition linear duration-300" // Adjust the duration here (e.g., duration-500)
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-110"
      >
      <Menu.Items className="sm:absolute lg:fixed lg:w-full  lg:inset-y-20 lg:z-10 lg:mt-0 lg:bg-white lg:divide-y lg:divide-gray-100 lg:focus:outline-none sm:right-0 sm:z-10 sm:mt-2 sm:w-56 sm:origin-top-right sm:divide-y sm:divide-gray-100 sm:rounded-md sm:bg-white  sm:focus:outline-none">
        <div className="flex flex-col justify-center">
          <div className="grid grid-flow-row">
            <div className='lg:bg-slate-100 lg:my-1 lg:px-20'>
              <p className='text-white lg:text-black font-bold text-lg lg:text-xl py-3'>Ethical hacking</p>
              <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 lg:gap-10">
                <Link onClick={() => setIsOpen(!isOpen)} to='/training/linuxfundamentals'>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.linux} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 " />
                    Linux Fundamental
                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`} aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>Essential skills for Linux operating system.</div>
                </Link>
                
                <Link onClick={() => setIsOpen(!isOpen)} to='/training/advanceeh'>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.hacker} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 " />
                    Advanced Ethical Hacking
                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`} aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'> Mastery in ethical hacking techniques.</div>
                </Link>
                
                <Link onClick={() => setIsOpen(!isOpen)} to='/training/webpt'>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.webhack} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 " />
                    Web Application Penetration Testing
                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`} aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>Assessing security of web applications.</div>
                </Link>
                
                <Link onClick={() => setIsOpen(!isOpen)} to='/training/networkpt'>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.webbug} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 " />
                    Network Penetration Testing
                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`} aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>Evaluating network security vulnerabilities rigorously.</div>
                </Link>
                
                <Link onClick={() => setIsOpen(!isOpen)} classsName='' to='/training/bugbounty'>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.bugs} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 " />
                    Bug Bounty
                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`} aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>Rewarding discovery of software vulnerabilities.</div>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} classsName='' to='/training/bugbounty'>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.mobsec} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 " />
                    Mobile Application Penetration Testing

                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`} aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>Rewarding discovery of software vulnerabilities.</div>
                </Link>

              </div>
            </div>
          </div>
          {/* new gray menu */}
          <div className='lg:bg-slate-100 lg:my-1 lg:px-20 lg:h-36 flex flex-col justify-center'>
            <Link onClick={() => setIsOpen(!isOpen)} to='training/corporatetraining'>
              <p className='text-white lg:text-black font-bold text-lg lg:text-xl py-3'>Corporate training</p>
            </Link>

            <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>
              Tailored programs enhancing skills for organizational growth and efficiency.</div>
          </div>
          {/* new gray menu */}
          <div className='lg:bg-slate-100 lg:my-1 lg:px-20 lg:h-36 flex flex-col justify-center'>
            <Link onClick={() => setIsOpen(!isOpen)} to='training/diploma'>
              <p className='text-white lg:text-black font-bold text-lg lg:text-xl py-3'>Diploma in Cyber security</p>
            </Link>

            <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>
              Comprehensive program securing digital environments with advanced strategies.</div>
          </div>
          {/* new gray menu */}
          <div className='lg:bg-slate-100 lg:my-1 lg:px-20 lg:h-36 flex flex-col justify-center'>
            <Link onClick={() => setIsOpen(!isOpen)} to='training/internship'>
              <p className='text-white lg:text-black font-bold text-lg lg:text-xl py-3'>Internship training</p>
            </Link>

            <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>
              Hands-on experience refining skills in professional work environments.</div>
          </div>
        </div>
      </Menu.Items>
      </Transition>
    </Menu>
  )
}
