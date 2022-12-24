import { useState } from 'react'
import technology from './../models/TechnologyItems.json'
import TechnologiesModal from './TechnologiesModal'

export default function Technologies() {
    const [isOpen, setIsOpen] = useState(false);

    const knownTechnologyItems = technology.knownTech.map((technology) => (
        <li key={technology.id} className="technology-item" onClick={() => setIsOpen(true)}>
            <img src={`images/technologies/${technology.image}`} alt={technology.alt} />
            <h3>{technology.name}</h3>
        </li>
    ));
    const newTechnologyItems = technology.newTech.map((technology) => (
        <li key={technology.id} className="technology-item" onClick={() => setIsOpen(true)}>
            <img src={`images/technologies/${technology.image}`} alt={technology.alt} />
            <h3>{technology.name}</h3>
        </li>
    ));
    return(
        <>
            <section id='Technologies'>
                <h2>Technologies</h2>
                <p>Here are the technologies that I have expert experience in.</p>
                <ul>
                    {knownTechnologyItems}
                </ul>
                <p>And here are the technologies that I am still learning in Novare.</p>
                <ul className="technologies-container">
                    {newTechnologyItems}
                </ul>
            </section>
            <TechnologiesModal open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}