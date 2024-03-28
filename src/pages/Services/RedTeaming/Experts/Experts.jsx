import React from 'react'
import { Images } from '../../../../assets'

const Experts = () => {
    return (
        <div>
            <div className='md:flex'>
            <div className='md:w-1/2 md:hidden'>
                    <img src={Images.Expertsimg1} />
                </div>
                <div className='md:w-1/2 md:mx-10'>
                    <h1 className='text-2xl md:text-6xl mr-6 font-holtwood py-6 pl-4 text-left'>
                    RED TEAMING LEAD BY EXPERTS
                    </h1>
                    <p className='text-2xl mx-4 font-stylish pl-4 md:mr-6 pb-6 text-justify my-4'>
                    Elevate your security measures with our expert-led red teaming services. Backed by a team of seasoned professionals, we deliver robust solutions tailored to your organization's unique needs. Our experts possess in-depth knowledge of the latest cyber threats and utilize advanced techniques to simulate real-world attacks effectively.
                    </p>
                
                    <p className='text-2xl mx-4 font-stylish pl-4 md:mr-6 pb-6 text-justify my-4'>
                     Through meticulous testing and analysis, we uncover vulnerabilities and fortify your defenses against potential breaches. With our guidance, you can proactively safeguard your assets and maintain a resilient security posture in today's ever-evolving threat landscape. Trust our expertise to protect your business from digital adversaries.
                    </p>
                    
                </div>
                <div className='md:w-1/2 hidden md:block'>
                    <img src={Images.Expertsimg1}  className='w-full h-4/5'/>
                </div>
            </div>
        </div>
    )
}

export default Experts