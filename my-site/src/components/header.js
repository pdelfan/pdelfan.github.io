import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <AniLink cover to="../../../" bg="#B1EBB7" direction="down">
            {" "}
            <img src="../icon.png" alt="site icon" width="35" height="35"/>
          </AniLink>
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
