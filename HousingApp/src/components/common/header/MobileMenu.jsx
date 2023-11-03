import React from 'react';
import { Link } from 'react-router-dom';
import "./mobileMenu.css"
import logoImg from "../images/daheaderWhite.png"

function MobileMenu({ isOpen, onClose }) {
    return (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <div id="menu-logo" data-aos="fade-in" data-aos-delay="100" data-aos-duration="3000" data-aos-offset="0">
            <a href="/">
              <img src={logoImg} alt="Logo" />
            </a>
          </div>
            
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
                    <Link to="/projects" onClick={onClose}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/services" onClick={onClose}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={onClose}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;
