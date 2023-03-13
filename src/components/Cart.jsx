import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import CartItem from './CartItem';
export default function Cart() {
  const navigate = useNavigate()
  const {cart, cartTotal, clear, cartQuantity} = useContext(CartContext);
  return (
    <div style={{padding:'2rem'}}>
      {cart.map((compra)=><CartItem key={compra.id} compra={compra} /> )}
      <h1 style={{color:'white', padding:'1rem'}}>{cartQuantity() !== 0? `Total a pagar: $${cartTotal()} ` : 'Su carrito está vacío!'}</h1>
      <ButtonGroup disableElevation={false} color='primary' variant='contained' size='small'>
        {cartQuantity() === 0? <Button onClick={()=>navigate('/')}>Ver productos</Button> : <Button onClick={()=>navigate('/')}>seguir comprando</Button>}
        {cartQuantity() === 0? '' : <Button onClick={()=> clear()}>Limpiar carrito</Button>}
        {cartQuantity() === 0? '' : <Button onClick={()=> navigate('/checkout')}>Finalizar compra</Button>}
      </ButtonGroup>
    </div>
  )
}

