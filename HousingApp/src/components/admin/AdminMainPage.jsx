import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Chip } from 'primereact/chip';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/md-light-indigo/theme.css";
import { ScrollTop } from 'primereact/scrolltop';
import { Badge } from 'primereact/badge';
import "./adminLogin.css"
import "./adminMainPage.css"
import projects from "../data/Data";
import users from "../data/Data";
import AdminProjects from "./AdminProjects"
import { Chart } from 'primereact/chart';

function AdminMainPage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Home");

  const menuItems = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => setSelectedMenuItem("Home"),
    },
    {
      label: "Projects",
      icon: "pi pi-building",
      command: () => setSelectedMenuItem("Projects"),
    },
    {
      label: "Users",
      icon: "pi pi-users",
      command: () => setSelectedMenuItem("Users"),
    },
    // Add more menu items as needed
  ];

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Daily Visitors',
            data: [40, 60, 46, 55, 37, 50, 30],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                'rgb(255, 159, 64)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
              ],
              borderWidth: 2
        }
    ]
};
const dataMonth = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
      {
          label: 'Daily Visitors',
          data: [40, 60, 46, 55, 37, 50, 30, 22, 11, 23, 45, 53],
          backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderWidth: 2
      }
  ]
};

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

  const infoBlockElements = [
    {
      item: "Projects",
      subNote: "",
      noOfItems: 3,
      notifications: 0,
      icon: "pi-building"
    },
    {
      item: "Services",
      subNote: "",
      noOfItems: 3,
      notifications: 0,
      icon: "pi-wallet"
    },
    {
      item: "Users",
      subNote: "",
      noOfItems: 2,
      notifications: 0,
      icon: "pi pi-users"
    },
    {
      item: "Messages",
      subNote: "3 new messages",
      noOfItems: 2,
      notifications: 3,
      icon: "pi-inbox"
    },
    {
      item: "Interests",
      subNote: "1 new interest",
      noOfItems: 7,
      notifications: 1,
      icon: "pi-bell"
    }
  ]

  // const InfoBlock = () =>{
  //   return(
  //     <div className="info-block row h-100 justify-content-center align-content-center">
  //       {infoBlockElements.map((val,index)=>{
  //         return(
  //           <div className="col-12 col-lg-2" key={index}>
  //             <div className="info-block-card text-center">
  //               <div className="info-block-content">
  //                 <h4>{val.item}</h4>
  //                 <div className="pt-1">{val.noOfItems}</div>
  //               </div>
  //               <Chip className={val.subNote?"":"d-none"} label={val.subNote} icon="pi pi-exclamation-circle" />
  //             </div>
  //           </div>
  //         )
  //       })}
  //     </div>
  //   )
  // };

  const InfoBlock = () => {
    return (
      <div className = "container">
      <div className="info-block row h-100 justify-content-center align-content-center">
        {infoBlockElements.map((val, index) => {
          return (
            // <div className="col-12 col-lg-2" key={index}>
            //   <div className="info-block-card text-center">
            //     <div className="info-block-content">
            //       <h4>{val.item}</h4>
            //       <div className="pt-1">{val.noOfItems}</div>
            //     </div>
            //     <Chip className={val.subNote?"":"d-none"} label={val.subNote} icon="pi pi-exclamation-circle" />
            //   </div>
            // </div>
            <div className="col-12 col-lg-2" key={index}>
              <div className="info-block-content">
                <div className="info-block-icon">
                  <i className={`pi ${val.icon} p-overlay-badge`} style={{ fontSize: '2.5rem' }}></i>
                  <Badge className={val.notifications > 0 ? "" : "d-none"} value={val.notifications}></Badge>
                </div>
                <p className="info-block-items"> {val.item}
                  <span>{val.noOfItems}</span>
                </p>
                {/* <div className="social-media">
                  <Chip className={val.subNote?"":"d-none"} label={val.subNote} icon="pi pi-exclamation-circle" />
                </div> */}
              </div>
            </div>
          )
        })}
      </div>
      <div className="row mt-5 justify-content-center align-content-center">
        <div className="col-6 chartCard">
          <Chart type="bar" data={data} options={options} />
        </div>
        <div className="col-6 chartCard">
          <Chart type="bar" data={dataMonth} options={options} />
        </div>
      </div>
      </div>
    )
  };

  // const InfoBlock = () =>{
  //   return(
  //     <div className="info-block-content">
  //       <div className="info-block-icon">
  //         <i className="pi pi-user" style={{ fontSize: '2.5rem' }}></i>
  //       </div>
  //       <p className="info-block-items"> Jhon Doe
  //           <span>CEO of WritBook
  //           </span>
  //       </p>
  //       <div className="social-media">

  //       </div>
  //     </div>
  //   )
  // }

  const renderContent = () => {
    console.log(selectedMenuItem)
    switch (selectedMenuItem) {
      case "Home":
        return (
          // <div className="container h-100" id="homeLogo">
          //   <img src="../images/dalogo6.png" alt="Rotating Image" className="rotating-image" />
          // </div>
          <InfoBlock />
        )
      case "Projects":
        return <AdminProjects />
      case "Users":
        return <div>Users</div>;;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container-fluid h-100">

        <div className="row h-100 sidebar">
          <nav className="col-md-2 bg-light ">
            <Menubar model={menuItems} />
          </nav>
          <div className="col-md-10 col-lg-10 p-3 side-content">
            {renderContent()}
            <ScrollTop target="window" threshold={100} className="btn-secondary" icon="pi pi-arrow-up text-base" />
            
          </div>
        </div>


      </div>

    </>

  );
}
;
export default AdminMainPage;
