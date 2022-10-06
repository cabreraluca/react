import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from './Cart';

export default function Checkout() {
    const {cart, cartTotal} = useContext(CartContext);
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [tel, setTel] = useState("");
    const [orderId, setOrderId] = useState()
    const terminarCompra = (e)=> {
      e.preventDefault()
      const db = getFirestore()
      const micollection = collection(db, 'orders')
      const order = {
        buyer:{
          name: nombre,
          email: email,
          telefono: tel,
        },
        items:{
          cart
        },
        total: cartTotal(), 
      }
      console.log(order)
      addDoc(collection, order).then((res)=>{setOrderId(res.id)})
    }
  return (
    <>
      <form onSubmit={terminarCompra} style={{display:'grid', justifyContent:'center', margin:'2rem'}}>
          <input onChange={(e)=> setNombre(e.target.value)} value={nombre} type="text" placeholder='Ingrese su nombre' />
          <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder='Ingrese su email' />
          <input onChange={(e)=> setTel(e.target.value)} value={tel} type="string" placeholder='Ingrese su teléfono' />
          <button type='submit'>Proceder al pago</button>
      </form>
    </>
  )
}
