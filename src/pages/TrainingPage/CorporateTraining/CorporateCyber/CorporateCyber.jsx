import React from 'react'
import { Images } from '../../../../assets'

const CorporateCyber = () => {
    return (
        <div className='bg-custom-custom-blackbg p-4  py-20 md:py-28'>
            <div>
                <h1 className='text-custom-fontColor-Green font-__Inter_aaf875 text-sm md:text-2xl text-center'>
                    REAL TIME CORPORATE CYBER SECURITY TRAINING
                </h1>
                <h1 className='text-white font-__Inter_aaf875 text-2xl py-5 md:text-4xl text-center font-bold p-10 '>
                    Comprehensive Coporate Cyber Security Training by Threatsys
                </h1>
            </div>
            <div className='flex justify-center'>
                <div className='md:w-4/5'>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                            <div className='flex flex-row p-8'>
                                <div className='m-4'>
                                    <img src={Images.coporatecyber1} className='w-80 hover:animate-pulse'/>
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-white font-__Inter_aaf875 text-xl py-4 font-bold'>The Human Element</h1>
                                    <p className='font-__Inter_aaf875 text-white'>Cybersecurity awareness training emerges as the most effective method to bolster the human aspect of your company's security. Especially crucial for remote workers, such training addresses vulnerabilities like phishing, social engineering, compromised passwords, and lax network security, safeguarding your business from potential attackers.</p>
                                </div>
                            </div>
                            <div className='flex flex-row p-8'>
                                <div className='m-4'>
                                    <img src={Images.coporatecyber2} className='w-80 hover:animate-pulse'/>
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-white font-__Inter_aaf875 text-xl py-4 font-bold'>On Demand Training</h1>
                                    <p className='font-__Inter_aaf875 text-white'>Cybersecurity training is commonly offered on-demand, in the form of online courses, allowing learners to proceed at their own pace, from any location, and revisit the material as needed. To ensure effective learning and behavioral change, engaging training content is essential, as learning is hindered when individuals feel disengaged or bored.</p>
                                </div>
                            </div>
                            <div className='flex flex-row p-8'>
                                <div className='m-4'>
                                    <img src={Images.coporatecyber3} className='w-80 hover:animate-pulse'/>
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-white font-__Inter_aaf875 text-xl py-4 font-bold'>Completed Anually</h1>
                                    <p className='font-__Inter_aaf875 text-white'>To maintain employees' awareness of online protection measures and keep them informed about emerging threats and attack methods, it's advisable to conduct training sessions at least once annually. Additionally, various business compliance regulations and insurance policies necessitate annual training as a prerequisite.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CorporateCyber