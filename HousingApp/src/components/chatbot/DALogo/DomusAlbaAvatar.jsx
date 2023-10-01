import React from "react";

import { ReactComponent as Logo } from "../icons/favicon.svg";

const FlightBotAvatar = () => {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
            <div className="react-chatbot-kit-chat-bot-avatar-container">
                <Logo className="react-chatbot-kit-chat-bot-avatar-icon" />
            </div>
        </div>
    );
};

export default FlightBotAvatar;
