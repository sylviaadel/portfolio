import { useState } from 'react'
import technology from './../models/TechnologyItems.json'
import TechnologiesModal from './TechnologiesModal'

export default function Technologies() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalTech, setModalTech] = useState({});

    function initModal(tech){
        setIsOpen(true);
        setModalTech(tech);
    }

    const knownTechnologyItems = technology.knownTech.map((technology) => (
        <li key={technology.id} className="technology-item" onClick={() => initModal(technology)}>
            <img src={`images/Technologies/${technology.image}`} alt={technology.alt} />
            <h3>{technology.name}</h3>
        </li>
    ));
    const newTechnologyItems = technology.newTech.map((technology) => (
        <li key={technology.id} className="technology-item" onClick={() => initModal(technology)}>
            <img src={`images/Technologies/${technology.image}`} alt={technology.alt} />
            <h3>{technology.name}</h3>
        </li>
    ));
    return(
        <>
            <section id='Technologies'>
                <div>
                    <h2>Technologies</h2>
                    <p>Here are the technologies that I have expert experience in.</p>
                    <ul>
                        {knownTechnologyItems}
                    </ul>
                </div>
                <div>
                    <p>And here are the technologies that I am still learning in Novare.</p>
                    <ul className="technologies-container">
                        {newTechnologyItems}
                    </ul>
                </div>
            </section>
            <TechnologiesModal tech={modalTech} open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}