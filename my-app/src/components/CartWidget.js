import React from 'react';
import cartlogo from './cart.png';
import './CartWidget.css'

function CartWidget() {
    return (
        <img src={cartlogo} className='cartlogo' alt='cart' />
    )
    }
export default CartWidget
