import React from "react"
import { services } from "../data/Data"

const ServiceBox = () => {
  return (
    <>
      {/* <div className='content row d-flex flex-row justify-content-center flex-wrap'> */}
        {services.map((items, index) => (
          <div className='service-box col-md-4' key={index}>
            <div className="row justify-content-center">
              <img src={items.image} alt=''/>
            </div>
            <h4 className="text-center">{items.title}</h4>
            <ul>
                {items.provides.map((point,index)=> {
                    return(
                        <>
                            <li>{point.Description}</li>
                            <span className={point.comment?"point-comment":"d-none"}>{point.comment}</span>
                        </>
                    )
                })}
            </ul>
            
          </div>
        ))}
      {/* </div> */}
    </>
  )
}
//for service cards
//https://uiverse.io/htwarriors108/tasty-stingray-56
export default ServiceBox