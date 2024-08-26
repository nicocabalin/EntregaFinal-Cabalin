import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const CheckoutForm = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            buyer: { name, email },
            items: cart,
            total: totalPrice(),
            date: new Date()
        };

        const ordersRef = collection(db, 'orders');
        const docRef = await addDoc(ordersRef, order);

        clearCart();
        alert(`Compra realizada con éxito. ID: ${docRef.id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Finalizar Compra</button>
        </form>
    );
};

export default CheckoutForm;
