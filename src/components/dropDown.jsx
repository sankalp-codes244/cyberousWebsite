import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import LinkButtons from './LinkButtons';
import TrainingCard from './TrainingCard';
import HoveredLinks from './HoveredLinks';  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left" onClick={() => setIsOpen(!isOpen)} onMouseLeave={() => setIsOpen(false)}>
      <div>
        <Menu.Button onClick={() => setIsOpen(!isOpen)} className="inline-flex w-full justify-center rounded-md py-2  lg:font-bold  text-center">
          <div>
          <LinkButtons links='Training' isOpen={isOpen}/>
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
        <Menu.Items className="sm:absolute lg:fixed lg:w-full lg:h-full lg:inset-y-30 lg:z-10 lg:mt-2 lg:bg-black lg:divide-y lg:divide-gray-100 lg:focus:outline-none sm:right-0 sm:z-10 sm:mt-2 sm:w-56 sm:origin-top-right sm:divide-y sm:divide-gray-100 sm:rounded-md sm:bg-white  sm:focus:outline-none" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <div className="">
            <div className="grid grid-flow-row">
              {["bug_bounty", "Linux_Fundamental", "Advanced_Ethical_Hacking", "Cyber_Security_Diploma", "Application_Development"].map((type,index) => (
                <HoveredLinks key={index} name={type} />
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
