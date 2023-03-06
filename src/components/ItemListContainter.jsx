import React from 'react'
import ItemList from "./ItemList"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '..';
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
    <div style={{display: 'flex', width: '100%',}}>
      {loading ? <h2 style={{color:'white', textAlign:'center'}}>Cargando...</h2> : <ItemList productos={productos} /> }
    </div>
  )
}
