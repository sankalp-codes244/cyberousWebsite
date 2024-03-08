import React from 'react'
import { Images } from '../../../assets'

const IndustrialRecognition = () => {
    return (
        <div>
            <div className=''>
                <h1 className='text-center text-custom-buttonColor-Green text-3xl'>
                    OUR MEMBERS & CERTIFICATIONS
                </h1>
                <h1 className='text-center text-custom-buttonColor-Green text-5xl font-bold mt-6'>
                    Members and Certification <span className='text-black font-semibold'> we have </span>
                </h1>
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col'>
                    <div className='flex flex-row'>
                        <img src={Images.indrec1} className='m-8 duration-500 h-48 w-48 mt-10 hover:scale-110'/>
                        <img src={Images.indrec2} className='m-8 duration-500 h-48 w-48 mt-10 hover:scale-110'/>
                        <img src={Images.indrec3} className='m-8 duration-500 h-48 w-48 mt-10 hover:scale-110'/>
                        <img src={Images.indrec4} className='m-8 duration-500 h-48 w-48 mt-10 hover:scale-110'/>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}

export default IndustrialRecognition