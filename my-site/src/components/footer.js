import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer>
      <p>Created by Pouria Delfanazari using Gatsby © 2020</p>      
      <p id="footer-link"><AniLink cover to="../style-guide" direction="top">Style Guide</AniLink></p>      
    </footer>
  )
}


export default Footer