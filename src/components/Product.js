import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import {add,remove} from '../redux/Slices/CartSlices'
import './Product.css'


const Product = (props) => {
    let post = props.post;
    const[selected,setSelected] = useState(false);
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to cart");
        setSelected(!selected);
    }
    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from cart");
        setSelected(!selected);

    }
  return (
    <div className='single-post'>
        <div>
            <p className='title'>{post.title}</p>
        </div>

        <div className='desc'>
            <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>

        <div>
            <img src={post.image} className='product-img'></img>
        </div>
        <div className='price-aur-btn'>
            <div className='price'>
                <p>${post.price}</p>
            </div>

            <button onClick = {selected ? (removeFromCart):(addToCart)} className='add-remove-btn'>
                {
                    selected ? (<p>Remove Item</p>) : (<p>Add to Cart</p>)
                }
            </button>
        </div>
        
    </div>
  )
}

export default Product