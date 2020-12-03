import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-left">
                    <AniLink cover to="../" bg="#1B171F" direction="top" >Pouria Delfan</AniLink>
                    </div>
                <div className="nav-right">
                    <AniLink cover to="/seeda">About</AniLink>
                    <a href="https://github.com/pdelfan">GitHub</a>
                </div>
            </nav>
        </header>

    )
}


export default Header