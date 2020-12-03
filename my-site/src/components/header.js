import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-left">
                    <AniLink cover to="../" bg="#120f14" direction="down">Pouria Delfan</AniLink>
                </div>
                <div className="nav-right">
                    <a href="mailto:pdelfana@sfu.ca">Contact</a>
                    <a href="https://github.com/pdelfan">GitHub</a>
                </div>
            </nav>
        </header>

    )
}


export default Header