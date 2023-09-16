import React,{useEffect} from "react"
import { services } from "../data/Data"
import "./serviceBox.css"
import { BsArrowRightCircle} from 'react-icons/bs';


// const ServiceBox = () => {
//   return (
//     <>
//       {/* <div className='content row d-flex flex-row justify-content-center flex-wrap'> */}
//         {services.map((items, index) => (
//           <div className='service-box col-md-4' key={index}>
//             <div className="row justify-content-center">
//               <img src={items.image} alt=''/>
//             </div>
//             <h4 className="text-center">{items.title}</h4>
//             <ul>
//                 {items.provides.map((point,index)=> {
//                     return(
//                         <>
//                             <li>{point.Description}</li>
//                             <span className={point.comment?"point-comment":"d-none"}>{point.comment}</span>
//                         </>
//                     )
//                 })}
//             </ul>
            
//           </div>
//         ))}
//       {/* </div> */}
//     </>
//   )
// }

const ServiceBox = () => {

  // return (
  //   <>
  //       {services.map((items, index) => (
  //         <div className='service-box col-md-4' data-aos="flip-left" data-aos-duration="1000" key={index}>
  //           <div className="row justify-content-center">
  //             <img src={items.image} alt=''/>
  //           </div>
  //           <h4 className="text-center">{items.title}</h4>
  //           <ul>
  //               {items.provides.map((point,index)=> {
  //                   return(
  //                       <>
  //                           <li>{point.Description}</li>
  //                           <span className={point.comment?"point-comment":"d-none"}>{point.comment}</span>
  //                       </>
  //                   )
  //               })}
  //           </ul>
            
  //         </div>
  //       ))}
  //   </>
  // )

  return (
    <>
        {services.map((items, index) => (
          <div className='service-box col-md-6' data-aos="flip-left" data-aos-duration="1000" key={index}>
            <div class="inner-card">
              <div class="front-side">
                  <p class="inner-card-title">{items.title}</p>
                    <BsArrowRightCircle/>
              </div>
              <div class="back-side">
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
            </div>

            {/* <div className="row justify-content-center">
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
            </ul> */}
            
          </div>
        ))}
    </>
  )
}
//for service cards
//https://uiverse.io/htwarriors108/tasty-stingray-56
export default ServiceBox