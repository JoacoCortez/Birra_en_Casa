import React, {useEffect, useState} from 'react';
import './item-container.css';
import wave from "../../Media/wave.svg";
import ItemList from '../../Components/ItemList/ItemList';
import db from '../../Services/Firebase';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from 'firebase/firestore';
import Spinner from '../../Components/Spinner/Spinner';
import Benefits from '../../Components/benefits/benefits';


const ItemListContainer = () =>{

    const [products, setProducts] = useState([]);
    
    const [load, setLoad] = useState(false)
    
    const { categoryId } = useParams();

    const [showBenefits, setShowBenefits] = useState(true)
    
    
    
    function bringProducts(category){
    
        setLoad(true)
        
        const itemsCollection = collection(db, "items");
        
        let q = itemsCollection; 
            if (category) {
                q = query(
                    itemsCollection,
                    where("category", "==", category)
                );
                setShowBenefits(false);
            } else{
                setShowBenefits(true)
            }
        
        return getDocs(q || itemsCollection)
    }
    
    
    
    useEffect(()=>{
        
        bringProducts(categoryId)
            .then((snapshot) =>{
                
                setLoad(false)
                
                setProducts(snapshot.docs.map(doc => {return{...doc.data(), id: doc.id} }))
            });
    
    },[categoryId])
    
    return(
        <>
        {load ? <Spinner/> : 
        
            
        
            <div className='item-list'>
                
                {showBenefits && <Benefits/>}
                
                <ItemList items={products}/>
                


                
            </div>
        }
        </>
            

        
    )
};

export default ItemListContainer;