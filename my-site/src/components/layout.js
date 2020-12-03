import React from 'react'
import { Helmet } from "react-helmet"
import Footer from "./footer"
import Header from "../components/header"




const Layout = (props) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" name="description" content="Pouria's personal website" />
                <title>Pouria Delfanazari</title>
                <html lang="en" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" as="font" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Literata:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" as="font" />                
            </Helmet>
            <Header />
            
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout