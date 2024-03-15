import React, { useState } from 'react'
import { Images } from '../assets'
const FaqCard = ({ name, description }) => {
    const [isOpen, setIsOpen] = useState(false)
    const buttonHandler = () => {
        setIsOpen(!isOpen)

    }
    return (
        <div>
            <div className='flex justify-center'>
                <div className=' bg-white w-2/3 h-full rounded-xl m-4 shadow-xl '>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-xl font-bold m-6'>
                            {name}
                        </h1>
                        <button onClick={() => buttonHandler()}>
                            <img src={Images.chevronDown} className='m-6 mr-8 h-7' alt='this is an image' />
                        </button>
                    </div>
                    <div className={`${isOpen ? '' : 'hidden'}`} >
                        <p className='p-4 pt-0'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqCard