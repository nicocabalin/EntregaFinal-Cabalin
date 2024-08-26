import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);

    return (
        <div>
            <img src="cart-icon.png" alt="Carrito" />
            <span>{cartQuantity}</span>
        </div>
    );
};

export default CartWidget;
