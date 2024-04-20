import React from 'react'
import FormComponent from '../../../../components/FormComponent'
import { Images } from '../../../../assets'
import { Link } from 'react-router-dom'

const PageHeader = () => {
    return (
        <div className='relative'>
            <img src={Images.ethicalhackingimg10} className=' hidden md:block bg-custom-black-color absolute right-0 top-20'/>
            <div className='bg-custom-black-color'>
                <div className='md:flex md:flex-row'>
                    <div className='md:w-2/3'>
                        <div className='flex flex-col'>
                            <h1 className='text-white text-center text-xl md:text-3xl font-__Inter_aaf875 font-bold p-10 md:pt-56'>
                                Unlock Your Potential in Cyber Security
                            </h1>
                            <h1 className='text-custom-fontColor-Green text-center text-4xl md:text-7xl font-__Inter_aaf875 font-bold'>
                                Internship Program
                            </h1>
                            <div className='md:flex md:flex-row justify-center py-10 md:py-28 px-4'>
                                <Link to='/contact' className='w-full flex justify-center'>
                                <button className='bg-custom-fontColor-Green text-white text-xl font-bold font-__Inter_aaf875 w-full md:w-1/3 p-4 rounded-md hover:bg-custom-buttonColor-GreenDark '>
                                    Enroll Now
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-ful p-10 md:p-20 md:mr-40'>
                        <FormComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader