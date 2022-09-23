import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainter';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import ItemCount from './components/ItemCount';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
// import TestFirebase from './components/TestFirebase';
 function App() {
     return (
       <div className="App">
        <>
        <BrowserRouter>
          <NavBar />
          <Routes>  
            <Route path='' element={<ItemListContainer />} />
            <Route path='/category/:categoriaId' element={<ItemListContainer />}/>
            <Route path='/product/:id' element={<ItemDetailContainer />}/>
            <Route path='/products' element={<ItemListContainer />} />
          </Routes>
          < Footer />
        </BrowserRouter></>
       </div>
     ); 
  
}
export default App;
