import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import { InputTextarea } from "primereact/inputtextarea";
import { isBrowser, isMobile } from "react-device-detect";
import emailjs from "@emailjs/browser";
import { WriteDoc } from "../../../firebase";
import { serverTimestamp } from "firebase/firestore"

export default function DialogContactForm({
  dialogVisibleStage,
  updateDialogVisibleState,
  contactFormFor,
}) {
  const emptyContactModel = {
    firstName: "",
    lastName: "",
    contactNumber: "",
    contactEmail: "",
    notes: "",
    contactType: contactFormFor,
    dateCreated: "",
    wasRead: false,
  };

  const [contactModel, setContactModel] = useState(emptyContactModel);
  const [submitted, setSubmitted] = useState(false);
  const toast = useRef(null);
  //Configuration for emailjs
  const form = useRef();
  const dialogFooterTemplate = () => {
    return (
      <Button
        type="submit"
        label="Υποβολή"
        severity="secondary"
        icon="pi pi-check"
        onClick={saveContactForm}
      />
    );
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
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

  const handleDialogVisibleState = (e) => {
    updateDialogVisibleState(!dialogVisibleStage);
    // console.log(dialogVisibleStage);
  };

  const saveContactForm = () => {
    setSubmitted(true);
    if (
      contactModel.firstName &&
      (contactModel.contactNumber || contactModel.contactEmail)
    ) {
      let _contactForm = { ...contactModel, dateCreated: serverTimestamp(), contactType: form.current["contactType"].value };
      // console.log(_contactForm);
      debugger;
      if (_contactForm) {
        //const index = findIndexById(project.id);

        try {
          debugger;
          toast.current.show({
            severity: "success",
            summary: "Successful",
            detail: "Submitted",
            life: 3000,
          });
          WriteDoc(_contactForm, "Contacts");
          emailjs
            .sendForm(
              "service_2l3wljg",
              "template_iehmlgn",
              form.current,
              "KjCooaWk0QOfBkzcz"
            )
            .then(
              (result) => {

                //alert("Message sent successfully");

                //console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          // var aa = getDocById(1,"Contacts");
          // writeDoc(_project,'Contacts')
          // console.log(aa);
        } catch (e) {
          // console.log(e);
        }

        //_projects[index] = _project;

        handleDialogVisibleState(false);
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
  // console.log("Mobile:" + isMobile);

  // Configuration for emailjs
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Toast ref={toast} position="bottom-right" />
      <Dialog
        header="Στοιχεία Επικοινωνίας"
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        maximized={isMobile ? true : false}
        visible={dialogVisibleStage}
        style={{ height: "448px", width: "50vw" }}
        modal
        focusOnShow={true}
        keepInViewport={true}
        contentStyle={{ height: "300px" }}
        onHide={handleDialogVisibleState}
        footer={dialogFooterTemplate}>
        <form ref={form} onSubmit={sendEmail}>
          <input
            hidden={true}
            value={contactFormFor}
            name="contactType"></input>
          <div className="container-fluid contact-form">
            <div className="row">
              <div className="col-12 col-md-6 d-grid">
                <label htmlFor="firstName" className="field-header">
                  Όνομα
                </label>
                <InputText
                  name="firstName"
                  id="firstName"
                  value={contactModel.firstName}
                  onChange={(e) => onInputChange(e, "firstName")}
                  required
                  autoFocus
                  className={classNames({
                    "p-invalid": submitted && !contactModel.firstName,
                  })}
                />
                {submitted && !contactModel.firstName && (
                  <small className="p-error">Το όνομα είναι υποχρεωτικό.</small>
                )}
              </div>
              <div className="col-12 col-md-6 d-grid">
                <label htmlFor="lastName" className="field-header">
                  Επώνυμο
                </label>
                <InputText
                  name="lastName"
                  id="lastName"
                  value={contactModel.lastName}
                  onChange={(e) => onInputChange(e, "lastName")}
                  required
                  autoFocus
                />
                {/* {submitted && !contactModel.lastName && <small className="p-error">Surname is required.</small>} */}
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 d-grid">
                <label htmlFor="contactNumber" className="field-header">
                  Αριθμός Τηλεφώνου
                </label>
                <InputNumber
                  useGrouping={false}
                  id="contactNumber"
                  value={contactModel.contactNumber}
                  onValueChange={(e) => onInputNumberChange(e, "contactNumber")}
                  required
                  autoFocus
                  className={classNames({
                    "p-invalid":
                      submitted &&
                      !contactModel.contactNumber &&
                      !contactModel.contactEmail,
                  })}
                />
              </div>
              <div className="col-12 col-md-6 d-grid">
                <label htmlFor="contactEmail" className="field-header">
                  Ηλεκτρονικό Ταχυδρομείο
                </label>
                <InputText
                  name="contactEmail"
                  id="contactEmail"
                  value={contactModel.contactEmail}
                  onChange={(e) => onInputChange(e, "contactEmail")}
                  required
                  autoFocus
                  className={classNames({
                    "p-invalid":
                      submitted &&
                      !contactModel.contactNumber &&
                      !contactModel.contactEmail,
                  })}
                />
                {/* {submitted && !contactModel.contactEmail && <small className="p-error">Email is required.</small>} */}
              </div>
              {submitted &&
                !contactModel.contactNumber &&
                !contactModel.contactEmail && (
                  <small className="p-error">
                    Απαιτείται αριθμός ή ηλεκτρονικό ταχυδρομείο.
                  </small>
                )}
            </div>
            <div className="row">
              <div className="col-12 d-grid">
                <label htmlFor="contactEmail" className="field-header">
                  Σχόλιο
                </label>
                <InputTextarea
                  name="notes"
                  id="notes"
                  className="input"
                  maxLength={200}
                  autoResize
                  value={contactModel.notes}
                  onChange={(e) => onInputChange(e, "notes")}
                  rows={3}
                />
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </>
  );
}
