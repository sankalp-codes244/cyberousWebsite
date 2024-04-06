import React from 'react'
import { Images } from '../../../../assets'

const PageHeader = () => {
  return (
    <div className='text-center relative bg-no-repeat bg-cover bg-center h-screen object-cover' style={{ backgroundImage: `url(${Images.CorporateTrainingbg})`, }}>
        <div className='w-3/4'>
          <div className='flex justify-center pt-40'>
            <div className=''>
              <h1 className='text-3xl md:text-6xl text-white font-__Inter_aaf875'>Corporate Cyber</h1>
              <h1 className='text-6xl md:text-9xl text-white font-bold font-__Inter_aaf875'>Security</h1>
              <h1 className='text-6xl md:text-9xl text-white font-bold font-__Inter_aaf875'>Training</h1>
              <div className='h-1 w-10 md:w-20 bg-white mx-4 md:mx-10'></div>
            </div>
          </div>
        </div>
        <div className='text-white font-__Inter_aaf875 font-bold md:text-2xl p-10 text-left md:text-center'>
        LOOKING FOR A PREMIUM CORPORATE TRAINING EXPERIENCE? CONTACT US TODAY
        </div>
      </div>
  )
}

export default PageHeader