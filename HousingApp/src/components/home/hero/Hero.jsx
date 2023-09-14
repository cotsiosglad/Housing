//import React from "react"
// import Heading from "../../common/Heading"
import "./hero.css"
// import Header from "../../common/header/Header"

const HeroOld = () => {
  return (
    <>
      <section className='hero'>
        <div className=''>
          {/* <Header /> */}
          <img src="./images/house4.jpg"></img>
          {/* <video className='videoTag' autoPlay loop muted width="100%" height="100%">
            <source src="./images/pexels-kindel-media-7578550 (2160p).mp4" type='video/mp4' />
          </video> */}

          <div className="hero-mess row">
            <div className="hero-mess-content col-12">
              <h2>∆εν είναι απλή αγορά ακινήτου...είναι επένδυση</h2>
              <p>Επενδύστε στην αγορά ακινήτου,επενδύστε στο αύριο</p>
            </div>
          </div>
          {/* <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form> */}
        </div>
      </section>
    </>
  )
}


const Hero = () => {
  return (
      <div className="homeslider">
        {/* <a className="slideritem">
          <img src="./images/house4.jpg"></img>
        </a> */}
        <a className="slideritem" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')`}} >
        </a>
      </div>
  )
}

export default Hero
