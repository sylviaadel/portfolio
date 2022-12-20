import project from './../ProjectItems.json'

export default function Projects() {
    const projectItems = project.map((project) => (
        <li key={project.id} className="project-item">
            <img src={project.image} alt={project.alt} />
            <div className="coming-soon-div">
                <label>Coming Soon</label>
            </div>
            <h3>{project.name}</h3>
        </li>
    ));
    return(
        <section id='Projects'>
            <h1>Projects</h1>
            <p>Here are the projects I have done and those I will be working on i Novare Potential.</p>
            <ul className="projects-container">
                {projectItems}
            </ul>
        </section>
    );
}