import envelopIcon from './../assets/images/envolop-icon.svg';
import phoneIcon from './../assets/images/phone-icon.svg';
import markerIcon from './../assets/images/marker-icon.svg';
import instagramIcon from './../assets/images/instagram-icon.svg';
import linkedInIcon from './../assets/images/linkedin-icon.svg';
import githubIcon from './../assets/images/github-icon.svg';
export default function Contact() {
    return (
        <section id='Contact'>
            <div>
                <h2>Contact</h2>
                <p>Here is my contact information if you want to get in contact with me,  I will really be so glad to hear from you.</p>
            </div>
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
            <footer>
                <ul>
                    <li><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/sylvia-tadross-710b9597'><img src={linkedInIcon} alt="Linkedin Icon to link to Linkedin profile." /></a></li>
                    <li><a target='_blank' rel="noreferrer" href='https://www.instagram.com/sylvia.adel.50/'><img src={instagramIcon} alt="Instagram Icon to link to instagram account." /></a></li>
                    <li><a target='_blank' rel="noreferrer" href='https://github.com/sylviaadel'><img src={githubIcon} alt="Github Icon to link to github account." /></a></li>
                </ul>
                <small>© 2021 • Sylvia Tadross</small>
            </footer>
        </section>
    );
}