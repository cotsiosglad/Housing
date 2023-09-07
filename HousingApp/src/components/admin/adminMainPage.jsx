// import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

// import React from 'react';
// import { awards } from "../data/Data";

// function AdminMainPage() {
//     return <GridComponent dataSource={awards}>
//         <ColumnsDirective>
//             <ColumnDirective field='num' width='100' textAlign="Right"/>
//             <ColumnDirective field='name' width='100'/>
//             {/* <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
//             <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
//             <ColumnDirective field='ShipCountry' width='100'/> */}
//         </ColumnsDirective>
//     </GridComponent>
// };
// export default AdminMainPage;

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
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