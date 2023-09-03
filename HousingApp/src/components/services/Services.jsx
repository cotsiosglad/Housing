import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import Heading from "../common/Heading"
import ServiceBox from "../services/serviceBox"
import "./services.css"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='container mtop'>
          <div className="row d-flex justify-content-around">
            <ServiceBox/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
