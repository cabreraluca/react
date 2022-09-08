import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainter';
import ItemCount from './components/ItemCount';

function App() {
  const stock = 10;
  const initial = 1;
  let totalStock = 0;
  let saludo = {string: "Bienvenidos"};
  const onAdd = (cantidad) => totalStock === 10 ? alert("No hay stock suficiente") : totalStock += cantidad;
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting ={saludo} />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
    </div>
  );
}

export default App;
