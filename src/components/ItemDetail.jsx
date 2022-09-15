import React from 'react'
const ItemDetail = ({productDetail}) => {
  return (
    <div style={{padding: 30}} >
        <h2 style={{color: 'white'}}>Acerca de: {productDetail.title}</h2>
        <img style={{height: 350,  }} src={productDetail.pictureUrl} alt={productDetail.title} />
        <p style={{color: 'red' }} >{productDetail.category}</p>
        <p style={{color: 'white' }} >{productDetail.description}</p>
        <p style={{color: 'white' }} >${productDetail.price}</p>
    </div>
  )
}
export default ItemDetail
