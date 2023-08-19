import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              {/* <img src='../images/logo-light.png' alt='' /> */}
              <h2>Any help you need</h2>
              <p>Find the best deal for you!</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => ( // Add a unique key based on the index
            <div key={index} className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, itemIndex) => ( // Add a unique key for the inner map
                  <li key={itemIndex}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>Rights belong to CCNE</span>
      </div>
    </>
  )
}

export default Footer
