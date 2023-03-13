import { addDoc, collection, getFirestore, serverTimestamp} from 'firebase/firestore';
import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  let {cart, cartTotal, clear} = useContext(CartContext);
  const navigate = useNavigate();
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
    if(Object.values(buyer).length !== 3){
      alert('Por favor completa todos los campos');
    }
    else{
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
}
  //Agregar state (CARGANDO) al presionar Terminar compra
  if (cart.length === 0 && !orderId) {
    return (
      <div>
        <h1 style={{color:'white'}}>El carrito está vacío</h1>
        <Button variant='contained' size='small' onClick={()=>navigate('/')}>Ver productos</Button>
      </div>
    );
  }
  return (
    <>
    {!orderId && cart.length !== 0?
      <>
      <h1 style={{color:'white'}}>Ingrese sus datos</h1> 
      <form onSubmit={TerminarCompra} style={{display:'grid', justifyContent:'center', margin:'2rem'}}>
      <div className="input-group">
        <label htmlFor="nombre">Nombre:</label>
        <input className="input-field" type="text" name="nombre" id="nombre" placeholder='Nombre' onChange={buyerData} value={buyer.nombre || ''} autoComplete="off" />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input className="input-field" type="email" name="email" id="email" placeholder='Email' onChange={buyerData} value={buyer.email || ''} autoComplete="off" />
      </div>
      <div className="input-group">
        <label htmlFor="telefono">Teléfono:</label>
        <input className="input-field" type="text" name="telefono" id="telefono" placeholder='Telefono' onChange={buyerData} value={buyer.telefono || ''} autoComplete="off" />
      </div>
      <Button style={{marginTop:'2rem'}} type='submit' variant='contained' size='small'>Terminar compra</Button>
    </form>
    </>
      :
      <h2 style={{display:'grid', color:'white', justifyContent:'center'}}>Gracias por su compra, su número de orden es: {orderId}</h2>
      }
    </>
  )
}
