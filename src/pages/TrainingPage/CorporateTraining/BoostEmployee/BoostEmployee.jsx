import React from 'react'
import { Images } from '../../../../assets'

const BoostEmployee = () => {
    return (
        <div className='md:py-20'>
            <div className='flex justify-center'>
                <div className='p-4 md:w-3/4'>
                    <h1 className='text-center font-__Inter_aaf875 font-bold text-xl md:text-4xl py-10'>
                        Boost employees’ cybersecurity awareness with training from Cyberous security experts
                    </h1>
                    <div className='md:flex md:justify-center'>
                        <div className='md:w-3/4'>
                            <p className='font-__Inter_aaf875 text-lg text-center p-4'>
                                <span className='font-bold'>Ensuring heightened security </span> stands as a paramount necessity for businesses, regardless of their size, urging all employees to grasp the significance of shielding themselves and the company against cyber attacks and human exploits.<span className='font-bold'> Conducting cybersecurity training for  staff members, </span> at every level, instills a sense of empowerment, both within <span className='font-bold'> office premises and remotely. </span> This proactive approach <span className='font-bold'> fosters confidence </span> among employees in their ability to navigate through tasks such as password creation, discerning suspicious emails, and safe internet browsing.
                            </p>
                            <p className='font-__Inter_aaf875 text-lg text-center p-4'>
                                Statistics reveal the dire consequences of security breaches, with <span className='font-bold'> up to 60% of small and medium-sized enterprises collapsing within six months of a cyber attack. </span> The staggering global average cost of data breaches further underscores the urgency for robust cybersecurity measures. Compliance regulations, including <span className='font-bold'> HIPAA, PCI, SOX, GDPR, and CCPA, </span>alongside insurance requirements, mandate comprehensive cybersecurity training for all employees, emphasizing the criticality of <span className='font-bold'> preparedness in the face of evolving threats.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='md:w-5/6'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 mb-6  rounded-lg'>
                        <div className='bg-custom-greycolor1 w-full shadow-lg'>
                            <div className='grid grid-cols-1 gap-10 md:w-full'>
                                <div className='flex justify-center'>
                                    <img src={Images.BoostEmployeeimg1} className='w-20 m-4' />
                                </div>
                                <div className='flex justify-center'>
                                    <h1 className='font-__Inter_aaf875 font-bold text-4xl'>4+</h1>
                                </div>
                                <div className='flex justify-center'>
                                    <h1 className='font-__Inter_aaf875 font-bold text-lg md:text-2xl mb-6'>Years Experiece</h1>
                                </div>
                            </div>
                        </div>
                        <div className='bg-custom-greycolor1 w-full shadow-lg'>
                            <div className='grid grid-cols-1 gap-10 md:w-full'>
                                <div className='flex justify-center'>
                                    <img src={Images.BoostEmployeeimg2} className='w-20 m-4' />
                                </div>
                                <div className='flex justify-center'>
                                    <h1 className='font-__Inter_aaf875 font-bold text-4xl'>25</h1>
                                </div>
                                <div className='flex justify-center'>
                                    <h1 className='font-__Inter_aaf875 font-bold text-lg md:text-2xl mb-6'>Certified Experts</h1>
                                </div>
                            </div>
                        </div>
                        <div className='bg-custom-greycolor1 w-full shadow-lg'>
                            <div className='grid grid-cols-1 gap-10 md:w-full'>
                                <div className='flex justify-center'>
                                    <img src={Images.BoostEmployeeimg3} className='w-20 m-4' />
                                </div>
                                <div className='flex justify-center'>
                                    <h1 className='font-__Inter_aaf875 font-bold text-4xl'>100%</h1>
                                </div>
                                <div className='flex justify-center'>
                                    <h1 className='font-__Inter_aaf875 font-bold text-lg md:text-2xl mb-6'>Client Satisfaction</h1>
                                </div>
                            </div>
                        </div>
                        <div className='bg-custom-greycolor1 w-full shadow-lg'>
                            <div className='grid grid-cols-1 gap-10 md:w-full'>
                                <div className='flex justify-center'>
                                    <img src={Images.BoostEmployeeimg5} className='w-20 m-4' />
                                </div>
                                <div className='flex justify-center'>
                                    <h1 className='font-__Inter_aaf875 font-bold text-4xl'>24/7</h1>
                                </div>
                                <div className='flex justify-center'>
                                    <h1 className='font-__Inter_aaf875 font-bold text-lg md:text-2xl mb-6'>Desk Service</h1>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoostEmployee