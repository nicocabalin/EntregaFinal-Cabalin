import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../src/componentes/NavBar';
import ItemListContainer from '../src/componentes/ItemListContainer';
import ItemDetailContainer from '../src/componentes/ItemDetailContainer';
import Cart from '../src/componentes/Cart';
import { CartProvider } from './context/CartContext';
import CheckoutForm from '../src/componentes/CheckoutForm';

function App() {
    return (
        <CartProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a PC Comps!" />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<CheckoutForm />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;

