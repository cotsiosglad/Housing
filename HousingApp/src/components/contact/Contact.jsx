import { React, useRef } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";
import ScrollToTop from "../../customHelperComponents/ScrollToTop";
import {
  CiFacebook,
  CiTwitter,
  CiLinkedin,
  CiInstagram,
  CiPhone,
  CiMail,
  CiLocationOn,
} from "react-icons/ci";
import SocialMediaBar from "../common/header/SocialMediaBar";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaViber, FaWhatsappSquare } from "react-icons/fa";
import { WriteDoc } from "../../firebase";
import emailjs from "@emailjs/browser";
import { Toast } from "primereact/toast";
import { serverTimestamp } from "firebase/firestore"

const emptyContactModel = {
  firstName: "",
  lastName: "",
  subject: "",
  contactNumber: "",
  contactEmail: "",
  notes: "",
  contactType: "Contact Us",
  dateCreated: "",
  wasRead: false,
};

const Contact = () => {
  const form = useRef();
  const toast = useRef();

  const submitContuctUsForm = (formData) => {
    if (formData && formData.current) {
      let _contactModel = { ...emptyContactModel };
      _contactModel.firstName = formData.current["firstName"].value;
      _contactModel.contactEmail = formData.current["contactEmail"].value;
      _contactModel.subject = formData.current["subject"].value;
      _contactModel.notes = formData.current["notes"].value;
      _contactModel.dateCreated = serverTimestamp()

      if (_contactModel.contactEmail) {
        toast.current.show({ severity: "success", summary: "Successful", detail: "Submitted", life: 3000, });
        WriteDoc(_contactModel, "Contacts").then((res) => {
          _contactModel.firstName = formData.current["firstName"].value = "";
          _contactModel.contactEmail = formData.current["contactEmail"].value = "";
          _contactModel.subject = formData.current["subject"].value = "";
          _contactModel.notes = formData.current["notes"].value = "";
        });
        emailjs.sendForm("service_2l3wljg", "template_iehmlgn", form.current, "KjCooaWk0QOfBkzcz").then(
          (result) => {
            //toast.current.show({ severity: "success", summary: "Successful", detail: "Submitted", life: 3000, });
          },
          (error) => {
            console.log(error.text);
          }
        );
      }
    }

  }

  return (
    <>
      <ScrollToTop />
      <Toast ref={toast} position="bottom-right" />
      <section className="contact mb">
        <Back name="ΕΠΙΚΟΙΝΩΝIA" title="Eπικοινωνήστε μαζί μας" cover={img} />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <form ref={form} className="shadow">
                <h4 className="title">ΕΠΙΚΟΙΝΩΝIA</h4> <br />
                <div>
                  <input name="firstName" type="text" placeholder="Όνομα " />
                  <input name="contactEmail" type="text" placeholder="Ηλεκτρονικό Ταχυδρομείο" />
                </div>
                <input name="subject" type="text" placeholder="Θέμα" />
                <textarea name="notes" cols="30" rows="10"></textarea>
                <button type="button"
                  className="btn btn-secondary" onClick={() => { submitContuctUsForm(form) }}>
                  Υποβολή αίτησης
                </button>
              </form>
            </div>
            <div className="col-12 col-md-12 col-lg-6 leftline">
              <div className="contact-info h-100">
                <strong>Domus Alba</strong>
                <p className="adresss">
                  Archiepiskopou Leontiou 23, 2407, Engomi, Nicosia, Cyprus
                </p>
                <p>Mon - Fri 09:00 - 18:00</p>
                <div>
                  <CiPhone />
                  <a href="tel:70001440"> 70001440</a>
                </div>
                <div>
                  <CiMail />
                  <a href="mailto:domusalbaltd@gmail.com" target="_blank">
                    {" "}
                    domusalbaltd@gmail.com
                  </a>
                </div>
                <div>
                  <CiLocationOn />
                  <a
                    href="https://goo.gl/maps/gGd1bFMoN7TgSRKy8"
                    target="_blank"
                    rel="noreferrer">
                    {" "}
                    170, Strovolou Avenue Street, Strovolos, Cyprus
                  </a>
                </div>
                <br></br>
                <br></br>
                <div className="alignItems">
                  <div className="svgfacebook">
                    <Link to="https://www.facebook.com/domusalbaltd/">
                      <BsFacebook></BsFacebook>
                    </Link>
                  </div>
                  <div className="svgfacebook">
                    <Link to="https://www.facebook.com/domusalbaltd/">
                      <FaViber></FaViber>
                    </Link>
                  </div>
                  <div className="svgfacebook">
                    <Link to="https://www.facebook.com/domusalbaltd/">
                      <BsTwitter></BsTwitter>
                    </Link>
                  </div>
                  <div className="svgfacebook">
                    <Link to="https://www.facebook.com/domusalbaltd/">
                      <FaWhatsappSquare></FaWhatsappSquare>
                    </Link>
                  </div>
                  <div className="svgfacebook">
                    <Link to="https://www.facebook.com/domusalbaltd/">
                      <BsLinkedin></BsLinkedin>
                    </Link>
                  </div>
                  <div className="svgfacebook">
                    <Link to="https://www.facebook.com/domusalbaltd/">
                      <BsInstagram></BsInstagram>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <iframe
                title={`office location`}
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d815.6750023054768!2d33.33372926962593!3d35.139159094995286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDA4JzIxLjAiTiAzM8KwMjAnMDMuNyJF!5e0!3m2!1sen!2s!4v1695144534824!5m2!1sen!2s"
                style={{ border: "0", width: "100%", height: "20rem" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
