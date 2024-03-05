import { Images } from '../assets'

const Header = () => {
  return (
    <div className='bg-black h-16 flex justify-stretch'>
    {/* Call Logo Code */}
    <img src={Images.logo} className=' ml-14 mt-5 h-10 w-10 border-radius' alt='phone call logo' />
    <p className='ml-2 mt-6 text-white'>+91 8199985888</p>
    {/* Email Logo Code */}
    <img src={Images.callLogo} className=' ml-44 mt-5 h-10 w-10 border-radius' alt='phone call logo' />
    <p className='ml-2 mt-6 text-white'>contact@cyberous.in</p>
  </div>
  )
}

export default Header