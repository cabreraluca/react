import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainter';
// import ItemCount from './components/ItemCount';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  // const stock = 10;
  // const initial = 1;
  // let totalStock = 0;
  // const onAdd = (cantidad) => totalStock === 10 ? alert("No hay stock suficiente") : totalStock += cantidad;
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      {/* <ItemCount stock={stock} initial={initial} onAdd={onAdd} /> */}
      <Footer />

    </div>
  );
}

export default App;
