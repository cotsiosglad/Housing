import React from "react";
import { Link } from "react-router-dom";
import "./contactus.css"
import { BsFacebook } from 'react-icons/bs';
import { FaWhatsappSquare } from "react-icons/fa";
const ContactUs = () => {
    return (
        <>
            <div className="contact-bot">
                <span><a href='https://www.facebook.com/domusalbaltd/'><BsFacebook className="pr-2" /> Our Facebook Page</a></span>
                <br></br>
                <br></br>
                <span><a href='https://wa.me/35797729606'><FaWhatsappSquare className="pr-2" /> Whatsapp </a></span>
                {/* <button className="button-18"> <a href='https://www.facebook.com/domusalbaltd/'>Facebook</a></button> */}
                <br></br>
                <br></br>
                <Link to="/contact">
                    Contact Page
                </Link>
                <br></br>
                <br></br>
            </div>
        </>

    )
}

export default ContactUs