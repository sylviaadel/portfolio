import ReactDom from "react-dom";
import todoImage from './../assets/images/todoImage.png'
import closeIcon from './../assets/images/close.svg'

export default function ProjectsModal({open, onClose}) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay"></div>
            <div id='ProjectsModal' className="modal">
                <button type="button" class="close" onClick={onClose}>
                    <img src={closeIcon} alt="Cross Icon to close modal" />
                </button>
                <img src={todoImage} alt="A girl with shopping bags getting out of a store." />
                <h2>Todo List</h2>
                <p>In this project you will be able to create a todo list with all the furniture you want to buy. 
                    You will be asked to add item name and item price which will be added in a list where you can mark it as done if completed.</p>
                <ul className="tech-pills">
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>React</li>
                </ul>
                <a href="https://github.com/sylviaadel/ekia-shopping-list.git" target="_blank" className="btn-primary">Visit Website/App</a>
                <a href="https://ekia-shopping-list.vercel.app/" target="_blank" className="btn-secondary">Git Repository</a>
            </div>
        </>,
        document.getElementById('portal')
    );
}