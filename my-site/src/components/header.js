import React from "react"
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-left">
                    <Link to="../">Pouria Delfan</Link>
                    </div>
                <div className="nav-right">
                    <Link to="/seeda">About</Link>
                    <a href="https://github.com/pdelfan">GitHub</a>
                </div>
            </nav>
        </header>

    )
}


export default Header