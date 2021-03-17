import {Link} from 'react-scroll'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

function Navbar() {
    const router = useRouter()
    return (
        <header id="navbar">
            {router.pathname=="/"?
            (
            <div className="container">
                <nav>
                <div className="logo">
                <Image alt="logo" className="avatar" src="/logo-head.svg" height="50" width="50" />
                </div>
                <Link to="about" smooth={true}>About</Link>
                <Link  to="work" smooth={true}>Work</Link>
                <NextLink href="/blogs">Blogs</NextLink>
                <Link className="last" to="contact" smooth={true}>Contact</Link> 
                </nav>
            </div>
            ):
            (
                <div className="container">
                <nav>
                <div className="logo">
                <Image alt="logo" className="avatar" src="/logo-head.svg" height="50" width="50" />
                </div>
                <NextLink href="/">About</NextLink>
                <NextLink href="/">Work</NextLink>
                <NextLink href="/blogs">Blogs</NextLink>
                <NextLink href="/"><a className="last">Contact</a></NextLink>
                </nav>
            </div>
            )}
        </header>
    )
}

export default Navbar
