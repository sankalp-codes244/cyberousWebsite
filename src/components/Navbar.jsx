import { useState } from 'react';
import DropDown from './DropDown'

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white h-20 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center h-full px-4 md:px-8">
        <Link to="/">
        <h1 className="text-custom-orange-color text-2xl font-bold mx-4">Cyberous</h1>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {/* Icon for menu (example: bars icon from font awesome or any svg) */}
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex items-center`}>
          <a href="#about">

          <p className="md:mx-8 hover:bg-custom-orange-hover-color focus:bg-custom-orange-hover-color text-sm font-medium rounded-lg  py-2.5 text-center">Home</p>
          </a>

          <DropDown />
          <button className="md:mx-8 hover:bg-custom-orange-hover-color focus:bg-custom-orange-hover-color text-sm font-medium rounded-lg py-2.5 text-center">Service</button>
          <button className="md:mx-8 hover:bg-custom-orange-hover-color focus:bg-custom-orange-hover-color text-sm font-medium rounded-lg py-2 text-center">About</button>
          <button className="md:mx-8 hover:bg-custom-orange-hover-color focus:bg-custom-orange-hover-color text-sm font-medium rounded-lg py-2.5 text-center">Blog</button>
          <button className="md:mx-8 hover:bg-custom-orange-hover-color focus:bg-custom-orange-hover-color text-sm font-medium rounded-lg py-2.5 text-center">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
