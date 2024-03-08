import React from 'react'
import { Images } from '../../assets'

const WhyChooseUs = () => {
    return (
        <div>
            <div className='w-full h-11/12 pt-12 flex flex-row'>
                <div className='w-1/2 bg-custom-greyLightColor mb-10'>
                    <h1 className='text-black text-5xl font-bold ml-36 pb-4 mt-36'>Why To Choose Us</h1>
                    <div className="h-1 w-56 bg-custom-buttonColor-Green mt-6 rounded-full ml-36"></div>
                    <div className='pl-36 pr-12 pt-6 text-custom-fontColor-grey text-lg'>
                        <p>
                            Choose us for unparalleled cybersecurity solutions tailored to your needs. Our seasoned professionals bring extensive industry experience, ensuring comprehensive services from training to VAPT assessments. With a proven track record of safeguarding clients' digital assets, trust in our tailored approach for maximum protection.
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row ml-36 mt-16'>
                            <div className='bg-white rounded-full mb-4'>
                                <img src={Images.whychooseus2} className='h-20 w-20' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='ml-10 text-lg text-custom-buttonColor-Green'> Trusted</h1>
                                <h1 className='text-black font-bold text-2xl ml-10 mt-2'> Expert Training</h1>
                            </div>
                            <div className='flex flex-row ml-10'>
                                <div className='bg-white rounded-full mb-4'>
                                    <img src={Images.whychooseus3} className='h-20 w-20 ' />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='ml-10 text-lg text-custom-buttonColor-Green'> Quality</h1>
                                    <h1 className='text-black font-bold text-2xl ml-10 mt-2'> Quality Service</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row ml-36 mt-16'>
                            <div className='bg-white rounded-full mb-4'>
                                <img src={Images.whychooseus4} className='h-20 w-20' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='ml-10 text-lg text-custom-buttonColor-Green'> Smart</h1>
                                <h1 className='text-black font-bold text-2xl ml-10 mt-2'> Expert Consultancy </h1>
                            </div>
                            <div className='flex flex-row ml-10'>
                                <div className='bg-white rounded-full mb-4'>
                                    <img src={Images.whychooseus5} className='h-20 w-20 ' />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='ml-10 text-lg text-custom-buttonColor-Green'> 24/7</h1>
                                    <h1 className='text-black font-bold text-2xl ml-10 mt-2'> 24 * 7 Support </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={Images.whychooseus1} className='w-screen mb-10' />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs