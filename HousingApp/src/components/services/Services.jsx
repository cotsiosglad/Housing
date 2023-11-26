import React, { useState } from "react";
import img from "../images/services.jpg";
import Back from "../common/Back";
import ServiceBox from "../services/serviceBox";

import "../../App.css";
import "./services.css";
// import useIntersectionObserver from "../../customHooks/useIntersectionObserver"
// import ScrollToTop from "../../customHelperComponents/ScrollToTop"; // Import the ScrollToTop component
import DialogContactForm from "../helper/dialogContactForm/DialogContactForm";
import Seo from "../../customHelperComponents/SeoComponent";

const Services = () => {
  // useIntersectionObserver({
  // 	root: null,
  // 	rootMargin: '0px',
  // 	threshold: 0.4,
  // });~

  const [dialogServiceVisible, setDialogServiceVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const updateDialogServiceVisible = (newState) => {
    console.log(newState);
    setDialogServiceVisible(newState);
  };

  return (
    <>
      <Seo title={"Services"} description={"Domus Alba Services"} pathSlug="Services" keywords={["domus alba services", "services", "Αγορά Κατοικιών", "Ενοίκιο διαμέρισμα σπίτι", "Apartment house for rent", "Apartment for sale", "Αγορά Σπιτίου", "Αγορά διαμερίσματος"]} />

      {/* <ScrollToTop /> */}
      <div className="services mb">
        <Back
          name="Υπηρεσίες"
          title="Υπηρεσίες - Όλες οι υπηρεσίες"
          cover={img}
        />
        <div className="container mtop">
          <div className="row d-flex justify-content-evenly">
            <ServiceBox
              serviceButtonState={dialogServiceVisible}
              updateServiceButtonService={setDialogServiceVisible}
              updateSelectedServiceState={setSelectedService}
            />
          </div>
        </div>
      </div>
      <DialogContactForm
        dialogVisibleStage={dialogServiceVisible}
        updateDialogVisibleState={updateDialogServiceVisible}
        contactFormFor={selectedService}
      />

      {/*
      <Dialog header="Flex Scroll" breakpoints={{ '960px': '75vw', '641px': '90vw' }} visible={dialogServiceVisible} style={{  height:'448px',width: '75vw' }}
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
      </Dialog> */}
    </>
  );
};

export default Services;
