import React from 'react'
import EvCard from '../../../../../components/EvCard'
import { Images } from '../../../../../assets'

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
        <div class='bg-custom-greyBorderColor'>
            <div class='w-full h-full text-center bg-white'>
                <div class='flex flex-col md:flex-row mt-16'>
                    <div class='md:w-2/3 md:ml-8 mt-4'>
                        <h1 class='font-sans text-4xl mt-4 md:ml-28 mb-20'>Evaluate your business capabilities and uncover opportunities for greater success.</h1>
                    </div>
                    <button class='m-8 ml-12 md:ml-0 md:mt-8 rounded-full h-16 md:w-48 border border-green-500 text-white bg-green-500 pl-3 pr-2 font-bold hover:bg-custom-buttonColor-GreenDark'>Get a free Consultation</button>
                </div>
            </div>
            <div class='flex justify-center mt-12'>
                <div class='md:w-1/3 '>
                    <h1 class='text-center font-sans my-4 text-xl md:text-3xl'>Client Benefits</h1>
                    <h1 class='font-sans text-center text-3xl md:text-5xl font-bold '>What do you get?</h1>
                </div>
            </div>
            <div class='flex justify-center'>
                <div class='flex flex-col md:flex-row w-full md:w-2/3 mb-10'>
                    {cardData.map((item) => (
                        <EvCard key={item.id} image={item.imgUrl} heading={item.headingText} paragraph={item.paragraphText} />
                    ))}
                </div>
            </div>
        </div>

    )
}



export default EvaluateBusiness

