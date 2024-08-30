import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/Mouse">Mouse</Link></li>
                <li><Link to="/category/PC Componentes">PC Componentes</Link></li>
                <li><Link to="/category/Teclados">Teclados</Link></li>
                <li><Link to="/category/Pantallas">Pantallas</Link></li>
                <Link to="/cart"><CartWidget /></Link>
            </ul>
        </nav>
    );
};

export default NavBar;
