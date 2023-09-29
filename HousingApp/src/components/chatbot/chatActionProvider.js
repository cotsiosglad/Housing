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

    const handleOptions = (options) => {
        const botMessage = createChatBotMessage(
            "These are our services.",
            {
                widget: "options",
                loading: true,
                terminateLoading: true,
                ...options,
            }
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleServiceList = () => {
        const botMessage = createChatBotMessage(
            "These are our services",
            {
                widget: "serviceslist",
                loading: true,
                terminateLoading: true,

            }
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleServiceDetails = () => {
        const botMessage = createChatBotMessage(
            "Would you like to see more details on a specific service?",
            {
                widget: "serviceDetails",
                loading: true,
                terminateLoading: true,
            }
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }
    const handleProjectList = () => {
        const botMessage = createChatBotMessage(
            "Below are our projects\nClick on any of them to see more details:",
            {
                widget: "projectlists",
                loading: true,
                terminateLoading: true,

            }
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleProjectDetailslisted = () => {
        const botMessage = createChatBotMessage(
            "This project has :",
            {
                widget: "projectDetailslisted",
                loading: true,
                terminateLoading: true,
            }
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

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
                        handleDefault,
                        handleServices,
                        handleOptions,
                        handleServiceList,
                        handleProjectList,
                        handleProjectDetailslisted,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;