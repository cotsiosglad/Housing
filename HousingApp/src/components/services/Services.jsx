import React,{useState} from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import Heading from "../common/Heading"
import ServiceBox from "../services/serviceBox"
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import "../../App.css"
import "./services.css"
import useIntersectionObserver from "../../customHooks/useIntersectionObserver"
import ScrollToTop from "../../customHelperComponents/ScrollToTop"; // Import the ScrollToTop component




const Services = () => {
  // useIntersectionObserver({
	// 	root: null,
	// 	rootMargin: '0px',
	// 	threshold: 0.4,
	// });
  const emptyContactModel={
    firstName:"",
    lastName:"",
    contactNumber:"",
    contactEmail:"",
    notes:""
  }

  const [dialogServiceVisible,setDialogServiceVisible] = useState(false)
  const [contactModel,setContactModel] = useState(emptyContactModel)
  const [submitted, setSubmitted] = useState(false);
  
  const dialogFooterTemplate = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogServiceVisible(false)} />;
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _contact = { ...contactModel };

    _contact[`${name}`] = val;

    setContactModel(_contact);
};

const onInputNumberChange = (e, name) => {
  const val = e.value || 0;
  let _contact = { ...contactModel };

  _contact[`${name}`] = val;

  setContactModel(_contact);
};

  return (
    <>
    <ScrollToTop />
      <div className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='container mtop'>
          <div className="row d-flex justify-content-evenly">
            <ServiceBox serviceButtonState={dialogServiceVisible} updateServiceButtonService={setDialogServiceVisible}/>
          </div>
        </div>
      </div>

      <Dialog header="Flex Scroll" breakpoints={{ '960px': '75vw', '641px': '90vw' }} visible={dialogServiceVisible} style={{  height:'448px' }}
              modal  focusOnShow={true} keepInViewport={true}  contentStyle={{ height: '300px' }} onHide={() => setDialogServiceVisible(false)} footer={dialogFooterTemplate}>
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
              <InputNumber id="contactNumber" value={contactModel.contactNumber} onValueChange={(e) => onInputNumberChange(e, 'contactNumber')} required autoFocus className={classNames({ 'p-invalid': submitted && !contactModel.contactNumber })}/> 
              {submitted && !contactModel.contactNumber && <small className="p-error">Number is required.</small>}
            </div>
            <div className="col-12 col-md-6 d-grid">
              <label htmlFor="contactEmail" className="field-header">
                            Email
                </label>
                <InputText id="contactEmail"  value={contactModel.contactEmail} onChange={(e) => onInputChange(e, 'contactEmail') } required autoFocus className={classNames({ 'p-invalid': submitted && !contactModel.contactEmail })} />
                {submitted && !contactModel.contactEmail && <small className="p-error">Email is required.</small>}
            </div>
            <div className="col-12 d-grid">
              <label htmlFor="contactEmail" className="field-header">
                Comment
              </label>
              <InputTextarea id="notes" className="input" maxLength={200} autoResize value={contactModel.notes} onChange={(e) => onInputChange(e,'notes')} rows={3} />
            </div>

          </div>
        </div>
          {/* <div class="form-container">
            <div class="form">
              <span class="heading">Get in touch</span>
              <input placeholder="Name" type="text" class="input"/>
              <input placeholder="Email" id="mail" type="email" class="input"/>
              <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="message" class="input"></textarea>
              <div class="button-container">
              <div class="send-button">Send</div>
              <div class="reset-button-container">
                  <div id="reset-btn" class="reset-button">Reset</div>
              </div>
          </div>
      </div>
      </div> */}
      </Dialog>
    </>
  )
}

export default Services
