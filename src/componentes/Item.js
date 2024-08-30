import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Item.css';

const Item = ({ product }) => {
  const { addItem } = useCart();  

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
      <h2>{product.name}</h2>
      <p><span className="label">Precio:</span> ${product.price}</p>
      <p><span className="label">Categoría:</span> {product.category}</p>
      <p><span className="label">Descripción:</span> {product.description}</p>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default Item;
