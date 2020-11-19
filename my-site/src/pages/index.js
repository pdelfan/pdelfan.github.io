import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const Home = ({ data }) => {
  return (
    <Layout>
      <h1>I design and code products on the web.</h1>
      <h2>I also do other things</h2>

      <div className="project-card">
        <Link to="/seeda">
          <Img fluid={data.seedaProjectCard.childImageSharp.fluid} alt="seeda project card" />
          <h3>SEEDA</h3>
          <h4>Re-imagining SEEDA's online identity</h4>
          <h5>Branding, web design and development</h5>
        </Link>
      </div>

      <div className="project-card">
        <Link to="/covid-in-us">
          <Img fluid={data.covidProjectCard.childImageSharp.fluid} alt="covid project card" />
          <h3>Covid in the US</h3>
          <h4>Tracking the spread of COVID-19 in the United States</h4>
          <h5>Data visualization, web design and development</h5>
        </Link>
      </div>
    </Layout>
  )
}


export default Home



export const query = graphql`
query {
  covidProjectCard: file(relativePath: {eq: "covid-project-card.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
  seedaProjectCard: file(relativePath: {eq: "seeda-project-card.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`