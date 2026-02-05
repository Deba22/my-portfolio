import { useRouter } from 'next/router'
import NextLink from 'next/link'

function Footer() {
    const router = useRouter()
    return (
        <footer>
            <div className="container">
                {router.pathname == "/" ?
                    (<NextLink href="#" className="backToTop">
                        <svg className="svg-inline--fa fa-chevron-up fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                        </svg>
                    </NextLink>) :
                    null
                }
                <div className="footer-inner">
                    <div className="nav-info">
                        <img alt="logo" className="avatar" src="/LogoFooter.svg" height="50" width="50"  />
                        <span>
                            <h3>Debasish Gracias</h3>
                            <p>Umbraco Developer</p>
                        </span>
                    </div>
                    <span className="nav-social">
                        <a href="https://github.com/Deba22" rel="noreferrer" target="_blank" aria-label="Github">
                            <img src="/github.svg" alt="github" height="20" width="20" className="social-icons" />
                        </a>
                        <a href="https://www.linkedin.com/in/debasish-gracias-47456a136/" rel="noreferrer" target="_blank" aria-label="LinkedIn">
                            <img src="/linkedin.svg" alt="LinkedIn" height="20" width="20" className="social-icons" />
                        </a>
                        {/* <a href="https://www.instagram.com/deba_gracias/" rel="noreferrer" target="_blank" aria-label="Instagram">
                            <img src="/instagram.svg" alt="Instagram" height="20" width="20" className="social-icons" />
                        </a> */}
                        <a href="/rss.xml" rel="noreferrer" target="_blank" aria-label="RSS">
                            <img src="/rss.svg" alt="Instagram" height="20" width="20" className="social-icons" />
                        </a>
                    </span>
                   
                </div>
                <div className="footer-right">
                <span className="copyright">
                    Goa, India <br></br>
        debagracias@gmail.com <br></br>
        Copyright © 2026
        </span>
        <a className="anchor-link" href="/privacy-policy">
                    Privacy Policy
                        </a>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer
