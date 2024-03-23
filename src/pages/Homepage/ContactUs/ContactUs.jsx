import React from 'react'
import { Images } from '../../../assets'
import ContactUsCard from '../../../components/ContactUsCard'

const ContactUs = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row'>
                <img src={Images.contactUsImg1} className='p-4 w-full h-full md:w-1/2' />
                <div className='flex flex-col p-4 mt-4 md:mt-40'>
                    <h1 className='text-2xl md:text-6xl font-serif font-bold'>
                        Contact Us
                    </h1>
                    <h1 className='text-xl md:text-3xl py-10 '>
                        Need to Talk We're Listening....
                    </h1>
                </div>
            </div>
            <div>
                <ContactUsCard />
            </div>
        </div>
    )
}

export default ContactUs