import React from 'react'
import { Images } from '../../../../../assets'

const PageHeader = () => {
  return (
    <div className='h-screen'>
            <div className='py-10 md:py-40 text-center relative bg-no-repeat bg-cover bg-center h-full object-cover' style={{ backgroundImage: `url(${Images.WebAppHeaderimg1})`, }}>
                <h1 className='text-center text-lg md:text-xl font-sans p-6 text-white'>
                    VULNERABILITY ASSESSMENT AND PENETRATION TESTING SERVICES
                </h1>
                <h1 className='text-center text-2xl md:text-6xl font-serif font-bold p-6 text-white'>
                IOS Application Penetration Testing
                </h1>
                <div className='flex justify-center'>
                    <div className='md:w-3/4'>
                        <p className='text-white text-justify p-6 '>
                        Enhance the security of your iOS applications with our thorough penetration testing services. Our specialists meticulously evaluate your app's security stance, identify vulnerabilities, and offer actionable recommendations to strengthen defenses against potential cyber threats. From detailed code examinations to dynamic testing, we diligently scrutinize every aspect to ensure the resilience of your iOS applications.
                        </p>
                        <button className='w-1/2 md:w-1/4 h-14 md:text-xl font-Roboto bg-custom-buttonColor-Green hover:bg-white rounded-full text-white hover:text-custom-buttonColor-Green hover:border hover:border-solid hover:border-custom-buttonColor-Green'>
                            Get a free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PageHeader