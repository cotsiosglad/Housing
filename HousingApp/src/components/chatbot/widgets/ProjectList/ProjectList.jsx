import React from "react";
import { projects } from "../../../data/Data"
import Options from "../Options/Options";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import OptionRedirect from "../OptionRedirect/OptionRedirect";

const ProjectLists = props => {
    const Projectlists = projects.map((items, index) => (
        {
            name: items.title, // Use titleType from services as the name
            handler: props.actionProvider.handleProjectDetailslisted,
            redirect: `/projects/${items.id}`,
            id: index + 1,
        })

    );

    return <OptionRedirect options={Projectlists} {...props} />;
};

export default ProjectLists;
