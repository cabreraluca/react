import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';
const ItemDetail = ({productDetail}) => {
  const navigate = useNavigate();
  let [contador, setContador] = useState(1);
  let [compraRealizada, setCompraRealizada] = useState(false);
  const {id, title, price, stock, pictureUrl} = productDetail;
  const {addItem} = useCart();
  const onAdd = (cantidad) => {
    let purchase = {
      id,
      title,
      price,
      stock,
      pictureUrl,
      quantity:cantidad
    }
    setCompraRealizada(true);
    addItem(purchase);
    alert(`añadiste ${cantidad} items al carrito`)
  }
  return (
    <div style={{padding: 30}} >
        <h2 style={{color: 'white'}}>Acerca de: {productDetail.title}</h2>
        <img style={{height: 350,  }} src={productDetail.pictureUrl} alt={productDetail.title} />
        <p style={{color: 'red' , textTransform:'uppercase'}} >{productDetail.category}</p>
        <p style={{color: 'white'}} >{productDetail.description}</p>
        <p style={{color: 'white' }} >${productDetail.price}</p>
        {compraRealizada ? <div>
        <button onClick={()=>navigate('/cart')}>Ir al carrito</button> 
        <button onClick={()=>navigate('/')}>Seguir comprando</button> 
      </div>: <ItemCount stock={10} initial={1} onAdd={onAdd} contador={contador} setContador={setContador}/>}
    </div>
  )
}
export default ItemDetail
