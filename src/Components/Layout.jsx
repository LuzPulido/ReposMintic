import React from 'react'
import Footer from "Components/Footer.jsx";
import Header from "Components/Header.jsx";

const Layout = ({children}) => {
    return (
        <div className = "mainContainer">
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
