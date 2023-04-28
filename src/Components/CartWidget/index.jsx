import React, { Children, useContext } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import { Link } from 'react-router-dom';
import CartContext from '../../Store/Cart-context';
import CartCounter from '../CartCounter/CartCounter';
const CartWidget = () =>{

    const cartCtx = useContext(CartContext);
    
    return(
        <div className="cartIcon">
            <Link to='/Cart'>
                <FontAwesomeIcon icon={faCartShopping}/>
            </Link>
            {cartCtx.products.length !== 0 ?
            
                <div className="cart-bubble">
                    <CartCounter>
                        {cartCtx.getCartQuantity()}
                    </CartCounter>

                </div>
                : ''
            }
        </div>
    )
}

export default CartWidget;