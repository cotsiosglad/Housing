import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import React from 'react';
import { awards } from "../../components/data/Data";

function AdminMainPage() {
    return <GridComponent dataSource={awards}>
        <ColumnsDirective>
            <ColumnDirective field='num' width='100' textAlign="Right"/>
            <ColumnDirective field='name' width='100'/>
            {/* <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/> */}
        </ColumnsDirective>
    </GridComponent>
};
export default AdminMainPage;