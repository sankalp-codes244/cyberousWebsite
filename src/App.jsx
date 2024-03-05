import { useState } from 'react'
import './App.css'
// import { assets } from './assets/index.js'
import logo from './assets/images/cyberous.jpg'
import callLogo from './assets/images/phone-call.png'
import emailLogo from './assets/images/email.png'
import DropDown from './components/DropDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        {/* Header Code */}
        <div className='bg-black h-16 flex justify-stretch'>
          {/* Call Logo Code */}
          <img src={callLogo} className=' ml-14 mt-5 h-10 w-10 border-radius' alt='phone call logo' />
          <text className='ml-2 mt-6 text-white'>+91 8199985888</text>
          {/* Email Logo Code */}
          <img src={emailLogo} className=' ml-44 mt-5 h-10 w-10 border-radius' alt='phone call logo' />
          <text className='ml-2 mt-6 text-white'>contact@cyberous.in</text>
        </div>
        {/* Nav Bar Code */}
        <div className='bg-white h-20'>
          {/* Title Code */}
          <div className='flex justify-between items-center h-full px-4'>
              <h1 className='text-green-500 text-2xl font-bold mx-4'>Cyberous</h1>
            
            <div>
              {/* Buttons Code */}
              <button className="mx-8">Home</button>
              {/* <DropDown /> */}
              <DropDown />
              <button className="mx-8">Service</button>
              <button className="mx-8">About</button>
              <button className="mx-8">Blog</button>
              <button className="mx-8">Contact</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
