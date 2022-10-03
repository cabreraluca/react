import React, { useState } from 'react'

export default function Checkout() {
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [tel, setTel] = useState("");
    function terminarCompra(){
        console.log({email, nombre, tel});
    }
  return (
    <div style={{display:'grid', justifyContent:'center', margin:'2rem'}}>
        <input onChange={(e)=> setNombre(e.target.value)} value={nombre} type="text" placeholder='Ingrese su nombre' />
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder='Ingrese su email' />
        <input onChange={(e)=> setTel(e.target.value)} value={tel} type="string" placeholder='Ingrese su teléfono' />
        <button onClick={terminarCompra}>Proceder al pago</button>
    </div>
  )
}
