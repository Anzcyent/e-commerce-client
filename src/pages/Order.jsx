import React from 'react'
import { Footer, Navbar, Newsletter } from '../components'
import { OrderContainer } from '../containers'

const Order = () => {
  return (
    <main className="flex flex-col h-[100vh]">
        <Navbar />
        <OrderContainer />
        <Newsletter />
        <Footer />
    </main>
  )
}

export default Order