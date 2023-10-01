import React from "react";
import { services } from "../../../data/Data"
import OptionRedirect from "../OptionRedirect/OptionRedirect";

const ServiceList = props => {
    const ServicesList = services.map((items, index) => (
        {
            name: items.titleType, // Use titleType from services as the name
            // handler: props.actionProvider.handleServicesListed,
            redirect: `/services`,
            id: index + 1,
        })

    );

    return <OptionRedirect options={ServicesList} {...props} />;
};

export default ServiceList;