import { useState, useEffect } from 'react';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import { Images } from '../assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array ensures this effect runs only once after the initial render

  return (
    <div className={`bg-white h-20  sticky top-0 z-50 ${isScrolled ?  'shadow-md delay-200':''}`}>
      <div className="flex justify-between items-center h-full px-4 md:px-8">
        <Link to="/">
          <h1 className="text-custom-orange-color text-2xl font-bold mx-4">Cyberous</h1>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {/* Icon for menu */}
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex items-center`}>
          <a href="#about">
            <p className="md:mx-3 text-sm rounded-lg  py-2.5 text-center">Home</p>
          </a>

          <DropDown />
          <button className="md:mx-3  text-sm font-medium rounded-lg py-2.5 text-center">Service</button>
          <button className="md:mx-3  text-sm font-medium rounded-lg py-2 text-center">About</button>
          <button className="md:mx-3  text-sm font-medium rounded-lg py-2.5 text-center">Blog</button>
          <button className="md:mx-3  text-sm font-medium rounded-lg py-2.5 text-center">Contact</button>
          <button className="md:mx-3 text-sm font-medium rounded-lg py-2.5 text-center">
            <img src={Images.facebookDark} className='h-10 w-10 rounded-full' onMouseOver={(e) => e.currentTarget.src = Images.facebookLight} onMouseOut={(e) => e.currentTarget.src = Images.facebookDark }/>
          </button>
          <button className="md:mx-4 text-sm font-medium rounded-lg py-2.5 text-center">
            <img src={Images.instagramDark} className='h-10 w-10 rounded-full' onMouseOver={(e) => e.currentTarget.src = Images.instagramLight} onMouseOut={(e) => e.currentTarget.src = Images.instagramDark }/>
          </button>
          <button className="md:mx-4 text-sm font-medium rounded-lg py-2.5 text-center">
            <img src={Images.linkedinDark} className='h-10 w-10 rounded-full' onMouseOver={(e) => e.currentTarget.src = Images.linkedinLight} onMouseOut={(e) => e.currentTarget.src = Images.linkedinDark}/>
          </button>
          <button className="md:mx-4 text-sm font-medium rounded-lg py-2.5 text-center">
            <img src={Images.xDark} className='h-10 w-10 rounded-full' onMouseOver={(e) => e.currentTarget.src = Images.xLight} onMouseOut={(e) => e.currentTarget.src = Images.xDark }/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
