import React, {useState, useEffect} from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';
import db from '../../Services/Firebase';
import Spinner from '../../Components/Spinner/Spinner';

function ItemDetailContainer() {

    const[item, setItem] = useState({});
    const { Id } = useParams();
    const [load, setLoad] = useState(false)

    useEffect(()=>{
        
        getProduct(Id)
            .then((snapshot)=>{
                setLoad(false)
                setItem({...snapshot.data(), id: snapshot.id});
            })
            
    },[Id])
    
    
    function getProduct(id){

        setLoad(true)   
        
        const itemRef = doc(db, "items", id)
       
        return getDoc(itemRef)
    }
    
    
    return(
        <>
            {load ? <Spinner/> :<ItemDetail item={item}/>}
        </>
    )
}



export default ItemDetailContainer;