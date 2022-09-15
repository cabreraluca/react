import React from 'react'
import Item from './Item'

export default function ItemList({productos}) {

    return (
        productos.map((item) => <Item item={item}/>)
    )
  }