import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { AiOutlineShopping } from 'react-icons/ai';

import './Cart-icon.scss';

const CartIcon = ({ toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <AiOutlineShopping className='shopping-icon' />
        <span className='item-count'> 0 </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);