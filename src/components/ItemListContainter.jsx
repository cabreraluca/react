import React from 'react'
import ItemList from "./ItemList"
import { data } from '../mocks/mockData'
import { useState, useEffect } from 'react';
export default function ItemListContainer({greeting}) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect (()=>{
    setLoading(true)
    data
    .then((res)=>setProductos(res))
    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
    console.log(data)
  }, [])
  return (
    <div style={{display: 'flex', width: '100%',}}>
      {loading ? <h2>Cargando...</h2> : <ItemList productos={productos} /> }
    </div>
  )
}
