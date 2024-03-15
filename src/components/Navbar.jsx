import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown'; // Ensure your DropDown is responsive if it includes any content that needs to adjust
import { Images } from '../assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-white h-20 sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''} transition-shadow duration-200`}>
      <div className="flex justify-between items-center h-full px-4 md:px-8">
        <Link to="/" className="text-custom-orange-color text-2xl font-bold">
          Cyberous
        </Link>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu" className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Menu items */}
        <div className={`${isOpen ? 'hidden' : 'hidden'} md:flex items-center`}>
          <Link to='/'>
            <p className="md:mx-3 text-sm rounded-lg py-2.5 text-center">Home</p>
          </Link>

          <DropDown />
          <Link to='/services'>
            <button className="md:mx-3 text-sm font-medium rounded-lg py-2.5 text-center">Service</button>
          </Link>
          <Link to='/about'>
            <button className="md:mx-3 text-sm font-medium rounded-lg py-2 text-center">About</button>
          </Link>
          <Link to='blog'>
            <button className="md:mx-3 text-sm font-medium rounded-lg py-2.5 text-center">Blog</button>
          </Link>
          <Link to='/contact'>
            <button className="md:mx-3 text-sm font-medium rounded-lg py-2.5 text-center">Contact</button>
          </Link>
        <div className="flex ">
            <img src={Images.facebookDark} alt="Facebook" className=" h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.facebookLight)} onMouseOut={(e) => (e.currentTarget.src = Images.facebookDark)} />
            <img src={Images.instagramDark} alt="Instagram" className="h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.instagramLight)} onMouseOut={(e) => (e.currentTarget.src = Images.instagramDark)} />
            <img src={Images.linkedinDark} alt="LinkedIn" className="h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.linkedinLight)} onMouseOut={(e) => (e.currentTarget.src = Images.linkedinDark)} />
            <img src={Images.xDark} alt="LinkedIn" className="h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.xDark)} onMouseOut={(e) => (e.currentTarget.src = Images.xDark)} />
          </div>
          </div>
      </div>

      {/* Dropdown menu for mobile screens */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-white shadow-md z-50`}>
        <div className="flex flex-col items-center">
          <Link to='/' className="text-sm font-medium py-2.5 px-3">Home</Link>
          <DropDown />
          <Link to='/services' className="text-sm font-medium py-2.5 px-3">Service</Link>
          <Link to='/about' className="text-sm font-medium py-2.5 px-3">About</Link>
          <Link to='/blog' className="text-sm font-medium py-2.5 px-3">Blog</Link>
          <Link to='/contact' className="text-sm font-medium py-2.5 px-3">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
