import React, { useState } from "react"
import { Link } from "react-router-dom"
// import { footer } from "../../data/Data"
import { CiFacebook, CiTwitter, CiLinkedin, CiInstagram,CiPhone,CiMail,CiLocationOn} from 'react-icons/ci';
import "./footer.css"
import logoImg from "../images/dalogo.png"
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "../../../components/chatbot/chatconfig";
import MessageParser from "../../../components/chatbot/chatMessageParser";
import ActionProvider from "../../../components/chatbot/chatActionProvider";

const Footer = () => {
  const [showBot, toggleBot] = useState(true);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
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
        <div className='container'>
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
               <div className='logo'>
                <Link to="/">
                   <img src={logoImg} alt='' />
                 </Link>
               </div>
            </div>
            <div className="col-md-4">
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
                    <CiInstagram />
                      <a href="#" target="_blank" rel="noreferrer">domulsAlbaLinkedIn</a>
                  </div>
                  <div>
                    <CiFacebook />
                      <a href="https://www.facebook.com/domusalbacy/" target="_blank" rel="noreferrer">domusalbacy</a>
                  </div>
                </div>

            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              <div >
                <CiPhone/>+357 97729606
              </div>
              <div>
                <CiMail/>
                <a href="mailto:hadjisymeoubros@gmail.com" target="_blank">hadjisymeoubros@gmail.com</a>
              </div>
              <div>
                <CiLocationOn/>
                <a href="https://goo.gl/maps/gGd1bFMoN7TgSRKy8" target="_blank" rel="noreferrer">170, Strovolou Avenue Street, Strovolos, Cyprus</a>
              </div>

            </div>
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
        <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
      </div>
    </>
  )
}

export default Footer
