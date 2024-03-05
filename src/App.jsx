import { useState } from 'react'
import './App.css'
// import { assets } from './assets/index.js'
import logo from './assets/images/cyberous.jpg'
import callLogo from './assets/images/phone-call.png'
import emailLogo from './assets/images/email.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
      <div className='bg-black h-20 flex justify-stretch'>
        <img src={callLogo}  className=' ml-14 mt-5 h-10 w-10 border-radius' alt='phone call logo'/>
        <text className='ml-2 mt-6 text-white'>+91 8199985888</text>
        <img src={emailLogo}  className=' ml-44 mt-5 h-10 w-10 border-radius' alt='phone call logo'/>
        <text className='ml-2 mt-6 text-white'>contact@cyberous.in</text>
      </div>
      <div className='bg-white h-24'>
        <h1 className='text-green-500 text-2xl font-bold '>Cyberous</h1>
      </div>
      {/* <img src={logo} alt='Cyberous Logo' width={'80'} height={'80'} /> */}
    </div>
    </>
  )
}

export default App
