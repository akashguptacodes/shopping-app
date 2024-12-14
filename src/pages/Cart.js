import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'


const Cart = () => {

  const {cart} = useSelector((state)=>state);
  const[totalAmount,setTotalAmount] = useState(0);


  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart]);

  return (
    <div>
       {
        cart.length>0 ? 
        (<div className='cart'>
          <div className='left-side'>
            {
              cart.map((item,itemIndex)=>{
                return(<CartItem key={item.id} item={item} itemIndex={itemIndex}/>)
              })
            }
          </div>
          <div className='right-side'>
            <div>
              <div className='text1'>Your Cart</div>
              <div className='text2'>Summary</div>
              <p>
                <span className='text3'>Total Items: <b>{cart.length}</b></span>
              </p>
            </div>
            <div>
              <p className='text4'>Total Amount: <b>${totalAmount}</b></p>
              <button className='checkout'>
                Checkout Now
              </button>
            </div>
          </div>

        </div>)
         : 
        (
          <div className='empty-cart'>
            <h1>Cart is Empty</h1>
            <Link to = '/'>
              <button className='shop-now'>Shop Now</button>
            </Link>
          </div>
        )
       }
    </div>
  )
}

export default Cart