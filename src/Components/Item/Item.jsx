import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

function Item ({item}){

    return(   
        <div className='card'>
            <img className='card-img' src={item?.img} alt="Product Img"/>
            <div className='content'>
                <p className='text'>
                    {item?.description}
                </p>
                <p className='text'>
                    ${item?.price}
                </p>
                <Link to={'/item/'+ item?.id}>
                    <button className="details">
                        Detalles
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Item;