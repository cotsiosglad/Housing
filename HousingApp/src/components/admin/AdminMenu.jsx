import { MenuComponent } from '@syncfusion/ej2-react-navigations';
//import {adminMenuData} from '../data/Data'
import * as React from 'react';

function AdminMenu() {
    // Menu items definition
    let menuItems = [
        {
            items: [
                { text: 'Open' },
                { text: 'Save' },
                { text: 'Exit' }
            ],
            text: 'File'
        },
        {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ],
            text: 'Edit'
        },
        {
            items: [
                { text: 'Toolbar' },
                { text: 'Sidebar' }
            ],
            text: 'View'
        },
        {
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }
            ],
            text: 'Tools'
        },
        { text: 'Go' },
        { text: 'Help' }
    ];
    return (<MenuComponent items={menuItems} orientation="Vertical"/>);
}
export default AdminMenu;