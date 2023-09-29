import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";
import { services, projects } from "../../../data/Data"
import "./AirportSelector.css";

const AirportSelector = ({ selectedAirport, setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [airports, setAirports] = useState([]);

  const airportOptions = [
    {
      iata: "SVC",
      nameCompact: "Services",
    },
    {
      iata: "PROJ",
      nameCompact: "Projects",
    },
    {
      iata: "CY",
      nameCompact: "Contact Us",
    },
  ];

  useEffect(() => {
    setAirports(airportOptions);
  }, []);

  const handleSubmit = (e) => {
    setState((state) => ({
      ...state,
      selectedAirport: airports.find(
        (airport) => airport.iata === e.target.value
      ),
    }));
  };

  const handleConfirm = () => {

    toggleDisplaySelector(false);

    if (selectedAirport && selectedAirport.nameCompact === "Services") {
      actionProvider.handleOptions();
    } else if (selectedAirport && selectedAirport.nameCompact === "Projects") {
      // setConfirmationMessage("Hello Projects");
    } else if (selectedAirport && selectedAirport.nameCompact === "Contact Us") {
      //
    }
  };

  if (!airports) return null;

  const createAirportOptions = () => {
    return services.map((item) => {
      return (
        <button onClick={handleConfirm}>
          {item.titleType}
        </button>
      );
    });
  };

  return (
    <div className="airport-selector-container">
      <ConditionallyRender
        ifTrue={displaySelector}
        show={
          // <>
          //   {" "}
          //   <select
          //     className="airport-selector"
          //     value={selectedAirport.iata}
          //     onChange={handleSubmit}
          //   >
          //     {createAirportOptions()}
          //   </select>
          //   <button className="airport-button-confirm" onClick={handleConfirm}>
          //     Confirm
          //   </button>
          // </>
          <>
            {createAirportOptions()}
            <button className="airport-button-confirm" onClick={handleConfirm}>
              Confirm
            </button>
          </>
        }
        elseShow={
          <>
            <p>
              Great! You have chosen : {selectedAirport.nameCompact}
            </p>
          </>
        }
      />
    </div>
  );
};

export default AirportSelector;
