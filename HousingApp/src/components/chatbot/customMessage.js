import { React } from 'react';
import { services } from "../data/Data"
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const CustomMessage = (props) => {
    // console.log(props)
    return (
        <>
            {services.map((items, index) => (
                <div className='service-box col-md-4' key={index}>
                    {items.title}
                </div>
            ))}

        </>
        // <Link to="/services">
        //     <li>Services</li>
        // </Link>
    );
};

export default CustomMessage;