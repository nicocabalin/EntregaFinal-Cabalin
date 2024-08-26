import React from 'react';

const CartItem = ({ id, name, quantity, price }) => {
    return (
        <div>
            <h4>{name}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${price * quantity}</p>
        </div>
    );
};

export default CartItem;
