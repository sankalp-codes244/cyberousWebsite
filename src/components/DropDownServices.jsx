import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import DropDownVapt from './DropDownVapt'
import { Link } from 'react-router-dom'
import LinkButtons from './LinkButtons'
import HoveredLinks from './HoveredLinks'

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
        <Menu.Items className="sm:absolute lg:fixed lg:w-full lg:h-screen lg:inset-y-30 lg:z-10 lg:mt-2 lg:bg-white lg:divide-y lg:divide-gray-100 lg:focus:outline-none sm:right-0 sm:z-10 sm:mt-2 sm:w-56 sm:origin-top-right sm:divide-y sm:divide-gray-100 sm:rounded-md sm:bg-white  sm:focus:outline-none">
        { [{name:'Consultancy',path:'services/Consultancy'},{name:'Red Teaming',path:'services/RedTeaming'}].map((type) => (
          <Link to={`/${type}`} onClick={()=>setIsOpen(false)}>
            <HoveredLinks name={type.name} link={type.path} />
          </Link>
        
        ))}

          <DropDownVapt openMenu={checkOpen}/>


             
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
