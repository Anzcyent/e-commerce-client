import React from 'react'
import { Footer, Navbar, Newsletter } from '../components'
import { OrdersContainer } from '../containers'

const Orders = () => {
  return (
    <main className="flex flex-col h-[100vh]">
        <Navbar />
        <OrdersContainer />
        <Newsletter />
        <Footer />
    </main>
  )
}

export default Orders