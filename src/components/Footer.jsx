import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../assets'
import xss from 'xss';



const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loader, setLoader] = useState(false);

  const [formStatus, setFormStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const invalidKeys = "<>{}[]|\\$^`";

  const handleSubmit = async (e) => {
    console.log("first")
    e.preventDefault();
    setLoader(true);
  
    // Basic form validation
    const errors = {};
    const sanitizedFormData = {}; // Object to store sanitized form data
  
    // Sanitize each form field
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        const sanitizedValue = xss(formData[key]); // Sanitize the value using xss library
        sanitizedFormData[key] = sanitizedValue; // Store the sanitized value
      }
    }
  
    // Perform validation on sanitized form data

    if (sanitizedFormData.email.trim() === "" || invalidKeys.includes(sanitizedFormData.email)) {
      errors.email = "Email is required";
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoader(false);
      return;
    }
  
    // If no errors, proceed with form submission
    try {
      const formDataToSend = new FormData();
for (const key in formData) {
  formDataToSend.append(key, formData[key]);
}
  
const response = await fetch("https://script.google.com/macros/s/AKfycbxIDZid8J3qFtHyIAo9xqfB_YVpUi17TvenXYVE9NN5VIIRJ_M2izjAIFRbVDS48hVQ/exec", {
  method: "POST",
  body: formDataToSend,
});
      if (response.ok) {
        setFormStatus("Welcome aboard! 🛡️ Your inbox is now your fortress against cyber threats.");
        setShowPopup(true); // Show popup on successful submission
        setFormData({
          email: "",
         
        });
      } else {
        setFormStatus("An error occurred while submitting the form.");
        setShowPopup(true); // Show popup on error
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("An error occurred while submitting the form.");
      setShowPopup(true); // Show popup on error
    }
    setLoader(false);
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = xss(value); // Sanitize the input value
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: sanitizedValue,
    }));
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };
  return (<>
        {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <div className="text-end pb-8">
              <button onClick={handleClosePopup} className="bg-gray-500 items-center text-white font-semibold text-xl p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-lg text-green-500 text-center mb-4">{formStatus}</div>
          </div>
        </div>
      )}
      {loader && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <div className="text-lg text-green-500 text-center mb-4">Submitting...</div>
          </div>
        </div>
      )}
    <div className='flex flex-col bg-custum-bg-dark pt-10'>
      <div className='flex flex-col md:flex-row  '>
        <div className='md:w-1/3 h-auto md:h-full ml-8 mt-8'>
          <h1 className='text-white text-2xl font-bold mb-5 ml-8'>Services</h1>
          <div>
            <ol className="list-none">
            <Link to='/training/'>

              <li className="md:w-52 text-custom-fontColor-Dark ml-5 mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Training
              </li>
            </Link>
              <Link to='/training/corporatetraining'>
              <li className=" md:w-52 text-custom-fontColor-Dark ml-5 mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Corporate Training
              </li>
              </Link>
              <Link to='/services'>
              <li className=" md:w-52 text-custom-fontColor-Dark ml-5 mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Services
              </li>
              </Link>
              <Link to='/services/consultancy'>
                <li className=" md:w-52 text-custom-fontColor-Dark ml-5 mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Consultancy
                </li>
              </Link>
              <Link to='/services/redteaming'>
                <li className=" md:w-52 text-custom-fontColor-Dark ml-5 mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Red Teaming
                </li>
              </Link>
            </ol>
          </div>
        </div>
        <div className=' md:w-1/3 h-full ml-8 mt-8'>
          <h1 className='text-white text-2xl font-bold mb-5 ml-8'>Quick Links</h1>
          <ol className="list-none">
            <Link to='/career'>
              <li className=" md:w-24 text-custom-fontColor-Dark ml-5 mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Career
              </li>
            </Link>
            <Link to='/training/internship'>
              <li className=" md:w-40 text-custom-fontColor-Dark ml-5 mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Internship Training
              </li>
            </Link>
            <Link to='/about'>
              <li className=" md:w-24 text-custom-fontColor-Dark ml-5 mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                About Us
              </li>
            </Link>
            <Link to='/blog'>
              <li className=" md:w-24 text-custom-fontColor-Dark ml-5 mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Blog
              </li>
            </Link>
            <Link to='/contact'>
              <li className=" md:w-24 text-custom-fontColor-Dark ml-5 mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1 inline-block transform rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Support
              </li>
            </Link>
            {/* Add other list items */}
          </ol>
        </div>
        <div className=' md:w-1/3 h-full lg:ml-8 md:mr-10 md:mt-0'>
          <h1 className='text-white text-2xl font-bold mb-5 ml-5 mt-8'>
            News Letter
          </h1>
          <div>
            <h1 className='text-custom-fontColor-Dark mx-5 lg:ml-5 lg:mr-10'>
              Stay informed about cybersecurity risks. Get the latest security updates directly to your email inbox
            </h1>
            <div className="flex flex-col md:flex-row items-center mt-6 ">
               <form className='flex flex-col lg:flex-row'>
              <div className=" rounded-lg mb-4 md:mb-0">
               <input
               onChange={handleChange}
               value={formData.email}
                  name="email"
                  type="email"
                  className="mt-4 ml-5 h-10 px-4 focus-visible:ring-4 duration-500 text-white bg-custum-bg-dark  border border-solid border-white w-80 rounded-lg
                  "
                  placeholder="Enter your email"
                />
                {formErrors.email && (<p className="text-red-500 text-sm ml-5">{formErrors.email}</p>)}
              </div>
              <button onClick={handleSubmit} className="mt-4 ml-4 bg-custom-buttonColor-Green hover:bg-custom-buttonColor-GreenDark text-white font-bold py-2 px-4 rounded">
                Sign Up
              </button>
               </form>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        <div className="pt-6 ml-12 md:mt-20 justify-center md:justify-normal flex  md:p-10 ">

          <Link to={'https://www.facebook.com/cyberous.in?mibextid=dGKdO6'}>
            <img src={Images.facebookLight} alt="Facebook" className=" h-10 w-10 rounded-full object-contain mx-1 lg:hover:scale-110 transition-transform duration-300 mr-4 " />
          </Link>
          <Link to={'https://www.instagram.com/cyberous_?igsh=bndreTYxMnIxemxn'}>
            <img src={Images.instagramLight} alt="Instagram" className="h-10 w-10 rounded-full object-contain mx-1 lg:hover:scale-110 transition-transform duration-300 mr-4" />
          </Link>
          <Link to={'https://www.linkedin.com/company/cyberous'}>
            <img src={Images.linkedinLight} alt="LinkedIn" className="h-10 w-10 rounded-full object-contain mx-1 lg:hover:scale-110 transition-transform duration-300 mr-4" />
          </Link>
          <Link to={'https://twitter.com/cyberousinfosec'}>
            <img src={Images.xLight} alt="LinkedIn" className="h-10 w-10 rounded-full object-contain mx-1 lg:hover:scale-110 transition-transform duration-300 mr-4 " />
          </Link>
        </div>
        <div className='pr-4 md:pr-48'>
          <img src={Images.FiveStarReview} className='h-20 w-20 lg:h-72 lg:w-72 rounded-full mb-4' />
        </div>
      </div>
      <div className='h-full bg-black md:px-24'>
        
        <h1 className='hidden lg:block ml-32 pt-4 text-white text-base font-bold'> <span>© 2024 Cyberous.</span> All Rights Reserved.</h1>
        <h1 className=' lg:hidden pt-4 text-white text-center text-base font-bold'> <span>© 2024 Cyberous.</span><br/> All Rights Reserved.</h1>
        <div className='flex lg:flex-none justify-center items-center'>
          <ol className="grid grid-cols-2 md:flex md:flex-row list-none my-6 mx-5 self-center">
            <Link to={'/terms&Condition'}>
            <li className="md:w-52 text-custom-fontColor-Dark  mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
              
              Terms & Conditions
            </li>
            </Link>
            <Link to='/privacypolicy' className='ml-9 lg:ml-0'>
            <li className=" md:w-52 text-custom-fontColor-Dark mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
              
              Privacy Policy
            </li>
            </Link>
            <Link to={'/dmcapolicy'}>
            <li className=" md:w-52 text-custom-fontColor-Dark  mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
              
              DMCA Policy
            </li>
            </Link>
            <Link to='/disclaimer' className='ml-9 lg:ml-0'>
              <li className=" md:w-52 text-custom-fontColor-Dark mb-2 lg:hover:scale-110 transition duration-300 hover:text-custom-buttonColor-Green ">
                
                Disclaimer
              </li>
            </Link>

          </ol>
        </div>

      </div>

    </div>
  </>

  )
}

export default Footer