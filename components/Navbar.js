import { Link } from 'react-scroll'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect } from 'react'
function Navbar() {
    useEffect(() => {
        const navToggle = document.querySelector('.nav-toggle');
        const mobileNav = document.querySelector('.navbar');
        navToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            navToggle.classList.toggle('open');
            // if (mobileNav.classList.contains('open')) {
            //     mobileNav.classList.remove('open');
            //     navToggle.classList.remove('open');
            // }
            // else {
            //     mobileNav.classList.add('open');
            //     navToggle.classList.add('open');
            // }
        });

    }, []);

    const handleLinkClick = (e) => {
        if (e.target.parentElement.parentElement.classList.contains('open')) {
            e.target.parentElement.parentElement.classList.remove('open');
        }
        if (e.target.parentElement.parentElement.previousSibling.classList.contains('open')) {
            e.target.parentElement.parentElement.previousSibling.classList.remove('open');
        }

    }
    const router = useRouter()
    return (
        <header id="navbar">
            <div className="container">
                <nav>
                    <div className="logo">
                        <Image alt="logo" className="avatar" src="/logo-head.svg" height="50" width="50" />
                    </div>
                    <span className="nav-toggle mobile"></span>
                    <div className="navbar">
                        {router.pathname == "/" ?
                            (
                                <div className="navbar-inner">
                                    <Link className="mob-nav-link" to="about" smooth={true} onClick={handleLinkClick}>About</Link>
                                    <Link className="mob-nav-link" to="work" smooth={true} onClick={handleLinkClick}>Work</Link>
                                    <NextLink href="/blogs"><a className="mob-nav-link" onClick={handleLinkClick}>Blogs</a></NextLink>
                                    <Link className="last mob-nav-link" to="contact" smooth={true} onClick={handleLinkClick}>Contact</Link>
                                </div>
                            ) : (
                                <div className="navbar-inner">
                                    <NextLink href="/"><a className="mob-nav-link" onClick={handleLinkClick}>About</a></NextLink>
                                    <NextLink href="/"><a className="mob-nav-link" onClick={handleLinkClick}>Work</a></NextLink>
                                    <NextLink href="/blogs"><a className="mob-nav-link" onClick={handleLinkClick}>Blogs</a></NextLink>
                                    <NextLink href="/"><a className="last mob-nav-link" onClick={handleLinkClick}>Contact</a></NextLink>
                                </div>
                            )}
                        <div className="nav-info mobile">
                            <img alt="logo-footer" className="avatar" src="/logo-footer.svg" height="50" width="50" />
                            <span>
                                <h3>Debasish Gracias</h3>
                                <p>Full Stack Developer</p>
                            </span>
                        </div>
                        <span className="nav-social mobile">
                            <a href="https://github.com/Deba22" rel="noreferrer" target="_blank" aria-label="Github">
                                <Image src="/github.svg" alt="github" height="20" width="20" className="social-icons" />
                            </a>
                            <a href="https://www.linkedin.com/in/debasish-gracias-47456a136/" rel="noreferrer" target="_blank" aria-label="LinkedIn">
                                <Image src="/linkedin.svg" alt="LinkedIn" height="20" width="20" className="social-icons" />
                            </a>
                            <a href="https://www.instagram.com/deba_gracias/" rel="noreferrer" target="_blank" aria-label="Instagram">
                                <Image src="/instagram.svg" alt="Instagram" height="20" width="20" className="social-icons" />
                            </a>
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
