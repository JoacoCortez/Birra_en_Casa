import React, { useState } from 'react';
import "./CounterStyle.css";

function ItemCount({stock, initial, onAdd}){

    const [count, setCount] = useState(initial);

    function handlePlusButton (){

       
        if (count < stock){

           setCount(count + 1)
        }
    }

    function handleMinusButton(){

        if(count > initial){

            setCount(count - 1)
        }
    }

    return(
        <div className="cardCounter">
            <div>
                <button className="handleCounter" onClick={ () => handleMinusButton()}>-</button>
                <input readOnly value= {count}/>
                <button className='handleCounter' onClick={ () => handlePlusButton()}>+</button>
            </div>
            
                <button className="addToCart" onClick={() =>(count != 0 && count <= stock) && onAdd(count)}>
                    Añadir al carrito
                </button>
            
        </div>
    )

}

export default ItemCount;