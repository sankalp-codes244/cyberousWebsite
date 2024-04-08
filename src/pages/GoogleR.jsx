import React, { useEffect } from 'react'

const GoogleR = () => {
    useEffect(() => {

        window.location.href = '/https://g.co/kgs/16dnDxb'
    }
    , [])
    
  return (
    <div className=''>
        <h1 className='text-3xl text-center text-black'>Redirecting to /https://g.co/kgs/16dnDxb...</h1>
        <p className='text-center text-black'>If you are not redirected, <a href='/https://g.co/kgs/16dnDxb'>click here</a></p>
        <p className='text-center text-black'>Checking Security...</p>
    </div>
  )
}

export default GoogleR