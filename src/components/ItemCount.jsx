import React from 'react'
import { Button, ButtonGroup } from '@mui/material';


export default function ItemCount({ stock, initial, onAdd, contador, setContador}) {
  return (
    <>
    <h2 style={{ color: 'white'}}>Cantidad: {contador}</h2>
    <div className='contador' style={{ textAlign:'center', backgroundColor: "black", margin: 'auto', width: '12rem'}}>
      <ButtonGroup color="primary" size="small" variant="contained" aria-label="outlined button group">
        {contador > 1? <Button onClick={()=>{if(contador > 1){setContador(contador - 1)}}}>-</Button> : <Button disabled={true}>-</Button>}
        <Button size='small' onClick={()=>{onAdd(contador); setContador(initial)}}>Agregar</Button>
        <Button size='small' onClick={()=>{if(contador < stock){setContador(contador + 1)}}}>+</Button>
      </ButtonGroup>
    </div>
    </>
  )
}

