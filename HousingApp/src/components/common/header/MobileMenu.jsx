import React from 'react';
import { Link } from 'react-router-dom';
import "./mobileMenu.css"

function MobileMenu({ isOpen, onClose }) {
    return (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li>
                    <Link to="/" onClick={onClose}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={onClose}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/services" onClick={onClose}>
                        Services
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;
