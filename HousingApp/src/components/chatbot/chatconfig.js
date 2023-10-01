import { createChatBotMessage, createCustomMessage, } from 'react-chatbot-kit';
// import DogPicture from './DogPicture.jsx'
// import CustomMessage from './customMessage.js';
import CustomButton from './customButton.js';
import DomusAlbaLogo from "./DALogo/DomusAlbaAvatar.jsx";
// import AirportSelector from "./AirportSelector.jsx";
import AirportSelector from "./widgets/AirportSelector/AirportSelector";
import GeneralOptions from "./widgets/GeneralOptions/GeneralOptions";
import ProjectLists from './widgets/ProjectList/ProjectList.jsx';
import ServiceList from './widgets/ServiceList/ServiceList.jsx';
import ProjectDetailsListed from './widgets/ProjectDetails/ProjectDetailsListed.jsx';
const botName = 'Domus Alba';
const config = {
    initialMessages: [
        createChatBotMessage(`Welcome to ${botName}`),
        createChatBotMessage(
            "What can I help you with today.",
            {
                // widget: "Selector",
                withAvatar: true,
                delay: 500,
            }
        ),
        // createCustomMessage('These are our services', 'custom'),
        createChatBotMessage(
            "First things first, what do you want to check?",
            {
                widget: "options",
                withAvatar: true,
                delay: 500,
            }
        ),
    ],
    state: {
        airports: [],
        selectedAirport: { iata: "SVC", nameCompact: "Services" },
        flightType: "",
        selectedFlightId: "",
        selectedFlight: null,
    },
    widgets: [
        // {
        //     widgetName: 'services',
        //     widgetFunc: (props) => <CustomMessage {...props} />,
        // }
        // ,
        {
            widgetName: 'buttonCreation',
            widgetFunc: (props) => <CustomButton {...props} />,

        },
        {
            widgetName: "airportSelector",
            widgetFunc: (props) => <AirportSelector {...props} />,
            mapStateToProps: ["messages", "selectedAirport", "airports"],
        },
        {
            widgetName: "options",
            widgetFunc: (props) => <GeneralOptions {...props} />,
        },
        {
            widgetName: "projectlists",
            widgetFunc: (props) => <ProjectLists {...props} />,
        },
        {
            widgetName: "projectDetailslisted",
            widgetFunc: (props) => <ProjectDetailsListed {...props} />,
        },
        {
            widgetName: "serviceslist",
            widgetFunc: (props) => <ServiceList {...props} />,
        },
        // {
        //     widgetName: 'Selector',
        //     widgetFunc: (props) => <AirportSelector {...props}></AirportSelector>,
        //     mapStateToProps: ["messages", "selectedAirport", "airports"],
        // }
    ],
    botName: botName,
    customComponents: {
        botAvatar: (props) => <DomusAlbaLogo {...props} />,
    },
    customMessages: {
        custom: (props) => <CustomButton {...props} />,
    },
    customStyles: {
        botMessageBox: {
            backgroundColor: '#rgb(30 116 147)',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
};

export default config;