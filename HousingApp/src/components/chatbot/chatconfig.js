// in config.js
import { createChatBotMessage, createCustomMessage, } from 'react-chatbot-kit';
// import DogPicture from './DogPicture.jsx'
// import CustomMessage from './customMessage.js';
import CustomButton from './customButton.js';

const botName = 'Domus Alba';
const config = {
    initialMessages: [
        createChatBotMessage(`Welcome to ${botName}`),
        createChatBotMessage(
            "What can I help you with today.",
            {
                withAvatar: true,
                delay: 500,
            }
        ),
        createCustomMessage('These are our services', 'custom'),
    ],
    widgets: [
        // {
        //     widgetName: 'services',
        //     widgetFunc: (props) => <CustomMessage {...props} />,
        // }
        // ,
        {
            widgetName: 'buttonCreation',
            widgetFunc: (props) => <CustomButton {...props} />,

        }
    ],
    botName: botName,
    customMessages: {
        custom: (props) => <CustomButton {...props} />,
    },
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
};

export default config;