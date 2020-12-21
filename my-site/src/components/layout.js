import React from 'react'
import { Helmet } from "react-helmet"
import Footer from "./footer"
import Header from "../components/header"
import "fontsource-inter/300.css"
import "fontsource-inter/400.css"
import "fontsource-inter/500.css"
import "fontsource-inter/600.css"
import "fontsource-inter/700.css"
import "fontsource-inter/800.css"
import "fontsource-inter/900.css"



const Layout = (props) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" name="description" content="Pouria's personal website" />
                <title>Pouria Delfanazari</title>
                <html lang="en" />
            </Helmet>
            <Header />
            
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout