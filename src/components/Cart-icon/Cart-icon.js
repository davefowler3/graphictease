import React from 'react';

import { AiOutlineShopping } from 'react-icons/ai';

import './Cart-icon.scss';

const CartIcon = () => (
    <div className='cart-icon'>
        <AiOutlineShopping className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

export default CartIcon;