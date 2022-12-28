import { useEffect } from "react";
import ReactDom from "react-dom";
import closeIcon from './../assets/images/close.svg'

export default function ProjectsModal({open, onClose, project}) {

    useEffect(() => {
        if (open) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'unset';
    }, [open]);

    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay"></div>
            <div id='ProjectsModal' className="modal">
                <button type="button" className="close" onClick={onClose}>
                    <img src={closeIcon} alt="Cross Icon to close modal" />
                </button>
                <img src={`images/Projects/${project.image}`} alt={project.alt}/>
                <div>
                    <h2>{project.name}</h2>
                    <p>{project.desc}</p>
                    <ul className="tech-pills">
                        {project.technologies.map((tech) => (
                            <li>{tech.name}</li>
                        ))}
                    </ul>
                    <a href={project.appLink} rel="noreferrer" target="_blank" className="btn-primary">Visit Website/App</a>
                    <a href={project.gitLink} rel="noreferrer" target="_blank" className="btn-secondary">Git Repository</a>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}