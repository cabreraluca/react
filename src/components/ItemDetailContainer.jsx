import React, {useState,useEffect} from 'react'
import { data } from '../mocks/mockData'
import ItemDetail from './ItemDetail'

export default function ItemDetailCointainer() {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    data
     .then((res) => 
     setProductDetail(res.find((item)=> item.id === 1 )))
    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
  },[])

  return (
    <div>
        {loading ? <p> Cargando </p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}