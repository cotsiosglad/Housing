import React,{useState,useRef} from "react"
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import { isBrowser, isMobile } from 'react-device-detect';

export default function DialogContactForm ({dialogVisibleStage,updateDialogVisibleState}){

  const emptyContactModel={
    firstName:"",
    lastName:"",
    contactNumber:"",
    contactEmail:"",
    notes:""
  }
  
  const [contactModel,setContactModel] = useState(emptyContactModel)
  const [submitted, setSubmitted] = useState(false);
  const toast = useRef(null);
  
  const dialogFooterTemplate = () => {
    return <Button label="Submit" icon="pi pi-check" onClick={saveContactForm} />;
  };
  
  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _contact = { ...contactModel };
  
    _contact[`${name}`] = val;
  
    setContactModel(_contact);
  };

  const onInputNumberChange = (e, name) => {
    const val = e.value || "";
    let _contact = { ...contactModel };
  
    _contact[`${name}`] = val;
  
    setContactModel(_contact);
  };

  const handleDialogVisibleState=(e)=>{
      updateDialogVisibleState(!dialogVisibleStage);
      console.log(dialogVisibleStage)
  }

  const saveContactForm = () => {
      setSubmitted(true);
      if (contactModel.firstName && (contactModel.contactNumber || contactModel.contactEmail)) {
        let _contactForm = {...contactModel};
        console.log(_contactForm);

        if (_contactForm) {
            //const index = findIndexById(project.id);
            
            try{
                debugger;
                //var aa = getDocById(1,"Contacts");
                // writeDoc(_project,'Contacts')
                //console.log(aa);
            }
            catch(e){
                console.log(e);
            }
            

            //_projects[index] = _project;
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Submitted', life: 3000 });

            handleDialogVisibleState(false)
        } else {
            //_project.id = createId();
            //_project.image = 'project-placeholder.svg';
            //_projects.push(_project);
            //toast.current.show({ severity: 'success', summary: 'Successful', detail: 'project Created', life: 3000 });
        }

        setSubmitted(false);
        setContactModel(emptyContactModel);
    }
  };
console.log("Mobile:"+ isMobile)
  return(
      <>
      <Toast ref={toast} position="bottom-right"/>
      <Dialog header="Contact Details" breakpoints={{ '960px': '75vw', '641px': '90vw' }} maximized={isMobile?true:false} visible={dialogVisibleStage} style={{  height:'448px',width: '50vw' }}
            modal  focusOnShow={true} keepInViewport={true}  contentStyle={{ height: '300px' }} onHide={handleDialogVisibleState} footer={dialogFooterTemplate}>
      <div className="container-fluid contact-form">
        <div className="row">
          <div className="col-12 col-md-6 d-grid">
            <label htmlFor="firstName" className="field-header">
                        Name
            </label>
            <InputText id="firstName" value={contactModel.firstName} onChange={(e) => onInputChange(e, 'firstName') } required autoFocus className={classNames({ 'p-invalid': submitted && !contactModel.firstName })} />
            {submitted && !contactModel.firstName && <small className="p-error">Name is required.</small>}
          </div>
          <div className="col-12 col-md-6 d-grid">
            <label htmlFor="lastName" className="field-header">
                          Surname
              </label>
              <InputText id="lastName" value={contactModel.lastName} onChange={(e) => onInputChange(e, 'lastName') } required autoFocus className={classNames({ 'p-invalid': submitted && !contactModel.lastName })} />
              {submitted && !contactModel.lastName && <small className="p-error">Surname is required.</small>}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 d-grid">
            <label htmlFor="contactNumber" className="field-header">
                            Phone Number
            </label>
            <InputNumber id="contactNumber" value={contactModel.contactNumber} onValueChange={(e) => onInputNumberChange(e, 'contactNumber')} required autoFocus className={classNames({ 'p-invalid': submitted && (!contactModel.contactNumber && !contactModel.contactEmail) })}/> 
            
          </div>
          <div className="col-12 col-md-6 d-grid">
            <label htmlFor="contactEmail" className="field-header">
                          Email
              </label>
              <InputText id="contactEmail"  value={contactModel.contactEmail} onChange={(e) => onInputChange(e, 'contactEmail') } required autoFocus className={classNames({ 'p-invalid': submitted && (!contactModel.contactNumber && !contactModel.contactEmail) })} />
              {/* {submitted && !contactModel.contactEmail && <small className="p-error">Email is required.</small>} */}
          </div>
          {submitted && (!contactModel.contactNumber && !contactModel.contactEmail) && <small className="p-error">Number or Email is required.</small>}
        </div>
        <div className="row">
          <div className="col-12 d-grid">
            <label htmlFor="contactEmail" className="field-header">
              Comment
            </label>
            <InputTextarea id="notes" className="input" maxLength={200} autoResize value={contactModel.notes} onChange={(e) => onInputChange(e,'notes')} rows={3} />
          </div>
        </div>
      </div>
    </Dialog>
    </>
  )
}
