import {Link} from 'react-scroll'

function Navbar() {
    return (
        <header id="navbar">
            <div className="container">
                <nav>
                <div className="logo">
                </div>
                <Link to="about" smooth={true}>About</Link>
                <Link  to="work" smooth={true}>Work</Link>
                <Link to="contact" smooth={true}>Blogs</Link>
                <Link className="last" to="contact" smooth={true}>Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
