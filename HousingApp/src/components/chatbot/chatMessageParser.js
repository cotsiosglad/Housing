// in MessageParser.jsx

import React from 'react';

const MessageParser = ({ children, actions }) => {

    const parse = (message) => {
        const lowercasedMessage = message.toLowerCase();
        if (lowercasedMessage.includes('hello')) {
            actions.handleHello();
        }
        else if (lowercasedMessage.includes('service') || (lowercasedMessage.includes('υπηρε'))) {
            actions.handleServices();
        }
        else {
            // This is the default message for unrecognized input
            actions.handleDefault();
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;