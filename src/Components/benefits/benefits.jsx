import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoins, faCubes, faRocket, } from '@fortawesome/free-solid-svg-icons';
import "./benefits.css";




export default function Benefits() {
  
  
    return (
            
            
            
            
            <div className="benefits-container">
                <div className='benefits'>
                    <h3 className="subtitle-benefits">Precios Bajos</h3>
                    <FontAwesomeIcon icon={faCoins} />
                </div>
                <div className='benefits'>
                    <h3 className="subtitle-benefits">Bebidas Heladas</h3>
                    <FontAwesomeIcon icon={faCubes} />
                    
                </div>
                <div className='benefits'>
                    <h3 className="subtitle-benefits">Llegamos Volando</h3>
                    <FontAwesomeIcon icon={faRocket} />
                </div>
            </div>

    )
}
