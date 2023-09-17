import { React, useState } from 'react';
import { services, projects } from "../data/Data"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
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
                        <div className='service-box col-md-4' key={index}>
                            {items.title}
                        </div>
                    ))}
                    <br></br>
                    <Link to="/services">
                        <button>Services Page</button>
                    </Link>
                </>
            );
        } else if (selectedOption === "Projects") {
            return (
                <>
                    <p>Below are our projects</p>
                    {projects.map((items, index) => (
                        <div className='service-box col-md-4' key={index}>
                            <h4>{items.title}</h4>
                        </div>
                    ))}
                    <Link to="/projects">
                        <button>Projects Page</button>
                    </Link>
                </>);
        } else if (selectedOption === "Contact Us")
            return (
                <>
                    <br></br>
                    <p> Visit our <a href='https://www.facebook.com/domusalbacy/'>Facebook page</a></p>
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