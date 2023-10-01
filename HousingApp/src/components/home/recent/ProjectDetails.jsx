import React,{ useState } from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import "./projectDetails.css"
import backgroundImg from "../../images/services.jpg";
import Heading from '../../common/Heading';
import { LiaMapMarkerSolid,LiaLayerGroupSolid,LiaBedSolid,LiaBathSolid,LiaBuilding,LiaBoxesSolid,LiaExclamationCircleSolid } from "react-icons/lia";
import FsLightbox from "fslightbox-react";
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import ScrollToTop from '../../../customHelperComponents/ScrollToTop';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core  
import "primereact/resources/primereact.min.css";                                       
        


const ProjectDetails = ({ match }) => {
  const [toggler, setToggler] = useState(false);
  const [dialogFormVisible,setDialogFormVisible] = useState(false)

  // Extract the project ID from the URL parameter
  const projectId = match.params.id;
  const projectData = {
    title:"Initio",location:"Strovolos",region:"Nicosia",floors:"4",bedrooms:"2,3",bathrooms:"2",type:"Residential",apartments:"8",status:"Completed",
    description:"We are thrilled to introduce our latest housing project, a testament to modern living and urban elegance. This meticulously designed development comprises four impeccably constructed floors, housing a total of eight luxurious apartments. Each apartment is thoughtfully designed to offer residents the utmost comfort and style, with options ranging from spacious two-bedroom layouts to more expansive three-bedroom residences. The project embodies a harmonious blend of contemporary architecture, premium materials, and attention to detail, ensuring a living experience that exceeds expectations. Situated in a prime location, this development offers not only a beautiful place to call home but also easy access to urban amenities, making it an ideal choice for those seeking a higher standard of living in a vibrant urban setting. Welcome to a new era of sophisticated and convenient living."
    ,imagePaths:["https://i.imgur.com/fsyrScY.jpg","https://i.imgur.com/1fOq0pJ.jpeg","https://i.imgur.com/AqVIYir.jpeg"]
    ,apartmentList:[
      {
        flatNo: "102",
        beds: "2",
        area: "90 m2",
        verandas: "25 m2/15 m2",
        totalArea: "115 m2",
        status: "Available"
      },
      {
        flatNo: "103",
        beds: "1",
        area: "50 m2",
        verandas: "10 m2/5 m2",
        totalArea: "60 m2",
        status: "Available"
      },
      {
        flatNo: "104",
        beds: "4",
        area: "160 m2",
        verandas: "35 m2/20 m2",
        totalArea: "195 m2",
        status: "Sold"
      },
      {
        flatNo: "105",
        beds: "3",
        area: "120 m2",
        verandas: "30 m2/18 m2",
        totalArea: "150 m2",
        status: "Available"
      },
      {
        flatNo: "106",
        beds: "2",
        area: "80 m2",
        verandas: "20 m2/12 m2",
        totalArea: "100 m2",
        status: "Available"
      }
    ]
    
  }

  const dialogFooterTemplate = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogFormVisible(false)} />;
  };

  const actionBodyTemplate = (rowData) => {
    return (
        <>
            <Button label="Interested" icon="pi pi-external-link" onClick={() => setDialogFormVisible(true)} />
        </>
    );
};

  return (
    <>
    <ScrollToTop />
    <Header/>
      <div className='container'>
        {/* <div className='project-img' style={{ backgroundImage: `url(${backgroundImg})` }}>
          <img src={background} alt='' />
                      <span>kokos</span>
        </div> */}
        <div className="project-img">
          <img src={backgroundImg} alt=""/>
          <div className="project-img-text">{projectData.title}</div>
        </div>
        <div className='info-icon-box'>
        <div className='row'>
          <div className='col-md-3 d-flex'>
            <div className='info-icon-svg'>
              <LiaMapMarkerSolid />    
            </div>
            <div className='info-icon-content'>
              <p className='info-icon-title'>LOCATION</p>
              <p className='info-icon-description'>{projectData.location},{projectData.region}</p>
            </div>
          </div>
          <div className='col-md-3 d-flex'>
            <div className='info-icon-svg'>
              <LiaLayerGroupSolid />    
            </div>
            <div className='info-icon-content'>
              <p className='info-icon-title'>FLOORS</p>
              <p className='info-icon-description'>{projectData.floors}</p>
            </div>
          </div>
          <div className='col-md-3 d-flex'>
            <div className='info-icon-svg'>
              <LiaBedSolid />    
            </div>
            <div className='info-icon-content'>
              <p className='info-icon-title'>BEDROOMS</p>
              <p className='info-icon-description'>{projectData.bedrooms}</p>
            </div>
          </div>
          <div className='col-md-3 d-flex'>
            <div className='info-icon-svg'>
              <LiaBathSolid />    
            </div>
            <div className='info-icon-content'>
              <p className='info-icon-title'>BATHROOMS</p>
              <p className='info-icon-description'>{projectData.bathrooms}</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 d-flex'>
            <div className='info-icon-svg'>
              <LiaBuilding />    
            </div>
            <div className='info-icon-content'>
              <p className='info-icon-title'>TYPE</p>
              <p className='info-icon-description'> {projectData.type}</p>
            </div>
          </div>
          <div className='col-md-3 d-flex'>
            <div className='info-icon-svg'>
              <LiaBoxesSolid />    
            </div>
            <div className='info-icon-content'>
              <p className='info-icon-title'>APARTMENTS</p>
              <p className='info-icon-description'>{projectData.apartments}</p>
            </div>
          </div>
          <div className='col-md-3 d-flex'>
            <div className='info-icon-svg'>
              <LiaExclamationCircleSolid />    
            </div>
            <div className='info-icon-content'>
              <p className='info-icon-title'>STATUS</p>
              <p className='info-icon-description'>{projectData.status}</p>
            </div>
          </div>
        </div>
        </div>
        <div className='project-wrapper-box'>
          <div className='project-wrapper-title'>
            <Heading title="OVERVIEW"/>
          </div>
          <div className='project-wrapper-content'>
            <p>{projectData.description}</p>
          </div>
        </div>
        <div className='project-wrapper-box'>
          <div className='project-wrapper-title'>
            <Heading title="IMAGES"/>
          </div>
          <div className='project-wrapper-content'>
            {projectData.imagePaths.map((val,index)=>(
              <img src={val} key={index} onClick={() => setToggler(!toggler)}/>
            )
            
            )}
            {/* <button onClick={() => setToggler(!toggler)}>
              Open the lightbox.
            </button> */}
            <FsLightbox
              toggler={toggler}
              sources={projectData.imagePaths}
              // sources={[
              //   "https://i.imgur.com/fsyrScY.jpg",
              //   "https://i.imgur.com/1fOq0pJ.jpeg",
              //   "https://i.imgur.com/AqVIYir.jpeg"
              //   // "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
              //   // "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              // ]}
            />
          </div>
        </div>
        <div className='project-wrapper-box'>
          <div className='project-wrapper-title'>
            <Heading title="AVAILABILITY"/>
          </div>
          <div className='project-wrapper-content'>
            <DataTable value={projectData.apartmentList} stripedRows  tableStyle={{ minWidth: '50rem' }}>
              <Column field="flatNo" header="Flat No."></Column>
              <Column field="beds" header="Beds"></Column>
              <Column field="area" header="Area"></Column>
              <Column field="verandas" header="Verandas"></Column>
              <Column field="totalArea" header="Total Area"></Column>
              <Column field="status" header="Status"></Column>
              <Column header="Actions" body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }} alignFrozen="right" frozen={true}></Column>
            </DataTable>
          </div>
        </div>
      </div>
    <Footer/>

    <Dialog header="Flex Scroll" breakpoints={{ '960px': '75vw', '641px': '90vw' }} visible={dialogFormVisible} style={{ width: '75vw' }} maximizable
                modal contentStyle={{ height: '300px' }} onHide={() => setDialogFormVisible(false)} footer={dialogFooterTemplate}>
            {/* <DataTable value={customers} scrollable scrollHeight="flex" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="company" header="Company"></Column>
            </DataTable> */}
        </Dialog>
    </>
  );
};

export default ProjectDetails;
