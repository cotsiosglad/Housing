import React from "react";
import "../Options/Options.css";

const OptionRedirect = props => {
    const redirectFunction = (path) => {
        console.log(path)
        window.open(
            path,
            '_blank'
        )
    }
    return (
        <div className="options">
            <div className="options-container">
                {/* {props.options.map((option, index) => {
                    return (
                        <div
                            className="option-item"
                            onClick={redirectFunction(option.redirect)}
                            key={index}
                        >
                            {option.name}
                        </div>
                    );
                })} */}
                <button>Entaaksi</button>
            </div>
        </div>
    );
};

export default OptionRedirect;
