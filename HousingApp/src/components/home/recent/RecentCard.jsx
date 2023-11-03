import React from "react"
import { Link } from "react-router-dom";
import { list } from "../../data/Data"
import { BsBuildingFill, BsFillLayersFill, BsFillPinMapFill } from 'react-icons/bs';
import background from "../../images/services.jpg";

// const RecentCard = () => {
//   return (
//     <>
//       <div className='content grid3 mtop'>
//         {list.map((val, index) => {
//           const { cover, category, location, name, price, type } = val
//           return (
//             <div className='box shadow' key={index}>
//               <div className='img'>
//                 <img src={cover} alt='' />
//               </div>
//               <div className='text'>
//                 <div className='category flex'>
//                   <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
//                   <i className='fa fa-heart'></i>
//                 </div>
//                 <h4>{name}</h4>
//                 <p>
//                   <i className='fa fa-location-dot'></i> {location}
//                 </p>
//               </div>
//               <div className='button flex'>
//                 <div>
//                   <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
//                 </div>
//                 <span>{type}</span>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

const RecentCard = () => {
  return (
    <>
      {/* <div className='content grid3 mtop'> */}
      {list.map((val, index) => {
        const { cover, category, location, name, price, type } = val
        return (
          // <div className="row">
          <div className="col-md-4" key={val.id}>
            <Link to={`/projects/${val.refName}`}>
              <div className='box shadow houses-grid-item'>

                {/* <div className='houses-grid-img' style={{ backgroundImage: `url(${background})` }}> */}
                <div className='houses-grid-img' style={{ backgroundImage: `url(${val.cover})` }}>
                  {/* <img src={cover} alt='' /> */}

                </div>
                <div className="houses-grid-content">
                  <span>Ολοκληρωμένο</span>
                  <h4>{val.name}</h4>
                </div>
                <div className="rentals-grid-tabs">
                  <span className="rentals-grid-tab">
                    <BsFillPinMapFill /> Nicosia
                  </span>
                  <span className="rentals-grid-tab">
                    <BsBuildingFill /> Κατοικία
                  </span>
                  <span className="rentals-grid-tab">
                    <BsFillLayersFill /> 6 ορόφοι
                  </span>
                </div>
              </div>
            </Link>
          </div>
          //</div>


        )
      })}
      {/* </div> */}
    </>
  )
}

export default RecentCard
