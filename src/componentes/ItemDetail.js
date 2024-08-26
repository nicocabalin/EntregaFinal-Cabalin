import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, name, price, image, stock }) => {
    const [quantity, setQuantity] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleAdd = (count) => {
        setQuantity(count);
        addItem({ id, name, price, quantity: count });
    };

    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>${price}</p>
            <p>Stock: {stock}</p>
            {quantity > 0 ? (
                <button>Terminar mi compra</button>
            ) : (
                <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
            )}
        </div>
    );
};

export default ItemDetail;
