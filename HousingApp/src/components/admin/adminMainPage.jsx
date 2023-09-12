// import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

// import React from 'react';
// import { awards } from "../data/Data";


import React from 'react';
import { awards } from "../data/Data"
function AdminMainPage() {
    const editOptions = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        // mode: 'Normal',
        // showDeleteConfirmDialog: true
    };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    return <GridComponent dataSource={awards} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='num' headerText='ID' width='100' textAlign="Right" isPrimaryKey={true}/>
      <ColumnDirective field='name' headerText='Name' width='120'/>
      {/* <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right"/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150'/> */}
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default AdminMainPage;