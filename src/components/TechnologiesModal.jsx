import ReactDom from "react-dom";
import closeIcon from './../assets/images/close.svg'
import todoImage from './../assets/images/todoImage.png'

export default function TechnologiesModal({open, onClose}) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay"></div>
            <div id='TechnologiesModal' className="modal">
                <button type="button" className="close" onClick={onClose}>
                    <img src={closeIcon} alt="Cross Icon to close modal" />
                </button>
                <img  src={todoImage} alt="React Logo" />
                <h2>React</h2>
                <p>I used this technology in many projects, I was responsible for building the app from scratch using react and adding the components and linking them together along with adding the styles needed.</p>
            </div>
        </>,
        document.getElementById('portal')
    );
}