import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"
import ScrollToTop from "../../customHelperComponents/ScrollToTop"
import { CiFacebook, CiTwitter, CiLinkedin, CiInstagram, CiPhone, CiMail, CiLocationOn } from 'react-icons/ci';
import SocialMediaBar from "../common/header/SocialMediaBar"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { BsFacebook } from 'react-icons/bs';
const Contact = () => {
  return (
    <>
      <ScrollToTop />
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <div className="row">
            <div className="col-6">
              <form className='shadow'>
                <h4 className="title">Contact Us</h4> <br />
                <div>
                  <input type='text' placeholder='Name' />
                  <input type='text' placeholder='Email' />
                </div>
                <input type='text' placeholder='Subject' />
                <textarea cols='30' rows='10'></textarea>
                <button className="btn btn-secondary">Submit Request</button>
              </form>
            </div>
            <div className="col-6 leftline">
              <div className="contact-info h-100">
                <strong>Domus Alba</strong>
                <p class="adresss">Archiepiskopou Leontiou 23, 2407, Engomi, Nicosia, Cyprus</p>
                <p>Mon - Fri 09:00 - 18:00</p>
                <div >
                  <CiPhone />
                  <a>+357 97729606</a>

                </div>
                <div>
                  <CiMail />
                  <a href="mailto:hadjisymeoubros@gmail.com" target="_blank"> hadjisymeoubros@gmail.com</a>
                </div>
                <div>
                  <CiLocationOn />
                  <a href="https://goo.gl/maps/gGd1bFMoN7TgSRKy8" target="_blank" rel="noreferrer"> 170, Strovolou Avenue Street, Strovolos, Cyprus</a>
                </div>
                <br></br>
                <br></br>
                <div className="svgfacebook"><Link to="https://www.facebook.com/domusalbacy/"><BsFacebook></BsFacebook></Link></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d815.6750023054768!2d33.33372926962593!3d35.139159094995286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDA4JzIxLjAiTiAzM8KwMjAnMDMuNyJF!5e0!3m2!1sen!2s!4v1695144534824!5m2!1sen!2s" style={{ border: "0", width: "100%", height: "20rem" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
