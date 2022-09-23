import React from 'react'
import ItemList from "./ItemList"
import { data } from '../mocks/mockData'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function ItemListContainer({greeting}) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const{ categoriaId } = useParams();
  useEffect (()=>{
    setLoading(true)
    data
    .then((res)=>{
      if(categoriaId){
        setProductos(res.filter((item)=> item.category === categoriaId))
      }else{
        setProductos(res)
      }
    })
    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
  }, [categoriaId])
  return (
    <div style={{display: 'flex', width: '100%',}}>
      {loading ? <h2>Cargando...</h2> : <ItemList productos={productos} /> }
    </div>
  )
}
