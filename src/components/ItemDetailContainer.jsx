import React, {useState,useEffect} from 'react'
import { data } from '../mocks/mockData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailCointainer() {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  useEffect(() =>{
    data
     .then((res) => 
     setProductDetail(res.find((item)=> item.id.toString() === id )))
    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
  },[id])

  return (
    <div>
        {loading ? <p> Cargando </p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}