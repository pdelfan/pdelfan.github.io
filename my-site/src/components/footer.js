import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer>
      <p id="footer-link"><AniLink cover to="../" direction="down">Created by Pouria Delfanazari using Gatsby © 2020 </AniLink> </p>      
      <p id="footer-link"><AniLink cover to="../style-guide" direction="top">Style Guide</AniLink></p>      
      <p id="footer-link"><a href="https://github.com/pdelfan/pdelfan.github.io/tree/main">GitHub Repository</a></p>
    </footer>
  )
}


export default Footer