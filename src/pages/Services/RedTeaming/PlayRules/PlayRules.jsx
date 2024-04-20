import React from 'react'
import { Images } from '../../../../assets'

const PlayRules = () => {
    return (
        <div>
            <div className='md:flex my-10'>
                <div className='md:w-1/2 '>
                    <img src={Images.PlayRulesimg1} />
                </div>
                <div className='md:w-1/2 md:mx-10'>
                    <h1 className='text-5xl md:text-7xl mr-6 font-holtwood py-6 pl-4 text-left'>
                        We Don't Play By The Rules
                    </h1>
                    <p className='text-2xl mx-4 font-stylish  md:mr-6 pb-6 text-justify '>
                    While adhering to set parameters for launching simulated attacks on your organization, we also operate beyond conventional boundaries. We don't play by all rules, ensuring comprehensive testing of your security measures.
                    </p>
                    <p className=' mx-4 text-2xl font-stylish  md:mr-6 text-justify'>
                    While your systems remain secure from actual threats, we emulate real adversaries to uncover vulnerabilities within your organization's ever-evolving attack surface. This approach is crucial for identifying breach points and enhancing your overall security posture.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PlayRules