import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { Helmet } from "react-helmet"
import AniLink from "gatsby-plugin-transition-link/AniLink"



const Home = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <div className="hero">
        <div className="hero-content">
          <h1>I design and code products on the web.</h1>
          <div>
            <h2>When I have time, I also visualize data on my <a
              href="https://observablehq.com/@pdelfan">Observable</a> notebook, <a
                href="https://www.goodreads.com/user/show/32852397-pouria">read books</a>, and <a
                  href="https://www.flickr.com/photos/158143148@N02/">take photos</a>.
            </h2>
          </div>
        </div>
      </div>
      <div className="divider">
        <hr></hr>
      </div>
      <div className="selected-projects">
        <h2>Selected Projects</h2>

        <div className="projects">
          <div className="project-card">
            <AniLink cover to="/seeda" bg="#120F14" direction="top">
              <Img fluid={data.seedaProjectCard.childImageSharp.fluid} alt="seeda project card" />
              <h3>SEEDA &#8250;</h3>
              <h4>Re-imagining SEEDA's online identity</h4>
              <h5>Branding, web design and development</h5>
            </AniLink>
          </div>

          <div className="project-card">
            <AniLink cover to="/covid-in-us" direction="top">
              <Img fluid={data.covidProjectCard.childImageSharp.fluid} alt="covid project card" />
              <h3>Covid in the US &#8250;</h3>
              <h4>Tracking the spread of COVID-19 in the United States</h4>
              <h5>Data visualization, web design and development</h5>
            </AniLink>
          </div>
        </div>
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
  },
  htmlLogo: file(relativePath: {eq: "html-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
  cssLogo: file(relativePath: {eq: "css-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
  javascriptLogo: file(relativePath: {eq: "javaScript-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
  gatsbyLogo: file(relativePath: {eq: "gatsby-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
  figmaLogo: file(relativePath: {eq: "figma-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
}
`