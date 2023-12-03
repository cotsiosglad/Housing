import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
//import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
//registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cXGJCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXZedHVSRmVfUUNwXEQ=');

//updated - 2023-11-15 - testing react-snapshot
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// render(
//   <App/>,
//   document.getElementById('root')
// );

//UPDATED - 2023/12/03 - testing react-snap
// const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   const root = ReactDOM.createRoot(rootElement);
//   hydrateRoot(root, <App />);
// } else {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(<App />);
// }
