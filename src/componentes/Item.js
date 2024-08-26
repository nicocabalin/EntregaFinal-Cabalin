import React from 'react';

const Item = ({ product }) => {
    return (
        <div className="item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}
            <p>Category: {product.category}</p>
        </div>
    );
};

export default Item;
