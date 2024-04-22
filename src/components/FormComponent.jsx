import { useState, useEffect } from "react";
import xss from "xss";

// Define the schema using Zod

export default function FormComponent() {
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
    if (invalidKeys.includes(sanitizedFormData.message)) {
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
  
      const response = await fetch("https://script.google.com/macros/s/AKfycbzYM4qTyi8YLsZL7awW7eUYwM6MfczeoKH-8fdmpJwlos48UVmqkrLdtSAJESZA774v/exec", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setFormStatus("Thanks for reaching out to us! We will get back to you soon.");
        setShowPopup(true); // Show popup on successful submission
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
  const [formStatus, setFormStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);



  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
            <div className="text-lg text-green-500 text-center mb-4">Submitting form...</div>
          </div>
        </div>
      )}
      
    <form  id='myform' method='post' onSubmit={handleSubmit}  className={`rounded-lg border bg-white text-black shadow-xl w-full max-w-2xl ${isOpen ? 'open' : ''}`}>
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl lg:text-4xl font-semibold whitespace-nowrap leading-none tracking-tight text-black">
          Contact us
        </h3>
        <p className="text-sm lg:text-xl text-black ">
          Enter your details and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="p-6 space-y-4">
      <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">First name</label>
            <input value={formData.FirstName} onChange={handleChange} name='FirstName' type="text" id="first-name" placeholder="Enter your first name" className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-200 px-3 text-sm py-5 text-black lg:text-xl focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500" />
            {formErrors.FirstName && <div className="text-red-500 text-sm text-center">{formErrors.FirstName}</div>}

          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">Last name</label>
          
            <input value={formData.LastName} onChange={handleChange} name='LastName' type="text" id="last-name" placeholder="Enter your last name" className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-5 text-sm lg:text-xl text-black focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500" />
            {formErrors.LastName && <div className="text-red-500 text-sm text-center">{formErrors.LastName}</div>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="mobile-number" className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">Mobile number</label>
            <input value={formData.phone} onChange={handleChange} name='phone'  type="text" id="mobile-number" placeholder="Enter your mobile number" className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-5 text-sm lg:text-xl text-black focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500" />
            {formErrors.phone && <div className="text-red-500 text-sm text-center">{formErrors.phone}</div>}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">Email</label>
            <input value={formData.email} onChange={handleChange}   name='email' type="email" id="email" placeholder="Enter your email" className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-5 text-sm lg:text-xl text-black lg:text-xl focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500" />
          {formErrors.email && <div className="text-red-500 text-sm text-center">{formErrors.email}</div>}
          </div>
        </div>
        
        <div className="space-y-2">
          <label
            htmlFor="service-required"
            className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
          >
            Looking for{" "}
          </label>
          <select name='question'
            id="service-required"
            value={formData.question}
            onChange={handleChange}
            className=" h-10 w-full rounded-md border border-gray-300 bg-gray-200  text-sm text-black lg:text-xl focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500"
          >
               <option value='NA'>Select a service</option>
    <option value='VAPT'>VAPT</option>
    <option value='Red Teaming'>   Red Teaming</option>
    <option value='Consultancy'>Consultancy</option>
    <option value='Training'>Training</option>
          </select>
          {formErrors.question && <div className="text-red-500 text-sm text-center">{formErrors.question}</div>}
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">Description</label>
          <textarea  value={formData.message} onChange={handleChange} name='message' id="message" placeholder="Enter your message" className="flex w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-5 text-sm lg:text-xl text-black  focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500 min-h-[100px]" />
        </div>
        <button className="inline-flex items-center shadow-lg border  justify-center whitespace-nowrap rounded-md text-sm lg:text-xl font-medium ring-offset-background transition-colors focus:outline-none bg-green-500 text-white focus:ring-2 focus:ring-gray-300 duration-500 focus:ring-offset-2 bg-primary text-white hover:bg-opacity-90 h-10 px-4 py-5">Submit</button>
      </div>
      
    </form>
    </>
  );
}
