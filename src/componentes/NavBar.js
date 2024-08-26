import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <h1>PC Comps</h1>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/teclados">Teclados</Link></li>
                <li><Link to="/category/mouses">Mouses</Link></li>
                <li><Link to="/category/monitores">Monitores</Link></li>
                <li><Link to="/category/pc">PCs</Link></li>
                <li><Link to="/cart"><CartWidget /></Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
