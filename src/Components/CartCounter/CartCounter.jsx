import React from 'react';
import './CartCounter.css';

function CartCounter({ children, isButton, onCounterClick }) {
  return (
    <div className={`cart-counter ${isButton ? 'cart-counter-button' : ''}`} onClick={() => isButton && onCounterClick()}>
        { children }
    </div>
  )
}

export default CartCounter;