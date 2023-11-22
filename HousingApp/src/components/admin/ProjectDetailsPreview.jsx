import React, { useState, useRef, useEffect } from "react";
import "../home/recent/projectDetails.css";
//import backgroundImg from "../../images/services.jpg";
import Heading from "../common/Heading";
import {
  LiaMapMarkerSolid,
  LiaLayerGroupSolid,
  LiaBedSolid,
  LiaBathSolid,
  LiaBuilding,
  LiaBoxesSolid,
  LiaExclamationCircleSolid
} from "react-icons/lia";
import { BsMessenger, BsFacebook } from "react-icons/bs";
import { FaViber, FaRegCopy } from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import { DataTable } from "primereact/datatable";
//import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import DialogContactForm from "../helper/dialogContactForm/DialogContactForm";
//import ImageViewer from '../../helper/imageViewer/ImageViewer';
import ImageCarousel from "../helper/imageCarousel/ImageCarousel";
import { Galleria } from "primereact/galleria";
import { BlockUI } from "primereact/blockui";
import LoadingBar from "../helper/loadingBar/LoadingBar";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import {
  ConvertFilePathToFile,
  ConvertPathToGalleriaModel,
} from "../helper/CommonFunctions";
//core
import "primereact/resources/primereact.min.css";
import { GetStorageFolderFiles } from "../../firebase";
import { Skeleton } from "primereact/skeleton";
import { GetGoogleMapsEmbedUrlSrc } from "../helper/CommonFunctions";
import ImageFullScreenViewer from "../helper/ImageFullScreenViewer";
import ScrollToTop from "../../customHelperComponents/ScrollToTop";
import { OverlayPanel } from 'primereact/overlaypanel';
import Seo from "../../customHelperComponents/SeoComponent";


