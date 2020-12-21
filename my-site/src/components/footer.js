import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer>
      <p id="footer-link"><AniLink cover to="../" direction="down">Created by Pouria using Gatsby © 2020 </AniLink> </p>      
    </footer>
  )
}


export default Footer