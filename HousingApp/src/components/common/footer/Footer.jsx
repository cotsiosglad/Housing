import React, { useState } from "react";
// import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
// import { footer } from "../../data/Data"
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsFillPinMapFill,
} from "react-icons/bs";
import chatbotImage from "../footer/helpertransparent.png";
import {
  CiFacebook,
  CiTwitter,
  CiLinkedin,
  CiInstagram,
  CiPhone,
  CiMail,
  CiLocationOn,
} from "react-icons/ci";
import logoImg from "../images/dafooter.png";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../../../components/chatbot/chatconfig";
import MessageParser from "../../../components/chatbot/chatMessageParser";
import ActionProvider from "../../../components/chatbot/chatActionProvider";
import "../../../components/chatbot/chatBot.css";
import SocialMediaBar from "../header/SocialMediaBar";
import { services, projects } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  // const loadMessages = () => {
  //   const messages = JSON.parse(localStorage.getItem('chat_messages'));
  //   return messages;
  // };

  // return (
  //   <>
  //     <footer>
  //       <div className='container'>
  //         <div className="row box">
  //           <div className="col-2">
  //             <div className='logo'>
  //               <Link to="/">
  //                 {/* <img src='./images/dalogo.png' alt='' /> */}
  //                 <img src={logoImg} alt='' />
  //               </Link>
  //               {/* <img src='../images/logo-light.png' alt='' /> */}
  //               {/* <h2>Any help you need</h2>
  //               <p>Find the best deal for you!</p> */}

  //               {/* <div className='input flex'>
  //                 <input type='text' placeholder='Email Address' />
  //                 <button>Subscribe</button>
  //               </div> */}
  //             </div>
  //           </div>
  //           <div className="col-7 text-center align-self-center">
  //             <span>
  //               <BsFillPinMapFill />
  //               <a href="https://goo.gl/maps/gGd1bFMoN7TgSRKy8" target="_blank" rel="noreferrer"> 170, Strovolou Avenue Street 2480 Στρόβολος, Κύπρος</a>
  //             </span>
  //           </div>
  //           <div className="offset-1 col-2 align-self-center">
  //             <span className="d-block">
  //               <BsFillTelephoneFill /> +357 97729606
  //             </span>
  //             <span className="d-block">
  //               <BsFacebook />
  //               <a href="https://www.facebook.com/domusalbacy/" target="_blank" rel="noreferrer"> domusalbacy</a>
  //             </span>
  //           </div>
  //         </div>

  //         {/* {footer.map((val, index) => ( // Add a unique key based on the index
  //           <div key={index} className='box'>
  //             <h3>{val.title}</h3>
  //             <ul>
  //               {val.text.map((items, itemIndex) => ( // Add a unique key for the inner map
  //                 <li key={itemIndex}> {items.list} </li>
  //               ))}
  //             </ul>
  //           </div>
  //         ))} */}
  //       </div>
  //     </footer>
  //     {/* <div className='legal'>
  //       <span>Rights belong to CCNE</span>
  //     </div> */}
  //     <div className="App">
  //       {showBot && (
  //         <Chatbot
  //           config={config}
  //           actionProvider={ActionProvider}
  //           // messageHistory={loadMessages()}
  //           messageParser={MessageParser}
  //           saveMessages={saveMessages}
  //         />
  //       )}
  //       <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
  //     </div>
  //   </>
  // )

  return (
    <>
      <footer>
        <div className="container">
          <div className="row pt-4">
            <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center flex-column">
              <div className="logoFooter">
                <Link to="/">
                  <img src={logoImg} alt="" />
                </Link>
              </div>
              <div className="footer-info">
                <p>∆εν είναι απλή αγορά ακινήτου</p>
                <p>Είναι επένδυση</p>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <h5 className="pt-4">ΥΠΗΡΕΣΙΕΣ</h5>
                  {services
                    .sort()
                    .reverse()
                    .slice(0, 3)
                    .map((items, index) => (
                      <div key={index}>
                        <Link to="/services">{items.titleType}</Link>
                      </div>
                    ))}
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <h5 className="pt-4">ΕΡΓΑ</h5>
                  {projects
                    .sort()
                    .reverse()
                    .slice(0, 3)
                    .map((items, index) => (
                      <div key={index}>
                        <Link to={`/projects/${items.id}`}>{items.title}</Link>
                      </div>
                    ))}
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-12 col-md-6 col-lg-6 align-self-center">
                  <h5>ΕΠΙΚΟΙΝΩΝΙΑ</h5>
                  <div>
                    <CiPhone />
                    <a>+357 97729606</a>
                  </div>
                  <div>
                    <CiMail />
                    <a href="mailto:hadjisymeoubros@gmail.com" target="_blank">
                      hadjisymeoubros@gmail.com
                    </a>
                  </div>
                  <div>
                    <CiLocationOn />
                    <a
                      href="https://goo.gl/maps/gGd1bFMoN7TgSRKy8"
                      target="_blank"
                      rel="noreferrer">
                      170, Strovolou Avenue Street, Strovolos, Cyprus
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 align-self-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d815.6750023054768!2d33.33372926962593!3d35.139159094995286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDA4JzIxLjAiTiAzM8KwMjAnMDMuNyJF!5e0!3m2!1sen!2s!4v1695144534824!5m2!1sen!2s"
                    style={{ border: "0", width: "100%" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>

            {/* <div className="col-md-4">
              <h5>Follow Us</h5>
              <div className="footer-social-bar">
                <div>
                  <CiInstagram />
                  <a href="#" target="_blank" rel="noreferrer">domulsAlbaInstagram</a>
                </div>
                <div>
                  <CiTwitter />
                  <a href="#" target="_blank" rel="noreferrer">domulsAlbaTwitter</a>
                </div>
                <div>
                  <CiLinkedin />
                  <a href="#" target="_blank" rel="noreferrer">domulsAlbaLinkedIn</a>
                </div>
                <div>
                  <CiFacebook />
                  <a href="https://www.facebook.com/domusalbacy/" target="_blank" rel="noreferrer">domusalbacy</a>
                </div>
              </div>
            </div> */}
          </div>
          <div className="row pt-4">
            {/* <div className="col-12 col-md-4 col-lg-4 footer-info">
              <p>
              ∆εν είναι απλή αγορά ακινήτου
              </p>
              <p>
              Είναι επένδυση
              </p>
            </div> */}
          </div>
          <div className="line"></div>
          <div className="mb-3">
            <SocialMediaBar />
          </div>
          <div className="App">
            {showBot && (
              <Chatbot
                config={config}
                actionProvider={ActionProvider}
                // messageHistory={loadMessages()}
                messageParser={MessageParser}
                saveMessages={saveMessages}
              />
            )}
            {/* <button className="chatBot" onClick={() => toggleBot((prev) => !prev)}>Chat with us!</button> */}
            <button
              className="chatBot"
              rounded="true"
              onClick={() => toggleBot((prev) => !prev)}>
              <img alt="logo" src={chatbotImage} className="chatbot-logo"></img>
            </button>
          </div>
          {/* {footer.map((val, index) => ( // Add a unique key based on the index
            <div key={index} className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, itemIndex) => ( // Add a unique key for the inner map
                  <li key={itemIndex}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </footer>
      {/* <div className='legal'>
        <span>Rights belong to CCNE</span>
      </div> */}
    </>
  );
};

export default Footer;