const ProjectDetailsPreview = ({
  project,
  apartmentList,
  proejctDescription,
  projectMainImage,
  projectImages,
  projectDocuments,
  projectSideImage,
  projectVideo,
}) => {
  const [toggler, setToggler] = useState(false);
  const [dialogFormVisible, setDialogFormVisible] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState("");
  // const [selectedProject, setSelectedProject] = useState(null);
  const [blocked, setBlocked] = useState(false);
  const op = useRef(null);
  const toast = useRef(null);
  // const [currProjectImages, setCurrProjectImages] = useState([]);
  // const [productIndex, setProductIndex] = useState(0);
  // const [lightboxController, setLightboxController] = useState({
  //   toggler: false,
  //   slide: 1,
  // });

  // const [itemImages, setItemImages] = useState([
  //   {
  //     itemImageSrc: "../images/1.png",
  //     thumbnailImageSrc: "../images/1.png",
  //     alt: "1",
  //     title: "Title 1",
  //   },
  // ]);
  const [itemImages, setItemImages] = useState([]);
  const galleria = useRef(null);
  const box = useRef(null);
  // function openLightboxOnSlide(number) {
  //   setLightboxController({
  //     toggler: !lightboxController.toggler,
  //     slide: number,
  //   });
  // }
  function fbshareCurrentPage() {
    //var n = window.location.href;
    var n = `https://domusalba.eu/projects/${project.refName}`;
    return window.open("https://www.facebook.com/sharer/sharer.php?u=" + escape(n) + "&t=" + project.title, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600", "_blank"),
      !1
  }

  function copyUrl() {
    navigator.clipboard.writeText(window.location.href);
    toast.current.show({
      severity: "success",
      summary: "Copied",
      detail: "URL Copied!",
      life: 3000,
    });
  }
  async function fetchAndSetItemImages(path) {
    try {
      debugger;
      const fileData = await GetStorageFolderFiles(path);
      const files = fileData.map((m) => {
        // return ConvertPathToGalleriaModel(m.fileUrl, m.fileName);
        return m.fileUrl;
      });
      if (files.length > 0) {
        // // const newProjectImages = [...itemImages, { files, flat: '', destinationFolder: 'apartments' }];
        // let _currFiles = itemImages.map((s) => s.itemImageSrc);
        // _currFiles.push(files.map((s) => s.itemImageSrc));

        //const newProjectImages = [...itemImages, files];
        const resultArray = [];
        for (let key in files) {
          if (Array.isArray(files[key])) {
            resultArray.push(...files[key]);
          } else {
            resultArray.push(files[key]);
          }
        }

        setItemImages(resultArray);
        //debugger;
        //return files;
        return resultArray;
      } else {
        return false;
      }
    } catch (error) {
      // Handle errors here
      return [];
    }
  }

  const aa = projectSideImage;
  useEffect(() => {
    // debugger;
    let _images =
      projectImages.length > 0
        ? projectImages
        : [
          {
            itemImageSrc: "../images/no_image.jpg",
            thumbnailImageSrc: "../images/no_image.jpg",
            alt: "No Image",
          },
        ];
    //let _images = []

    let aa = project;
    let aaa = projectMainImage;
    let b = projectSideImage;
    // projectImages.forEach(image => {
    //     if (image.files.length > 0) {
    //         image.files.forEach((file) => {
    //             _images.push({
    //                 itemImageSrc: file.itemImageSrc,
    //                 thumbnailImageSrc: file.itemImageSrc,
    //                 alt: file.alt,//file.name,
    //                 title: file.alt//file.name
    //             })
    //         });
    //     }
    // });

    // setCurrProjectImages(_images);setCurrProjectImages
  }, []);

  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (item) => {
    debugger;
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block", height: "75vh" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  const actionBodyTemplate = (rowData) => {
    setSelectedApartment(
      "Project:" + project.title + " Flat:" + rowData.flatNo
    );
    return (
      <>
        <Button
          severity="secondary"
          icon="pi pi-comment"
          rounded
          onClick={() => setDialogFormVisible(true)}
        />
      </>
    );
  };

  const updateDialogProjectVisible = (newState) => {
    console.log(newState);
    setDialogFormVisible(newState);
  };

  async function onSelectItem(item) {
    debugger;
    setBlocked(true);
    const path = "projects/" + project.refName + "/apartments/" + item.flatNo;
    // let list = GetStorageFolderFiles(path).then((result) => {
    //     setItemImages(result);
    //     // result.map((val, index) => (
    //     //   imageList.push({
    //     //     itemImageSrc: val,
    //     //     thumbnailImageSrc: val,
    //     //     alt: index,
    //     //     title: `Title ${index}`
    //     //   })
    //     // ))
    //     setBlocked(false);
    //     galleria.current.show();
    // }
    // );

    // await fetchAndSetItemImages(path).then((res) => {
    //   debugger;
    //   let itemIdx = itemImages.indexOf(item) + 1;
    //   // setProductIndex(itemIdx >= 0 ? itemIdx : 0);
    //   if (res) {
    //     setToggler(true);
    //   }
    const aa = await fetchAndSetItemImages(path);
    debugger;
    if (aa) {
      setItemImages(aa);
      setToggler(true);
    }

    // openLightboxOnSlide(itemIdx);
    setBlocked(false);
    //galleria.current.show();

    //setItemImages(item.images)
    //openImageViewer(item)
  }

  // const openImageViewer = (item) =>{
  //   return(<Galleria value={itemImages} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }}
  //   circular fullScreen={true} showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />)
  // }

  const renderSkeleton = (fileState) => {
    console.log(fileState.files);
    if (fileState && fileState.length > 0) {
      return (
        <img
          src={fileState[0].files[0].itemImageSrc}
          alt={fileState[0].files[0].name}></img>
      );
    } else {
      return <Skeleton width="100%" height="inherit"></Skeleton>;
    }
  };

  const renderSkeletonVideo = (fileState) => {
    if (fileState && fileState.length > 0) {
      //  return <img src={fileState[0].files[0].itemImageSrc} alt={projectMainImage[0].files[0].name}></img>
      return (
        <video controls autoPlay={false} style={{ height: "230px" }}>
          <source src={fileState[0].files[0].itemImageSrc}></source>
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <Skeleton width="100%" height="inherit"></Skeleton>;
    }
  };

  async function downloadFile(path) {
    debugger;
    //const downloaded = await DownloadSingleFile(path);
  }

  function createObjectURLFromURL(url) {
    // Fetch the resource from the URL
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        // Create an Object URL from the blob
        const objectURL = URL.createObjectURL(blob);
        console.log(objectURL);
        const link = document.getElementsByClassName("download-button");
        if (link && link[0] && objectURL) {
          link[0].setAttribute("href", objectURL);
        }
      })
      .catch((error) => {
        console.error("Error fetching or creating Object URL:", error);
      });
  }

  const retblob = (path) => {
    if (path) {
      //   URL.createObjectURL(
      //     ConvertFilePathToFile(path).then((file) => {
      //       const link = document.getElementsByClassName("download-button");
      //       link.setAttribute("href", file);
      //     })
      //   );
      createObjectURLFromURL(path);
    } else return "";
  };

  return (
    <>
      <Seo title={project.title} description={project.title} pathSlug={`projects/${project.refName}`} />
      <div className="overflow-hidden">
        <ScrollToTop />
        {/* <FsLightbox
        // toggler={lightboxController.toggler}
        toggler={toggler}
        // sources={itemImages.map((s) => s.itemImageSrc)}
        //source={sourceFiles}
        sources={itemImages[productIndex]}
        // slide={lightboxController.slide}
        key={productIndex}
      /> */}

        <ImageFullScreenViewer
          imageList={itemImages}
          toggler={toggler}
          updateToggler={(e) => {
            setToggler(false);
          }}
        />

        {/* <Galleria
        ref={galleria}
        // value={projectImages && projectImages.length > 0 ? projectImages : {
        //     itemImageSrc: "../images/no_image.jpg",
        //     thumbnailImageSrc: "../images/no_image.jpg",
        //     alt: "No Image"
        // }}
        value={itemImages.map((m) => m.files)}
        //value={fetchAndSetProjectImages("projects/" + project.refName + "/projectImages")}
        responsiveOptions={responsiveOptions}
        // numVisible={9}
        // style={{ maxWidth: "50%" }}
        circular
        fullScreen={true}
        showItemNavigators
        item={itemTemplate}
        showThumbnails={true}
        thumbnail={thumbnailTemplate}
      /> */}
        {/* <FsLightbox ref={box}
        toggler={toggler}

        sources={project.imagePaths}
      /> */}
        <div className="container">
          {/* <div className='project-img' style={{ backgroundImage: `url(${backgroundImg})` }}>
          <img src={background} alt='' />
                      <span>kokos</span>
        </div> */}
          <div className=" row">
            <div className="col-12 project-img">
              {/* <img src={projectMainImage.length > 0 ? projectMainImage[0].files[0].itemImageSrc : "../images/no_image.jpg"} alt={projectMainImage.length > 0 ? projectMainImage[0].files[0].name : ''}></img> */}
              {renderSkeleton(projectMainImage)}
              <div className="project-img-text">{project.title}</div>
            </div>
          </div>
          <div>
            <div className="col-12 info-icon-box">
              <div className="row">
                <div className="col-6 col-md-3 col-lg-3 d-flex p-3">
                  <div className="info-icon-svg">
                    <LiaMapMarkerSolid />
                  </div>
                  <div className="info-icon-content">
                    <p className="info-icon-title">Περιοχή</p>
                    <p className="info-icon-description">
                      {project.region},{project.city}
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-3 d-flex p-3">
                  <div className="info-icon-svg">
                    <LiaLayerGroupSolid />
                  </div>
                  <div className="info-icon-content">
                    <p className="info-icon-title">Ορόφοι</p>
                    <p className="info-icon-description">{project.floors}</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-3 d-flex p-3">
                  <div className="info-icon-svg">
                    <LiaBedSolid />
                  </div>
                  <div className="info-icon-content">
                    <p className="info-icon-title">Κρεβάτια</p>
                    <p className="info-icon-description">{project.bedrooms}</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-3 d-flex p-3">
                  <div className="info-icon-svg">
                    <LiaBathSolid />
                  </div>
                  <div className="info-icon-content">
                    <p className="info-icon-title">Μπάνια</p>
                    <p className="info-icon-description">{project.bathrooms}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-3 col-lg-3 d-flex p-3">
                  <div className="info-icon-svg">
                    <LiaBuilding />
                  </div>
                  <div className="info-icon-content">
                    <p className="info-icon-title">Τύπος</p>
                    <p className="info-icon-description"> {project.type}</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-3 d-flex p-3">
                  <div className="info-icon-svg">
                    <LiaBoxesSolid />
                  </div>
                  <div className="info-icon-content">
                    <p className="info-icon-title">Διαμερίσματα</p>
                    <p className="info-icon-description">
                      {apartmentList && apartmentList.length > 0
                        ? apartmentList.length + 1
                        : 0}
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-3 d-flex p-3">
                  <div className="info-icon-svg">
                    <LiaExclamationCircleSolid />
                  </div>
                  <div className="info-icon-content">
                    <p className="info-icon-title">Κατάσταση</p>
                    <p className="info-icon-description">{project.status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-md-8 col-lg-8">
              <div className="project-wrapper-box">
                <div className="project-wrapper-title">
                  {/* <Heading title="OVERVIEW"/> */}
                </div>
                <div className="project-wrapper-content">
                  <div className="project-content-text">
                    <div
                      dangerouslySetInnerHTML={{ __html: proejctDescription }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="project-info-card">
                {/* <img src='../images/Gardens-Br-1.jpg' alt=''></img> */}
                {/* <img src={projectSideImage.length > 0 && projectSideImage.filter(w => w.files.length > 0) ? projectSideImage[0].files[0].itemImageSrc : "../images/no_image.jpg"} alt={projectSideImage.length > 0 ? projectSideImage[0].files[0].name : ''}></img> */}
                {renderSkeleton(projectSideImage)}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="project-wrapper-title">
                {/* <Heading title="IMAGES"/> */}
              </div>
              <div className="project-wrapper-content">
                {/* <ImageViewer imageList={project.images}/> */}
                {/* {project.imagePaths.map((val,index)=>(
                <img src={val} alt="" key={index} onClick={() => setToggler(!toggler)}/>
              )
              
              )} */}
                <div className="project-details-card">
                  <ImageCarousel
                    imageList={projectImages.map((m) => m.files).flat()}
                  />
                  {/* <ImageViewer imageList={project.images} /> */}
                </div>
                {/* <button onClick={() => setToggler(!toggler)}>
                Open the lightbox.
              </button> */}
                {/* <FsLightbox
                toggler={toggler}
                sources={project.imagePaths}
                
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
          <div
            className={`row ${apartmentList && apartmentList.length > 0 ? "" : "d-none"
              }`}>
            <BlockUI blocked={blocked}>
              <LoadingBar isVisible={blocked} />
              <div className="col-12">
                <div className="project-wrapper-title">
                  <Heading title="ΔΙΑΘΕΣΙΜΟΤΗΤΑ" />
                </div>
                <div className="project-wrapper-content">
                  <DataTable
                    selectionMode="single"
                    // selection={selectedProject}
                    metaKeySelection={false}
                    onSelectionChange={(e) => onSelectItem(e.value)}
                    rowClassName={'colouredRows'}
                    dataKey="flatNo"
                    value={apartmentList}
                    stripedRows
                    tableStyle={{ minWidth: "50rem" }}>
                    <Column field="flatNo" header="Διαμέρισμα"></Column>
                    <Column field="beds" header="Κρεβάτια"></Column>
                    <Column field="baths" header="Μπάνια"></Column>
                    <Column field="internalArea" header="Καλ. Περιοχή"></Column>
                    <Column
                      field="coveredVerandas"
                      header="Καλ. Βεράντες"></Column>
                    <Column field="verandas" header="Βεράντες"></Column>
                    <Column field="storage" header="Αποθήκη"></Column>
                    <Column field="area" header="Περιοχή"></Column>

                    <Column field="status" header="Κατάσταση"></Column>
                    <Column
                      header="Actions"
                      body={actionBodyTemplate}
                      exportable={false}
                      style={{ minWidth: "8rem" }}
                      alignFrozen="right"
                      frozen={true}></Column>
                    {/* <Column header="Actions" exportable={false} style={{ minWidth: '8rem' }} alignFrozen="right" frozen={true}></Column> */}
                  </DataTable>
                </div>
              </div>
            </BlockUI>
          </div>

          <div className="row mt-4">
            <div className="col-12 col-md-4 col-lg-4 text-center align-self-center">
              <a
                className="download-button"
                href={retblob(
                  projectDocuments && projectDocuments.length > 0
                    ? projectDocuments[0].files[0].itemImageSrc
                    : ""
                )}
                target="_blank">
                Download Brochure
              </a>
              <button
                className="whatsapp-button"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/35797729606?text=Ενδιαφέρομαι%20για%20το%20${project.refName}!%20Παρακαλώ%20επικοινωνήστε%20μαζί%20μου.`
                  // "https://web.whatsapp.com/send/?phone=%2B96812104&text=Ενδιαφέρομαι%2C&type=phone_number&app_absent=0";
                  window.open(whatsappUrl, "_blank");
                }}>
                WhatsApp
                <svg
                  viewBox="0 0 48 48"
                  y="0px"
                  x="0px"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    fill="#fff"></path>
                  <path
                    d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    fill="#fff"></path>
                  <path
                    d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    fill="#cfd8dc"></path>
                  <path
                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    fill="#40c351"></path>
                  <path
                    clipRule="evenodd"
                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                    fillRule="evenodd"
                    fill="#fff"></path>
                </svg>
              </button>
              <Button className="w-100 mt-4" style={{ lineHeight: "28px" }} severity="secondary" outlined type="button" icon="pi pi-share-alt" label="Share" onClick={(e) => op.current.toggle(e)} />
              <OverlayPanel ref={op} closeOnEscape dismissable={true}>
                <div className="container">
                  <div className="row">
                    <div className="col-3">
                      <a href={`fb-messenger://share/?link=https://domusalba.eu/projects/${project.refName}`}>
                        <BsMessenger style={{ fontSize: "xx-large", cursor: "pointer", color: "#0404da" }} />
                      </a>

                    </div>
                    <div className="col-3">
                      <BsFacebook onClick={() => { fbshareCurrentPage() }} style={{ fontSize: "xx-large", cursor: "pointer", color: "#0404da" }}>
                      </BsFacebook>
                    </div>
                    <div className="col-3">
                      <a href={`viber://forward?text=https://domusalba.eu/projects/${project.refName}`}>
                        <FaViber style={{ fontSize: "xx-large", cursor: "pointer", color: "#9c309c" }} />
                      </a>

                    </div>
                    <div className="col-3">
                      <FaRegCopy onClick={() => { copyUrl() }} style={{ fontSize: "xx-large", cursor: "pointer", color: "#323639" }} />
                    </div>
                  </div>
                </div>


              </OverlayPanel>
            </div>
            <div className="col-12 col-md-8 col-lg-8 text-center align-self-center">
              {/* <video controls autoPlay={false} style={{ height: "230px" }}>
                            <source src="../images/GARDENS.mp4" type="video/mp4"  ></source>
                            Your browser does not support the video tag.
                        </video> */}
              {renderSkeletonVideo(projectVideo)}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <iframe
                src={GetGoogleMapsEmbedUrlSrc(project.mapSrc)}
                style={{ border: "0", width: "100%", height: "304px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <DialogContactForm
          dialogVisibleStage={dialogFormVisible}
          updateDialogVisibleState={updateDialogProjectVisible}
          contactFormFor={selectedApartment}
        />
        {/* <Dialog header="Flex Scroll" breakpoints={{ '960px': '75vw', '641px': '90vw' }} visible={dialogFormVisible} style={{ width: '75vw' }} maximizable
                modal contentStyle={{ height: '300px' }} onHide={() => setDialogFormVisible(false)} footer={dialogFooterTemplate}>
      </Dialog> */}
      </div >
    </>
  );
};

export default ProjectDetailsPreview;
