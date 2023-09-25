import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

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
    actionProvider.handleOptions();
    toggleDisplaySelector((prevState) => !prevState);
  };

  if (!airports) return null;

  const createAirportOptions = () => {
    return airports.map((item) => {
      return (
        <option key={item.iata} value={item.iata}>
          {item.nameCompact}
        </option>
      );
    });
  };

  return (
    <div className="airport-selector-container">
      <ConditionallyRender
        ifTrue={displaySelector}
        show={
          <>
            {" "}
            <select
              className="airport-selector"
              value={selectedAirport.iata}
              onChange={handleSubmit}
            >
              {createAirportOptions()}
            </select>
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
