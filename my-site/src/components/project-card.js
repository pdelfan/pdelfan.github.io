import React from "react"
import projectStyles from "../components/project-card.scss"


const ProjectCard = (props) => {
    return (
        <div className={projectStyles} class="project-card">
            {props.children}
        </div>
    )
}

export default ProjectCard