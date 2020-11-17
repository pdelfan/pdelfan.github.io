import React from 'react'
import { graphql } from "gatsby"


export const coverImage = graphql`
  fragment coverImage on File {
    childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }      
    }
  }
`