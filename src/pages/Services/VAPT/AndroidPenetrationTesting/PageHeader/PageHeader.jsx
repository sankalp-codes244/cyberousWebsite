import React from 'react'
import { Images } from '../../../../../assets'

const PageHeader = () => {
  return (
<div className=''>
            <div className='py-10 md:py-40 text-center relative bg-no-repeat bg-cover bg-center h-full object-cover' style={{ backgroundImage: `url(${Images.WebAppHeaderimg1})`, }}>
                <h1 className='text-center text-lg md:text-xl font-sans p-6 text-white'>
                    VULNERABILITY ASSESSMENT AND PENETRATION TESTING SERVICES
                </h1>
                <h1 className='text-center text-2xl md:text-6xl font-serif font-bold p-6 text-white'>
                    Android Application Penetration Testing
                </h1>
                <div className='flex justify-center'>
                    <div className='md:w-3/4'>
                        <p className='text-white text-justify p-6'>
                        Our comprehensive methodology guarantees a thorough assessment of your network infrastructure, identifying vulnerabilities and strengthening defenses against potential cyber threats. From meticulous network exploration to simulating real-world attacks and conducting in-depth traffic analysis, our experts leave no aspect unexamined.
                        </p>
                        <button className='w-1/2 md:w-1/4 h-10 bg-custom-fontColor-grey hover:bg-white rounded-full'>
                            Get a free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </div>  )
}

export default PageHeader