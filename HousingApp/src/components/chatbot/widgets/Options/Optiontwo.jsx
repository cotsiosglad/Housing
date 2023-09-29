import React from "react";

import "./Options.css";

const OptionsTwo = props => {
    return (
        <div className="options">
            {/* <h1 className="options-header">{props.title}</h1> */}
            <div className="options-container">
                {props.options.map(option => {
                    return (
                        <div
                            className="option-item"
                            onClick={option.handler}
                            key={option.id}
                        >
                            {option.availability}
                            {option.status}
                            {/* {option.title}
                            {option.location}
                            {option.region}
                            {option.floors}
                            {option.bedrooms}
                            {option.bathrooms}
                            {option.type}
                            {option.apartments} */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OptionsTwo;