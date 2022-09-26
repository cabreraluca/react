import React from 'react'

export default function ItemCount({ stock, initial, onAdd, contador, setContador}) {
  return (
    <div style={{textAlign:'center', backgroundColor: "black", margin: 'auto', width: '12rem'}}>
      <h2 style={{color: 'white'}}> {contador}</h2>
      <button style={{ height: 25, width:60, alignItems: 'center'}} onClick={() =>{
         if (contador > initial){
         setContador(contador - 1);
       }
      }}>-</button>
      <button style={{height: 25, width: 60, alignItems: 'center' }} onClick={() =>{
          onAdd(contador);
          setContador(initial);
        }}>Agregar</button>
      <button style={{height: 25, width:60, textalign: 'center'}} onClick={()=>{
            if(contador < stock){
                setContador(contador + 1);
            }
        }}>+</button>
    </div>
  )
}
