import React from "react";
import "../Options/Options.css";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

const OptionRedirect = props => {
    // const redirectFunction = (path) => {
    //     console.log(path)
    //     window.open(
    //         path,
    //         '_blank'
    //     )
    // }
    return (
        <div className="options">
            <div className="options-container">
                {props.options.map((option, index) => {
                    return (
                        <Link to={option.redirect} key={index} target="_blank" rel="noopener noreferrer">
                            <div
                                className="option-item"
                            //onClick={redirectFunction(option.redirect)}
                            >
                                {option.name}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default OptionRedirect;
