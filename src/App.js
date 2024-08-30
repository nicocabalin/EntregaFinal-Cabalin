// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../src/componentes/NavBar';
import ItemListContainer from '../src/componentes/ItemListContainer';
import ItemDetailContainer from '../src/componentes/ItemDetailContainer';
import Cart from '../src/componentes/Cart';
import CheckoutForm from '../src/componentes/CheckoutForm';
import './styles/App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        
        <Route path="/category/:category" element={<ItemListContainer />} />
        
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
    </Router>
  );
}

export default App;
