import React from 'react'
import { Images } from '../../../assets'
import EvCard from '../../../components/EvCard'

const cardData = [
    {
        id: 0,
        imgUrl: Images.Ev1,
        headingText: 'Compliance Assurance',
        paragraphText: 'Ensure regulatory compliance with confidence, knowing that your digital assets meet industry standards and adhere to data protection regulations, mitigating legal risks.'
    },
    {
        id: 1,
        imgUrl: Images.Ev2,
        headingText: 'Budget Efficiency',
        paragraphText: 'Experience cost-effective security solutions tailored to your needs, optimizing your budget while fortifying your defenses against cyber threats.'
    },
    {
        id: 2,
        imgUrl: Images.Ev3,
        headingText: 'Strategic Security',
        paragraphText: "Elevate your organization's security strategy with our comprehensive services, offering strategic insights and proactive measures to safeguard against evolving cyber risks."
    },
]

const EvaluateBusiness = () => {
    return (
        <div className='bg-custom-greyBorderColor'>
    <div className='w-full h-full text-center bg-white'>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
            <div className='md:w-2/3 md:ml-8 md:mt-4'>
                <h1 className='font-sans text-4xl mt-4 md:mt-20 md:ml-28 mb-8 md:mb-20'>Evaluate your business capabilities and uncover opportunities for greater success.</h1>
            </div>
            <button className='m-8 ml-2 md:ml-12 rounded-full h-16 w-full md:w-48 border border-green-500 text-white bg-green-500 pl-3 pr-2 font-bold md:w-auto md:ml-0'>Get a free Consultation</button>
        </div>
    </div>
    <div className='flex justify-center m-8 md:m-12'>
        <div className='w-full md:w-1/4 m'>
            <h1 className='font-sans text-3xl md:text-5xl ml-4 md:ml-28'>
                Client Benefits
            </h1>
            <h1 className='font-sans text-3xl md:text-5xl mt-4 md:mt-8 font-bold ml-4 md:ml-28'>
                What do you get?
            </h1>
        </div>
    </div>
    <div className='flex justify-center'>
        <div className='flex flex-col md:flex-row bg-white shadow-xl rounded-xl w-full md:w-2/3 mb-10'>
            {cardData.map((item) => (
                <EvCard key={item.id} image={item.imgUrl} heading={item.headingText} paragraph={item.paragraphText} />
            ))}
        </div>
    </div>
</div>

    )
}

export default EvaluateBusiness
