import { useState } from 'react'
import project from './../models/ProjectItems.json';
import ProjectsModal from './ProjectsModal'

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalProject, setModalProject] = useState({});

    function initModal(project){
        if (project.isDone === true){
            setIsOpen(true);
            setModalProject(project);
        }
        else{
            return null
        }
    }

    const projectItems = project.map((project) => (
        <li key={project.id} className="project-item" onClick={() => initModal(project)}>
            <img src={'../images/Projects/' + project.image} alt={project.alt} />
            <div className={project.isDone ? 'coming-soon-div hide' : "coming-soon-div"}>
                <label>Coming Soon</label>
            </div>
            <h3>{project.name}</h3>
        </li>
    ));
    return(
        <>
            <section id='Projects'>
                <h2>Projects</h2>
                <p>Here are the projects I have done and those I will be working on i Novare Potential.</p>
                <ul className="projects-container">
                    {projectItems}
                </ul>
            </section>
            <ProjectsModal project={modalProject} open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}