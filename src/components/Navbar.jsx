import Logo from '../assets/images/FrontendLogo.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>About</li>
                <li>Projects</li>
                <img className='logo' src={Logo} />
                <li>Tech</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}