import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import DropDownVapt from './DropDownVapt'
import { Link } from 'react-router-dom'
import LinkButtons from './LinkButtons'
import HoveredLinks from './HoveredLinks'
import { Images } from '../assets';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const checkOpen =()=>{
    setIsOpen(false);
  }

  return (
    <Menu as="div" className="relative inline-block text-left" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
    <div>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="inline-flex w-full justify-center rounded-md py-2  lg:font-bold  text-center">
        <div>
        <LinkButtons links='Services' isOpen={isOpen}/>
        </div>
        <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 ${isOpen? 'rotate-180':''} duration-300`} aria-hidden="true" />
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
      <Menu.Items className="sm:absolute lg:fixed lg:w-full  lg:inset-y-20 lg:z-10 lg:mt-0 lg:bg-white lg:divide-y lg:divide-gray-100 lg:focus:outline-none sm:right-0 sm:z-10 sm:mt-2 sm:w-56 sm:origin-top-right sm:divide-y sm:divide-gray-100 sm:rounded-md sm:bg-white  sm:focus:outline-none" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        {/* { [{name:'Consultancy',path:'services/Consultancy'},{name:'Red Teaming',path:'services/RedTeaming'}].map((type) => (
          <Link onClick={()=>setIsOpen(false)} to={`/${type}`} onClick={()=>setIsOpen(false)}>
            <HoveredLinks name={type.name} link={type.path} />
          </Link>
        
        ))} */}
 <div className="flex flex-col justify-center">
          <div className="grid grid-flow-row">
            <div className='lg:bg-slate-100 lg:my-1 lg:px-20'>
              <p className='text-white lg:text-black font-bold text-lg lg:text-xl py-3'>VAPT</p>
              <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 lg:gap-10">
                <Link onClick={()=>setIsOpen(false)} to='/services/websecurity' className=''>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.websec} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 "/>
                    Web Application Testing
                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`} aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>Assessing web application security thoroughly.</div>
                </Link>
              
                <Link onClick={()=>setIsOpen(false)} to='/services/networksecurity'>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.hacker} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 "/>
                    Network Penetration Testing



                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`} aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>Evaluating network security vulnerabilities rigorously.</div>
                </Link>
                
                <Link onClick={()=>setIsOpen(false)} to='/services/IoTsecurity'>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.IoTsec} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 "/>
                    IoT Penetration Testing
                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`} aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'> Testing security of IoT devices comprehensively.</div>
                </Link>
                
                <Link onClick={()=>setIsOpen(false)} to='/services/source-code-review'>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.webbug} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 "/>
                    Source Code Review
                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`} aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>Analyzing code for security vulnerabilities diligently.</div>
                </Link>
                
                <Link onClick={()=>setIsOpen(false)} to='/services/androidsecurity'className=''>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.mobsec} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 "/>
                    
Android Pen Testing
                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`}  aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>Assessing Android app security comprehensively.</div>
                </Link>
                <Link onClick={()=>setIsOpen(false)} to='/services/iossecurity' className=''>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.mobsec} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 "/>
                    
                    iOS Pen Testing
                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`}  aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'> Evaluating iOS app security thoroughly.</div>
                </Link>
                <Link onClick={()=>setIsOpen(false)} to='/services/apisecurity'className=''>
                  <div className='text-white lg:text-black lg:font-medium flex items-center '>
                    <img src={Images.bugs} alt="Ethical Hacking" className="w-7 hidden lg:block mx-2 "/>
                    
                    API Pen Testing
                    <ChevronDownIcon className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90`}  aria-hidden="true" />
                  </div>
                  <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>Assessing API security vulnerabilities rigorously.</div>
                </Link>
                  
                </div>
              </div>
            </div>
            {/* new gray menu */}
            <div className='lg:bg-slate-100 lg:my-1 lg:px-20 lg:h-36 flex flex-col justify-center'>
              <Link onClick={()=>setIsOpen(false)} to={`/services/RedTeaming`}>
              <p className='text-white lg:text-black font-bold text-lg lg:text-xl py-3'>Red Teaming</p>
              </Link>
             
             <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>
             Simulating real-world attacks to enhance defense strategies.</div>
          </div>
            {/* new gray menu */}
            <div className='lg:bg-slate-100 lg:my-1 lg:px-20 lg:h-36 flex flex-col justify-center'>
              <Link onClick={()=>setIsOpen(false)} to='/services/Consultancy'>
              <p className='text-white lg:text-black font-bold text-lg lg:text-xl py-3'>Cybersecurity Consultancy</p>
              </Link>
             
             <div className='text-white lg:text-black lg:font-normal items-center hidden lg:block my-2'>
             Expert guidance enhancing digital security infrastructure.</div>
          </div>
            
        </div>

  
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
