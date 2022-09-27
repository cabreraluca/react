import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainter';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

// import TestFirebase from './components/TestFirebase';
 function App() {
     return (
       <div className="App">
      <CartProvider>  
        <BrowserRouter>
          <NavBar />
          <Routes>  
            <Route path='' element={<ItemListContainer />} />
            <Route path='/category/:categoriaId' element={<ItemListContainer />}/>
            <Route path='/product/:id' element={<ItemDetailContainer />}/>
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          < Footer />
        </BrowserRouter>
      </CartProvider>
       </div>
     ); 
  
}
export default App;
