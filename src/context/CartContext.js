import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
            if (existingItemIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += item.quantity;
                return updatedCart;
            } else {
                return [...prevCart, item];
            }
        });
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

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
