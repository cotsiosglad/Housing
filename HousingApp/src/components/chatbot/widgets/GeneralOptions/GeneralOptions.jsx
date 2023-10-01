import React from "react";
import { services, projects } from "../../../data/Data"
import Options from "../Options/Options";
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const chatbotItems = [
  {
    name: "Services",
    handler: "handleServiceList",
  },
  {
    name: "Projects",
    handler: "handleProjectList"
  }
]
const GeneralOptions = props => {

  const servicesOptions = chatbotItems.map((items, index) => (
    {
      name: items.name, // Use titleType from services as the name
      handler: props.actionProvider[items.handler],
      id: index + 1,
    }));

  //     <div className='col-md-4' key={index}>
  //       <li><Link to="/services">{items.titleType}</Link></li>

  //     </div>
  //   ))
  // }
  // const options = [
  //   {
  //     name: "flights",
  //     handler: props.actionProvider.handleFlightsChoice,
  //     id: 1
  //   },
  //   {
  //     name: "baggage",
  //     handler: props.actionProvider.handleLostLuggage,
  //     id: 2
  //   },
  //   {
  //     name: "parking",
  //     handler: props.actionProvider.handleParkingOptions,
  //     id: 3
  //   },
  //   {
  //     name: "switch airport",
  //     handler: props.actionProvider.handleAirport,
  //     id: 5
  //   }
  // ];
  return <Options options={servicesOptions} {...props} />;
};

export default GeneralOptions;
