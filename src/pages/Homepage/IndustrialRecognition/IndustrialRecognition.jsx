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
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-44'>
                    <img src={Images.indrec1} alt="Recognition 1" className='duration-500 h-32 w-32 md:h-48 md:w-48 hover:scale-150 object-contain'/>
                    <img src={Images.indrec2} alt="Recognition 2" className='duration-500 h-32 w-32 md:h-48 md:w-48 hover:scale-150 object-contain'/>
                    <img src={Images.indrec3} alt="Recognition 3" className='duration-500 h-32 w-32 md:h-48 md:w-48 hover:scale-150 object-contain'/>
                    <img src={Images.indrec4} alt="Recognition 4" className='duration-500 h-32 w-32 md:h-48 md:w-48 hover:scale-150 object-contain'/>
                </div>
            </div>
        </div>
    )
}
export default IndustrialRecognition;
