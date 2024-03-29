import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown'; // Ensure your DropDown is responsive if it includes any content that needs to adjust
import { Images } from '../assets';
import DropDownService from './DropDownServices'
import LinkButtons from './LinkButtons';

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
        <Link to="/" className="text-green-500 font-heading text-2xl font-bold">
          Cyberous
        </Link>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu" className="focus:outline-none duration-200">
            {isOpen ? (
              <svg className="w-6 h-6 duration-200" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6 duration-200" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Menu items */}
        <div className={`${isOpen ? 'hidden' : 'hidden'}  lg:flex lg:justify-end lg:items-center w-1/2`}>
          <div className='lg:flex lg:justify-evenly lg:items-center w-full'>
          <Link to='/' className=''>
            <LinkButtons links='Home'/>
          </Link>

          <DropDown LinkButtons={LinkButtons} />
          <Link to='/services' className=''>
            <DropDownService LinkButtons={LinkButtons}/>
          </Link>
          <Link to='/about' className=''>
          <LinkButtons links='About'/>
          </Link>
          <Link to='blog' className=''>
            <LinkButtons links='Blog'/>
          </Link>
          <Link to='blog' className=''>
            <LinkButtons links='Career'/>
          </Link>
          <Link to='/contact' className=''>
            <LinkButtons links='Contact'/>
          </Link>
          </div>
          <div className="flex w-3/12 justify-between ">
            <Link to={'https://www.facebook.com/cyberous.in?mibextid=dGKdO6'}>
              <img src={Images.facebookDark} alt="Facebook" className=" h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.facebookLight)} onMouseOut={(e) => (e.currentTarget.src = Images.facebookDark)} />
            </Link>
            <Link to={'https://www.instagram.com/cyberous_?igsh=bndreTYxMnIxemxn'}>
              <img src={Images.instagramDark} alt="Instagram" className="h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.instagramLight)} onMouseOut={(e) => (e.currentTarget.src = Images.instagramDark)} />
            </Link>
            <Link to={'https://www.linkedin.com/company/cyberous'}>
              <img src={Images.linkedinDark} alt="LinkedIn" className="h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.linkedinLight)} onMouseOut={(e) => (e.currentTarget.src = Images.linkedinDark)} />
            </Link>
            <Link to={'https://twitter.com/cyberousinfosec'}>
              <img src={Images.xDark} alt="LinkedIn" className="h-8 w-8 rounded-full object-contain mx-1 hover:scale-110 transition-transform duration-300" onMouseOver={(e) => (e.currentTarget.src = Images.xDark)} onMouseOut={(e) => (e.currentTarget.src = Images.xDark)} />
            </Link>
          </div>
        </div>
      </div>

      {/* Dropdown menu for mobile screens */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-white shadow-md z-50`}>
        <div className="flex flex-col items-center">
          <Link to='/' className="text-sm font-medium py-2.5 px-3">Home</Link>
          <DropDown />
          <Link to='/services'>
            <DropDownService/>
          </Link>
          <Link to='/about' className="text-sm font-medium py-2.5 px-3">About</Link>
          <Link to='/blog' className="text-sm font-medium py-2.5 px-3">Blog</Link>
          <Link to='/blog' className="text-sm font-medium py-2.5 px-3">Career</Link>
          <Link to='/contact' className="text-sm font-medium py-2.5 px-3">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
