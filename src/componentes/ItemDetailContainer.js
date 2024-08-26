import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const docRef = doc(db, "products", itemId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct({ id: docSnap.id, ...docSnap.data() });
            }
        };

        getProduct();
    }, [itemId]);

    return (
        <div>
            {product && <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;
