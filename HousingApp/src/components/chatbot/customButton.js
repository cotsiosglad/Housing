import { React, useState } from 'react';
import { services, projects } from "../data/Data"
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from "react-router-dom";
import "./chatBot.css"

const CustomButton = (props) => {
    const [selectedOption, setSelectedOption] = useState('');
    const data = ["Services", "Projects", "Contact Us"];

    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
    };

    const renderMessage = () => {
        if (selectedOption === "Services") {
            return (
                <>
                    <p>Here are our services: </p>
                    {services.map((items, index) => (
                        <div className='col-md-4' key={index}>
                            <li><Link to="/services">{items.titleType}</Link></li>

                        </div>
                    ))}
                    <br></br>
                </>
            );
        } else if (selectedOption === "Projects") {
            return (
                <>
                    <p>Below are our projects</p>
                    {projects.map((items, index) => (
                        <div className='col-md-4' key={index}>
                            <Link to={`/projects/${items.id}`}><h4>{items.title}</h4></Link>
                            <p>Available 3</p>
                        </div>
                    ))}

                    {/* <Link to="/projects">
                        <button>Projects Page</button>
                    </Link> */}
                </>);
        } else if (selectedOption === "Contact Us")
            return (
                <>
                    <br></br>
                    <p> Visit our <a href='https://www.facebook.com/domusalbaltd/'>Facebook page</a></p>
                    <Link to="/contact">
                        <button>Contact Page</button>
                    </Link>
                </>
            );
    };
    return (
        <>
            <div className='boxEdit'>
                <p>What we offer</p>
                <select className="custom-select sources" value={selectedOption} onChange={handleOptionChange} id="OurServices">
                    <option value="">--Please choose an option--</option>
                    {data.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>

                {renderMessage()}
            </div>
        </>

    );
};

export default CustomButton;