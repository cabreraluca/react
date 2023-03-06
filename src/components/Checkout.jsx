import { addDoc, collection, getFirestore, serverTimestamp} from 'firebase/firestore';
import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Checkout() {
  let {cart, cartTotal, clear} = useContext(CartContext);
  const db = getFirestore();
  const orders = collection(db, "orders");
  const [orderId, setOrderId] = useState();
  const [buyer, setBuyer] = useState({});
  const buyerData = (e) =>{
    setBuyer({
        ...buyer,
        [e.target.name] : e.target.value
    })
}
  const TerminarCompra = (e)=> {
    e.preventDefault();
    console.log("Comprador:", buyer);
    console.log("Carrito:", cart);
    console.log("Total:", cartTotal());
    addDoc(orders, {
      buyer,
      items: cart,
      total: cartTotal(),
      date: serverTimestamp(),
    }).then((res)=>{
        setOrderId(res.id);
        clear();
    }).catch((error)=>console.log(error));
  }
  return (
    <>{!orderId? 
      <form onSubmit={TerminarCompra} style={{display:'grid', justifyContent:'center', margin:'2rem'}}>
          <input type="text" name="nombre" onChange={buyerData} value={buyer.nombre || ''} />
          <input type="email" name="email" onChange={buyerData} value={buyer.email || ''} />
          <input type="text" name="telefono" onChange={buyerData} value={buyer.telefono || ''} />
          <button type='submit'>Terminar compra</button>
      </form>
      :
      <h2 style={{display:'grid', color:'white', justifyContent:'center'}}>Gracias por su compra, su numero de orden es: {orderId}</h2>
      }
    </>
  )
}
