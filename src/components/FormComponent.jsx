import { useState, useEffect } from "react";
import { z, object, string } from "zod";

// Define the schema using Zod
const schema = object({
  mobileNumber: string().min(10).max(20),
  email: string().email(),
  firstName: string(),
  lastName: string(),
  serviceRequired: string(),
  description: string(),
});
export default function FormComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [formData, setFormData] = useState({
    mobileNumber: "",
    email: "",
    firstName: "",
    lastName: "",
    serviceRequired: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data against the schema
    const validationResult = schema.safeParse(formData);
    console.log("🤪",validationResult)

    if (validationResult.success) {
      // Form data is valid, proceed with submission
      console.log("Form data:", formData);
      // Reset form errors
      setFormErrors({});
    } else {
      // Form data is invalid, update form errors
      setFormErrors(validationResult.error.flatten().fieldErrors);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <form className={`rounded-lg border bg-white text-black shadow-xl w-full max-w-2xl ${isOpen ? 'open' : ''}`}>
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl lg:text-4xl font-semibold whitespace-nowrap leading-none tracking-tight text-black">Contact us</h3>
        <p className="text-sm lg:text-xl text-black ">
          Enter your details and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="mobile-number" className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">Mobile number</label>
            <input type="text" id="mobile-number" placeholder="Enter your mobile number" className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-5 text-sm lg:text-xl text-black focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-5 text-sm lg:text-xl text-black lg:text-xl focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">First name</label>
            <input type="text" id="first-name" placeholder="Enter your first name" className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-200 px-3 text-sm py-5 text-black lg:text-xl focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500" />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">Last name</label>
          
            <input type="text" id="last-name" placeholder="Enter your last name" className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-5 text-sm lg:text-xl text-black focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="service-required" className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">Looking for  </label>
          <select
  id="service-required"
  name="serviceRequired"
  value={formData.serviceRequired}
  onChange={handleChange}
  className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-5 text-sm text-black lg:text-xl focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500"
>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
        </div>
        <div className="space-y-2">
          <label htmlFor="description" className="text-sm lg:text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black">Description</label>
          <textarea id="description" placeholder="Enter your description" className="flex w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-5 text-sm lg:text-xl text-black lg:text-xl focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-300 duration-500 min-h-[100px]" />
        </div>
        <button className="inline-flex items-center shadow-lg border  justify-center whitespace-nowrap rounded-md text-sm lg:text-xl font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 duration-500 focus:ring-offset-2 bg-primary text-black hover:bg-opacity-90 h-10 px-4 py-5">Submit</button>
      </div>
    </form>
  );
}
