import React from "react"
// import ReactDOM from "react-dom/client"
import { render } from 'react-snapshot';
import App from "./App"
//import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
//registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cXGJCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXZedHVSRmVfUUNwXEQ=');

//updated - 2023-11-15 - testing react-snapshot
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

render(
  <App/>,
  document.getElementById('root')
);
