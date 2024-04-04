import React from 'react'
import SideArrow from '../assets/Svgs/SideArrow'

const ProfileCard = ({ id, name, desc, location, type, qualifications, benefits, howtoapply }) => {
    return (
        <div className={`p-2 md:py-4 md:px-10 ${id % 2 == 0 ? 'bg-white' : '  bg-custom-greyBorderColor'}`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 `}>
                <div>
                    <h1 className='font-__Inter_aaf875 text-xl md:text-2xl font-bold'>
                        {name}
                    </h1>
                    <h1 className='text-base md:text-lg font-medium font-Roboto p-2'>Job Description</h1>
                    <div className='text-base md:text-lg p-2 text-justify font-Roboto'>
                        {
                            desc.map((item) => (
                                [<SideArrow />, item, <br />]
                            ))
                        }
                    </div>
                    <h1 className='text-base md:text-lg font-medium font-Roboto p-2'>Benefits</h1>
                    <div className='text-base md:text-lg p-2 text-justify font-Roboto'>
                        {
                            benefits.map((item) => (
                                [<SideArrow />, item, <br />]
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className='p-2 font-__Inter_aaf875 text-base md:text-lg'>
                     <span className='font-bold'> Location</span>: {location}
                    </h1>
                    <h1 className='p-2 font-__Inter_aaf875 text-base md:text-lg'>
                     <span className='font-bold'> Type</span>: {type}
                    </h1>
                    <h1 className='p-2 font-__Inter_aaf875 text-base md:text-lg'>
                     <span className='font-bold'> Qualifications</span>: {qualifications}
                    </h1>
                    <h1 className='p-2 font-__Inter_aaf875 text-base md:text-lg'>
                     <span className='font-bold'> How To Apply </span>: {howtoapply}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard