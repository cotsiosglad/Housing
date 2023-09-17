// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you. How can I help you today');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleDog = () => {
        const botMessage = createChatBotMessage(
            "Here's a nice dog picture for you!",
            {
                widget: 'dogPicture',
            }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleDefault = () => {
        const botMessage = createChatBotMessage(
            "I'm sorry, but I didn't quite understand your input. Please choose from the available options or ask your question in a different way. If you need assistance, feel free to ask, and I'll do my best to help!"
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleServices = () => {
        const botMessage = createChatBotMessage(
            "Αυτες ειναι οι υπηρεσίες μας : ",
            {
                widget: 'buttonCreation',
            }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }
    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleDog,
                        handleDefault,
                        handleServices,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;