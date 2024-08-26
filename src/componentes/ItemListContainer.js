import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const categoryParam = urlParams.get('category');
                setCategory(categoryParam);

                const categoryRef = collection(db, "products", "TUggZdzJK5QKMtGnaMmx", categoryParam || "Mouse");
                const categorySnapshot = await getDocs(categoryRef);

                const allProducts = categorySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProducts(allProducts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products: ", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    return (
        <div>
            <h1>{category ? category : 'All Products'}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
