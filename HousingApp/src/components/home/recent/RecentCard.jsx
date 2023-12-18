import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list } from "../../data/Data";
import {
  BsBuildingFill,
  BsFillLayersFill,
  BsFillPinMapFill,
} from "react-icons/bs";
import { GetAllDocs, GetStorageFolderFiles } from "../../../firebase";
import background from "../../images/services.jpg";
import { ConvertPathToGalleriaModel } from "../../helper/CommonFunctions";

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
  const [projects, setProjects] = useState([]);
  const [projectsMainImage, setProjectMainImage] = useState([]);
  useEffect(() => {
    //add firebase api here
    //ProductService.getProducts().then((data) => setProjects(data));
    //var aa = GetDocByRefId("Projects", "Jt2Prr7DhQb5NmosVi0n").then((data) => console.log(data));
    async function fetchData() {
      try {
        const data = await GetAllDocs("Projects");

        const sortedProjects = data
          .map((m) => m.data)
          .sort((a, b) => a.sortNumber - b.sortNumber);

        const projectsWithImages = await Promise.all(
          sortedProjects.map(async (proj) => {
            const path = `projects/${proj.refName}/mainImage`;
            const fileData = await GetStorageFolderFiles(path);
            const files = fileData.map((m) =>
              ConvertPathToGalleriaModel(m.fileUrl, m.fileName)
            );
            return {
              data: proj,
              mainImage: files.length > 0 ? files : "",
            };
          })
        );

        setProjects(projectsWithImages);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching projects:", error);
      }
    }
    fetchData();
    // setTimeout(() => {
    //   fetchData();
    // }, 50000);
  }, []);
  return (
    <>
      {/* <div className='content grid3 mtop'> */}
      {projects.map((val, index) => {
        const { cover, category, location, name, price, type } = val;
        return (
          // <div className="row">
          <div className="col-md-4" key={val.data.id}>
            <Link to={`/projects/${val.data.refName}`}>
              <div className="box shadow houses-grid-item">
                <div
                  className="houses-grid-img"
                  style={{
                    backgroundImage: `url(${val.mainImage[0]?.itemImageSrc
                      ? val.mainImage[0].itemImageSrc
                      : "../../images/no_image.jpg"
                      })`,
                  }}>
                  {/* <div className='houses-grid-img' style={{ backgroundImage: `url(${val.cover})` }}> */}
                  {/* <img src={cover} alt='' /> */}
                </div>
                <div className="houses-grid-content">
                  <span className="rentals-grid-tab" style={{ width: "50%" }}>
                    {val.data.status}
                  </span>
                  <h4 className="text-center">{val.data.title}</h4>
                </div>
                <div className="rentals-grid-tabs">
                  <span className="rentals-grid-tab">
                    <BsFillPinMapFill /> {val.data.region}
                  </span>
                  <span className="rentals-grid-tab">
                    <BsBuildingFill /> Residential
                  </span>

                  <span
                    className={`rentals-grid-tab ${val.data.apartments ? "" : "d-none"
                      }`}>
                    <BsFillLayersFill /> {val.data.apartments} Apartments
                  </span>
                </div>
              </div>
            </Link>
          </div>
          //</div>
        );
      })}
      {/* </div> */}
    </>
  );
};

export default RecentCard;
