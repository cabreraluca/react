import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainter';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme/materialtheme'

// import TestFirebase from './components/TestFirebase';
 function App() {
     return (
      <ThemeProvider theme={theme}>
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
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/admin' element={<Orders />} />
          </Routes>
          < Footer />
        </BrowserRouter>
      </CartProvider>
      </div>
      </ThemeProvider>
     ); 
  
}
export default App;
