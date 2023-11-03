import {React,useEffect,useState} from "react"
import { Link } from "react-router-dom";
import { list } from "../../data/Data"
import { BsBuildingFill, BsFillLayersFill, BsFillPinMapFill } from 'react-icons/bs';
import {GetAllDocs,GetStorageFolderFiles} from '../../../firebase';
import background from "../../images/services.jpg";
import {ConvertPathToGalleriaModel} from '../../helper/CommonFunctions'

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
const [projects,setProjects] = useState([])
const [projectsMainImage,setProjectMainImage] = useState([])
  useEffect(() => {

    //add firebase api here
    //ProductService.getProducts().then((data) => setProjects(data));

    //var aa = GetDocByRefId("Projects", "Jt2Prr7DhQb5NmosVi0n").then((data) => console.log(data));
    GetAllDocs("Projects").then((data) => {
// console.log(data),


// const list = data.map(m => m.data).map((proejct,index)=>{
//   const path = "projects/" + proejct.refName + "/mainImage";

//   return (GetStorageFolderFiles(path).then((proejct) => {
//     const _currFile = {
//       files: proejct.map(m => { return ConvertPathToGalleriaModel(m.fileUrl, m.fileName) }),
//       flat: "",
//       destinationFolder: "mainImage"
//     }
//     if (_currFile.files.length > 0) {
//       return _currFile
//     }
//     else{return []}
//   }))
  
// })
setProjects(data.map(m => m.data))
console.log(list);

    }
        
        
        
        );

        
        

}, []);
  return (
    <>
      {/* <div className='content grid3 mtop'> */}
      {projects.map((val, index) => {
        const { cover, category, location, name, price, type } = val
        return (
          // <div className="row">
          <div className="col-md-4" key={val.id}>
            <Link to={`/projects/${val.refName}`}>
              <div className='box shadow houses-grid-item'>

                <div className='houses-grid-img' style={{ backgroundImage: `url(../images/1.png)` }}>
                {/* <div className='houses-grid-img' style={{ backgroundImage: `url(${val.cover})` }}> */}
                  {/* <img src={cover} alt='' /> */}

                </div>
                <div className="houses-grid-content">
                  <span>{val.status}</span>
                  <h4>{val.title}</h4>
                </div>
                <div className="rentals-grid-tabs">
                  <span className="rentals-grid-tab">
                    <BsFillPinMapFill /> {val.region}
                  </span>
                  <span className="rentals-grid-tab">
                    <BsBuildingFill /> Residential
                  </span>

                  <span className={`rentals-grid-tab ${val.apartments?'':'d-none'}`}>
                    <BsFillLayersFill /> {val.apartments} Apartments
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
