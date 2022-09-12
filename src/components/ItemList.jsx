import React, { useEffect, useState } from 'react'
import Item from './Item';

export default function ItemList() {

    let [productos, setProductos] = useState([]);

    useEffect(()=>{
        let promesaProductos = new Promise((res, rej)=>{
            setTimeout(()=>{
                res([
                    {id: 1, title: "Remera Tongue", description: "Remeras", price: 3500, pictureUrl: "https://i.postimg.cc/XvK73mV0/REF-7422.jpg"},
                    {id: 2, title: "Buzo Kongo Violeta", description: "Buzos", price: 9000, pictureUrl: "https://i.postimg.cc/Y26VR7d7/REF-7541.jpg"},
                    {id: 3, title: "Remera Not A Dream", description: "Remeras", price: 2900, pictureUrl: "https://i.postimg.cc/mr1pHWP0/REF-7454.jpg"},
                    {id: 4, title: "Remera Buenos Aires", description: "Remeras", price: 3200, pictureUrl: "https://i.postimg.cc/HnbC47V1/REF-7478.jpg"},
                    {id: 5, title: "Buzo Kongo Turquesa", description: "Buzos", price: 9000, pictureUrl: "https://i.postimg.cc/yYmTjsc9/REF-7556.jpg"}
                ])
            }, 2000);
        });

        promesaProductos.then((res)=>{
            setProductos(res);
        }).catch()
        .finally();

    }, [])

  return (
    productos.map((item) => <Item item={item}/>)
  )
}