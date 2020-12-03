import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


const SeedaProject = ({ data }) => {
    return (
        <Layout>
             <Helmet>
                <body className="seeda-project" />
            </Helmet>
            <div className="project-header">
                <Img fluid={data.seedaPostHeader.childImageSharp.fluid} alt="covid project home page" className="header" />
            </div>

            <div className="wrap-small title">
                <h1>SEEDA</h1>
                <h2>Re-imagining SEEDA's online identity</h2>
            </div>

            <div className="project-info">
                <div>
                    <h2>Context</h2>
                    <p>Course Project</p>
                </div>
                <div>
                    <h2>Timeline</h2>
                    <p>One month</p>
                </div>
                <div>
                    <h2>My roles</h2>
                    <p>Web design and development</p>
                </div>
                <div>
                    <h2>Tools</h2>
                    <p>HTML, CSS, JavaScript</p>
                </div>
            </div>
        </Layout>
    )
}


export default SeedaProject





export const query = graphql`
query {
    seedaPostHeader: file(relativePath: {eq: "seeda-post.png"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
  },
  sketch1: file(relativePath: {eq: "covid-sketch.png"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_withWebp
            }
    }
  },
  sketch2: file(relativePath: {eq: "covid-sketch2.png"}) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid_withWebp
            }
        }
    },
    viz1: file(relativePath: {eq: "viz1.png"}) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid_withWebp
            }
        }
    },
    viz2: file(relativePath: {eq: "viz2.png"}) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid_withWebp
            }
        }
    },
    viz3: file(relativePath: {eq: "viz3.png"}) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid_withWebp
            }
        }
    },
}
`