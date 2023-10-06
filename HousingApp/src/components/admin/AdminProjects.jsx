
import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { ProductService } from './service/ProductService';
import {projects as projectList,projectDetails as projectDetailsModel} from '../data/Data'
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import TextEditor from "./TextEditor"
import "./adminLogin.css"
import { writeDoc,getDocById } from '../../firebase';

export default function AdminProjects() {
    let emptyProject = {
        id:0,
        title:"",
        image:"",
        location:"",
        region:"",
        floors:"",
        bedrooms:"",
        bathrooms:"",
        type:"",
        apartments:"",
        status:"",
        availability:""
    };

    let emptyProjectDetails = {
        id:0,
        description:"",
        imagePaths:[],
        apartmentList:[]
    }

    const [projects, setProjects] = useState(null);
    const [projectDetails, setProjectDetails] = useState(emptyProjectDetails);
    const [projectDialog, setProjectDialog] = useState(false);
    const [deleteProjectDialog, setDeleteProjectDialog] = useState(false);
    const [deleteProjectsDialog, setDeleteProjectsDialog] = useState(false);
    const [project, setProject] = useState(emptyProject);
    const [selectedProjects, setSelectedProjects] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [textEditorValue, setTextEditorValue] = useState('');
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        
        //add firebase api here
        //ProductService.getProducts().then((data) => setProjects(data));
        setProjects(projectList);
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const updateTextEditorValue = (newState) => {
        console.log(newState)
        setTextEditorValue(newState);
      };

    const openNew = () => {
        setProject(emptyProject);
        setSubmitted(false);
        setProjectDialog(true);
        setProjectDetails(emptyProjectDetails);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProjectDialog(false);
    };

    const hideDeleteProjectDialog = () => {
        setDeleteProjectDialog(false);
    };

    const hideDeleteProjectsDialog = () => {
        setDeleteProjectsDialog(false);
    };

    const saveProject = () => {
        setSubmitted(true);
        console.log(textEditorValue)
        if (project.title.trim() && textEditorValue) {
            let _projects = [...projects];
            let _project = { ...project };
            let _projectDetails = { ...projectDetails,description:textEditorValue};
            console.log(_projectDetails);

            if (project.id) {
                //const index = findIndexById(project.id);
                
                try{
                    debugger;
                    var aa = getDocById(1,"Projects");
                    // writeDoc(_project,'Projects')
                    // writeDoc(_projectDetails,'ProjectsDetails')
                    console.log(aa);
                }
                catch(e){
                    console.log(e);
                }
                

                //_projects[index] = _project;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'project Updated', life: 3000 });
            } else {
                //_project.id = createId();
                //_project.image = 'project-placeholder.svg';
                //_projects.push(_project);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'project Created', life: 3000 });
            }

            setProjects(_projects);
            setProjectDialog(false);
            setProject(emptyProject);
            setProjectDetails(emptyProjectDetails);
            setTextEditorValue('')
        }
    };

    const editProject = (project) => {
        setProject({ ...project });
        //firebase api to get the project details by project id
        setProjectDetails(projectDetailsModel);
        console.log({project});
        console.log({projectDetails});
        console.log({projectDetailsModel});
        setProjectDialog(true);
    };

    const confirmDeleteProject = (project) => {
        setProject(project);
        setDeleteProjectDialog(true);
    };

    const deleteProject = () => {
        let _projects = projects.filter((val) => val.id !== project.id);

        setProjects(_projects);
        //firebase api to delete current project and project details
        setDeleteProjectDialog(false);
        setProject(emptyProject);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'project Deleted', life: 3000 });
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
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

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

    const deleteSelectedProducts = () => {
        let _projects = projects.filter((val) => !selectedProjects.includes(val));

        setProjects(_projects);
        setDeleteProjectsDialog(false);
        setSelectedProjects(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'projects Deleted', life: 3000 });
    };

    const onCategoryChange = (e) => {
        let _project = { ...project };

        _project['category'] = e.value;
        setProject(_project);
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
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
                <Button label="New" size='small' icon="pi pi-plus" severity="secondary" onClick={openNew} />
                {/* <Button label="Delete" size='small' icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProjects || !selectedProjects.length} /> */}
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" size='small' icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={`https://primefaces.org/cdn/primereact/images/project/${rowData.image}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const availabilityBodyTemplate = (rowData) => {
        return <Tag value={rowData.availability} severity={getSeverity(rowData)}></Tag>;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" size='small' rounded outlined className="mr-2" onClick={() => editProject(rowData)} />
                <Button icon="pi pi-trash" size='small' rounded outlined severity="danger" onClick={() => confirmDeleteProject(rowData)} />
            </React.Fragment>
        );
    };

    const getSeverity = (project) => {
        switch (project.availability) {
            case 'Available':
                return 'success';

            case 'Partial Availability':
                return 'warning';

            case 'Sold':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Manage projects</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    const projectDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" size='small' icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" size='small' icon="pi pi-check" onClick={saveProject} />
        </React.Fragment>
    );
    const deleteProjectDialogFooter = (
        <React.Fragment>
            <Button label="No" size='small' icon="pi pi-times" outlined onClick={hideDeleteProjectDialog} />
            <Button label="Yes" size='small' icon="pi pi-check" severity="danger" onClick={deleteProject} />
        </React.Fragment>
    );
    const deleteProjectsDialogFooter = (
        <React.Fragment>
            <Button label="No" size='small' icon="pi pi-times" outlined onClick={hideDeleteProjectsDialog} />
            <Button label="Yes" size='small' icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    return (
        <>
            <Toast ref={toast} />
            <div className="table-content">
                <Toolbar className="mb-4" start={leftToolbarTemplate} end={rightToolbarTemplate}></Toolbar>

                {/* <DataTable ref={dt} value={projects} size='small' selection={selectedProjects} onSelectionChange={(e) => setSelectedProjects(e.value)} */}
                <DataTable ref={dt} value={projects} size='small'
                        dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} projects" globalFilter={globalFilter} header={header} scrollable >
                    {/* <Column selectionMode="multiple" exportable={false}></Column> */}
                    <Column field="id" header="ID" sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="title" header="Title" sortable style={{ minWidth: '16rem' }}></Column>
                    {/* <Column field="image" header="Image" body={imageBodyTemplate}style={{ minWidth: '12rem' }}></Column> */}
                    <Column field="location" header="Location" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="region" header="Region" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="floors" header="Floors" sortable style={{ minWidth: '8rem' }}></Column>
                    <Column field="bedrooms" header="Bedrooms" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="bathrooms" header="Bathrooms" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="type" header="Type" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="apartments" header="Apartments" sortable style={{ minWidth: '6rem' }}></Column>
                    <Column field="status" header="Status" sortable style={{ minWidth: '15rem' }}></Column>
                    {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column> */}
                    {/* <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column> */}
                    <Column field="availability" header="Availability" body={availabilityBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column header="Actions" body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }} alignFrozen="right" frozen={true}></Column>
                </DataTable>
            </div>

            <Dialog visible={projectDialog} maximized pos style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Project Details" modal className="p-fluid" footer={projectDialogFooter} onHide={hideDialog}>
                {project.image && <img src={`https://primefaces.org/cdn/primereact/images/project/${project.image}`} alt={project.image} className="project-image block m-auto pb-3" />}
            
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <label htmlFor="title" className="field-header">
                                Title
                            </label>
                            <InputText id="title" value={project.title} onChange={(e) => onInputChange(e, 'title')} required autoFocus className={classNames({ 'p-invalid': submitted && !project.title })} />
                            {submitted && !project.title && <small className="p-error">Title is required.</small>}
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-12'>
                        <label htmlFor="description" className="field-header">
                            Description
                        </label>
                        {/* <InputTextarea id="description" value={projectDetails.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} /> */}
                            <>
                            <TextEditor textEditorState={textEditorValue} updateTextEditorState={updateTextEditorValue} className={classNames({ 'p-invalid': submitted && (textEditorValue=="<p><br></p>" || !textEditorValue) })}/>
                            {/* <HtmlTextEditor textEditorState={textEditorValue} updateTextEditorState={updateTextEditorValue} className={classNames({ 'p-invalid': submitted && (textEditorValue=="<p><br></p>" || !textEditorValue) })}/> */}
                            
                            {submitted && (textEditorValue=="<p><br></p>" || !textEditorValue) && <small className="p-error">Description is required.</small>}
                            </>
                        </div>
                        
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-12'>
                            <label className=" field-header">Status</label>
                            <div className="formgrid grid">
                                <div className="field-radiobutton">
                                    <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={project.category === 'Accessories'} />
                                    <label htmlFor="category1">Completed</label>
                                </div>
                                <div className="field-radiobutton">
                                    <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={project.category === 'Clothing'} />
                                    <label htmlFor="category2">Under Construction</label>
                                </div>
                                <div className="field-radiobutton">
                                    <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={project.category === 'Electronics'} />
                                    <label htmlFor="category3">Planned</label>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-3'>
                            <label htmlFor="location" className="field-header">
                                Location
                            </label>
                            <InputText id="location" value={project.location} onChange={(e) => onInputChange(e, 'location')} required autoFocus className={classNames({ 'p-invalid': submitted && !project.location })} />
                            {submitted && !project.location && <small className="p-error">Location is required.</small>}
                        </div>
                        <div className='col-md-3'>
                            <label htmlFor="region" className="field-header">
                                Region
                            </label>
                            <InputText id="region" value={project.region} onChange={(e) => onInputChange(e, 'region')} required autoFocus className={classNames({ 'p-invalid': submitted && !project.region })} />
                            {submitted && !project.region && <small className="p-error">Region is required.</small>}
                        </div>
                        <div className='col-md-3'>
                            <label htmlFor="floors" className="field-header">
                                Floors
                            </label>
                            <InputNumber id="floors" value={project.floors} onValueChange={(e) => onInputNumberChange(e, 'floors')} required autoFocus className={classNames({ 'p-invalid': submitted && !project.floors })}/>
                            {submitted && !project.floors && <small className="p-error">Floors is required.</small>}
                        </div>
                        <div className='col-md-3'>
                            <label htmlFor="bedrooms" className="field-header">
                                Bedrooms
                            </label>
                            <InputText id="bedrooms" value={project.bedrooms} onChange={(e) => onInputChange(e, 'bedrooms') } required autoFocus className={classNames({ 'p-invalid': submitted && !project.bedrooms })} />
                            {submitted && !project.bedrooms && <small className="p-error">Bedrooms is required.</small>}
                        </div>
                        <div className='col-md-3'>
                            <label htmlFor="bathrooms" className="field-header">
                                Bathrooms
                            </label>
                            <InputNumber id="bathrooms" value={project.bathrooms} onValueChange={(e) => onInputNumberChange(e, 'bathrooms')} required autoFocus className={classNames({ 'p-invalid': submitted && !project.bathrooms })}/>
                            {submitted && !project.bathrooms && <small className="p-error">Bathrooms is required.</small>}
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
                </div>
                
            </Dialog>

            <Dialog visible={deleteProjectDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProjectDialogFooter} onHide={hideDeleteProjectDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '1.5rem' }} />
                    {project && (
                        <span>
                            Are you sure you want to delete <b>{project.title}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProjectsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProjectsDialogFooter} onHide={hideDeleteProjectsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '1.5rem' }} />
                    {project && <span>Are you sure you want to delete the selected projects?</span>}
                </div>
            </Dialog>
        </>
    );
}
        