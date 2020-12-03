import React from "react"
import Layout from '../components/layout'
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'





const StyleGuide = ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <body className="style-guide" />
            </Helmet>

            <div>
                <h1>Style Guide</h1>
                <Img fluid={data.notFound.childImageSharp.fluid} alt="Evening Landscape with Two Men by Caspar David Friedrich" />                
            </div>

        </Layout>
    )
}


export default StyleGuide





export const query = graphql`
query {
  notFound: file(relativePath: {eq: "not-found.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`