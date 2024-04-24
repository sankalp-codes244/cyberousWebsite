import React, { useState, useEffect } from 'react'
import { Images } from '../../assets'
import ContactUsCard from '../../components/ContactUsCard'
import { Link } from 'react-router-dom'
import xss from 'xss'


const contactData = [
  {
    id: 0,
    name: 'Ask cyberous',
    desc: 'Check out our FAQs',
    Link: "Go →",
    nav: "/"
  },
  {
    id: 1,
    name: 'Call Us',
    desc: 'Give your local consumer service hotline a ring',
    Link: "Go →",
    nav: "tel:918199985888"
  },
  {
    id: 2,
    name: 'Drop A Review',
    desc: 'Find our Google Page',
    Link: "Go →",
    nav: "https://g.page/r/CRVoAJXhPKPfEAI/review"
  },
  {
    id: 3,
    name: 'Tweet Us',
    desc: "We're just a tweet away @cyberousinfosec",
    Link: "Go →",
    nav: "https://twitter.com/cyberousinfosec"
  },
  {
    id: 4,
    name: 'Speak Up',
    desc: "if you have a compliance concern (we'll keep it confidential)",
    Link: "Go →",
    nav: "#msg"
  },
]



const Contact = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    FirstName: "",
    LastName: "",
    question: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loader, setLoader] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChoice, setIsChoice] = useState(false)
  const [formStatus, setFormStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const invalidKeys = "<>{}[]|\\$^`";
  const handleSubmit = async (e) => {
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
    if (
      sanitizedFormData.phone.trim() === "" ||
      sanitizedFormData.phone.length < 10 ||
      sanitizedFormData.phone.length > 12 ||
      isNaN(sanitizedFormData.phone) ||
      invalidKeys.includes(sanitizedFormData.phone)
    ) {
      errors.phone = "Phone number is required";
    }
    if (sanitizedFormData.email.trim() === "" || invalidKeys.includes(sanitizedFormData.email)) {
      errors.email = "Email is required";
    }
    if (sanitizedFormData.FirstName.trim() === "" || invalidKeys.includes(sanitizedFormData.FirstName)) {
      errors.FirstName = "First name is required";
    }
    if (sanitizedFormData.LastName.trim() === "" || invalidKeys.includes(sanitizedFormData.LastName)) {
      errors.LastName = "Last name is required";
    }
    if (
      sanitizedFormData.question === "" ||
      sanitizedFormData.question === "NA" ||
      sanitizedFormData.question === "Select a service"
    ) {
      errors.question = "Please select a service";
    }
    if (sanitizedFormData.message.trim() === "" && invalidKeys.includes(sanitizedFormData.message)) {
      errors.message = "Message is required";
    }
  
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoader(false);
      return;
    }
  
    // If no errors, proceed with form submission
    try {
      const formData = new FormData(e.target);
  
      const response = await fetch("https://script.google.com/macros/s/AKfycbwuccL2VkkhsPzGUuTfTbPVPHb6rNe0nXQR6hnm3ff4TpNNaBoXcnLh8ybwfCtoBAY-dQ/exec", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setFormStatus("Thanks for reaching out to us! We will get back to you soon.");
        setShowPopup(true); // Show popup on successful submission
        setFormData({
          phone: "",
          email: "",
          FirstName: "",
          LastName: "",
          question: "",
          message: "",
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  
  return (
    <>
    {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <div className="text-lg text-green-500 text-center mb-4">{formStatus}</div>
            <button onClick={handleClosePopup} className="bg-custom-buttonColor-Green text-white font-semibold text-xl p-2 rounded-md">Close</button>
          </div>
        </div>
      )}
  {loader && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <div className="text-lg text-green-500 text-center mb-4">Submitting form...</div>
          </div>
        </div>
      )}
    <div>
      <div className='flex flex-col md:flex-row bg-custom-greyBorderColor my-10'>
        <div className='flex flex-col p-4 mt-4 md:mt-40 w-full md:w-1/2'>
          <h1 className='pr-20  text-6xl md:text-9xl  md:pr-0 font-bold text-center font-heading'>
            Contact Us
          </h1>
          <h1 className='text-2xl md:text-4xl py-10 text-center lg:py-20'>
            Need to Talk? We're Listening....
          </h1>
        </div>
        <img src={Images.contactUsImg1} className='p-4 w-full h-full lg:w-1/2' />
      </div>

      <div className='bg-custom-orange-color pb-14'>
        <h1 className='text-xl text-white md:text-3xl font-sans text-center p-6'>
          What works best for you ?
        </h1>
        <div className='flex justify-center'>
          <div className='md:w-11/12'>
            <div className='grid grid-col-1 mx-12 my-2 gap-6 md:gap-4 md:grid-cols-5 '>
              {contactData.map((item) => (
                  <ContactUsCard
                  key={item.id}
                    head={item.name}
                    desc={item.desc}
                    link={item.Link}
                    nav={item.nav}
                  />
              ))}
            </div>
          </div>

        </div>
        <div className=''>
          <h1 className='text-center text-white text-xl p-4'>
            You can also get in touch with us using the
            <Link>
              <span className='font-bold underline '> contact form </span>
              below.
            </Link>
          </h1>
        </div>
      </div>



      <div className='m-8 lg:ml-36 lg:mt-20'>
        <div className='md:w-1/2'>
          <div className='border-b-2 border-gray-400'/>
        <h1  className='text-2xl font-sans pt-20'>
          Leave Us A Message
        </h1>
        <p  id='msg' className='text-lg font sans py-4 lg:text-xl text-justify'>
          Your message will be sent to our teams worldwide, who will get back to you as soon as they can. Please be advised that weekends and public holidays might delay response time.
        </p>
        </div>
        <p className='text-xl py-2 font-normal'><span className='text-2xl lg:text-4xl text-red-700'> * </span><i>Mandatory Fields</i>  </p>
        <p className='text-xl py-2 '>
          What would you like to contact us about today?<span className='text-2xl md:text-4xl text-red-700'> * </span>
        </p>

        <div className=' lg:w-1/2'>
          <form id='myform' method='post' onSubmit={handleSubmit}  className='w-full  '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
              <label className='mx-4 text-black text-xl'>
                First Name :
                <input value={formData.FirstName} onChange={handleChange} type='text' name='FirstName' className='border border-solid border-black  px-2 bg-white h-10 w-full    '></input>
              {formErrors.FirstName && <p className='text-red-500 text-sm'>{formErrors.FirstName}</p>}

              </label>
              <label className='mx-4 text-black text-xl'>
                Last Name :
                <input value={formData.LastName} onChange={handleChange} type='text' name='LastName' className='border border-solid border-black  px-2 bg-white h-10 w-full '></input>
              {formErrors.LastName && <p className='text-red-500 text-sm'>{formErrors.LastName}</p>}
              </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-4'>
              <label className='mx-4 text-black text-xl'>
                Phone :
                <input value={formData.phone} onChange={handleChange} type='text' name='phone' className='border border-solid border-black px-2  bg-white h-10 w-full '></input>
              {formErrors.phone && <p className='text-red-500 text-sm'>{formErrors.phone}</p>}
              </label>
              <label className='mx-4 text-black text-xl'>
                Email :
                <input value={formData.email} onChange={handleChange}  type='email' name='email' className='border border-solid border-black px-2  bg-white h-10 w-full '></input>
                {formErrors.email && <p className='text-red-500 text-sm'>{formErrors.email}</p>}
              </label>


                </div>
                <div className='w-11/12 y-'>

<label className='mx-4 text-black text-xl'>
A question about...
</label>

  <select  value={formData.question}
            onChange={handleChange} name='question' className='border border-solid border-black bg-white mx-4 h-10 w-full'>
    <option value='NA'>Select a service</option>
    <option value='VAPT'>VAPT</option>
    <option value='Red Teaming'>   Red Teaming</option>
    <option value='Consultancy'>Consultancy</option>
    <option value='Training'>Training</option>
    <option value='Training'>Internship Training</option>
    
  </select>
  {formErrors.question && <p className='text-red-500 text-sm'>{formErrors.question}</p>}
</div>
            <div className='p-4  '>
              <p className='text-xl text-black py-4'>Your Comment  <span className=' text-2xl md:text-4xl text-red-700'> * </span></p>
              <textarea value={formData.message} onChange={handleChange} name='message' className='border border-solid border-black w-full h-64 font-serif text-black p-4' type='text' placeholder=''>
              </textarea>
              {formErrors.message && <p className='text-red-500 text-sm'>{formErrors.message}</p>}
            </div>
            <div className='flex justify-center items-center'>

                <button className='bg-custom-buttonColor-Green text-white font-semibold text-xl p-4 w-40 ' value='Submit' type='submit' id='submit'>SEND</button>
            </div>
          </form>
   
        </div>

      </div>


    </div>

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
    </>
    
  )
}

export default Contact;