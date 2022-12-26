import Logo from '../assets/images/FrontendLogo.svg'

window.addEventListener("hashchange", () => window.history.pushState({}, "", '/'), {});

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href='#About'>About</a></li>
                <li><a href='#Projects'>Projects</a></li>
                <a href='#Hero'><img className='logo' alt="Frontend Pink Logo with wheat border." src={Logo} /></a>
                <li><a href='#Technologies'>Tech</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>
        </nav>
    );
}