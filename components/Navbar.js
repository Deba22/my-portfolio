import { Link } from 'react-scroll'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect } from 'react'
function Navbar() {
    useEffect(() => {
        const navToggle = document.querySelector('.nav-toggle');
        const mobileNav = document.querySelector('.navbar');
        const anchorLinks = document.getElementsByClassName('mob-nav-link');
        navToggle.addEventListener('click', () => {
          mobileNav.classList.toggle('open');
          navToggle.classList.toggle('open');
          document.querySelector('body').classList.toggle('scrollingdisabled');
        });
    },[]);
    const handleLinkClick = () => {
        console.log("11");
        if (mobileNav.classList.contains('open')) {
            console.log("22");
            mobileNav.classList.remove('open');
            navToggle.classList.remove('open');
            document.querySelector('body').classList.remove('scrollingdisabled');
        }
    }

    const router = useRouter()
    return (
        <header id="navbar">
            {router.pathname == "/" ?
                (
                    <div className="container">
                        <nav>
                            <div className="logo">
                                <Image alt="logo" className="avatar" src="/logo-head.svg" height="50" width="50" />
                            </div>
                            <span className="nav-toggle mobile"></span>
                            <div className="navbar">
                                <Link className="mob-nav-link" to="about" smooth={true} onClick={handleLinkClick}><span>About</span></Link>
                                <Link className="mob-nav-link" to="work" smooth={true} onClick={handleLinkClick}>Work</Link>
                                <NextLink href="/blogs"><a className="mob-nav-link" onClick={handleLinkClick}>Blogs</a></NextLink>
                                <Link className="last mob-nav-link" to="contact" smooth={true} onClick={handleLinkClick}>Contact</Link>
                            </div>
                        </nav>
                    </div>
                ) :
                (
                    <div className="container">
                        <nav>
                            <div className="logo">
                                <Image alt="logo" className="avatar" src="/logo-head.svg" height="50" width="50" />
                            </div>
                            <span className="nav-toggle mobile"></span>
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
