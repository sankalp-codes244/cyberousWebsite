import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative block text-left w-full"  onClick={() => setIsOpen(!isOpen)} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md  text-sm md:mx-3 font-medium  text-gray-900 ">
          VAPT
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition linear duration-300" // Adjust the duration here (e.g., duration-500)
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition linear duration-300" // Adjust the duration here (e.g., duration-500)
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-110"
      >
        <Menu.Items className="sm:absolute lg:fixed lg:w-full lg:inset-y-30 lg:z-10 lg:mt-2 lg:bg-white lg:divide-y lg:divide-gray-100 lg:focus:outline-none sm:right-0 sm:z-10 sm:mt-2 sm:w-56 sm:origin-top-right sm:divide-y sm:divide-gray-100 sm:rounded-md sm:bg-white  sm:focus:outline-none">  <div className="py-1">
            
            <Menu.Item>
              {({ active }) => (
                  <Link 
                  to='/services/websecurity'
                  className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                      )}
                      >
                  Web Application Security
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/services/sourcecode'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Source Code
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                to='/services/network'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    Network
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='services/iotpt'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  IOT Penetration Testing
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='services/iospt'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  IOS Application Penetration Testing
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='services/apipt'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  API Penetration Testing
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/services/androidpt'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Android Application Penetration Testing
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
