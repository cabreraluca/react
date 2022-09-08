import React from 'react'
export default function ItemListContainer({greeting}) {
  return (
    <div style={{backgroundColor: 'red', height: 50}}>
        <h1 style={{color: 'white'}}>Saludo: {greeting.string}</h1>
    </div>
  )
}
