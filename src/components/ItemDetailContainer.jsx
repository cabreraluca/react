import React, {useState,useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '..';

export default function ItemDetailCointainer() {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  useEffect(() =>{
    const collectionProducts = collection(db, "products")
    const referenciaDoc = doc(collectionProducts, id)
    getDoc(referenciaDoc)
    .then((result)=>{
      setProductDetail({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[id])

  return (
    <div>
        {loading ? <h2 style={{color:'white'}}> Cargando... </h2> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}