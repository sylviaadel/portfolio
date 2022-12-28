import { useEffect } from "react";
import ReactDom from "react-dom";
import closeIcon from './../assets/images/close.svg'

export default function TechnologiesModal({open, onClose, tech}) {
    
    useEffect(() => {
        if (open) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'unset';
    }, [open]);

    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div id='TechnologiesModal' className="modal">
                <button type="button" className="close" onClick={onClose}>
                    <img src={closeIcon} alt="Cross Icon to close modal" />
                </button>
                <img src={`images/Technologies/${tech.image}`} alt={tech.alt} />
                <div>
                    <h2>{tech.name}</h2>
                    <p>{tech.desc}</p>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}