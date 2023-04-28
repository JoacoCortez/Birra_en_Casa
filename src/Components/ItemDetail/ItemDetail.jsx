import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ButtonCounter/Counter';
import CartContext from '../../Store/Cart-context';
import { Link } from 'react-router-dom';

function ItemDetail({item}){

    const cartCtx = useContext(CartContext);
    
    function addHandler(quantityToAdd){

        cartCtx.addProduct({quantity: quantityToAdd, ...item});

    }
       
    
    return(
        <div className="itemDetail">
            <div className='detailCard'>
            <img className='detailImg' src={item?.img} alt="Product Img"/>
            <div className='content'>
                <p className='description'>
                    {item?.extraInfo}
                </p>
                <p className='price'>
                    ${item?.price}
                </p>
            </div>
                <ItemCount initial={0} stock={item.stock} onAdd={addHandler}/>

                {cartCtx.duplicated(item.id) &&
                
                <button className='add'>
                    <Link to="/Cart">
                        Ir al carrito ({cartCtx.getCartQuantity()})
                    </Link>
                </button>
                }

            </div>
        </div>
    )
}



export default ItemDetail;