import React from 'react'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'
import { useState } from 'react';
import ItemDetail from './ItemDetail';
export default function CartItem({compra, stock, initial, onAdd}) {
    let [contador, setContador] = useState(compra.quantity);
    const {removeItem} = useCart()
  return (
    <div style={{display:'flex', justifyContent:'space-between', padding:'2rem', alignItems:'center', textAlign:'center', color:'white', borderBottom:'3px solid red'}}>
           <img src={compra.pictureUrl} alt={compra.title} style={{width:'20rem'}} />
           <p style={{margin:'auto'}}>{compra.title}</p>
           <p>{contador}</p>
           <p style={{margin:'auto', textAlign:'center'}}>${compra.price * compra.quantity} {compra.price * compra.quantity === compra.price? '' : `(${compra.price} C/U)` }</p>
           <button style={{backgroundColor:'whitesmoke', height: 25, width:60, textalign: 'center'}} onClick={()=>removeItem(compra.id)}>Eliminar</button>
    </div>
  )
}
