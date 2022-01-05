import React from 'react'

//import Header from 'components/Header/Header'
import 'assets/Styles/Layout.scss'

const Layout = ({ children }) => {
    return (
        <div class="container">
                { children }   
        </div>
    )
}

export default Layout
