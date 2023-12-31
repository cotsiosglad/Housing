import React from "react";
import { projects } from "../../../data/Data"
import OptionRedirect from "../OptionRedirect/OptionRedirect";

const ProjectDetailsListed = props => {
    const Projectlists = projects.map((items, index) => (
        {
            name: items.title, // Use titleType from services as the name
            redirect: `/projects/${items.id}`,
            id: index + 1,
        })

    );

    return <OptionRedirect options={Projectlists} {...props} />;
};

export default ProjectDetailsListed;