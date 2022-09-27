import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
export default function Cart() {
  const {cart} = useContext(CartContext);
  console.log(cart);
  return (
    <div>prueba cart</div>
  )
}