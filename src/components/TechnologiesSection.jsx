import technology from './../models/TechnologyItems.json'

export default function Technologies() {
    const knownTechnologyItems = technology.knownTech.map((technology) => (
        <li key={technology.id} className="technology-item">
            <img src={`images/technologies/${technology.image}`} alt={technology.alt} />
            <h3>{technology.name}</h3>
        </li>
    ));
    const newTechnologyItems = technology.newTech.map((technology) => (
        <li key={technology.id} className="technology-item">
            <img src={`images/technologies/${technology.image}`} alt={technology.alt} />
            <h3>{technology.name}</h3>
        </li>
    ));
    return(
        <section id='Technologies'>
            <h1>Technologies</h1>
            <p>Here are the technologies that I have expert experience in.</p>
            <ul>
                {knownTechnologyItems}
            </ul>
            <p>And here are the technologies that I am still learning in Novare.</p>
            <ul className="technologies-container">
                {newTechnologyItems}
            </ul>
        </section>
    );
}