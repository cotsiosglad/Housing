import React from "react";
import { services } from "../../../data/Data"
import Options from "../Options/Options";

const ServiceList = props => {
    const ServicesList = services.map((items, index) => (
        {
            name: items.titleType, // Use titleType from services as the name
            handler: props.actionProvider.handleServicesListed,
            id: index + 1,
        })

    );

    return <Options options={ServicesList} {...props} />;
};

export default ServiceList;