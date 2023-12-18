import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Panel } from "primereact/panel";
import { Column } from "primereact/column";
// import { ProductService } from './service/ProductService';
// import { projects as projectList, projectDetails as projectDetailsModel } from '../data/Data'
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";
import { Image } from "primereact/image";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { BlockUI } from "primereact/blockui";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import TextEditor from "./TextEditor";
import "./adminLogin.css";
import {
  WriteDoc,
  GetDocById,
  storage,
  GetAllDocs,
  UpdateDoc,
  WriteError,
  GetStorageFolderFiles,
  DeleteFileIfNotExist,
  DeleteStorageFolderFiles,
  DeleteDocByRefId,
  GetAuthUser
} from "../../firebase";
import {
  ref,
  uploadBytes,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import {
  ConvertPathToGalleriaModel,
  ConvertFileToBase64,
  GetGoogleMapsEmbedUrlSrc,
  CreateObjectURLFromURL,
} from "../helper/CommonFunctions";
import { v4 } from "uuid";
import ProjectDetailsPreview from "./ProjectDetailsPreview";
import LoadingBar from "../helper/loadingBar/LoadingBar";
import { serverTimestamp } from "firebase/firestore";
// import { wait } from '@testing-library/user-event/dist/utils';

export default function AdminProjects() {
  const statuses = ["Διαθέσιμο", "Πωλήθηκε"];
  const types = ["Residential"];
  const projectStatuses = ["Ολοκληρωμένο", "Υπό Κατασκευή", "Σχεδιασμένο"];

  let emptyProject = {
    // id: "",
    refName: "",
    sortNumber: 1,
    title: "",
    image: "",
    description: "",
    city: "",
    region: "",
    floors: "",
    bedrooms: "",
    bathrooms: "",
    type: types[0],
    apartments: "",
    status: statuses[0],
    availability: "",
    mapSrc: "",
    createdBy: "",
    createdOn: "",
    updatedBy: "",
    updatedOn: ""
  };

  let emptyProjectDetails = {
    id: 0,
    description: "",
    imagePaths: [],
    apartmentList: [],
  };

  let emptyProjectApartment = {
    flatNo: "",
    beds: "",
    baths: "",
    internalArea: "",
    coveredVerandas: "",
    verandas: "",
    storage: "",
    area: "",
    status: "Available",
  };

  const [projects, setProjects] = useState(null);
  // const [projectDetails, setProjectDetails] = useState(emptyProjectDetails);
  const [projectDialog, setProjectDialog] = useState(false);
  const [apartmentFilesDialog, setApartmentFilesDialog] = useState(false);
  const [previewProjectDialog, setPreviewProjectDialog] = useState(false);
  const [deleteProjectDialog, setDeleteProjectDialog] = useState(false);
  const [deleteProjectsDialog, setDeleteProjectsDialog] = useState(false);
  const [project, setProject] = useState(emptyProject);
  const [projectApartmentList, setProjectApartmentList] = useState({});
  const [selectedProjects, setSelectedProjects] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [textEditorValue, setTextEditorValue] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [projectImages, setProjectImages] = useState([]);
  const [projectDocuments, setProjectDocuments] = useState([]);
  const [projectSideImage, setProjectSideImage] = useState([]);
  const [projectMainImage, setProjectMainImage] = useState([]);
  const [projectVideo, setProjectVideo] = useState([]);
  const [apartmentUploadedFiles, setApartmentUploadedFiles] = useState([]);
  const [selectedApartmentFiles, setSelectedApartmentFiles] = useState([]);
  const [blocker, setBlocker] = useState(false);
  const [mainBlocker, setMainBlocker] = useState(false);

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(
      storage,
      `images/projects/abc/${v4() + "_" + imageUpload.name}`
    );
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
    });
  };
  const dialogToast = useRef(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    //add firebase api here
    //ProductService.getProducts().then((data) => setProjects(data));

    //var aa = GetDocByRefId("Projects", "Jt2Prr7DhQb5NmosVi0n").then((data) => console.log(data));
    GetAllDocs("Projects").then((data) => {
      const _data = data.map((m) => {
        const _createdOn = m.data.createdBy;
        const _updatedOn = m.data.updatedOn;
        // Convert Firebase timestamp to JavaScript Date object
        const newCreatedOnDate = new Date(_createdOn.seconds * 1000 + _createdOn.nanoseconds / 1e6);
        const newUpdatedOnDate = new Date(_updatedOn.seconds * 1000 + _updatedOn.nanoseconds / 1e6);

        // Add a new property to the object with the local datetime string
        return {
          ...m.data,
          createdBy: newCreatedOnDate.toLocaleString(),
          updatedOn: newUpdatedOnDate.toLocaleString()
        };
      });
      // console.log(data),
      setProjects(_data);
    }

    );
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const updateTextEditorValue = (newState) => {
    // console.log(newState);
    setTextEditorValue(newState);
  };

  const openNew = () => {
    setProject(emptyProject);
    setSubmitted(false);
    setProjectDialog(true);
    setTextEditorValue("");
    setProjectImages([]);
    setProjectDocuments([]);
    setProjectSideImage([]);
    setProjectMainImage([]);
    setApartmentUploadedFiles([]);
    setProjectApartmentList([]);
    setProjectVideo([]);
    //setProjectDetails(emptyProjectDetails);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProjectDialog(false);
    setMainBlocker(false);
    setTextEditorValue("");
    setApartmentUploadedFiles([]);
    setProjectImages([]);
    setProjectMainImage([]);
    setProjectSideImage([]);
    setProjectDocuments([]);
    setProjectApartmentList([]);
    setProjectVideo([]);
  };

  const hideDeleteProjectDialog = () => {
    setDeleteProjectDialog(false);
  };

  const hideDeleteProjectsDialog = () => {
    setDeleteProjectsDialog(false);
  };

  const projecPreview = () => {
    // let _projects = [...projects];
    // let _project = { ...project, description: textEditorValue };
    // setProject(_project);
    // // let _projectDetails = { ...projectDetails, description: textEditorValue };
    // let _apartmentList = [...projectApartmentList,];
    // let _apartments = ({ projectId: _project.id, apartments: _apartmentList });
    // setProjectApartmentList(_apartments);

    setPreviewProjectDialog(!previewProjectDialog);
  };

  const onUploadError = (e) => {
    if (e && e.size > 5000000) {
      dialogToast.current.show({
        severity: "error",
        summary: "Upload Error",
        detail: "The file should not exceed 5MB",
        life: 3000,
      });
    }
  }

  const handleFileChange = (e, folderName, typeOfUpload, flatNo = null) => {
    //const files = e.files;
    let _files = [];
    let preventUpload = false;
    if (typeOfUpload) {
      switch (typeOfUpload) {
        case "PROJECT_IMAGES":
          _files = projectImages;
          break;
        case "PROJECT_SIDE_IMAGE":
          preventUpload = projectSideImage.length == 1;
          _files = projectSideImage;
          break;
        case "PROJECT_MAIN_IMAGE":
          preventUpload = projectMainImage.length == 1;
          _files = projectMainImage;
          break;
        case "PROJECT_VIDEO":
          // console.log(URL.createObjectURL(e.files[0]));
          preventUpload = projectVideo.length == 1;
          _files = projectVideo;
          break;
        case "PROJECT_DOCUMENTS":
          preventUpload = projectDocuments.length == 1;
          _files = projectDocuments;
          break;
        case "APARTMENT_IMAGES":
          _files = apartmentUploadedFiles;
          break;
        default:
          break;
      }
      if (preventUpload) {
        dialogToast.current.show({
          severity: "error",
          summary: "Upload Error",
          detail: "You can upload only 1 file",
          life: 3000,
        });
        e.options.clear();
        return false;
      }

      // const tempFiles = { files: Array.from(files), destinationFolder: folderName }
      // const tempFiles = { files: e.files, destinationFolder: folderName }
      const tempFiles = {
        files: e.files.map((m) =>
          ConvertPathToGalleriaModel(
            m.objectURL ? m.objectURL : URL.createObjectURL(m),
            m.name
          )
        ),
        flat: flatNo ? flatNo : "",
        destinationFolder: folderName,
      };

      //const newFiles = Array.from(tempFiles);
      _files.push(tempFiles);
      _files = Array.from(_files);
      //setUploadedFiles(_files);

      switch (typeOfUpload) {
        case "PROJECT_IMAGES":
          setProjectImages((prevFiles) => [..._files]);
          break;
        case "PROJECT_SIDE_IMAGE":
          setProjectSideImage((prevFiles) => [..._files]);
          break;
        case "PROJECT_MAIN_IMAGE":
          setProjectMainImage((prevFiles) => [..._files]);
          break;
        case "PROJECT_VIDEO":
          setProjectVideo((prevFiles) => [..._files]);
          break;
        case "PROJECT_DOCUMENTS":
          setProjectDocuments((prevFiles) => [..._files]);
          break;
        case "APARTMENT_IMAGES":
          setApartmentUploadedFiles((prevFiles) => [..._files]);
          break;
        default:
          dialogToast.current.show({
            severity: "error",
            summary: "Error",
            detail: "File could not be saved",
            life: 3000,
          });
          break;
      }

      e.options.clear();
    }
  };

  const checkIfRefExists = async (ref, id) => {
    const retList = await Promise.all(
      await GetDocById(ref, "Projects", "refName")
    );
    if (id > 0) {
      return retList.filter((w) => w.id != id).length > 0;
    } else {
      return retList.length > 0;
    }
  };

  // const saveFilesToCloud = async (filesUploaded) => {
  //   let projectRef = project.refName;

  //   if (filesUploaded.length > 0 && projectRef) {
  //     for (const item of filesUploaded) {
  //       let path = item.destinationFolder
  //         ? "projects/" + projectRef + "/" + item.destinationFolder
  //         : projectRef;
  //       if (item.files.length > 0) {
  //         //delete all files from current path
  //         //await DeleteStorageFolderFiles(path).then((res) => {
  //         for (const file of item.files) {
  //           const filePath =
  //             file.itemImageSrc.indexOf("blob") < 0
  //               ? `${path}/${file.alt}`
  //               : `${path}/${v4() + "_" + file.alt}`;
  //           const imageRef = ref(storage, filePath);
  //           //check if path exists
  //           await getDownloadURL(imageRef)
  //             .then((url) => {
  //               //the file exists do nothing
  //               //const filePath = file.itemImageSrc.indexOf("blob") < 0 ? `${path}/${file.alt}` : `${path}/${v4() + "_" + file.alt}`;
  //               //const imageRef = ref(storage, filePath)
  //               // const imageRef = ref(storage, `images/projects/${path}/${v4() + "_" + file.name}`)
  //             })
  //             .catch((error) => {
  //               ConvertFileToBase64(file.itemImageSrc).then((base64String) => {
  //                 uploadString(imageRef, base64String, "data_url");
  //                 //uploadBytes(imageRef, retFile);
  //               });
  //             });

  //           // await DeleteStorageFolderFiles(path).then((res) => {
  //           //     debugger;

  //           //     //const filePath = file.itemImageSrc.indexOf("blob") < 0 ? `${path}/${file.alt}` : `${path}/${v4() + "_" + file.alt}`;
  //           //     //const imageRef = ref(storage, filePath)
  //           //     // const imageRef = ref(storage, `images/projects/${path}/${v4() + "_" + file.name}`)
  //           //     ConvertFileToBase64(file.itemImageSrc).then((base64String) => {
  //           //         debugger;
  //           //         uploadString(imageRef, base64String, 'data_url')
  //           //         //uploadBytes(imageRef, retFile);
  //           //     });

  //           // })
  //         }
  //         //   debugger;
  //         //   if (item && item.files && item.files.length > 0) {
  //         //     debugger;
  //         //     const filenames = item.files.map((m) => m.alt).flat();
  //         //     await DeleteFileIfNotExist(path, filenames);
  //         //   }
  //       }
  //       //  );
  //     }
  //   }
  // };

  async function saveFilesToCloud(filesUploaded) {
    let projectRef = project.refName;
    if (filesUploaded.length > 0 && projectRef) {
      filesUploaded.forEach(async fileToUpload => {
        let path = fileToUpload.destinationFolder
          ? "projects/" + projectRef + "/" + fileToUpload.destinationFolder
          : projectRef;
        // const allFiles = fileToUpload.map((m) => m.files).flat();
        const allFiles = fileToUpload.files;

        const blobFiles = await Promise.all(
          allFiles.map((fl, index) => {
            return CreateObjectURLFromURL(fl.itemImageSrc);
          })
        );
        //delete all files from current folder
        const deleted = await DeleteStorageFolderFiles(path);
        for (let i = 0; i < allFiles.length; i++) {
          // let path = item.destinationFolder
          //   ? "projects/" + projectRef + "/" + item.destinationFolder
          //   : projectRef;
          // const blobFiles = await Promise.all(
          //   item.files.map((fl, index) => {
          //     return CreateObjectURLFromURL(fl.itemImageSrc);
          //   })
          // );
          if (
            blobFiles &&
            blobFiles.length > 0 &&
            !blobFiles.some((w) => w == undefined)
          ) {
            if (deleted) {
              // if (item.files.length > 0) {
              //delete all files from current path
              //await DeleteStorageFolderFiles(path).then((res) => {
              const filePath =
                allFiles[i].itemImageSrc.indexOf("blob") < 0
                  ? `${path}/${allFiles[i].alt}`
                  : `${path}/${v4() + "_" + allFiles[i].alt}`;
              const imageRef = ref(storage, filePath);
              const b64 = await ConvertFileToBase64(blobFiles[i]);
              if (b64) {
                await uploadString(imageRef, b64, "data_url");
              }
              // //check if path exists
              // await getDownloadURL(imageRef)
              //   .then((url) => {
              //     //the file exists do nothing
              //     //const filePath = file.itemImageSrc.indexOf("blob") < 0 ? `${path}/${file.alt}` : `${path}/${v4() + "_" + file.alt}`;
              //     //const imageRef = ref(storage, filePath)
              //     // const imageRef = ref(storage, `images/projects/${path}/${v4() + "_" + file.name}`)
              //   })
              //   .catch((error) => {
              //     ConvertFileToBase64(file.itemImageSrc).then(
              //       (base64String) => {
              //         uploadString(imageRef, base64String, "data_url");
              //         //uploadBytes(imageRef, retFile);
              //       }
              //     );
              //   });

              // await DeleteStorageFolderFiles(path).then((res) => {
              //     debugger;

              //     //const filePath = file.itemImageSrc.indexOf("blob") < 0 ? `${path}/${file.alt}` : `${path}/${v4() + "_" + file.alt}`;
              //     //const imageRef = ref(storage, filePath)
              //     // const imageRef = ref(storage, `images/projects/${path}/${v4() + "_" + file.name}`)
              //     ConvertFileToBase64(file.itemImageSrc).then((base64String) => {
              //         debugger;
              //         uploadString(imageRef, base64String, 'data_url')
              //         //uploadBytes(imageRef, retFile);
              //     });

              // })

              //   debugger;
              //   if (item && item.files && item.files.length > 0) {
              //     debugger;
              //     const filenames = item.files.map((m) => m.alt).flat();
              //     await DeleteFileIfNotExist(path, filenames);
              //   }
            } else {
              dialogToast.current.show({
                severity: "error",
                summary: "Error on saving files",
                detail: `The files were not saved`,
                life: 3000,
              });
            }
          }
          //  );
        }
      });

    }
  }

  const uploadOptions = {
    icon: "pi pi-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined p-button-icon-only p-button-sm",
  };

  async function saveProject() {
    setSubmitted(true);
    setBlocker(true);
    // console.log(textEditorValue);

    try {
      if (
        project.title.trim() &&
        textEditorValue &&
        textEditorValue != "<p><br></p>" &&
        document.querySelectorAll("input.p-invalid").length == 0
      ) {
        //return false if there are no main/side and project images
        if (projectImages.length == 0 || projectImages.map(m => m.files).flat().length < 3) {
          dialogToast.current.show({
            severity: "error",
            summary: "Project Images Required",
            detail: `Please upload at least 3 project images`,
            life: 3000,
          });
          setBlocker(false);
          return false;
        } else if (projectSideImage.length == 0) {
          dialogToast.current.show({
            severity: "error",
            summary: "Project Side Image Required",
            detail: `Please upload project side image`,
            life: 3000,
          });
          setBlocker(false);
          return false;
        } else if (projectMainImage.length == 0) {
          dialogToast.current.show({
            severity: "error",
            summary: "Project Main Image Required",
            detail: `Please upload project main image`,
            life: 3000,
          });
          setBlocker(false);
          return false;
        } else if (projectDocuments.length == 0) {
          dialogToast.current.show({
            severity: "error",
            summary: "Project Brochure Required",
            detail: `Please upload project brochure`,
            life: 3000,
          });
          setBlocker(false);
          return false;
        }

        let completed = "PEND";
        let _projects = [...projects];
        let _project = { ...project, description: textEditorValue };

        if (await checkIfRefExists(project.refName, project.id)) {
          dialogToast.current.show({
            severity: "error",
            summary: "Reference should be unique",
            detail: `Reference ${project.refName} already exists for another project`,
            life: 3000,
          });
          _project = { ...project, refName: "" };
          setProject(_project);
          setBlocker(false);
          return false;
        }
        // let _projectDetails = { ...projectDetails, description: textEditorValue };
        let _apartmentList = [...projectApartmentList];
        let _apartments = {
          projectId: _project.id,
          apartments: _apartmentList,
        };
        // _apartmentList.map(s => s.projectId = _project.id);
        // console.log(_projectDetails);
        // console.log(_apartments);

        const currUser = await GetAuthUser();
        const idx = _projects.findIndex((w) => w.id == project.id);
        if (project.id) {
          //const index = findIndexById(project.id);

          //UPDATE PROJECT
          _project.updatedBy = currUser?.email ?? "";
          _project.updatedOn = serverTimestamp();
          await UpdateDoc(_project, _project.id, "Projects").then(async (response) => {
            await UpdateDoc(
              _apartments,
              _project.id,
              "ProjectApartments",
              "projectId"
            ).then(async (response) => {
              await saveFilesToCloud(projectImages).then(setProjectImages([]));
              await saveFilesToCloud(projectDocuments).then(setProjectDocuments([]));
              await saveFilesToCloud(projectSideImage).then(setProjectSideImage([]));
              await saveFilesToCloud(projectMainImage).then(setProjectMainImage([]));
              await saveFilesToCloud(apartmentUploadedFiles).then(
                setApartmentUploadedFiles([])
              );
              await saveFilesToCloud(projectVideo).then(setProjectVideo([]));


              completed = "OK";
              _project.updatedOn = "";
              _projects[idx] = _project;
              _projects = Array.from(_projects);
              setProjects(_projects);
              setProjectDialog(false);
              setProject(emptyProject);
              //setProjectDetails(emptyProjectDetails);
              setProjectApartmentList([]);
              setApartmentUploadedFiles([]);
              setTextEditorValue("");
              toast.current.show({
                severity: "success",
                summary: "Successful",
                detail: "Submitted",
                life: 3000,
              });
              setBlocker(false);
            });
          });

          //var aa = GetDocById(1, "Projects");
          // WriteDoc(_project, 'Projects').then((docRef) => {
          //     _apartments.projectId = docRef.id
          //     WriteDoc(_apartments, 'ProjectApartments').then((docRef) => {
          //         toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Submitted', life: 3000 });
          //         completed = "OK";
          //     })
          // }
          // )
        } else {
          //_project.id = createId();
          //_project.image = 'project-placeholder.svg';
          //_projects.push(_project);
          //NEW PROJECT

          //var aa = GetDocById(1, "Projects");
          _project.createdBy = currUser?.email ?? "";
          _project.createdOn = serverTimestamp();
          _project.updatedBy = currUser?.email ?? "";
          _project.updatedOn = serverTimestamp();
          const projectCurrId = Date.now();
          _project = { ..._project, id: projectCurrId };
          WriteDoc(_project, "Projects").then((docRef) => {
            _apartments.projectId = projectCurrId;
            WriteDoc(_apartments, "ProjectApartments").then((docRef) => {
              //saveFilesToCloud();
              toast.current.show({
                severity: "success",
                summary: "Successful",
                detail: "Submitted",
                life: 3000,
              });
              completed = "OK";

              saveFilesToCloud(projectImages).then(setProjectImages([]));
              saveFilesToCloud(projectDocuments).then(setProjectDocuments([]));
              saveFilesToCloud(projectSideImage).then(setProjectSideImage([]));
              saveFilesToCloud(projectMainImage).then(setProjectMainImage([]));
              saveFilesToCloud(apartmentUploadedFiles).then(
                setApartmentUploadedFiles([])
              );
              saveFilesToCloud(projectVideo).then(setProjectVideo([]));
              _project.createdOn = "";
              _project.updatedOn = "";
              _projects.push(_project);
              _projects = Array.from(_projects);
              setProjects(_projects);
              setProjectDialog(false);
              setProject(emptyProject);
              //setProjectDetails(emptyProjectDetails);
              setProjectApartmentList([]);
              setApartmentUploadedFiles([]);
              setTextEditorValue("");
              setBlocker(false);
            });
          });
        }
        // if (completed === "OK") {
        //     setProjects(_projects);
        //     setProjectDialog(false)
        //     setProject(emptyProject);
        //     setProjectDetails(emptyProjectDetails);
        //     setProjectApartmentList(emptyProjectApartment);
        //     setTextEditorValue('')
        // }
      }
    } catch (error) {
      WriteError(error);
      dialogToast.current.show({
        severity: "error",
        summary: "Error on saving",
        detail: "Project failed to save",
        life: 3000,
      });
    }
    saveProjectEnd: setBlocker(false);
  };

  async function editProject(row) {
    let path = "";
    setMainBlocker(!mainBlocker);
    setProject({ ...row });
    //firebase api to get the project details by project id
    //setProjectDetails(projectDetailsModel);
    // console.log({ project });
    // console.log({ projectDetails });
    setTextEditorValue(row.description);
    await GetDocById(row.id, "ProjectApartments", "projectId").then(
      async (data) => {
        setProjectApartmentList(data[0].apartments);
        //get uploaded files for each apartment
        const apartmentFiles = await data[0].apartments.map(async (item) => {
          path = "projects/" + row.refName + "/apartments/" + item.flatNo;
          return await GetStorageFolderFiles(path).then((fileData) => {
            const _currFile = {
              files: fileData.map((m) => {
                return ConvertPathToGalleriaModel(m.fileUrl, m.fileName);
              }),
              flat: item.flatNo,
              destinationFolder: "apartments/" + item.flatNo,
            };
            return _currFile;
            // if (_currFile.files.length > 0) {
            //   const _apartmentFiles = [...apartmentUploadedFiles];
            //   _apartmentFiles.push(_currFile);
            //   return _apartmentFiles;
            //   // setApartmentUploadedFiles(_apartmentFiles);
            // }
          });
          // fileList.push({
          //     files: currFiles.map(m => { return ConvertPathToGalleriaModel(m.fileUrl, m.fileName) }),
          //     flat: item.flatNo
          // });
        });
        let uploadedFiles = await Promise.all(apartmentFiles);
        setApartmentUploadedFiles(uploadedFiles);
        //get uploaded project images
        path = "projects/" + row.refName + "/projectImages";
        await GetStorageFolderFiles(path).then((fileData) => {
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

        //get uploaded project main image
        path = "projects/" + row.refName + "/mainImage";
        await GetStorageFolderFiles(path).then((fileData) => {
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
        //get uploaded project side image
        path = "projects/" + row.refName + "/sideImage";
        await GetStorageFolderFiles(path).then((fileData) => {
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

        //get uploaded project documents
        path = "projects/" + row.refName + "/documents";
        await GetStorageFolderFiles(path).then((fileData) => {
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
        //get uploaded project video
        path = "projects/" + row.refName + "/videos";
        await GetStorageFolderFiles(path).then((fileData) => {
          const _currFile = {
            files: fileData.map((m) => {
              return ConvertPathToGalleriaModel(m.fileUrl, m.fileName);
            }),
            flat: "",
            destinationFolder: "videos",
          };
          if (_currFile.files.length > 0) {
            const _files = [...projectVideo];
            _files.push(_currFile);
            setProjectVideo(_files);
          }
        });

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
    // console.log({ projectDetailsModel });
    // console.log({ projectApartmentList });
    setProjectDialog(true);
    setMainBlocker(false);
  };

  const confirmDeleteProject = (project) => {
    setProject(project);
    setDeleteProjectDialog(true);
  };

  async function deleteProject() {
    let _projects = projects.filter((val) => val.id !== project.id);
    debugger
    // await DeleteDocByRefId("Projects", "id", project.id);
    // await DeleteDocByRefId("ProjectApartments", "projectId", project.id);
    // await DeleteStorageFolderFiles("projects/" + project.refName);
    await DeleteStorageFolderFiles("projects/test");

    setProjects(_projects);

    //firebase api to delete current project and project details
    setDeleteProjectDialog(false);
    setProject(emptyProject);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "project Deleted",
      life: 3000,
    });
  };

  const findIndexById = (id) => {
    let index = -1;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteProjectsDialog(true);
  };

  // const deleteSelectedProducts = () => {
  //     let _projects = projects.filter((val) => !selectedProjects.includes(val));

  //     setProjects(_projects);
  //     setDeleteProjectsDialog(false);
  //     setSelectedProjects(null);
  //     toast.current.show({ severity: 'success', summary: 'Successful', detail: 'projects Deleted', life: 3000 });
  // };

  const onProjectStatusChange = (value) => {
    let _project = { ...project };

    _project["status"] = value;
    setProject(_project);
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _project = { ...project };

    _project[`${name}`] = val;

    setProject(_project);
  };

  const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    let _project = { ...project };

    _project[`${name}`] = val;

    setProject(_project);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="New"
          size="small"
          icon="pi pi-plus"
          severity="secondary"
          onClick={openNew}
        />
        {/* <Button label="Delete" size='small' icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProjects || !selectedProjects.length} /> */}
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        size="small"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/project/${rowData.image}`}
        alt={rowData.image}
        className="shadow-2 border-round"
        style={{ width: "64px" }}
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const availabilityBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.availability}
        severity={getSeverity(rowData.availability)}></Tag>
    );
  };

  const addNewRow = () => {
    // const newRow = { id: projects.length + 1, name: `Item ${data.length + 1}` };
    const newR = { ...emptyProjectApartment };
    // let _projectApartments = projectApartmentList;
    // _projectApartments.push(newR);
    let _projects = [];
    if (projectApartmentList.length > 0) {
      _projects = [...projectApartmentList, newR];
    } else {
      _projects = [newR];
    }

    setProjectApartmentList(_projects);

    // dt.current.getTable().insertRow(newR)
    // dt.current.restoreState();
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          size="small"
          rounded
          outlined
          className="mr-2"
          onClick={() => editProject(rowData)}
        />
        <Button
          icon="pi pi-trash"
          size="small"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProject(rowData)}
        />
      </React.Fragment>
    );
  };

  const getSeverity = (value) => {
    switch (value) {
      case "Available":
        return "success";

      case "Partial Availability":
        return "warning";

      case "Sold":
        return "danger";

      default:
        return "success";
    }
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Manage projects</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );
  const projectDialogFooter = (
    <React.Fragment>
      <Button
        className="pl-4"
        label="Preview"
        size="small"
        icon="pi pi-search"
        outlined
        onClick={projecPreview}
      />
      <Button
        label="Cancel"
        size="small"
        icon="pi pi-times"
        outlined
        onClick={hideDialog}
      />
      <Button
        label="Save"
        size="small"
        icon="pi pi-check"
        onClick={saveProject}
      />
    </React.Fragment>
  );
  const deleteProjectDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        size="small"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProjectDialog}
      />
      <Button
        label="Yes"
        size="small"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProject}
      />
    </React.Fragment>
  );
  // const deleteProjectsDialogFooter = (
  //     <React.Fragment>
  //         <Button label="No" size='small' icon="pi pi-times" outlined onClick={hideDeleteProjectsDialog} />
  //         <Button label="Yes" size='small' icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
  //     </React.Fragment>
  // );

  const onRowEditComplete = (e) => {
    let squareMeterColumns = [
      "area",
      "verandas",
      "coveredVerandas",
      "internalArea",
      "storage",
    ];
    let _projectApartments = [...projectApartmentList];
    let { newData, index } = e;
    squareMeterColumns.map((val) => {
      newData[val] = newData[val].includes("m²")
        ? newData[val]
        : newData[val] + " m²";
    });
    _projectApartments[index] = newData;

    setProjectApartmentList(_projectApartments);
    e.originalEvent.currentTarget.closest(
      "td"
    ).nextElementSibling.style.opacity = "";
    e.originalEvent.currentTarget.closest(
      "td"
    ).nextElementSibling.style.pointerEvents = "";
  };

  const onRowEditStart = (e) => {
    e.originalEvent.currentTarget.closest(
      "td"
    ).nextElementSibling.style.opacity = "0.6";
    e.originalEvent.currentTarget.closest(
      "td"
    ).nextElementSibling.style.pointerEvents = "none";
  };

  const onRowEditCancel = (e) => {
    e.originalEvent.currentTarget.closest(
      "td"
    ).nextElementSibling.style.opacity = "";
    e.originalEvent.currentTarget.closest(
      "td"
    ).nextElementSibling.style.pointerEvents = "";
  };

  const textEditor = (options) => {
    let filter = "";
    switch (options.field) {
      case "flatNo":
        filter = "alphanum";
        break;
      default:
        break;
    }
    return (
      <InputText
        type="text"
        keyfilter={filter}
        className={classNames({ "p-invalid": submitted && !project.bedrooms })}
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const statusEditor = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Select Status"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };

  const typeEditor = (value) => {
    return (
      <Dropdown
        value={value}
        options={types}
        onChange={(e) => {
          let _project = { ...project };

          _project["type"] = e.value;

          setProject(_project);
        }}
        placeholder="Select Type"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };

  const numericEditor = (options) => {
    switch (options.field) {
      case "verandas":
      case "internalArea":
      case "coveredVerandas":
      case "verandas":
      case "storage":
      case "area":
        return (
          <InputNumber
            value={options.value}
            onValueChange={(e) => options.editorCallback(e.value)}
            suffix="m²"
          />
        );
      case "price":
        return (
          <InputNumber
            value={options.value}
            onValueChange={(e) => options.editorCallback(e.value)}
            mode="currency"
            currency="USD"
            locale="en-US"
          />
        );
      default:
        return (
          <InputNumber
            value={options.value}
            onValueChange={(e) => options.editorCallback(e.value)}
            useGrouping={false}
          />
        );
    }
  };

  const cellEditor = (options) => {
    if (options.field === "price") return numericEditor(options);
    else return textEditor(options);
  };

  const apartmenListHeader = (
    <div className="">
      <Button
        label="Add"
        size="small"
        icon="pi pi-plus"
        outlined
        onClick={addNewRow}
      />
    </div>
  );
  const showApartmentFiles = async (rowData) => {
    let _apartmentFiles = apartmentUploadedFiles.filter(
      (w) =>
        w.flat == rowData.flatNo ||
        (w.destinationFolder && w.destinationFolder.includes(rowData.flatNo))
    );
    if (_apartmentFiles && _apartmentFiles.length > 0) {
      setSelectedApartmentFiles(_apartmentFiles);
      setApartmentFilesDialog(true);
    }
  };
  const apratmentActionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        {/* <Button icon="pi pi-upload" size='small' rounded outlined className="mr-2" onClick={() => (addNewRow())} /> */}
        <Button
          icon="pi pi-window-maximize"
          size="small"
          rounded
          outlined
          onClick={() => showApartmentFiles(rowData)}
        />
        <FileUpload
          mode="basic"
          multiple
          name="projectDocs"
          customUpload
          chooseOptions={uploadOptions}
          accept="image/*"
          maxFileSize={5000000}
          uploadHandler={(e) =>
            handleFileChange(
              e,
              `apartments/${rowData.flatNo}`,
              "APARTMENT_IMAGES",
              rowData.flatNo
            )
          }
          auto
        />
        <Button
          icon="pi pi-trash"
          size="small"
          rounded
          outlined
          severity="danger"
          onClick={() => deleteApartment(rowData)}
        />
      </React.Fragment>
    );
  };

  const deleteApartment = (apartment) => {
    let _projectApartments = [...projectApartmentList];
    if (
      window.confirm(
        "Are you sure you want to delete apartment " + apartment.flatNo + "?"
      )
    ) {
      _projectApartments = _projectApartments.filter(
        (p) => p.flatNo !== apartment.flatNo
      );

      dialogToast.current.show({
        severity: "success",
        summary: "Apartment Deleted",
        detail: `Flat:${apartment.flatNo}`,
        life: 3000,
      });
      setProjectApartmentList(_projectApartments);
    }
  };

  // const priceBodyTemplate = (rowData) => {
  //     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
  // };

  const validApartmentRow = (e) => {
    let fieldsToValid = [
      "area",
      "beds",
      "baths",
      "flatNo",
      "status",
      "verandas",
      "coveredVerandas",
      "internalArea",
      "storage",
    ];

    const validation = fieldsToValid.map((item) => {
      if (!e[item]) {
        dialogToast.current.show({
          severity: "error",
          summary: "Validation",
          detail: `${item} is required`,
          life: 3000,
        });
        return false;
      }
    });
    return !validation.some((e) => e == false);
  };

  const handleDeleteFile = (index, typeOfUpload) => {
    // Create a copy of the uploadedFiles array and remove the file at the specified index

    let _files = [];
    let _object = [];
    switch (typeOfUpload) {
      case "PROJECT_IMAGES":
        _object = projectImages;
        _files = Object.values(projectImages.map((m) => m.files)).flat();
        break;
      case "PROJECT_SIDE_IMAGE":
        _object = projectSideImage;
        _files = Object.values(projectSideImage.map((m) => m.files)).flat();
        break;
      case "PROJECT_MAIN_IMAGE":
        _object = projectMainImage;
        _files = Object.values(projectMainImage.map((m) => m.files)).flat();
        break;
      case "PROJECT_VIDEO":
        _object = projectVideo;
        _files = Object.values(projectVideo.map((m) => m.files)).flat();
        break;
      case "PROJECT_DOCUMENTS":
        _object = projectDocuments;
        _files = Object.values(projectDocuments.map((m) => m.files)).flat();
        break;
      case "APARTMENT_IMAGES":
        _object = apartmentUploadedFiles;
        _files = Object.values(
          apartmentUploadedFiles.map((m) => m.files)
        ).flat();
        index = _files.indexOf(_files.filter(w => w.itemImageSrc == index)[0]);
        break;
      default:
        break;
    }
    const selectedFile = _files[index];
    const foundFile = _object.find((item) => {
      return item.files.some(
        (fileItem) => fileItem.itemImageSrc === selectedFile.itemImageSrc
      );
    });

    const updatedFiles = foundFile.files.filter(
      (fileItem) => fileItem.itemImageSrc !== selectedFile.itemImageSrc
    );
    let updatedUploadedFiles = _object.map((file) =>
      file === foundFile ? { ...file, files: updatedFiles } : file
    );

    updatedUploadedFiles = updatedUploadedFiles.filter(
      (w) => w.files.length > 0
    );

    if (window.confirm("Are you sure you want to delete this file")) {
      switch (typeOfUpload) {
        case "PROJECT_IMAGES":
          setProjectImages(updatedUploadedFiles);
          break;
        case "PROJECT_SIDE_IMAGE":
          setProjectSideImage(updatedUploadedFiles);
          break;
        case "PROJECT_MAIN_IMAGE":
          setProjectMainImage(updatedUploadedFiles);
          break;
        case "PROJECT_VIDEO":
          setProjectVideo(updatedUploadedFiles);
          break;
        case "PROJECT_DOCUMENTS":
          setProjectDocuments(updatedUploadedFiles);
          break;
        case "APARTMENT_IMAGES":
          setApartmentUploadedFiles(updatedUploadedFiles);
          break;
        default:
          dialogToast.current.show({
            severity: "error",
            summary: "Error",
            detail: "File could not be saved",
            life: 3000,
          });
          break;
      }
    }
  };

  return (
    <>
      <Toast ref={toast} position="bottom-right" />
      <BlockUI blocked={mainBlocker}>
        <LoadingBar isVisible={mainBlocker} />
        <div className="table-content">
          <Toolbar
            className="mb-4"
            start={leftToolbarTemplate}
            end={rightToolbarTemplate}></Toolbar>

          {/* <DataTable ref={dt} value={projects} size='small' selection={selectedProjects} onSelectionChange={(e) => setSelectedProjects(e.value)} */}
          <DataTable
            ref={dt}
            value={projects}
            size="small"
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} projects"
            globalFilter={globalFilter}
            header={header}
            exportFilename="ProjectsExport"
            scrollable>
            {/* <Column selectionMode="multiple" exportable={false}></Column> */}
            <Column field="id" header="ID" hidden></Column>
            <Column field="description" hidden></Column>
            <Column field="mapSrc" hidden></Column>
            <Column
              field="title"
              header="Title"
              sortable
              style={{ minWidth: "12rem" }}></Column>
            <Column
              field="sortNumber"
              header="Priority"
              sortable
              style={{ minWidth: "12rem" }}></Column>
            <Column
              field="refName"
              header="Reference"
              sortable
              style={{ minWidth: "12rem" }}></Column>
            {/* <Column field="image" header="Image" body={imageBodyTemplate}style={{ minWidth: '12rem' }}></Column> */}
            <Column
              field="city"
              header="City"
              sortable
              style={{ minWidth: "10rem" }}></Column>
            <Column
              field="region"
              header="Region"
              sortable
              style={{ minWidth: "10rem" }}></Column>
            <Column
              field="floors"
              header="Floors"
              sortable
              style={{ minWidth: "8rem" }}></Column>
            <Column
              field="bedrooms"
              header="Bedrooms"
              sortable
              style={{ minWidth: "10rem" }}></Column>
            <Column
              field="bathrooms"
              header="Bathrooms"
              sortable
              style={{ minWidth: "10rem" }}></Column>
            <Column
              field="type"
              header="Type"
              sortable
              style={{ minWidth: "10rem" }}></Column>
            {/* <Column field="apartments" header="Apartments" sortable style={{ minWidth: '6rem' }}></Column> */}
            <Column
              field="status"
              header="Status"
              sortable
              style={{ minWidth: "15rem" }}></Column>
            <Column
              field="updatedBy"
              header="Update By"
              sortable
              style={{ minWidth: "15rem" }}></Column>
            <Column
              field="updatedOn"
              header="Updated On"
              sortable
              style={{ minWidth: "15rem" }}></Column>
            {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column> */}
            {/* <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column> */}
            {/* <Column field="availability" header="Availability" body={availabilityBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column> */}
            <Column
              header="Actions"
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "8rem" }}
              alignFrozen="right"
              frozen={true}></Column>
          </DataTable>
        </div>
      </BlockUI>
      <Dialog
        visible={projectDialog}
        maximized
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Project Details"
        modal
        className="p-fluid"
        footer={projectDialogFooter}
        onHide={hideDialog}>
        {project.image && (
          <img
            src={`https://primefaces.org/cdn/primereact/images/project/${project.image}`}
            alt={project.image}
            className="project-image block m-auto pb-3"
          />
        )}
        <Toast ref={dialogToast} position="bottom-right" />
        <BlockUI blocked={blocker}>
          <LoadingBar isVisible={blocker} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="title" className="field-header">
                  Title
                </label>
                <InputText
                  id="title"
                  value={project.title}
                  onChange={(e) => onInputChange(e, "title")}
                  required
                  autoFocus
                  className={classNames({
                    "p-invalid": submitted && !project.title,
                  })}
                />
                {submitted && !project.title && (
                  <small className="p-error">Title is required.</small>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="refName" className="field-header">
                  Reference
                </label>
                <InputText
                  id="refName"
                  keyfilter="alphanum"
                  value={project.refName}
                  onChange={(e) => onInputChange(e, "refName")}
                  required
                  autoFocus
                  className={classNames({
                    "p-invalid": submitted && !project.refName,
                  })}
                />
                {submitted && !project.refName && (
                  <small className="p-error">Reference is required.</small>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="sortNumber" className="field-header">
                  Priority
                </label>
                <InputNumber
                  id="sortNumber"
                  value={project.sortNumber}
                  onValueChange={(e) => onInputNumberChange(e, "sortNumber")}
                  required
                  autoFocus
                  useGrouping={false}
                  className={classNames({
                    "p-invalid": submitted && !project.sortNumber,
                  })}
                />
                {submitted && !project.sortNumber && (
                  <small className="p-error">Priority is required.</small>
                )}
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <label htmlFor="description" className="field-header">
                  Description
                </label>
                {/* <InputTextarea id="description" value={projectDetails.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} /> */}
                <>
                  <TextEditor
                    textEditorState={textEditorValue}
                    updateTextEditorState={updateTextEditorValue}
                    className={classNames({
                      "p-invalid":
                        submitted &&
                        (textEditorValue == "<p><br></p>" || !textEditorValue),
                    })}
                  />
                  {/* <HtmlTextEditor textEditorState={textEditorValue} updateTextEditorState={updateTextEditorValue} className={classNames({ 'p-invalid': submitted && (textEditorValue=="<p><br></p>" || !textEditorValue) })}/> */}

                  {submitted &&
                    (textEditorValue == "<p><br></p>" || !textEditorValue) && (
                      <small className="p-error">
                        Description is required.
                      </small>
                    )}
                </>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className=" field-header">Status</label>
                <div className="flex flex-wrap">
                  <div
                    className="flex align-items-center"
                    style={{ gap: "20px" }}>
                    {projectStatuses.map((item, index) => {
                      return (
                        <div key={index} className="pr-4 mr-4">
                          <RadioButton
                            inputId={index}
                            name={item}
                            value={item}
                            onChange={(e) => onProjectStatusChange(e.value)}
                            checked={project.status === item}
                          />
                          <label
                            htmlFor={index}
                            className="ml-2 pr-4"
                            style={{ color: "var(--color4)" }}>
                            {item}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <label className=" field-header">Type</label>
                <div className="flex flex-wrap">
                  <div
                    className="flex align-items-center"
                    style={{ gap: "20px" }}>
                    {typeEditor(project.type)}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-3">
                <label htmlFor="city" className="field-header">
                  City
                </label>
                <InputText
                  id="city"
                  value={project.city}
                  onChange={(e) => onInputChange(e, "city")}
                  required
                  autoFocus
                  className={classNames({
                    "p-invalid": submitted && !project.city,
                  })}
                />
                {submitted && !project.city && (
                  <small className="p-error">City is required.</small>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="region" className="field-header">
                  Region
                </label>
                <InputText
                  id="region"
                  value={project.region}
                  onChange={(e) => onInputChange(e, "region")}
                  required
                  autoFocus
                  className={classNames({
                    "p-invalid": submitted && !project.region,
                  })}
                />
                {submitted && !project.region && (
                  <small className="p-error">Region is required.</small>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="floors" className="field-header">
                  Floors
                </label>
                <InputNumber
                  id="floors"
                  value={project.floors}
                  onValueChange={(e) => onInputNumberChange(e, "floors")}
                  required
                  autoFocus
                  className={classNames({
                    "p-invalid": submitted && !project.floors,
                  })}
                />
                {submitted && !project.floors && (
                  <small className="p-error">Floors is required.</small>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="bedrooms" className="field-header">
                  Bedrooms
                </label>
                <InputText
                  id="bedrooms"
                  value={project.bedrooms}
                  onChange={(e) => onInputChange(e, "bedrooms")}
                  required
                  autoFocus
                  className={classNames({
                    "p-invalid": submitted && !project.bedrooms,
                  })}
                />
                {submitted && !project.bedrooms && (
                  <small className="p-error">Bedrooms is required.</small>
                )}
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-3">
                <label htmlFor="bathrooms" className="field-header">
                  Bathrooms
                </label>
                <InputNumber
                  id="bathrooms"
                  value={project.bathrooms}
                  onValueChange={(e) => onInputNumberChange(e, "bathrooms")}
                  required
                  autoFocus
                  className={classNames({
                    "p-invalid": submitted && !project.bathrooms,
                  })}
                />
                {submitted && !project.bathrooms && (
                  <small className="p-error">Bathrooms is required.</small>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="mapSrc" className="field-header">
                  Location
                </label>
                <InputText
                  id="mapSrc"
                  value={project.mapSrc}
                  onChange={(e) => onInputChange(e, "mapSrc")}
                  required
                  autoFocus
                  className={classNames({
                    "p-invalid": submitted && !project.mapSrc,
                  })}
                />
                {submitted && !project.mapSrc && (
                  <small className="p-error">Location is required.</small>
                )}
              </div>
            </div>
            {/* <div className='row mt-2'>
                        <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
                        <button onClick={uploadImage}> Upload Image</button>
                    </div> */}
            <div className="row mt-2">
              <div className="col-3 text-center">
                <div style={{ color: "red" }}>*Upload at least 3 images</div>
                <FileUpload
                  mode="basic"
                  chooseOptions={{ icon: "pi pi-upload" }}
                  onValidationFail={onUploadError}
                  multiple
                  name="projectImages"
                  customUpload
                  uploadHandler={(e) =>
                    handleFileChange(e, "projectImages", "PROJECT_IMAGES")
                  }
                  accept="image/*"
                  maxFileSize={5000000}
                  auto
                  chooseLabel="Project Images"
                />

                <div className="row upload-list">
                  {projectImages &&
                    Object.values(projectImages.map((m) => m.files))
                      .flat()
                      .map((upFile, index) => {
                        return (
                          <div className="col-3 d-grid" key={index}>
                            <Image
                              src={upFile.itemImageSrc}
                              alt={upFile.alt}
                              width="250"
                              height="250"
                              preview
                            />
                            <div>
                              <Button
                                icon="pi pi-times"
                                size="small"
                                rounded
                                text
                                severity="danger"
                                aria-label="Cancel"
                                onClick={() =>
                                  handleDeleteFile(index, "PROJECT_IMAGES")
                                }
                              />
                            </div>
                            {/* <button onClick={() => handleDeleteFile(index)}>Delete</button> */}
                          </div>
                        );
                      })}
                </div>
              </div>
              <div className="col-3 text-center">
                <br />
                <FileUpload
                  mode="basic"
                  customUpload
                  chooseOptions={{ icon: "pi pi-upload" }}
                  name="projectDocs"
                  accept="application/pdf"
                  maxFileSize={5000000}
                  uploadHandler={(e) =>
                    handleFileChange(e, "documents", "PROJECT_DOCUMENTS")
                  }
                  auto
                  chooseLabel="Project Brochure"
                />
                <div className="row upload-list">
                  <ul>
                    {projectDocuments &&
                      Object.values(projectDocuments.map((m) => m.files))
                        .flat()
                        .map((upFile, index) => {
                          return (
                            <li key={index} className="d-flex">
                              <strong>File:</strong> {upFile.alt}
                              <Button
                                icon="pi pi-times"
                                size="small"
                                rounded
                                text
                                severity="danger"
                                aria-label="Cancel"
                                onClick={() =>
                                  handleDeleteFile(index, "PROJECT_DOCUMENTS")
                                }
                              />
                            </li>
                          );
                        })}
                  </ul>
                </div>
              </div>
              <div className="col-3 text-center">
                <br />
                <FileUpload
                  mode="basic"
                  chooseOptions={{ icon: "pi pi-upload" }}
                  customUpload
                  name="projectSideImage"
                  accept="image/*"
                  maxFileSize={5000000}
                  uploadHandler={(e) =>
                    handleFileChange(e, "sideImage", "PROJECT_SIDE_IMAGE")
                  }
                  auto
                  chooseLabel="Project Side Image"
                />
                <div className="row upload-list">
                  {projectSideImage &&
                    Object.values(projectSideImage.map((m) => m.files))
                      .flat()
                      .map((upFile, index) => {
                        return (
                          <div className="col-3 d-grid" key={index}>
                            <Image
                              src={upFile.itemImageSrc}
                              alt={upFile.alt}
                              width="250"
                              height="250"
                              preview
                            />
                            <div>
                              <Button
                                icon="pi pi-times"
                                size="small"
                                rounded
                                text
                                severity="danger"
                                aria-label="Cancel"
                                onClick={() =>
                                  handleDeleteFile(index, "PROJECT_SIDE_IMAGE")
                                }
                              />
                            </div>
                            {/* <button onClick={() => handleDeleteFile(index)}>Delete</button> */}
                          </div>
                        );
                      })}
                </div>
              </div>
              <div className="col-3">
                <br />
                <FileUpload
                  mode="basic"
                  chooseOptions={{ icon: "pi pi-upload" }}
                  customUpload
                  name="projectMainImage"
                  accept="image/*"
                  maxFileSize={5000000}
                  uploadHandler={(e) =>
                    handleFileChange(e, "mainImage", "PROJECT_MAIN_IMAGE")
                  }
                  auto
                  chooseLabel="Project Main Image"
                />
                <div className="row upload-list">
                  {projectMainImage &&
                    Object.values(projectMainImage.map((m) => m.files))
                      .flat()
                      .map((upFile, index) => {
                        return (
                          <div className="col-3 d-grid" key={index}>
                            <Image
                              src={upFile.itemImageSrc}
                              alt={upFile.alt}
                              width="250"
                              height="250"
                              preview
                            />
                            <div>
                              <Button
                                icon="pi pi-times"
                                size="small"
                                rounded
                                text
                                severity="danger"
                                aria-label="Cancel"
                                onClick={() =>
                                  handleDeleteFile(index, "PROJECT_MAIN_IMAGE")
                                }
                              />
                            </div>
                            {/* <button onClick={() => handleDeleteFile(index)}>Delete</button> */}
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
            {/* <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="price" className="field-header">
                                Price
                            </label>
                            <InputNumber id="price" value={project.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                        </div>
                        <div className="field col">
                            <label htmlFor="quantity" className="field-header">
                                Quantity
                            </label>
                            <InputNumber id="quantity" value={project.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
                        </div>
                    </div> */}
            <div className="row mt-2">
              <div className="col-3 text-center">
                <FileUpload
                  mode="basic"
                  customUpload
                  chooseOptions={{ icon: "pi pi-upload" }}
                  name="projectVideos"
                  accept="video/*"
                  maxFileSize={30000000}
                  uploadHandler={(e) =>
                    handleFileChange(e, "videos", "PROJECT_VIDEO")
                  }
                  auto
                  chooseLabel="Project Video"
                />
                <div className="row upload-list">
                  <ul>
                    {projectVideo &&
                      Object.values(projectVideo.map((m) => m.files))
                        .flat()
                        .map((upFile, index) => {
                          return (
                            <li key={index} className="d-flex">
                              <strong>File:</strong> {upFile.alt}
                              <Button
                                icon="pi pi-times"
                                size="small"
                                rounded
                                text
                                severity="danger"
                                aria-label="Cancel"
                                onClick={() =>
                                  handleDeleteFile(index, "PROJECT_VIDEO")
                                }
                              />
                            </li>
                          );
                        })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Panel
                header="Apartment List"
                toggleable
                onClick={(e) => {
                  if (e.target.className == "p-panel-header") {
                    document.querySelector("button.p-panel-toggler").click();
                  }
                }}>
                <DataTable
                  header={apartmenListHeader}
                  value={projectApartmentList}
                  editMode="row"
                  dataKey="flatNo"
                  onRowEditCancel={onRowEditCancel}
                  onRowEditInit={onRowEditStart}
                  onRowEditComplete={onRowEditComplete}
                  tableStyle={{ minWidth: "50rem" }}
                  rowEditValidator={validApartmentRow}>
                  {/* <Column field="id" header="Id" style={{ width: '10%' }}></Column> */}
                  <Column
                    field="flatNo"
                    header="Flat No"
                    editor={(options) => textEditor(options)}
                    style={{ width: "12%" }}></Column>
                  <Column
                    field="beds"
                    header="Beds"
                    editor={(options) => textEditor(options)}
                    style={{ width: "12%" }}></Column>
                  <Column
                    field="baths"
                    header="Baths"
                    editor={(options) => textEditor(options)}
                    style={{ width: "12%" }}></Column>

                  <Column
                    field="internalArea"
                    header="Covered Area"
                    editor={(options) => textEditor(options)}
                    style={{ width: "12%" }}></Column>
                  <Column
                    field="coveredVerandas"
                    header="Covered Verandas"
                    editor={(options) => textEditor(options)}
                    style={{ width: "12%" }}></Column>
                  <Column
                    field="verandas"
                    header="Verandas"
                    editor={(options) => textEditor(options)}
                    style={{ width: "12%" }}></Column>
                  <Column
                    field="storage"
                    header="Storage"
                    editor={(options) => textEditor(options)}
                    style={{ width: "12%" }}></Column>
                  <Column
                    field="area"
                    header="Area"
                    editor={(options) => textEditor(options)}
                    style={{ width: "12%" }}></Column>
                  <Column
                    field="status"
                    header="Status"
                    body={(e) => {
                      return (
                        <Tag
                          value={e.status}
                          severity={getSeverity(e.status)}></Tag>
                      );
                    }}
                    editor={(options) => statusEditor(options)}
                    style={{ width: "20%" }}></Column>
                  {/* <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column> */}
                  <Column
                    rowEditor
                    headerStyle={{ width: "10%", minWidth: "8rem" }}
                    bodyStyle={{ textAlign: "center" }}></Column>

                  <Column
                    header="Actions"
                    body={apratmentActionBodyTemplate}
                    exportable={false}
                    style={{ minWidth: "10rem", display: "inline-flex" }}
                    alignFrozen="right"
                    frozen={true}></Column>
                </DataTable>
              </Panel>
            </div>
          </div>
        </BlockUI>
      </Dialog>

      <Dialog
        visible={deleteProjectDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteProjectDialogFooter}
        onHide={hideDeleteProjectDialog}>
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "1.5rem" }}
          />
          {project && (
            <span>
              Are you sure you want to delete <b>{project.title}</b>?
            </span>
          )}
        </div>
      </Dialog>

      {/* <Dialog visible={deleteProjectsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProjectsDialogFooter} onHide={hideDeleteProjectsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '1.5rem' }} />
                    {project && <span>Are you sure you want to delete the selected projects?</span>}
                </div>
            </Dialog> */}

      <Dialog
        visible={previewProjectDialog}
        maximized
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Preview"
        modal
        onHide={() => {
          setPreviewProjectDialog(false);
        }}>
        <ProjectDetailsPreview
          project={project}
          projectVideo={projectVideo}
          projectMainImage={projectMainImage}
          proejctDescription={textEditorValue}
          apartmentList={projectApartmentList}
          projectDocuments={projectDocuments}
          projectImages={projectImages}
          projectSideImage={projectSideImage}
        />
      </Dialog>

      <Dialog
        visible={apartmentFilesDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Apartment Files"
        modal
        onHide={() => {
          setApartmentFilesDialog(false);
        }}>
        <div className="container-fluid">
          <div className="row col-12 upload-list">
            {selectedApartmentFiles &&
              Object.values(selectedApartmentFiles.map((m) => m.files))
                .flat()
                .map((upFile, index) => {
                  return (
                    <div className="col-3 d-grid" key={index}>
                      <Image
                        src={upFile.itemImageSrc}
                        alt={upFile.alt}
                        width="250"
                        height="250"
                        preview
                      />
                      <div>
                        <Button
                          icon="pi pi-times"
                          size="small"
                          rounded
                          text
                          severity="danger"
                          aria-label="Cancel"
                          onClick={() => {
                            handleDeleteFile(upFile.itemImageSrc, "APARTMENT_IMAGES");
                            setApartmentFilesDialog(false);
                          }}
                        />
                      </div>
                      {/* <button onClick={() => handleDeleteFile(index)}>Delete</button> */}
                    </div>
                  );
                })}
          </div>
        </div>
      </Dialog>
    </>
  );
}
