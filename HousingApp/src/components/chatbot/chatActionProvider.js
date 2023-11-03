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
            "Αυτές είναι οι υπηρεσίες μας",
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
            "Αυτές είναι οι υπηρεσίες μας",
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

    const handleContactUs = () => {
        const botMessage = createChatBotMessage(
            "Εάν θέλετε να επικοινωνήσετε μαζί μας, κάντε κλικ στους σύνδεσμους παρακάτω:",
            {
                widget: "contactUs",
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
            "Παρακάτω βρίσκονται τα έργα μας.\nΚάντε κλικ σε οποιοδήποτε από αυτά για να δείτε περισσότερες λεπτομέρειες.",
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
                        handleContactUs,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;