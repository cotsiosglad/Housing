import React, { useState, useRef, useEffect } from "react";
import ProjectDetailsPreview from "../../admin/ProjectDetailsPreview";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { ConvertPathToGalleriaModel } from "../../helper/CommonFunctions";
import { GetDocById, GetStorageFolderFiles } from "../../../firebase";
import { useNavigate, useParams } from "react-router-dom"

const ProjectDetails = ({ match }) => {
  //     const [projectDialog, setProjectDialog] = useState(false);
  // const [apartmentFilesDialog, setApartmentFilesDialog] = useState(false);
  // const [previewProjectDialog, setPreviewProjectDialog] = useState(false);
  // const [deleteProjectDialog, setDeleteProjectDialog] = useState(false);
  // const [deleteProjectsDialog, setDeleteProjectsDialog] = useState(false);
  const [project, setProject] = useState({});
  const [projectApartmentList, setProjectApartmentList] = useState({});
  // const [selectedProjects, setSelectedProjects] = useState(null);
  // const [submitted, setSubmitted] = useState(false);
  // const [globalFilter, setGlobalFilter] = useState(null);
  const [textEditorValue, setTextEditorValue] = useState("");
  // const [imageUpload, setImageUpload] = useState(null);
  const [projectImages, setProjectImages] = useState([]);
  const [projectDocuments, setProjectDocuments] = useState([]);
  const [projectSideImage, setProjectSideImage] = useState([]);
  const [projectMainImage, setProjectMainImage] = useState([]);
  const [apartmentUploadedFiles, setApartmentUploadedFiles] = useState([]);
  const [projectVideo, setProjectVideo] = useState([]);
  // const [selectedApartmentFiles, setSelectedApartmentFiles] = useState([]);
  debugger;
  let params = useParams();
  const projectRef = params.id;
  // const projectRef = match.params.id;
  const navigate = useNavigate();

  const getDocuments = (projectRef, subFolder) => {
    //let path = "projects/" + projectData[0].refName + "/projectImages";
    let path = "projects/" + projectRef + "/" + subFolder;
    GetStorageFolderFiles(path).then((fileData) => {
      const _currFile = {
        files: fileData.map((m) => {
          return ConvertPathToGalleriaModel(m.fileUrl, m.fileName);
        }),
        flat: "",
        destinationFolder: "projectImages",
      };
      if (_currFile.files.length > 0) {
        const _files = [...projectImages];
        _files.push(_currFile);
        setProjectImages(_files);
      }
    });
  };

  async function fetchAndSetProjectImages(path) {
    try {
      // debugger;
      const fileData = await GetStorageFolderFiles(path);
      const files = fileData.map((m) =>
        ConvertPathToGalleriaModel(m.fileUrl, m.fileName)
      );
      if (files.length > 0) {
        const newProjectImages = [
          ...projectImages,
          { files, flat: "", destinationFolder: "projectImages" },
        ];
        setProjectImages(newProjectImages);
      }
    } catch (error) {
      // Handle errors here
    }
  }

  async function fetchAndsetApartmentUploadedFiles(path) {
    try {
      const fileData = await GetStorageFolderFiles(path);
      const files = fileData.map((m) =>
        ConvertPathToGalleriaModel(m.fileUrl, m.fileName)
      );
      if (files.length > 0) {
        const newProjectImages = [
          ...projectImages,
          { files, flat: "", destinationFolder: "apartments" },
        ];
        setApartmentUploadedFiles(newProjectImages);
      }
    } catch (error) {
      // Handle errors here
    }
  }

  const getCurrentProjectDetails = (projectRef) => {
    //firebase api to get the project details by project id
    //setProjectDetails(projectDetailsModel);
    // console.log({ project });
    // console.log({ projectDetails });

    GetDocById(projectRef, "Projects", "refName").then(async (projectData) => {
      let path = "";
      if (!projectData[0]) {
        navigate("/");
      }
      setProject(projectData[0]);
      setTextEditorValue(projectData[0].description);
      GetDocById(projectData[0].id, "ProjectApartments", "projectId").then(
        async (data) => {
          // debugger;
          setProjectApartmentList(data[0].apartments);
          //get uploaded files for each apartment
          data[0].apartments.map(async (item) => {
            path =
              "projects/" +
              projectData[0].refName +
              "/apartments/" +
              item.flatNo;
            //await fetchAndsetApartmentUploadedFiles(path)
            // GetStorageFolderFiles(path).then((fileData) => {
            //   const _currFile = {
            //     files: fileData.map(m => { return ConvertPathToGalleriaModel(m.fileUrl, m.fileName) }),
            //     flat: item.flatNo,
            //     destinationFolder: "apartments/" + item.flatNo
            //   }
            //   if (_currFile.files.length > 0) {
            //     const _apartmentFiles = [...apartmentUploadedFiles];
            //     _apartmentFiles.push(_currFile);
            //     setApartmentUploadedFiles(_apartmentFiles)
            //   }

            // });
            // // fileList.push({
            // //     files: currFiles.map(m => { return ConvertPathToGalleriaModel(m.fileUrl, m.fileName) }),
            // //     flat: item.flatNo
            // // });
          });

          //get uploaded project images
          //await data[0].apartments.map(async (item) => {
          path = "projects/" + projectData[0].refName + "/projectImages";
          await fetchAndSetProjectImages(path);
          // GetStorageFolderFiles(path).then((fileData) => {
          //   const _currFile = {
          //     files: fileData.map(m => { return ConvertPathToGalleriaModel(m.fileUrl, m.fileName) }),
          //     flat: "",
          //     destinationFolder: "projectImages"
          //   }
          //   if (_currFile.files.length > 0) {
          //     const _files = [...projectImages];
          //     _files.push(_currFile);
          //     setProjectImages(_files)
          //   }
          // });

          //});

          //get uploaded project main image
          //await data[0].apartments.map(async (item) => {
          path = "projects/" + projectData[0].refName + "/mainImage";
          GetStorageFolderFiles(path).then((fileData) => {
            const _currFile = {
              files: fileData.map((m) => {
                return ConvertPathToGalleriaModel(m.fileUrl, m.fileName);
              }),
              flat: "",
              destinationFolder: "mainImage",
            };
            if (_currFile.files.length > 0) {
              const _files = [...projectMainImage];
              _files.push(_currFile);
              setProjectMainImage(_files);
            }
          });
          //});
          //get uploaded project side image
          //await data[0].apartments.map(async (item) => {
          path = "projects/" + projectData[0].refName + "/sideImage";
          GetStorageFolderFiles(path).then((fileData) => {
            const _currFile = {
              files: fileData.map((m) => {
                return ConvertPathToGalleriaModel(m.fileUrl, m.fileName);
              }),
              flat: "",
              destinationFolder: "sideImage",
            };
            if (_currFile.files.length > 0) {
              const _files = [...projectSideImage];
              _files.push(_currFile);
              setProjectSideImage(_files);
            }
          });

          //get uploaded project video
          path = "projects/" + projectData[0].refName + "/videos";
          await GetStorageFolderFiles(path).then((fileData) => {
            const _currFile = {
              files: fileData.map((m) => {
                return ConvertPathToGalleriaModel(m.fileUrl, m.fileName);
              }),
              flat: "",
              destinationFolder: "video",
            };
            if (_currFile.files.length > 0) {
              const _files = [...projectVideo];
              _files.push(_currFile);
              setProjectVideo(_files);
            }
          });
          //});

          // //get uploaded project main image
          // //await data[0].apartments.map(async (item) => {
          // path = "projects/" + projectData[0].refName + "/mainImage";
          // GetStorageFolderFiles(path).then((fileData) => {
          //   const _currFile = {
          //     files: fileData.map(m => { return ConvertPathToGalleriaModel(m.fileUrl, m.fileName) }),
          //     flat: "",
          //     destinationFolder: "mainImage"
          //   }
          //   if (_currFile.files.length > 0) {
          //     const _files = [...projectMainImage];
          //     _files.push(_currFile);
          //     setProjectMainImage(_files)
          //   }
          // });
          // //});

          //get uploaded project documents
          //await data[0].apartments.map(async (item) => {
          path = "projects/" + projectData[0].refName + "/documents";
          GetStorageFolderFiles(path).then((fileData) => {
            const _currFile = {
              files: fileData.map((m) => {
                return ConvertPathToGalleriaModel(m.fileUrl, m.fileName);
              }),
              flat: "",
              destinationFolder: "documents",
            };
            if (_currFile.files.length > 0) {
              const _files = [...projectDocuments];
              _files.push(_currFile);
              setProjectDocuments(_files);
            }
          });
          //});
          //console.log(fileList);
          //setApartmentUploadedFiles(fileList)

          //     for(let i=0;i<data[0].apartments;i++){
          //         let path = "/projects/apartments/"+data[0].apartments[i].flatNo
          // GetStorageFolderFiles(path).then((res)=>{
          //     let apartmentFiles = [];
          //     itemImageSrc
          //     if(files.length>0){
          //
          //         const tempFiles = { files: e.files, destinationFolder: folderName }
          //         //const newFiles = Array.from(tempFiles);
          //         _files.push(tempFiles);
          //         _files = Array.from(_files);
          //     }
          // });

          //     }
        }
      );
    });
  };

  const avav = () => {
    return (
      <ProjectDetailsPreview
        projectVideo={projectVideo}
        project={project}
        projectMainImage={projectMainImage}
        proejctDescription={textEditorValue}
        apartmentList={projectApartmentList}
        projectDocuments={projectDocuments}
        projectImages={projectImages}
        projectSideImage={projectSideImage}
      />
    );
  };

  const Child = React.memo(avav);

  //getCurrentProjectDetails(projectRef);

  useEffect(() => {
    getCurrentProjectDetails(projectRef);
    const path = "projects/" + project.refName + "/projectImages";

    // let _files = [];
    // GetStorageFolderFiles(path).then((fileData) => {
    //   const _currFile = {
    //     files: fileData.map(m => { return ConvertPathToGalleriaModel(m.fileUrl, m.fileName) }),
    //     flat: "",
    //     destinationFolder: "projectImages"
    //   }
    //   if (_currFile.files.length > 0) {
    //     _files = [...projectImages];
    //     _files.push(_currFile);

    //   }
    // }).then(setProjectImages(_files));
  }, []);

  return (
    <>
      <Header />
      <ProjectDetailsPreview
        projectVideo={projectVideo}
        project={project}
        projectMainImage={projectMainImage}
        proejctDescription={textEditorValue}
        apartmentList={projectApartmentList}
        projectDocuments={projectDocuments}
        projectImages={projectImages}
        projectSideImage={projectSideImage}
      />
      {/* <Child /> */}
      <Footer />
    </>
  );
};

export default ProjectDetails;
