import React from 'react'
import Footer from './Footer'
import Meta from './Meta'
import Navbar from './Navbar'

function Layout({ children }) {
    return (
        <>
            <Meta/>
            <div className="content">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
