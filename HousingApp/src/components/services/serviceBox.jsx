import React,{useEffect} from "react"
import { services } from "../data/Data"
import "./serviceBox.css"
import { BsCheckLg} from 'react-icons/bs';

//https://uiverse.io/Yaya12085/serious-eagle-83
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

const ServiceBox = ({ serviceButtonState, updateServiceButtonService }) => {

  // return (
  //   <>
  //       {services.map((items, index) => (
  //         <div className='service-box col-md-6' data-aos="flip-left" data-aos-duration="1000" key={index}>
  //           <div className="inner-card">
  //             <div className="front-side">
  //                 <p className="inner-card-title">{items.title}</p>
  //                   <BsArrowRightCircle/>
  //             </div>
  //             <div className="back-side">
  //               <ul>
  //                 {items.provides.map((point,index)=> {
  //                   return(
  //                       <>
  //                           <li>{point.Description}</li>
  //                           <span className={point.comment?"point-comment":"d-none"}>{point.comment}</span>
  //                       </>
  //                   )
  //                 })}
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //   </>
  // )

  const handleChangeState = (e) => {
    // Request a state update in the parent
    updateServiceButtonService(!serviceButtonState);
    console.log(!serviceButtonState);
  };

  return (
    <>
        {services.map((items, index) => (
          <div className="service-card-container col-md-4" data-aos="flip-left" data-aos-duration="1000" data-aos-once="true" key={index}>
            <div className="service-card-header">
              {items.title}
            </div>
            <div className="mb-4 h-100">
               <div className="service-card-content">
              {items.provides.map((point,itemIndex)=> {
                  return(
                      <div className="row" key={`${index}-${itemIndex}`}>
                        <div className="col-2 col-md-3 col-lg-2 service-card-content-item">
                        <span>
                          <BsCheckLg/>
                        </span>
                        </div>
                        <div className="col-9 col-md-8 col-lg-9">
                          <p>
                            {point.Description}
                          </p>
                          <span className={point.Note?"fst-italic":"d-none"}>{point.Note}</span>
                        </div>
                      </div>
                  )
                })}
              </div> 
            </div>
            <div className="service-card-button">
              <button type="button" onClick={handleChangeState}>
                Ενδιαφερομαι
              </button>
            </div>
        </div>
        ))}
    </>
  )

}
//for service cards
//https://uiverse.io/htwarriors108/tasty-stingray-56
export default ServiceBox