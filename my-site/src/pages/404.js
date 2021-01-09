import React from "react"
import Layout from '../components/layout'
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"





const NotFound = ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <body className="notFound" />
            </Helmet>

            <div>   
              <h1> 😮</h1>           
                <h1>There's nothing here. <br /> You should try <br />  <AniLink cover to="../" bg="#120F14" direction="top">going back home.</AniLink></h1>
                <Img fluid={data.notFound.childImageSharp.fluid} alt="Evening Landscape with Two Men by Caspar David Friedrich" />                                
            </div>

        </Layout>
    )
}


export default NotFound





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