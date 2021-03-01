import Link from 'next/link'

function Navbar() {
    return (
        <header>
            <div className="container">
                <nav>
                <div className="logo">
                </div>
                <Link href="/"><a>About</a></Link>
                <Link href="/"><a>Work</a></Link>
                <Link href="/blogs"><a>Blogs</a></Link>
                <Link href="/"><a className="last">Contact</a></Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
