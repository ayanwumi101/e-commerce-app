import React from 'react'
import { useSelector } from 'react-redux'
import data from '../../data'
import CheckoutItem from '../checkoutItem/CheckoutItem'
import './checkout.css'



const Checkout = () => {
  const cart = useSelector(state => state.counter.cart)
  return (
    <div className='checkout-container'>
      <h2>Your Order <small>(s)</small></h2>
      {cart.map(i => <CheckoutItem key={i.id} id={i.id} count={i.count}/>)}
    </div>
  )
}

export default Checkout