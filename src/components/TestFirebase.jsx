import React from 'react'
import { getFirestore, doc, collection, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
export default function TestFirebase() {
    const [producto, setProducto] = useState([]);
    useEffect(() => {
        const db = getFirestore()
        const productoRef = doc(db, 'products', '53bE8qqiBExtrAe8t2JE')
        getDoc(productoRef).then((res) =>{
            console.log(res);
        })
    }, [])
  return (
    <div>Test</div>
  )
}
