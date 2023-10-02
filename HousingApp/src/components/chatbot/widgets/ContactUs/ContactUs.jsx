import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./contactus.css"
import { BsFacebook } from 'react-icons/bs';
const ContactUs = () => {
    return (
        <>
            <div className="contact-bot">
                <span><a href='https://www.facebook.com/domusalbacy/'><BsFacebook /></a></span>
                {/* <button className="button-18"> <a href='https://www.facebook.com/domusalbacy/'>Facebook</a></button> */}
                <br></br>
                <br></br>
                <Link to="/contact">
                    <button className="button-18">Contact Page</button>
                </Link>
                <br></br>
            </div>
        </>

    )
}

export default ContactUs