import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const CustomMessage = (props) => {
    return (
        <Link to="/services">
            <li>Services</li>
        </Link>
    );
};

export default CustomMessage;