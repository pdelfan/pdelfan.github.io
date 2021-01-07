import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <AniLink cover to="../../../" bg="#B1EBB7" direction="down">
            {" "}
            <img src="../icon.webp" alt="site icon" width="35" height="35"/>
          </AniLink>
        </div>
        <div className="nav-right">
          <a href="/resume.pdf">Resume</a>
          <a href="https://github.com/pdelfan">GitHub</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
