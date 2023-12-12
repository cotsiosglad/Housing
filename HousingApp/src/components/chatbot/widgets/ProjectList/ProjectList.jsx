import { React, useState, useEffect } from "react";
import { projects } from "../../../data/Data"
import Options from "../Options/Options";
import OptionRedirect from "../OptionRedirect/OptionRedirect";
import { GetAllDocs } from "../../../../firebase";

const ProjectLists = props => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        //add firebase api here
        //ProductService.getProducts().then((data) => setProjects(data));
        //var aa = GetDocByRefId("Projects", "Jt2Prr7DhQb5NmosVi0n").then((data) => console.log(data));
        async function fetchData() {
            try {
                const data = await GetAllDocs("Projects");
                const sortedProjects = data.map((m) => m.data).sort((a, b) => a.sortNumber - b.sortNumber);
                setProjects(sortedProjects);
            } catch (error) {
                // Handle errors here
                console.error("Error fetching projects:", error);
            }
        }
        fetchData();
    }, []);


    const Projectlists = projects.map((items, index) => (
        {
            name: items.title, // Use titleType from services as the name
            handler: props.actionProvider.handleProjectDetailslisted,
            redirect: `/projects/${items.refName}`,
            id: index + 1,
        })

    );

    return <OptionRedirect options={Projectlists} {...props} />;
};

export default ProjectLists;
