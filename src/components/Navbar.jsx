import Logo from '../assets/images/FrontendLogo.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>About</li>
                <li>Projects</li>
                <a href='#Hero'><img className='logo' alt="Frontend Logo" src={Logo} /></a>
                <li>Tech</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}