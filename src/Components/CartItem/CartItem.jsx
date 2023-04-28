import React, { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import CartCounter from "../CartCounter/CartCounter";
import './CartItem.css';

function CartItem({item}){

    const cartCtx = useContext(CartContext)

    
    return(
        <>
            <div className="cart-item">
                <img src={item?.img} alt="Item Img" className="item-img" />
                <h2 className="item-title">
                    {item?.name}
                </h2>
                <p className="item-price">
                    ${item?.price}
                </p>
                
                    <div className='bubble-close'>
                        <CartCounter isButton onCounterClick={() => cartCtx.deleteProduct(item.id)}>X</CartCounter>
                    </div>
                
                    <div className='bubble-quantity'>
                        <CartCounter>{ item?.quantity }</CartCounter>
                    </div>
            
            </div>

           
            
            
            
        </>
        


    )

}


export default CartItem;