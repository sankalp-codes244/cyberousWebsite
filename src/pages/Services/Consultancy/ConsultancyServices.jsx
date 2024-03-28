import React from 'react'
import { Images } from '../../../assets'
import BriefCase from '../../../assets/Svgs/BriefCase'
import Data from '../../../assets/Svgs/Data'
import Page from '../../../assets/Svgs/Page'
const Cards =({name,desc,image})=>{
    return(
        <div className='border-solid border w-full h-96 relative  shadow-md bg-white rounded-md '>
            <div className='p-5'>{image}</div>
            <p className='text-2xl lg:text-3xl font-medium text-left text-black px-6'>{name}</p>
            <p className='text-base lg:text-xl text-left text-black px-6'>{desc}</p>
          </div>
    )
}
const ConsultancyServices = () => {
    const consultancyData = [
        {
            id:0,
            heading:'Cloud Security',
            desc:"We help you understand, address, and actively manage the risks you face to successfully operate your business in a secure cloud.",
            image:<BriefCase/>,
        },
        {
            id:1,
            heading:'Data Protection',
            desc:"We help preserve your business value by protecting sensitive data while assessing and maintaining compliance with regulatory and contractual requirements.",
            image:<Data/>,
        },
        {
            id:2,
            heading:'Attack and Penetration',
            desc:"We help protect your critical assets and data by identifying vulnerabilities and providing actionable remediation guidance. Applications, infrastructure, databases, IoT and mobile apps, whether on-premise or in the cloud, are safer with Protivity.",
            image:<Page/>,
        },
    ]
  return (
         <div className='py-10 md:py-40 text-center bg-no-repeat bg-cover  bg-center  object-cover' style={{ backgroundImage: `url(${Images.securityBG})`, backgroundAttachment: 'fixed' }}>

        <h1 className='text-3xl lg:text-6xl font-semibold py-4 text-white'>Our Cybersecurity Consulting services</h1>
        <div className='flex flex-wrap lg:flex-nowrap gap-6 m-8 justify-center '>
          {/* <div className="h-1 w-20 lg:w-32 bg-custom-buttonColor-Green mt-4 rounded-full"></div> */}
          {consultancyData.map((data)=>{

                return(
                    <Cards name={data.heading} desc={data.desc} image={data.image}/>
                )   
          })}
          
          
        </div>
      </div>

       
  )
}

export default ConsultancyServices