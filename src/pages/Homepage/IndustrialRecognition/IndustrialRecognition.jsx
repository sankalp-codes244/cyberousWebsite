import React from 'react'
import { Images } from '../../../assets'

const IndustrialRecognition = () => {
    return (
        <div className="px-4 py-10">
            <div className=''>
                <h1 className='text-center text-custom-buttonColor-Green text-2xl md:text-3xl font-serif'>
                    OUR MEMBERS & CERTIFICATIONS
                </h1>
                <h1 className='text-center text-custom-buttonColor-Green text-3xl md:text-5xl font-bold mt-6 font-serif'>
                    Members & Certifications <span className='text-black font-semibold '> We Have </span>
                </h1>
            </div>
            <div className='flex justify-center mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20'>
                    <img src={Images.indrec1} alt="Recognition 1" className='duration-500 h-40 w-40 md:h-56 md:w-56 hover:scale-150 object-contain'/>
                    <img src={Images.indrec2} alt="Recognition 2" className='duration-500 h-40 w-40 md:h-56 md:w-56 hover:scale-150 object-contain'/>
                    <img src={Images.indrec3} alt="Recognition 3" className='duration-500 h-40 w-40 md:h-56 md:w-56 hover:scale-150 object-contain'/>
                    <img src={Images.indrec4} alt="Recognition 4" className='duration-500 h-40 w-40 md:h-60 md:w-60 hover:scale-150 object-contain'/>
                    <img src={Images.indrec5} alt="Recognition 4" className='duration-500 h-40 w-40 md:h-56 md:w-56 hover:scale-150 object-contain'/>
                    <img src={Images.indrec6} alt="Recognition 4" className='duration-500 h-40 w-40 md:h-56 md:w-56 hover:scale-150 object-contain'/>
                </div>
            </div>
        </div>
    )
}
export default IndustrialRecognition;
