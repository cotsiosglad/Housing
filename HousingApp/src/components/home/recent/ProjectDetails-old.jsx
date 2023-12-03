import React, { useState, useRef } from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import "./projectDetails.css"
//import backgroundImg from "../../images/services.jpg";
import Heading from '../../common/Heading';
import { LiaMapMarkerSolid, LiaLayerGroupSolid, LiaBedSolid, LiaBathSolid, LiaBuilding, LiaBoxesSolid, LiaExclamationCircleSolid } from "react-icons/lia";
//import FsLightbox from "fslightbox-react";
import { DataTable } from 'primereact/datatable';
//import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import ScrollToTop from '../../../customHelperComponents/ScrollToTop';
import DialogContactForm from '../../helper/dialogContactForm/DialogContactForm';
//import ImageViewer from '../../helper/imageViewer/ImageViewer';
import ImageCarousel from '../../helper/imageCarousel/ImageCarousel';
import { Galleria } from 'primereact/galleria';
import { BlockUI } from 'primereact/blockui';
import LoadingBar from '../../helper/loadingBar/LoadingBar';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core  
import "primereact/resources/primereact.min.css";
import { GetStorageFolderFiles } from '../../../firebase';



const ProjectDetails = ({ match }) => {
  const [toggler, setToggler] = useState(false);
  const [dialogFormVisible, setDialogFormVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null);
  const [blocked, setBlocked] = useState(false);
  const [itemImages, setItemImages] = useState([{
    itemImageSrc: '../images/1.png',
    thumbnailImageSrc: '../images/1.png',
    alt: '1',
    title: 'Title 1'
  }]);
  const galleria = useRef(null);
  const box = useRef(null);

  const responsiveOptions = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block', height: '75vh' }} />;
  }

  const thumbnailTemplate = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
  }

  // Extract the project ID from the URL parameter
  const projectId = match.params.id;
  // const projectData = {
  //   id:1,
  //   title:"Initio",location:"Strovolos",region:"Nicosia",floors:"4",bedrooms:"2,3",bathrooms:"2",type:"Residential",apartments:"8",status:"Completed",
  //   description:"We are thrilled to introduce our latest housing project, a testament to modern living and urban elegance. This meticulously designed development comprises four impeccably constructed floors, housing a total of eight luxurious apartments. Each apartment is thoughtfully designed to offer residents the utmost comfort and style, with options ranging from spacious two-bedroom layouts to more expansive three-bedroom residences. The project embodies a harmonious blend of contemporary architecture, premium materials, and attention to detail, ensuring a living experience that exceeds expectations. Situated in a prime location, this development offers not only a beautiful place to call home but also easy access to urban amenities, making it an ideal choice for those seeking a higher standard of living in a vibrant urban setting. Welcome to a new era of sophisticated and convenient living."
  //   ,images:[{
  //     itemImageSrc: 'https://i.imgur.com/fsyrScY.jpg',
  //     thumbnailImageSrc: 'https://i.imgur.com/fsyrScY.jpg',
  //     alt: 'Description for Image 1',
  //     title: 'Title 1'
  //   },
  //   {
  //     itemImageSrc: 'https://i.imgur.com/1fOq0pJ.jpeg',
  //     thumbnailImageSrc: 'https://i.imgur.com/1fOq0pJ.jpeg',
  //     alt: 'Description for Image 2',
  //     title: 'Title 2'
  //   },
  //   {
  //     itemImageSrc: 'https://i.imgur.com/AqVIYir.jpeg',
  //     thumbnailImageSrc: 'https://i.imgur.com/AqVIYir.jpeg',
  //     alt: 'Description for Image 3',
  //     title: 'Title 3'
  //   }],
  //   imagePaths:["https://i.imgur.com/fsyrScY.jpg","https://i.imgur.com/1fOq0pJ.jpeg","https://i.imgur.com/AqVIYir.jpeg"],
  //   apartmentList:[
  //     {
  //       id:1,
  //       flatNo: "102",
  //       beds: "2",
  //       area: "90 m2",
  //       verandas: "25 m2/15 m2",
  //       totalArea: "115 m2",
  //       status: "Available",
  //       images:[{
  //         itemImageSrc: 'https://i.imgur.com/fsyrScY.jpg',
  //         thumbnailImageSrc: 'https://i.imgur.com/fsyrScY.jpg',
  //         alt: 'Description for Image 1',
  //         title: 'Title 1'
  //       },{
  //         itemImageSrc: 'https://i.imgur.com/1fOq0pJ.jpeg',
  //         thumbnailImageSrc: 'https://i.imgur.com/1fOq0pJ.jpeg',
  //         alt: 'Description for Image 2',
  //         title: 'Title 2'
  //       }]
  //     },
  //     {
  //       id:2,
  //       flatNo: "103",
  //       beds: "1",
  //       area: "50 m2",
  //       verandas: "10 m2/5 m2",
  //       totalArea: "60 m2",
  //       status: "Available",
  //       images:["https://i.imgur.com/fsyrScY.jpg","https://i.imgur.com/1fOq0pJ.jpeg","https://i.imgur.com/AqVIYir.jpeg"]
  //     },
  //     {
  //       id:3,
  //       flatNo: "104",
  //       beds: "4",
  //       area: "160 m2",
  //       verandas: "35 m2/20 m2",
  //       totalArea: "195 m2",
  //       status: "Sold"
  //     },
  //     {
  //       id:4,
  //       flatNo: "105",
  //       beds: "3",
  //       area: "120 m2",
  //       verandas: "30 m2/18 m2",
  //       totalArea: "150 m2",
  //       status: "Available"
  //     },
  //     {
  //       id:5,
  //       flatNo: "106",
  //       beds: "2",
  //       area: "80 m2",
  //       verandas: "20 m2/12 m2",
  //       totalArea: "100 m2",
  //       status: "Available"
  //     }
  //   ]

  // }

  const projectData = {
    id: 1,
    title: "Gardens", location: "Νήσου", region: "Λευκωσία", floors: "2", bedrooms: "4", bathrooms: "2", type: "Residential", apartments: "0", status: "Completed",
    description: "Η Domus Alba παρουσιάζει το νέο συγκρότημα κατοικιών που βρίσκεται στην περιοχή Νήσου, της επαρχίας Λευκωσίας. Το έργο έξυπνα χωροθετημένο πολύ κοντά στον αυτοκινητόδρομο Λευκωσίας - Λάρνακας - Λεμεσού. Αποτελεί μια πολύ οικονομική και έξυπνη λύση λόγο της εύκολη πρόσβασης στον αυτοκινητόδρομο καθώς και στις κοντινές υπηρεσίες της περιοχής Ιδαλίου, Πέρα Χωρίου και Νήσου.Το έργο αποτελείται από 4 ανεξάρτητες κατοικίες με πολύ μεγάλη αυλή η κάθε μία για τις οικογενειακές σας στιγμές. Τα  ποιοτικά υλικά και οι άνετοι χώροι εσωτερικά και εξωτερικά των κατοικιών συνθέτουν την καλύτερη επιλογή σε σχέση τιμής και ποιότητας"
    , images: [{
      itemImageSrc: 'https://firebasestorage.googleapis.com/v0/b/housing-app-628b7.appspot.com/o/projects%2Fab%2FprojectImages%2F1b6ed9d8-e7a7-4e9e-bb15-863d6106370c_%CE%99%CE%A3%CE%9F%CE%93%CE%95%CE%99%CE%9F.png?alt=media&token=b01462e5-f832-4695-962b-65c89b427726'
      ,
      thumbnailImageSrc: '../images/1.png',
      alt: '1',
      title: 'Title 1'
    },
    {
      itemImageSrc: '../images/2.png',
      thumbnailImageSrc: '../images/2.png',
      alt: '2',
      title: 'Title 2'
    },
    {
      itemImageSrc: '../images/3.png',
      thumbnailImageSrc: '../images/3.png',
      alt: '3',
      title: 'Title 3'
    },
    {
      itemImageSrc: '../images/ΙΣΟΓΕΙΟ.png',
      thumbnailImageSrc: '../images/ΙΣΟΓΕΙΟ.png',
      alt: 'ΙΣΟΓΕΙΟ',
      title: 'ΙΣΟΓΕΙΟ'
    },
    {
      itemImageSrc: '../images/ΙΣΟΓΕΙΟ1.jpg',
      thumbnailImageSrc: '../images/ΙΣΟΓΕΙΟ1.jpg',
      alt: 'ΙΣΟΓΕΙΟ1',
      title: 'ΙΣΟΓΕΙΟ1'
    },
    {
      itemImageSrc: '../images/ΟΡΟΦΟΣ.png',
      thumbnailImageSrc: '../images/ΟΡΟΦΟΣ.png',
      alt: 'ΟΡΟΦΟΣ',
      title: 'ΟΡΟΦΟΣ'
    },
    {
      itemImageSrc: '../images/ΟΡΟΦΟΣ1.jpg',
      thumbnailImageSrc: '../images/ΟΡΟΦΟΣ1.jpg',
      alt: 'ΟΡΟΦΟΣ1',
      title: 'ΟΡΟΦΟΣ1'
    }
    ],
    imagePaths: ["https://i.imgur.com/fsyrScY.jpg", "https://i.imgur.com/1fOq0pJ.jpeg", "https://i.imgur.com/AqVIYir.jpeg"],
    apartmentList: [
      {
        id: 1,
        flatNo: "102",
        beds: "2",
        area: "90 m2",
        verandas: "25 m2/15 m2",
        totalArea: "115 m2",
        status: "Available",
        images: [{
          itemImageSrc: 'https://i.imgur.com/fsyrScY.jpg',
          thumbnailImageSrc: 'https://i.imgur.com/fsyrScY.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1'
        }, {
          itemImageSrc: 'https://i.imgur.com/1fOq0pJ.jpeg',
          thumbnailImageSrc: 'https://i.imgur.com/1fOq0pJ.jpeg',
          alt: 'Description for Image 2',
          title: 'Title 2'
        }]
      },
      {
        id: 2,
        flatNo: "103",
        beds: "1",
        area: "50 m2",
        verandas: "10 m2/5 m2",
        totalArea: "60 m2",
        status: "Available",
        images: ["https://i.imgur.com/fsyrScY.jpg", "https://i.imgur.com/1fOq0pJ.jpeg", "https://i.imgur.com/AqVIYir.jpeg"]
      },
      {
        id: 3,
        flatNo: "104",
        beds: "4",
        area: "160 m2",
        verandas: "35 m2/20 m2",
        totalArea: "195 m2",
        status: "Sold"
      },
      {
        id: 4,
        flatNo: "105",
        beds: "3",
        area: "120 m2",
        verandas: "30 m2/18 m2",
        totalArea: "150 m2",
        status: "Available"
      },
      {
        id: 5,
        flatNo: "106",
        beds: "2",
        area: "80 m2",
        verandas: "20 m2/12 m2",
        totalArea: "100 m2",
        status: "Available"
      }
    ]

  }

  // const dialogFooterTemplate = () => {
  //   return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogFormVisible(false)} />;
  // };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button severity="secondary" icon="pi pi-comment" rounded onClick={() => setDialogFormVisible(true)} />
      </>
    );
  };

  const updateDialogProjectVisible = (newState) => {
    // console.log(newState)
    setDialogFormVisible(newState);
  };

  const onSelectItem = (item) => {
    setBlocked(true);
    let list = GetStorageFolderFiles().then((result) => {
      setItemImages(result);
      // result.map((val, index) => (
      //   imageList.push({
      //     itemImageSrc: val,
      //     thumbnailImageSrc: val,
      //     alt: index,
      //     title: `Title ${index}`
      //   })
      // ))
      setBlocked(false);
      galleria.current.show();
    }
    );

    //setItemImages(item.images)
    //openImageViewer(item)

  }

  // const openImageViewer = (item) =>{
  //   return(<Galleria value={itemImages} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} 
  //   circular fullScreen={true} showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />)
  // }
  return (
    <>
      <ScrollToTop />
      <Galleria ref={galleria} value={itemImages} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }}
        circular fullScreen={true} showItemNavigators item={itemTemplate} showThumbnails={true} thumbnail={thumbnailTemplate} />
      {/* <FsLightbox ref={box}
        toggler={toggler}

        sources={projectData.imagePaths}
      /> */}
      <Header />
      <div className='container'>
        {/* <div className='project-img' style={{ backgroundImage: `url(${backgroundImg})` }}>
          <img src={background} alt='' />
                      <span>kokos</span>
        </div> */}
        <div className=" row">
          <div className='col-12 project-img'>
            <img src="../images/Gardens.jpg" alt="" />
            <div className="project-img-text">{projectData.title}</div>
          </div>
        </div>
        <div>
          <div className='col-12 info-icon-box'>
            <div className='row'>
              <div className='col-md-3 d-flex p-3'>
                <div className='info-icon-svg'>
                  <LiaMapMarkerSolid />
                </div>
                <div className='info-icon-content'>
                  <p className='info-icon-title'>LOCATION</p>
                  <p className='info-icon-description'>{projectData.location},{projectData.region}</p>
                </div>
              </div>
              <div className='col-md-3 d-flex p-3'>
                <div className='info-icon-svg'>
                  <LiaLayerGroupSolid />
                </div>
                <div className='info-icon-content'>
                  <p className='info-icon-title'>FLOORS</p>
                  <p className='info-icon-description'>{projectData.floors}</p>
                </div>
              </div>
              <div className='col-md-3 d-flex p-3'>
                <div className='info-icon-svg'>
                  <LiaBedSolid />
                </div>
                <div className='info-icon-content'>
                  <p className='info-icon-title'>BEDROOMS</p>
                  <p className='info-icon-description'>{projectData.bedrooms}</p>
                </div>
              </div>
              <div className='col-md-3 d-flex p-3'>
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
              <div className='col-md-3 d-flex p-3'>
                <div className='info-icon-svg'>
                  <LiaBuilding />
                </div>
                <div className='info-icon-content'>
                  <p className='info-icon-title'>TYPE</p>
                  <p className='info-icon-description'> {projectData.type}</p>
                </div>
              </div>
              <div className='col-md-3 d-flex p-3'>
                <div className='info-icon-svg'>
                  <LiaBoxesSolid />
                </div>
                <div className='info-icon-content'>
                  <p className='info-icon-title'>APARTMENTS</p>
                  <p className='info-icon-description'>{projectData.apartments}</p>
                </div>
              </div>
              <div className='col-md-3 d-flex p-3'>
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

        </div>
        <div className='row mt-4'>
          <div className='col-8'>
            <div className='project-wrapper-box'>
              <div className='project-wrapper-title'>
                {/* <Heading title="OVERVIEW"/> */}
              </div>
              <div className='project-wrapper-content'>
                <div className='project-content-text'>
                  <p>{projectData.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='project-info-card'>
              <img src='../images/Gardens-Br-1.jpg' alt=''></img>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='project-wrapper-title'>
              {/* <Heading title="IMAGES"/> */}
            </div>
            <div className='project-wrapper-content'>
              {/* <ImageViewer imageList={projectData.images}/> */}
              {/* {projectData.imagePaths.map((val,index)=>(
                <img src={val} alt="" key={index} onClick={() => setToggler(!toggler)}/>
              )
              
              )} */}
              <div className='project-details-card'>
                <ImageCarousel imageList={projectData.images} />
                {/* <ImageViewer imageList={projectData.images} /> */}
              </div>
              {/* <button onClick={() => setToggler(!toggler)}>
                Open the lightbox.
              </button> */}
              {/* <FsLightbox
                toggler={toggler}
                sources={projectData.imagePaths}
                
                // sources={[
                //   "https://i.imgur.com/fsyrScY.jpg",
                //   "https://i.imgur.com/1fOq0pJ.jpeg",
                //   "https://i.imgur.com/AqVIYir.jpeg"
                //   // "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
                //   // "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                // ]}
              /> */}
            </div>
          </div>
        </div>
        <div className='row'>
          <BlockUI blocked={blocked}>
            <LoadingBar isVisible={blocked} />
            <div className='col-12'>
              <div className='project-wrapper-title'>
                <Heading title="AVAILABILITY" />
              </div>
              <div className='project-wrapper-content'>
                <DataTable selectionMode="single" selection={selectedProject} metaKeySelection={false} onSelectionChange={(e) => onSelectItem(e.value)} dataKey="id" value={projectData.apartmentList} stripedRows tableStyle={{ minWidth: '50rem' }}>
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
          </BlockUI>
        </div>

        <div className='row mt-4'>
          <div className='col-4 text-center align-self-center'>
            <button type='button' className='download-button' onClick={() => { window.open('path-to-your-pdf.pdf', '_blank'); }}>
              Download Brochure
            </button>
          </div>
          <div className='col-8 text-center align-self-center'>
            <video controls autoPlay={false} style={{ height: "230px" }}>
              <source src="../images/GARDENS.mp4" type="video/mp4"  ></source>
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
        <div className='row mt-4'>
          <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1633.7355154704296!2d33.3861667!3d35.0199444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDAxJzExLjgiTiAzM8KwMjMnMTAuMiJF!5e0!3m2!1sen!2s!4v1696547889347!5m2!1sen!2s" style={{ border: "0", width: "100%", height: "304px" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
      </div>
      <Footer />
      <DialogContactForm dialogVisibleStage={dialogFormVisible} updateDialogVisibleState={updateDialogProjectVisible} />
      {/* <Dialog header="Flex Scroll" breakpoints={{ '960px': '75vw', '641px': '90vw' }} visible={dialogFormVisible} style={{ width: '75vw' }} maximizable
                modal contentStyle={{ height: '300px' }} onHide={() => setDialogFormVisible(false)} footer={dialogFooterTemplate}>
      </Dialog> */}
    </>
  );
};

export default ProjectDetails;
