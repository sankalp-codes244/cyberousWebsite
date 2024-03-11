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

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu" className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? 'block absolute top-20 right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-xl z-20 flex flex-col items-center md:hidden' : 'hidden'} md:flex items-center `}>
          <a href="#home" className="text-sm font-medium rounded-lg py-2.5 text-center mx-3">
            Home
          </a>
          <DropDown />
          <a href="#services" className="text-sm font-medium rounded-lg py-2.5 text-center mx-3">
            Service
          </a>
          <a href="#about" className="text-sm font-medium rounded-lg py-2 text-center mx-3">
            About
          </a>
          <button className="text-sm font-medium rounded-lg py-2.5 text-center mx-3">
            Blog
          </button>
          <button className="text-sm font-medium rounded-lg py-2.5 text-center mx-3">
            Contact
          </button>
          {/* Hide social icons on mobile, visible on md screens and up */}
          <div className="hidden md:flex mx-3">
            <img src={Images.facebookDark} alt="Facebook" className="h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.facebookLight)} onMouseOut={(e) => (e.currentTarget.src = Images.facebookDark)} />
            <img src={Images.instagramDark} alt="Instagram" className="h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.instagramLight)} onMouseOut={(e) => (e.currentTarget.src = Images.instagramDark)} />
            <img src={Images.linkedinDark} alt="LinkedIn" className="h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.linkedinLight)} onMouseOut={(e) => (e.currentTarget.src = Images.linkedinDark)} />
            <img src={Images.xDark} alt="LinkedIn" className="h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.xDark)} onMouseOut={(e) => (e.currentTarget.src = Images.xDark)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
