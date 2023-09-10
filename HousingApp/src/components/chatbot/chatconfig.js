// in config.js
import { createChatBotMessage, createCustomMessage, } from 'react-chatbot-kit';
import DogPicture from './DogPicture.jsx'
import CustomMessage from './customMessage.js';
const botName = 'Domus Alba';

const config = {
    initialMessages: [
        createChatBotMessage(`Welcome to ${botName}`),
        createChatBotMessage(
            "Below are your options re kopellui.",
            {
                withAvatar: true,
                delay: 500,
            }
        ),
        createCustomMessage('Test', 'custom'),
    ],
    widgets: [
        {
            widgetName: 'dogPicture',
            widgetFunc: (props) => <DogPicture {...props} />,
        },
    ],
    botName: botName,
    customMessages: {
        custom: (props) => <CustomMessage {...props} />,
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