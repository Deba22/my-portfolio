import {Link} from 'react-scroll'

function Navbar() {
    return (
        <header id="navbar">
            <div className="container">
                <nav>
                <div className="logo">
                </div>
                <Link to="about" smooth={true}><a href="">About</a></Link>
                <Link  to="work" smooth={true}><a href="">Work</a></Link>
                <Link to="contact" smooth={true}><a href="">Blogs</a></Link>
                <Link to="contact" smooth={true}><a className="last" href="">Contact</a></Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
