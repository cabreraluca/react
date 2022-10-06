import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
export default function Cart() {
  const navigate = useNavigate()
  const {cart, cartTotal, clear, cartQuantity} = useContext(CartContext);
  return (
    <div style={{padding:'2rem'}}>
      {cart.map((compra)=><CartItem key={compra.id} compra={compra} /> )}
      <h1 style={{color:'white', padding:'1rem'}}>{cartQuantity() !== 0? `Total a pagar: $${cartTotal()} ` : 'Su carrito está vacío!'}</h1>
      <button style={{padding:'0.4rem', backgroundColor:'red', color:'whitesmoke', borderRadius:17 }} onClick={()=>navigate('/')}>{cartQuantity() === 0? 'Ver Productos' : 'Seguir comprando'}</button>
      {cartQuantity() === 0? '' : <button style={{padding:'0.4rem', backgroundColor:'red', color:'white', borderRadius:17 }} onClick={()=>clear()}>Limpiar Carrito</button>}
      {cartQuantity() === 0? '' : <button style={{padding:'0.4rem', backgroundColor:'red', color:'white', borderRadius:17 }} onClick={()=>navigate('/checkout')}>Finalizar compra</button>}
    </div>
  )
}