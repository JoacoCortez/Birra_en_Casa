import React, { useContext, useState } from "react";
import CartContext from "../../Store/Cart-context";
import { collection, addDoc } from "firebase/firestore";
import db from "../../Services/Firebase";
import Spinner from "../../Components/Spinner/Spinner";
import "./Checkout.css";


const Checkout = () =>{

const cartCtx = useContext(CartContext);

const [load, setLoad] = useState(false)

const [orderID, setOrderID] = useState()

const [buyer, setBuyer] = useState({})

const {Name, Email, Adress} = buyer


const handleInputChange = (e) =>{
    
    setBuyer(({
        ...buyer, [e.target.name]: e.target.value

    }))

}

const generateOrder = async(data) =>{
    
    setLoad(true)

    try{
        const coll = collection(db, "Orders")

        const order = await addDoc(coll,data)

        setOrderID(order.id)
        cartCtx.clear()

        setLoad(false)
    
    }   catch (err){

        console.log("algo salió mal")
    }
    
}

const handleSubmit = (e) =>{

    e.preventDefault()

    const items = cartCtx.products.map(e => {return {
        
        id: e.id,
        name: e.name,
        price: e.price,
        quantity: e.quantity
    }})

    const total = cartCtx.getTotalPrice()

    const data ={buyer, items, total}

    console.log("data",data) 

    generateOrder(data)
}

return(
    <>
        <div className="checkout-container">
            {load ? <Spinner />
                : (!orderID &&
                    <>
                        <h2 className="subtitle-checkout">Finalizando tu compra!</h2>  
                        <form onSubmit={handleSubmit}>
                            
                            <label htmlFor="name">Tu nombre:</label>
                            
                            <input
                                className="input-form"
                                type = "text"
                                name = "name"
                                value= {Name}
                                onChange = {handleInputChange}
                                required
                            />
                            
                            <label htmlFor="email">Tu mail:</label>
                            
                            <input
                                className="input-form"
                                type = "text"
                                name = "email"
                                value = {Email}
                                onChange = {handleInputChange}
                                required        
                            />
                            
                            <label htmlFor="adress">Tu dirección:</label>
                            
                            <input
                                className="input-form"
                                type = "text"
                                name = "adress"
                                value = {Adress}
                                onChange = {handleInputChange}
                                required       
                            />

                            <input
                                className="upload"
                                type = "submit"
                                value = "Finalizar Compra"
                            />
                        
                        </form>
                    </>
                )
            }
            
            {
                orderID && (
                    <div className="end-container">
                        <h3 className="end-text">Compra Finalizada con Éxito</h3>
                        <h4 className="end-text">{`Tu código de compra es: ${orderID}`}</h4>
                            
                    </div>
                )
            }
        </div>
    
    </>












)






}




export default Checkout;