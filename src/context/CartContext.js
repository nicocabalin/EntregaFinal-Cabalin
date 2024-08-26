import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item]);
    };

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, cartQuantity, totalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
