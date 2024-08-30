import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cart, clearCart, totalPrice } = useCart();

    if (!cart) {
        return <div>Cargando...</div>;
    }

    if (cart.length === 0) {
        return <div>El carrito está vacío</div>;
    }

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            <ul className="cart-list">
                {cart.map(item => (
                    <li key={item.id} className="cart-item">
                        <span className="cart-item-name">{item.name}</span> - 
                        <span className="cart-item-quantity"> {item.quantity}</span> x 
                        <span className="cart-item-price"> ${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="cart-total">Total: ${totalPrice()}</h3>
            <button className="clear-cart-button" onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
};

export default Cart;
