import project from './../models/ProjectItems.json'

export default function Projects() {
    const projectItems = project.map((project) => (
        <li key={project.id} className="project-item">
            <img src={`images/projects/${project.image}`} alt={project.alt} />
            <div className={project.isDone ? 'coming-soon-div hide' : "coming-soon-div"}>
                <label>Coming Soon</label>
            </div>
            <h3>{project.name}</h3>
        </li>
    ));
    return(
        <section id='Projects'>
            <h2>Projects</h2>
            <p>Here are the projects I have done and those I will be working on i Novare Potential.</p>
            <ul className="projects-container">
                {projectItems}
            </ul>
        </section>
    );
}