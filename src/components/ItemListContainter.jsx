import React from 'react'
import ItemList from "./ItemList"
export default function ItemListContainer({greeting}) {
  return (
    <div style={{display: 'flex', width: '100%',}}>
      <ItemList />
    </div>
  )
}
