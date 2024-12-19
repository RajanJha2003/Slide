import React from 'react'
import PaymentCard from './payment-card'

const Billing = () => {
  return (
    <div className='flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container'>
        <PaymentCard current='FREE' label='FREE' />
        <PaymentCard current='FREE' label='PRO' />

    </div>
  )
}

export default Billing