import ReactDom from "react-dom";

export default function TechnologiesModal({open, onClose}) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay"></div>
            <div id='TechnologiesModal' className="modal">
                <button type="button" class="close" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </>,
        document.getElementById('portal')
    );
}