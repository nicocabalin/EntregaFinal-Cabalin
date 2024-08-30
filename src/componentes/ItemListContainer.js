import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import '../styles/ItemListContainer.css';

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let collectionRef = collection(db, "products");

                if (category) {
                    collectionRef = query(collectionRef, where("category", "==", category));
                }

                const querySnapshot = await getDocs(collectionRef);
                const allProducts = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(allProducts);
            } catch (error) {
                console.error("Error fetching products: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div>
            <h1>{category ? category : 'Todos los productos'}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
