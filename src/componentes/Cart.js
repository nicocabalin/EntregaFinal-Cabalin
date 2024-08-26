import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, totalPrice } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price * item.quantity}</p>
                </div>
            ))}
            <h3>Total: ${totalPrice()}</h3>
        </div>
    );
};

export default Cart;
