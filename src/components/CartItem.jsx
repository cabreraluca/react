import React from 'react'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'
import { useState } from 'react';
import ItemDetail from './ItemDetail';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
export default function CartItem({compra}) {
    let [contador, setContador] = useState(compra.quantity);
    const {removeItem} = useCart()
  return (
    <div style={{display:'flex', justifyContent:'space-between', padding:'2rem', alignItems:'center', textAlign:'center', color:'white', borderBottom:'3px solid red'}}>
        <img src={compra.pictureUrl} alt={compra.title} style={{width:'20rem'}} />
        <p style={{margin:'auto'}}>{compra.title}</p>
        <p>{contador}</p>
        <p style={{margin:'auto', textAlign:'center'}}>${compra.price * compra.quantity} </p>
        <IconButton aria-label="delete">
        <DeleteIcon color='primary' onClick={()=>removeItem(compra.id)}/>
        </IconButton>
    </div>
  )
}
