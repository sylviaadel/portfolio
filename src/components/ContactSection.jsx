import envelopIcon from './../assets/images/envolop-icon.svg';
import phoneIcon from './../assets/images/phone-icon.svg';
import markerIcon from './../assets/images/marker-icon.svg'
export default function Contact() {
    return (
        <section id='Contact'>
            <h2>Contact</h2>
            <p>Here is my contact information if you want to get in contact with me,  I will really be so glad to hear from you.</p>
            <ul>
                <li>
                    <a href="mailto:sylvia.adel.emil@gmail.com">
                        <span><img src={envelopIcon} alt="Envelop Icon symbols for mail" /> </span>
                        <label>sylvia.adel.emil@gmail.com</label>
                    </a>
                </li>
                <li>
                    <a href='tel:+46 72 123 4567'>
                        <span><img src={phoneIcon} alt="Phone Icon symbols for telephone number" /> </span>
                        <label>+46 72 123 4567</label>
                    </a>
                </li>
                <li>
                    <span><img src={markerIcon} alt="Marker Icon symbols for Location" /> </span>
                    <label>Stockholm, Sweden</label>
                </li>
            </ul>
        </section>
    );
}