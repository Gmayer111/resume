import React from 'react'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import 'assets/Styles/Layout.scss'

const Layout = ({ children }) => {
    return (
        <div class="container">
            <Header />
                { children }   
            <Footer />
        </div>
    )
}

export default Layout
