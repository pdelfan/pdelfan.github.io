import React from 'react'
import Footer from '../components/footer'
import { motion } from "framer-motion"


const Layout = (props) => {
    return (

        <motion.div initial="pageInitial" animate="pageAnimate" variants= {{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity: 1
            },
        }} >
            <body>
        <div>
            {props.children}            
            <Footer />
        </div>
        </body>
        </motion.div>
    )
}


export default Layout