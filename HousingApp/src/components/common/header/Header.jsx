import React, { useState, useEffect } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import logoImg from "../images/daheaderWhite.png"
import { BsFacebook } from 'react-icons/bs';
import SocialMediaBar from "./SocialMediaBar"
import MobileMenu from "./MobileMenu"

//for social media icons
//https://uiverse.io/PapaUiiss404/honest-ape-75

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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

      // Check the scroll position and add or remove the className accordingly
      if (window.scrollY > 0) {
        header.classList.add('nottop'); // Add the className 'scrolled'
      } else {
        header.classList.remove('nottop'); // Remove the className 'scrolled'
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs once on mount


  const mobileMenu = () => {
    debugger;
    const svgmenu = document.getElementById('svgmenu');
    if (svgmenu.classList.contains('opened'))
      closemenu();
    else
      openmenu();
  }
  function show_menu() {
    const hmobileline = document.getElementById('hmobileline');
    const topcontainer = document.getElementById('topcontainer');
    const body = document.body;
    body.classList.add('showmenu');
    if (topcontainer) {
      const height = topcontainer.offsetHeight - 85;
      if (hmobileline) {
        hmobileline.style.height = height + 'px';

      }
    }

    // $('body').addClass('showmenu');
    // $('#hmobileline').height(($('#topcontainer').height()-85)+'px');
  }
  function show_menu_d() {
    // $(window).scrollTop(0);
    const menuhide = document.getElementById('menuhide');
    window.scrollTo(0, 0);
    show_menu();
    // setTimeout(function () { $('#menuhide').show(); }, 400);
    if (menuhide) {
      setTimeout(function () { menuhide.style.display = 'block'; }, 400);

    }
  }

  function hide_menu() {
    const body = document.body;
    const menuhide = document.getElementById('menuhide');
    body.classList.remove('showmenu');
    body.classList.remove('showlangmenu');
    body.classList.remove('showleftmenu');
    // $('body').removeClass('showmenu');
    // $('body').removeClass('showlangmenu');
    // $('body').removeClass('showleftmenu');
    // $('#menuhide').hide();
    if (menuhide) {
      menuhide.style.display = 'none';

    }
  }
  function openmenu() {
    debugger;
    const svgmenu = document.getElementById('svgmenu');
    svgmenu.classList.add('opened');
    // $('#svgmenu').addClass('opened');
    // if (inter) clearInterval(inter);
    // if (inter2) clearInterval(inter2);
    show_menu_d();
    // inter = setInterval(function () {
    //   s++;
    //   $('.maing >g').css('opacity', 0);
    //   $('.maing >g:nth-child(' + s + ')').css('opacity', 1);
    //   if (s == 7) {
    //     clearInterval(inter);
    //   }
    // }, 100);
  }

  function closemenu() {
    debugger;
    const svgmenu = document.getElementById('svgmenu');
    svgmenu.classList.remove('opened');
    // if (inter) clearInterval(inter);
    // if (inter2) clearInterval(inter2);
    // $('#svgmenu').removeClass('opened');
    hide_menu();
    // inter2 = setInterval(function () {
    //   s--;
    //   $('.maing >g').css('opacity', 0);
    //   $('.maing >g:nth-child(' + s + ')').css('opacity', 1);
    //   if (s == 1) {
    //     clearInterval(inter2);
    //   }
    // }, 100);
  }

  return (
    <>
      <div id="header" >
        <div className="container">
          <div id="svgmenu" className="show-mobile" onClick={toggleMenu}>
            <svg version="1.1" id="Laag_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50.5 99.1" style={{ background: "green" }} xmlSpace="preserve">
              <g className="maing">
                <g id="hide" style={{ opacity: 1 }}>
                  <g id="Group_332_5_" transform="translate(25.666) rotate(90)">
                    <path id="Path_319_5_" className="st0" d="M58.6-9.7l8.9,8.9c0.6,0.6,0.6,1.6,0,2.2l-8.9,8.9"></path>
                  </g>
                </g>
                <g style={{ opacity: 0 }}>
                  <path className="st1" d="M15.3,58.6l8.9,5.9c0.6,0.4,1.6,0.4,2.2,0l8.9-5.9"></path>
                </g>
                <g style={{ opacity: 0 }}>
                  <path className="st2" d="M15.3,58.8l8.9,3c0.6,0.2,1.6,0.2,2.2,0l8.9-3"></path>
                </g>
                <g style={{ opacity: 0 }}>
                  <path className="st3" d="M15.3,58.9h8.9c0.6,0,1.6,0,2.2,0h8.9"></path>
                </g>
                <g style={{ opacity: 0 }}>
                  <path className="st4" d="M15.3,58.1l8.9-3c0.6-0.2,1.6-0.2,2.2,0l8.9,3"></path>
                </g>
                <g style={{ opacity: 0 }}>
                  <path className="st5" d="M15.3,58.2l8.9-5.9c0.6-0.4,1.6-0.4,2.2,0l8.9,5.9"></path>
                </g>
                <g style={{ opacity: 0 }}>
                  <g id="Group_332_4_" transform="translate(25.666) rotate(90)">
                    <path id="Path_319_4_" className="st6" d="M58.3,10.3l-8.9-8.9c-0.6-0.6-0.6-1.6,0-2.2l8.9-8.9"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
          <div id="logo" data-aos="fade-in" data-aos-delay="100" data-aos-duration="3000" data-aos-offset="0">
            <a href="/">
              <img src={logoImg} alt="Logo" />
            </a>
          </div>
          <div className="topicons">
            {/* <span className="d-block">
            <BsFacebook />
            <a href="https://www.facebook.com/domusalbacy/" target="_blank" rel="noreferrer"> domusalbacy</a>
          </span> */}
            <SocialMediaBar />
          </div>
          <div className="nav-holder show-full" data-aos="fade-in" data-aos-delay="600" data-aos-duration="3000" data-aos-offset="0">
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
      <div className="nav-holder show-mobile">
        <nav className="nav">
          <ul className="clearfix">
            <li className="active">
              <a href="/" title="Home">
                Home
              </a>
            </li>
            <li className="dropdown">
              <a title="Projects">
                Projects</a>

              <ul>
                <li className="">
                  <a href="/projects/oak-tree-residences">Oak Tree Residences</a>
                </li>
                <li className="">
                  <a href="/projects/n-mylona-residences">N. Mylona Residences</a>
                </li>
              </ul>
            </li>
            <li className="">
              <a href="/about" title="About">
                About
              </a>
            </li>
            <li className="">
              <a href="/contact" title="Contact">
                Contact
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </>

  )
}

export default Header
