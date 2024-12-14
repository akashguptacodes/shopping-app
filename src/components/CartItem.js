import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { remove } from '../redux/Slices/CartSlices'
import './CartItem.css'


const CartItem = ({item,itemIndex}) => {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed");
    }
  return (
    <div>
        <div className='outer-container'>
            <div>
                <img src={item.image} alt='p' className='cart-product-img'/>
            </div>
            <div>
                <h1 className='title'>{item.title}</h1>
                <h1 className='desc'>{item.description}</h1>
                <div className='price-aur-delete'>
                    <p className='price'>${item.price}</p>
                    <div onClick={removeFromCart}>
                        <FcDeleteDatabase fontSize='1.75rem'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem