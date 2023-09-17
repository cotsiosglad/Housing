import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import Heading from "../common/Heading"
import ServiceBox from "../services/serviceBox"
import "../../App.css"
import "./services.css"
import useIntersectionObserver from "../../customHooks/useIntersectionObserver"
import ScrollToTop from "../../customHelperComponents/ScrollToTop"; // Import the ScrollToTop component

const Services = () => {
  // useIntersectionObserver({
	// 	root: null,
	// 	rootMargin: '0px',
	// 	threshold: 0.4,
	// });
  return (
    <>
    <ScrollToTop />
      <div className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='container mtop'>
          <div className="row d-flex justify-content-center">
            <ServiceBox/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
