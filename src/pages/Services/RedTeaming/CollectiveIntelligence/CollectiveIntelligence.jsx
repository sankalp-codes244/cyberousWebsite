import React from 'react'
import { Images } from '../../../../assets'

const CollectiveIntelligence = () => {
    return (
        <div className='bg-custom-black-color'>
            <div className='md:flex'>
                <div className='md:w-1/2 md:hidden'>
                    <img src={Images.Collectiveimg1} />
                </div>
                <div className='md:w-1/2 md:mx-10 md:px-10 text-white'>
                    <h1 className='text-4xl md:text-8xl mr-6 font-holtwood pt-6 pl-4 text-left text-white'>
                        Collective 
                    </h1>
                    <h1 className='text-4xl md:text-8xl mr-6 font-holtwood pb-6 pl-4 text-left text-orange-500'>
                        Intelligence
                    </h1>
                    <div className='pr-10'>
                    <p className='text-2xl mx-2 font-stylish pl-4 md:mr-6 pb-6 md:text-justify my-4'>
                    The collective hive mind of our ethical hackers is incorporated on our <span className='text-orange-500'> attack surface management platform</span> – a library of discovered vulnerabilities and live attack surface mapping which can, in real time, direct them to any areas of a business and enable them to stay on top of their constantly evolving attack perimeter.
                    </p>

                    <p className='text-2xl mx-2 font-stylish pl-4 md:mr-6 pb-6 md:text-justify my-4'>
                    For our clients, this proprietary offensive exploration engine delivers significant value via long-term insights and instant access to each of our <span className='text-orange-500'> cyber attack simulations.</span>
                    </p>
                    </div>

                </div>
                <div className='md:w-1/2 hidden md:block'>
                    <img src={Images.Collectiveimg1} className='my-48 mx-20 h-full w-11/12 object-contain' />
                </div>
            </div>
        </div>
  )
}

export default CollectiveIntelligence