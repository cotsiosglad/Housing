
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { GetAllDocs, UpdateMessageReadFlag } from '../../firebase';
import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { isMobile } from "react-device-detect";
import { InputText } from 'primereact/inputtext';

export default function AdminContacts() {
    const [contacts, setContacts] = useState([]);
    const [textToShow, setTextToShow] = useState("");
    const [visible, setVisible] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);
    useEffect(() => {
        GetAllDocs("Contacts").then((result) => {
            const _data = result.map((m) => {
                const firebaseTimestamp = m.data.dateCreated;
                // Convert Firebase timestamp to JavaScript Date object
                const dateObject = new Date(firebaseTimestamp.seconds * 1000 + firebaseTimestamp.nanoseconds / 1e6);

                // Add a new property to the object with the local datetime string
                return {
                    ...m.data,
                    dateCreated: dateObject.toLocaleString(),
                    id: m.id
                };
            });
            const sortedData = _data.sort((a, b) => {
                // Convert dateCreated to JavaScript Date objects for comparison
                const dateA = new Date(a.dateCreated);
                const dateB = new Date(b.dateCreated);

                // Compare and sort in descending order
                return dateB - dateA;
            });
            debugger;
            setContacts(sortedData);
        })
    }, []);
    const onContactRowClick = (e) => {
        debugger
        setTextToShow(e.data.notes);
        setVisible(true);
        //update flag when initially false
        if (!e.data.wasRead) {
            UpdateMessageReadFlag(!e.data.wasRead, e.data.id);
            dt.current.getTable().getElementsByTagName('tbody')[0].getElementsByTagName("tr")[e.index].classList.remove("red");
        }

    }
    const exportCSV = () => {
        dt.current.exportCSV();
    };
    // const leftToolbarTemplate = () => {
    //     return (
    //         <div className="flex flex-wrap gap-2">
    //             <Button
    //                 label="New"
    //                 size="small"
    //                 icon="pi pi-plus"
    //                 severity="secondary"
    //                 onClick={openNew}
    //             />
    //             {/* <Button label="Delete" size='small' icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProjects || !selectedProjects.length} /> */}
    //         </div>
    //     );
    // };

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

    const abv = (e) => {
        debugger;
        if (e.wasRead) {
            return null
        }
        else { return 'red' }

        debugger;
    }

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
    return (

        <>
            <Dialog header="Message" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} maximized={isMobile ? true : false} >
                <p className="m-0">
                    {textToShow}
                </p>
            </Dialog>
            <div className="table-content">
                <div className=''>
                    <Toolbar className="mb-4" end={rightToolbarTemplate}></Toolbar>
                    <DataTable ref={dt} value={contacts} globalFilter={globalFilter} header={header} rowClassName={abv} tableStyle={{ minWidth: '50rem' }} onRowClick={(e) => { onContactRowClick(e) }} exportFilename='ContactsExport'>
                        <Column field="contactType" header="For" s></Column>
                        <Column field="firstName" header="First Name"></Column>
                        <Column field="lastName" header="Last Name"></Column>
                        <Column field="contactEmail" header="Email"></Column>
                        <Column field="contactNumber" header="Number"></Column>
                        <Column field="notes" header="Message" style={{ maxWidth: '15rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}></Column>
                        <Column field="dateCreated" header="Date"></Column>
                        <Column field="wasRead" hidden={true}></Column>
                        <Column field="id" hidden={true}></Column>
                    </DataTable>
                </div>

            </div>
        </>
    );
}
