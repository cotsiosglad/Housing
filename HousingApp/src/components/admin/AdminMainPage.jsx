import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import { Chip } from "primereact/chip";
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import { ScrollTop } from "primereact/scrolltop";
import { Badge } from "primereact/badge";
import "./adminLogin.css";
import "./adminMainPage.css";
import projects from "../data/Data";
import users from "../data/Data";
import AdminProjects from "./AdminProjects";
import AdminContacts from "./AdminContacts";
import { Chart } from "primereact/chart";
import { getAuth, signOut } from "firebase/auth";
import { auth, GetAllDocs } from "../../firebase";
let NicosiaUsers, LarnacaUsers, PaphosUsers, LimassolUsers, NicosiaDay;
let triggerPromise = false;
let userArray = [];
let days = [];
let totalVisitors = [];
let VisitorsDayTime = [];
let WeeklyVisitors = 0;
function AdminMainPage() {
  const infoBlockElements = [
    {
      item: "Projects",
      subNote: "",
      noOfItems: 3,
      notifications: 0,
      icon: "pi-building",
    },
    // {
    //   item: "Services",
    //   subNote: "",
    //   noOfItems: 3,
    //   notifications: 0,
    //   icon: "pi-wallet",
    // },
    {
      item: "Users",
      subNote: "",
      noOfItems: 2,
      notifications: 0,
      icon: "pi pi-users",
    },
    {
      item: "Messages",
      subNote: "0 new messages",
      noOfItems: 2,
      notifications: 0,
      icon: "pi-inbox",
    },
    {
      item: "Interests",
      subNote: "1 new interest",
      noOfItems: 7,
      notifications: 1,
      icon: "pi-bell",
    },
  ];
  const [infoElements, setInfoElements] = useState(infoBlockElements);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Home");

  const [users, setUsers] = useState([]);
  // const auth = getAuth(app)
  //console.log(auth)
  // if (auth.currentUser == null){
  //   window.location.href= '/admin/'
  // }
  const GetDocs = async () => {
    await GetAllDocs("VisitorsInfo")
      .then((visitors) => {
        if (!triggerPromise) {
          triggerPromise = true;

          for (let i = 0; i < visitors.length; i++) {
            totalVisitors.push(visitors[i]);
            //console.log(visitors[i]);
          }
          //console.log(totalVisitors.length);
          // debugger;
          days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
          const newDate = new Date();

          NicosiaUsers = totalVisitors.filter(
            (w) => w.data.City == "Nicosia"
          ).length;
          PaphosUsers = totalVisitors.filter(
            (w) => w.data.City == "Paphos"
          ).length;
          LarnacaUsers = totalVisitors.filter(
            (w) => w.data.City == "Larnaca"
          ).length;
          LimassolUsers = totalVisitors.filter(
            (w) => w.data.City == "Limassol"
          ).length;

          for (let i = 0; i < days.length; i++) {
            totalVisitors.filter((w) => w.data.City == "Nicosia");
          }

          userArray.push({
            City: "Nicosia",
            counter: NicosiaUsers,
          });
          userArray.push({
            City: "Paphos",
            counter: PaphosUsers,
          });
          userArray.push({
            City: "Larnaca",
            counter: LarnacaUsers,
          });
          userArray.push({
            City: "Limassol",
            counter: LimassolUsers,
          });
          userArray = Array.from(userArray);
          setUsers((prevFiles) => [...userArray]);
          //debugger;
          //console.log(users)
          //console.log(userArray)
          //console.log("Nicosia users:"+ NicosiaUsers+ "Paphos users:" + PaphosUsers + "Larnaca users:" + LarnacaUsers + "Limassol Users: " + LimassolUsers)
          // if (totalVisitors)
          // {
          //   for (let i=0; i < totalVisitors.length; i ++) {
          //     if(totalVisitors[i].data.City === 'Nicosia'){
          //       NicosiaUsers = totalVisitors.length
          //       console.log("Nicosia Users: " + NicosiaUsers)
          //     } else if(totalVisitors[i].data.City === 'Larnaca'){
          //       LarnacaUsers = totalVisitors.length
          //       console.log("Larnaca Users: " + LarnacaUsers)
          //     } else if(totalVisitors[i].data.City === 'Paphos'){
          //       PaphosUsers = totalVisitors.length
          //       console.log("Paphos Users: " + PaphosUsers)
          //     }
          //   }
          // }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function isDateInCurrentWeek(targetDate) {
    // Get the current date
    const currentDate = new Date();

    // Calculate the start of the current week (Sunday)
    const startOfWeek = new Date(currentDate);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

    // Calculate the end of the current week (7 days later)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);

    // Convert the target date to a Date object (if it's not already)
    if (!(targetDate instanceof Date)) {
      targetDate = new Date(targetDate);
    }

    // Compare the target date with the start and end of the current week
    return targetDate >= startOfWeek && targetDate <= endOfWeek;
  }
  // Add a for loop that scans all visitors's dates , check if date is in current week, if its true then add to the object, if false don't
  //console.log(totalVisitors)
  let counter = 0;
  for (let i = 0; i < totalVisitors.length; i++) {
    VisitorsDayTime = totalVisitors[i].data.Date;
    //console.log(VisitorsDayTime)
    let yourDate = new Date(VisitorsDayTime);
    let result = isDateInCurrentWeek(yourDate);
    //console.log(result)
    if (result == true) {
      //console.log("in current week")
      counter++;
    }
    else {
      //console.log("not in current week")
    }
  }
  console.log("Total counter :" + counter);
  // Test the function with your date

  //debugger;

  // console.log(result)
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
    // {
    //   label: "Services",
    //   icon: "pi pi-wallet",
    //   command: () => setSelectedMenuItem("Services"),
    // },
    {
      label: "Contacts",
      icon: "pi pi-envelope",
      command: () => setSelectedMenuItem("Contacts"),
    },
    // {
    //   label: "Users",
    //   icon: "pi pi-users",
    //   command: () => setSelectedMenuItem("Users"),
    // },
    {
      label: "Sign Out",
      icon: "pi pi-users",
      command: () => {
        signOut(auth).then((window.location.href = "/admin"));
      },
    },
    // Add more menu items as needed
  ];

  const data = {
    labels: [days[0], days[1], days[2], days[3], days[4], days[5], days[6]],
    datasets: [
      {
        label: 'Weekly Visitors',
        data: [0, 0, 0, 0, 0, 0, 0],
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
  // console.log(NicosiaUsers)
  // console.log(LarnacaUsers)
  // console.log(PaphosUsers)
  // const i = 2
  // const nicosia = NicosiaUsers
  // const larnaca = LarnacaUsers
  // const paphos = PaphosUsers
  // const limassol = LimassolUsers



  // const dataMonth = {
  //   labels: ['Nicosia', 'Paphos', 'Limassol', 'Larnaca'],
  //   datasets: [
  //       {
  //           label: 'Daily Visitors',
  //           data: [nicosia, paphos, limassol, larnaca],
  //           backgroundColor: [
  //               'rgba(75, 192, 192, 0.2)',
  //               'rgba(75, 192, 192, 0.2)',
  //               'rgba(75, 192, 192, 0.2)',
  //               'rgba(75, 192, 192, 0.2)',
  //               'rgba(75, 192, 192, 0.2)',
  //             ],
  //             borderWidth: 2
  //       }
  //   ]
  // };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  useEffect(() => {
    GetAllDocs("Contacts").then((result) => {
      let _infoElements = [...infoElements];
      let messages = _infoElements.filter(w => w.item == "Messages")[0];
      let index = _infoElements.indexOf(messages);
      let retrievedData = result.map(m => m.data).filter(w => w.contactType == "Contact Us")
      messages.noOfItems = retrievedData.length;
      messages.notifications = retrievedData.filter(w => w.wasRead == false).length;
      _infoElements[index] = messages;

      let interests = _infoElements.filter(w => w.item == "Interests")[0];
      index = _infoElements.indexOf(interests);
      retrievedData = result.map(m => m.data).filter(w => w.contactType != "Contact Us");
      interests.noOfItems = retrievedData.length;
      interests.notifications = retrievedData.filter(w => w.wasRead == false).length;
      _infoElements[index] = interests;

      setInfoElements(_infoElements);
    })

    GetAllDocs("Projects").then((result) => {
      let _infoElements = [...infoElements];
      let projects = _infoElements.filter(w => w.item == "Projects")[0];
      let index = _infoElements.indexOf(projects);
      projects.noOfItems = result.length;
      _infoElements[index] = projects;

      setInfoElements(_infoElements);
    })
  }, [])

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
    GetDocs();

    const getDataMonth = () => {
      const dataMonth = {
        labels: ["Nicosia", "Paphos", "Limassol", "Larnaca"],
        datasets: [
          {
            label: "Total Visitors Per City",
            data: [NicosiaUsers, PaphosUsers, LimassolUsers, LarnacaUsers],
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderWidth: 2,
          },
        ],
      };
      return dataMonth;
    };
    return (
      <div className="container">
        <div className="info-block row h-100 justify-content-center align-content-center">
          {infoElements.map((val, index) => {
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
                    <i
                      className={`pi ${val.icon} p-overlay-badge`}
                      style={{ fontSize: "2.5rem" }}></i>
                    <Badge
                      className={val.notifications > 0 ? "" : "d-none"}
                      value={val.notifications}></Badge>
                  </div>
                  <p className="info-block-items">
                    {" "}
                    {val.item}
                    <span>{val.noOfItems}</span>
                  </p>
                  {/* <div className="social-media">
                  <Chip className={val.subNote?"":"d-none"} label={val.subNote} icon="pi pi-exclamation-circle" />
                </div> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="row mt-5 justify-content-center align-content-center">
          <div className="col-6 chartCard">
            <Chart type="bar" data={data} options={options} />
          </div>
          <div className="col-6 chartCard">
            <Chart type="bar" data={getDataMonth()} options={options} />
          </div>
        </div>
      </div>
    );
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
    //console.log(selectedMenuItem)
    switch (selectedMenuItem) {
      case "Home":
        return (
          // <div className="container h-100" id="homeLogo">
          //   <img src="../images/dalogo6.png" alt="Rotating Image" className="rotating-image" />
          // </div>
          <InfoBlock />
        );
      case "Projects":
        return <AdminProjects />;
      case "Services":
        return <div>Services</div>;
      case "Contacts":
        return <AdminContacts />;
      case "Users":
        return <div>Users</div>;
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
            <ScrollTop
              target="window"
              threshold={100}
              className="btn-secondary"
              icon="pi pi-arrow-up text-base"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminMainPage;
