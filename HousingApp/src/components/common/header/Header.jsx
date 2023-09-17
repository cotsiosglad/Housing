import React, { useState, useEffect} from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import logoImg from "../images/dalogo.png"
import {  BsFacebook } from 'react-icons/bs';
import SocialMediaBar from "./SocialMediaBar"

//for social media icons
//https://uiverse.io/PapaUiiss404/honest-ape-75

const Header = () => {
//  const [navList, setNavList] = useState(false)

//   return (
//     <>
//       <header>
//         <div className='container flex'>
//           <div className='logo'>
//             <Link to="/">
//               <img src={logoImg} alt='' />
//             </Link>
//           </div>
//           <div className='nav'>
//             <ul className={navList ? "small" : "flex"} style={{ marginBottom: "0px" }}>
//               {nav.map((list, index) => (
//                 <li key={index}>
//                   <Link to={list.path}>{list.text}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* <div className='button flex'>
//             <h4>  
//               <span>2</span> My List
//             </h4>
//             <button className='btn1'>
//               <i className='fa fa-sign-out'></i> Sign In
//             </button>
//           </div> */}

//           <div className='toggle'>
//             <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
//           </div>
//         </div>
//       </header>
//     </>
//   )
useEffect(() => {
  const handleScroll = () => {
    const header = document.getElementById('header');

    // Check the scroll position and add or remove the class accordingly
    if (window.scrollY > 0) {
      header.classList.add('nottop'); // Add the class 'scrolled'
    } else {
      header.classList.remove('nottop'); // Remove the class 'scrolled'
    }
  };

  // Attach the scroll event listener when the component mounts
  window.addEventListener('scroll', handleScroll);

  // Clean up the listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // The empty dependency array ensures this effect runs once on mount

return(
  <>
    <div id="header" >
      <div className="container">
        <div className="show-mobile">
          
        </div>
        <div id="logo" data-aos="fade-in" data-aos-delay="100"  data-aos-duration="3000" data-aos-offset="0">
          <a href="/">
            <img src={logoImg} alt="Logo"/>
          </a>
        </div>
        <div className="topicons">
          {/* <span className="d-block">
            <BsFacebook />
            <a href="https://www.facebook.com/domusalbacy/" target="_blank" rel="noreferrer"> domusalbacy</a>
          </span> */}
          <SocialMediaBar/>
        </div>
        <div className="nav-holder show-full" data-aos="fade-in" data-aos-delay="600"  data-aos-duration="3000" data-aos-offset="0">
         <nav className='nav'>
          <ul className='clearfix'>
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
          </nav>
        </div>
      </div>
    </div>
  </>

)
 }

export default Header
