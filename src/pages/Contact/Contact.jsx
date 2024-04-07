import React, { useState, useEffect } from 'react'
import { Images } from '../../assets'
import ContactUsCard from '../../components/ContactUsCard'
import { Link } from 'react-router-dom'



const contactData = [
  {
    id: 0,
    name: 'Ask Cyberous',
    desc: 'Check out our FAQs',
    Link: "Go →"
  },
  {
    id: 1,
    name: 'Call Us',
    desc: 'Give your local consumer service hotline a ring',
    Link: "Go →"
  },
  {
    id: 2,
    name: 'Drop A Review',
    desc: 'Find our Google Page',
    Link: "Go →"
  },
  {
    id: 3,
    name: 'Tweet Us',
    desc: "We're just a tweet away @cyberousinfosec",
    Link: "Go →"
  },
  {
    id: 4,
    name: 'Speak Up',
    desc: "if you have a compliance concern (we'll keep it confidential)",
    Link: "Go →"
  },
]


const Contact = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChoice, setIsChoice] = useState(false)
  const [formStatus, setFormStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    const formData = new FormData(event.target);

    fetch('https://script.google.com/macros/s/AKfycbzYM4qTyi8YLsZL7awW7eUYwM6MfczeoKH-8fdmpJwlos48UVmqkrLdtSAJESZA774v/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Update form status
      setFormStatus(data.message);
      setShowPopup(true); // Show popup on successful submission
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
      setFormStatus('An error occurred while submitting the form.');
      setShowPopup(true); // Show popup on error
    });
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  
  return (
    <>
    
    <div>
      <div className='flex flex-col md:flex-row bg-custom-greyBorderColor my-10'>
        <div className='flex flex-col p-4 mt-4 md:mt-40 w-full md:w-1/2'>
          <h1 className='pr-20  text-6xl md:text-9xl  md:pr-0 font-bold text-center font-heading'>
            Contact Us
          </h1>
          <h1 className='text-2xl md:text-4xl py-10 text-center md:py-20'>
            Need to Talk? We're Listening....
          </h1>
        </div>
        <img src={Images.contactUsImg1} className='p-4 w-full h-full md:w-1/2' />
      </div>

      <div className='bg-custom-orange-color pb-14'>
        <h1 className='text-xl text-white md:text-3xl font-sans text-center p-6'>
          What works best for you ?
        </h1>
        <div className='flex justify-center'>
          <div className='md:w-11/12'>
            <div className='grid grid-col-1 mx-12 my-2 gap-6 md:gap-4 md:grid-cols-5 '>
              {contactData.map((item) => (
                <Link>
                  <ContactUsCard
                    head={item.name}
                    desc={item.desc}
                    link={item.Link}
                  />
                </Link>
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
        <h1 className='text-2xl font-sans pt-20'>
          Leave Us A Message
        </h1>
        <p className='text-lg font sans py-4 lg:text-xl text-justify'>
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
                <input type='text' name='FirstName' className='border border-solid border-black  px-2 bg-white h-10 w-full    '></input>
              </label>
              <label className='mx-4 text-black text-xl'>
                Last Name :
                <input type='text' name='LastName' className='border border-solid border-black  px-2 bg-white h-10 w-full '></input>
              </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-4'>
              <label className='mx-4 text-black text-xl'>
                Phone :
                <input type='text' name='phone' className='border border-solid border-black px-2  bg-white h-10 w-full '></input>
              </label>
              <label className='mx-4 text-black text-xl'>
                Email :
                <input type='email' name='email' className='border border-solid border-black px-2  bg-white h-10 w-full '></input>
              </label>


                </div>
                <div className='w-11/12 y-'>

<label className='mx-4 text-black text-xl'>
A question about...
</label>

  <select name='question' className='border border-solid border-black bg-white mx-4 h-10 w-full'>
    <option value='NA'>Select a service</option>
    <option value='VAPT'>VAPT</option>
    <option value='Red Teaming'>   Red Teaming</option>
    <option value='Consultancy'>Consultancy</option>
    <option value='Support'>Support</option>
  </select>
</div>
            <div className='p-4 px-8 '>
              <p className='text-xl text-black py-4'>Your Comment  <span className=' text-2xl md:text-4xl text-red-700'> * </span></p>
              <textarea name='message' className='border border-solid border-black w-full h-64 font-serif text-black p-4' type='text' placeholder=''>
              </textarea>
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
            <div className="text-lg text-green-500 text-center mb-4">{formStatus}</div>
            <button onClick={handleClosePopup} className="bg-custom-buttonColor-Green text-white font-semibold text-xl p-2 rounded-md">Close</button>
          </div>
        </div>
      )}
    </>
    
  )
}

export default Contact;