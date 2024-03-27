import React from 'react'
import { Images } from '../../../../assets'

const CyberAttacks = () => {
    return (
        <div className='mt-10'>
            <div className='md:flex '>
                <div className='md:w-1/2'>
                <img src={Images.CyberAttacksimg1} />
                </div>
                <div className=' md:w-2/3 p-4  md:py-10 md:p-20'>
                    <h1 className='text-3xl md:text-7xl font-holtwood py-4'>
                        Red Team Services
                    </h1>
                    <h1 className='text-3xl md:text-6xl font-holtwood text-orange-500 py-2'>
                        Cyber Attacks
                    </h1>
                    <p className='text-2xl font-stylish pl-4 md:pl-0 md:pr-20 md:text-justify'>
                        Experience the relentless power of our red team services, as we execute realistic cyber attacks across all facets of your brand. Leveraging digital, physical, and social methods, we provide comprehensive security solutions to safeguard your business.
                    </p>
                </div>
            </div>
            <div className='p-6 md:px-20 '>
                <div className='h-full grid grid-cols-1 md:grid-cols-3  p-10 '>
                    <div className=' p-4 md:p-10 hover:bg-orange-500 hover:text-white'>
                        <h1 className=' text-3xl md:text-5xl font-holtwood py-4'>
                            Digital
                        </h1>
                        <p className='text-2xl font-stylish '>
                            Lifelike attack simulations that will secure genuine value and unparalleled new levels of security.
                        </p>
                    </div>
                    <div className=' hover:bg-orange-500 hover:text-white'>
                        <div className=' mx-4 p-4 md:p-10'>
                            <h1 className=' text-3xl md:text-5xl font-holtwood py-4'>
                                Physical
                            </h1>
                            <p className='text-2xl font-stylish'>
                                Realistic physical attacks giving you complete confidence in what should be your first line of defense.
                            </p>
                        </div>

                    </div>
                    <div className=' hover:bg-orange-500 hover:text-white'>
                        <div className=' mx-4 p-4 md:p-10'>
                            <h1 className=' text-3xl md:text-5xl font-holtwood py-4'>
                                SOCIAL
                            </h1>
                            <p className='text-2xl font-stylish'>
                                Attacks to expose human-related risks, helping you instill a positive and thriving security culture.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CyberAttacks