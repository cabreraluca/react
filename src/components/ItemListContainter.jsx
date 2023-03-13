import React from 'react'
import ItemList from "./ItemList"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '..';
import { CircularProgress } from '@mui/material';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const{ categoriaId } = useParams();
  useEffect(() => {
    const productos = categoriaId ?query(collection(db, "products"), where("category", "==", categoriaId)) : collection(db, "products");
    getDocs(productos)
    .then((result)=>{
      const lista = result.docs.map((product)=>{
      setLoading(false)  
        return{
          id:product.id,
          ...product.data()
        }
      })
      setProductos(lista);
    })
  }, [categoriaId])
  return (
    <div className='card-container' style={{display: 'flex', width: '100%', justifyContent:'center', alignItems:'center'}}>
      {loading ? <CircularProgress style={{display:'flex'}} color="primary" size={'6rem'}/> : <ItemList productos={productos} /> }
    </div>
  )
}
