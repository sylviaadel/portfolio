import Logo from '../assets/images/FrontendLogo.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href='#About'>About</a></li>
                <li><a href='#Projects'>Projects</a></li>
                <a href='#Hero'><img className='logo' alt="Frontend Logo" src={Logo} /></a>
                <li>Tech</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}