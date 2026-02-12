import React from 'react'
import { useSelector } from 'react-redux'

function CartPage() {
  const {cartItems, totalPrice} = useSelector((state)=>state.cart);
  return (
      <div>
        {
          cartItems.map((item)=>(
            <p>
              {
              item.title
              }x {item.quantity}
            </p>
          ))
        }
            <h3>Total: ${totalPrice}</h3>
      </div>
      
      
  )
}

export default CartPage;