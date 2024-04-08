import React, { useEffect } from 'react'

const Tweet = () => {
    useEffect(() => {

        window.location.href = 'https://twitter.com/cyberousinfosec'
    }
    , [])
    
  return (
    <div className=''>
        <h1 className='text-3xl text-center text-black'>Redirecting to Twitter...</h1>
        <p className='text-center text-black'>If you are not redirected, <a href='https://twitter.com/cyberousinfosec'>click here</a></p>
        <p className='text-center text-black'>Checking Security...</p>
    </div>
  )
}

export default Tweet