import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCart } from '../context/CartContext';
export default function CartWidget() {
  const {cartQuantity, cart} = useCart()
  return (
    <div style={{display:'flex', textDecoration:'none'}}>
      < ShoppingCartOutlinedIcon style={{color:'white'}} />
      <p style={{color: 'white'}}>{cartQuantity() || ''}</p>
    </div>
  )
}
