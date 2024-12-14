import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
import Cart from '../pages/Cart'

const Navbar = () => {

    const {cart} = useSelector((state)=>state);
 
  return (
    <div>
        <nav className='nav-inner-div'>
            <NavLink to="/">
                <div>
                    <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-shop-ecommerce-logo-app-icon-logo-design-template-910c781293690546d77a3828f9e901ee_screen.jpg?ts=1611442808' className='nav-logo'/>
                </div>
            </NavLink>
            <div className='nav-right'>
                <NavLink to="/" className='home'>
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cart" className='cart'>
                    <div className='cart-div'>
                        <FaShoppingCart fontSize='1.5rem' className='cart-icon'/>
                        {
                            cart.length>0 && <span className='count'>{cart.length}</span>
                        }
                        
                    </div>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar