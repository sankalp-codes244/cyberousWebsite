import React from 'react'
import { Images } from '../../../../assets'

const NamesYouKnow = () => {
    return (
        <div className='py-20'>
            <div className=' md:p-10'>
                <div className='md:px-10 md:w-4/5'>
                    <h1 className='text-6xl md:text-8xl mr-3 md:mr-0 font-Montreal py-6 pl-4 text-left'>
                        NAMES YOU KNOW.<span className='text-orange-500 font-Montreal'> IF WE COULD TELL YOU.</span>
                    </h1>
                    <div className='md:w-full'>
                        <p className='text-2xl md:text-4xl text-start font-stylish pb-10 md:m-6  md:text-justify'>
                            For us, client confidentiality is key. So, while we can’t reveal names, you can trust us when we say that some of the India’s leading and fastest growing organizations trust their cybersecurity to us.
                        </p>
                    </div>
                </div>
                    <div className='flex justify-center'>
                        <div className='p-10 md:p-0 grid grid-cols-2 md:grid-cols-4 gap-8'>
                            <img src={Images.NamesYouKnowimg1} />
                            <img src={Images.NamesYouKnowimg2} />
                            <img src={Images.NamesYouKnowimg3} />
                            <img src={Images.NamesYouKnowimg4} />
                            <img src={Images.NamesYouKnowimg5} />
                            <img src={Images.NamesYouKnowimg6} />
                            <img src={Images.NamesYouKnowimg7} />
                            <img src={Images.NamesYouKnowimg8} />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default NamesYouKnow