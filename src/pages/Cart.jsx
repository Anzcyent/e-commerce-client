import React from 'react'
import { Announcement, Footer, Navbar, Newsletter } from '../components'
import { CartContainer } from '../containers'

const Cart = () => {
  return (
    <main className='flex flex-col min-h-[100vh]'>
      <Navbar />
      <Announcement />
      <CartContainer />
      <Newsletter/>
      <Footer/>
    </main>
  )
}

export default Cart