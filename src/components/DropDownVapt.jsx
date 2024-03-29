import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import LinkButtons from './LinkButtons'
import HoveredLinks from './HoveredLinks'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown({openMenu}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative lg:text-2xl py-5 lg:font-bold mx-10  inline-block" onClick={() => setIsOpen(!isOpen)} onMouseLeave={() => setIsOpen(false)}>
        <Menu.Button onClick={() => setIsOpen(!isOpen)} className="inline-flex w-full justify-center items-center rounded-md py-2  lg:font-bold  text-center">
          <div>
          <LinkButtons links='VAPT' isOpen={isOpen}/>
          </div>
          <ChevronDownIcon className={`-mr-1 h-5 w-5 lg:h-10 lg:w-10  text-black ${isOpen? 'rotate-180':''} duration-300 `} aria-hidden="true" />
        </Menu.Button>

      {/* <Transition
        show={isOpen}
        as={Fragment}
        enter="transition linear duration-300" // Adjust the duration here (e.g., duration-500)
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition linear duration-300" // Adjust the duration here (e.g., duration-500)
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-110"
      > */}
        <Menu.Items className="sm:absolute lg:fixed lg:w-full lg:inset-y-30 lg:z-10 lg:mt-2 lg:bg-white lg:divide-y lg:divide-gray-100 lg:focus:outline-none sm:right-0 sm:z-10 sm:mt-2 sm:w-56 sm:origin-top-right sm:divide-y sm:divide-gray-100 sm:rounded-md sm:bg-white  sm:focus:outline-none" >  
        <div className="grid grid-cols-2 gap-3 grid-flow-row"  onClick={()=>openMenu(false)} >
            {[{name: "Web Application Security", link: "/services/websecurity"},{name: "Source Code", link: "/services/sourcecode"},{name: "Network", link: "/services/network"},{name: "IOT Penetration Testing", link: "/services/iotpt"},{name: "IOS Application Penetration Testing", link: "/services/iospt"},{name: "API Penetration Testing", link: "/services/apipt"},{name: "Android Application Penetration Testing", link: "/services/androidpt"}].map((type) => (
              <>
                  {/* <Link
                  to={type.link}
                  className={
                       'bg-gray-100 text-gray-900',
                      ' px-4 py-2 text-sm lg:p-10 lg:w-9/12 lg:hidden lg:text-xl w-full rounded-md shadow-md hover:bg-gray-200 hover:text-gray-900 text-center'
                      }
                      >
                  <p>{type.name}</p>
                </Link> */}

                <HoveredLinks name={type.name} link={type.link}  />
              </>

            ))}

    
            
           
          </div>
        </Menu.Items>
      {/* </Transition> */}
    </Menu>
  )
}
