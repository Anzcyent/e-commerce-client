import React from 'react'

const NotFound = () => {
  return (
    <main className='font-urbanist w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-darkBlue font-bold tracking-wider'>404 Not Found</h1>
        <button className='bg-lightBlue text-white px-3 py-1 mt-5 hover-and-scale'>Return Home</button>
    </main>
  )
}

export default NotFound