import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"

const Home = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <div className="hero">
        <div className="hero-content">
          <h1>I design & code products on the web.</h1>
          <div>
            <h2>
              Hi, I'm Pouria, an interaction designer who loves to create digital products and
              improve people's experiences on the web. When there's time, I also visualize data on my{" "}
              <a href="https://observablehq.com/@pdelfan">Observable</a>{" "}
              notebook. I enjoy picking up new tools and skills. These are the
              ones I'm most comfortable with:
            </h2>
            <h2>
              <span className="design">Design</span> — Figma, Photoshop,
              AfterEffects{" "}
            </h2>
            <h2>
              <span className="development">Development</span> — HTML/CSS,
              JavaScript (React, D3, Gatsby, Vega), PHP, MySQL
            </h2>
            <a className="get-in-touch" href="mailto:pdelfana@sfu.ca">
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <div className="divider">{/* <hr></hr> */}</div>
      <div className="selected-projects">
        <h2>Selected Projects</h2>

        <div className="projects">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}>
            <div className="project-card">
              <AniLink cover to="/taskat/" direction="down">                
                <Img
                  fluid={data.taskatProjectCard.childImageSharp.fluid}
                  alt="TasKat project card"         
                  imgStyle={{
                    objectFit: "none",
                    objectPosition: "50% 50%",
                  }}         
                />                
                <div className="card-text">
                  <h3>TasKat</h3>
                  <h4>Helping parents and children manage tasks</h4>
                  <h5>UI/UX design, research</h5>
                </div>
              </AniLink>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}>
            <div className="project-card">
              <AniLink cover to="/seeda/" direction="down">                
                <Img
                  fluid={data.seedaProjectCard.childImageSharp.fluid}
                  alt="seeda project card"         
                  imgStyle={{
                    objectFit: "none",
                    objectPosition: "50% 50%",
                  }}         
                />                
                <div className="card-text">
                  <h3>SEEDA</h3>
                  <h4>Re-imagining SEEDA's online identity</h4>
                  <h5>Branding, web design and development</h5>
                </div>
              </AniLink>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}>
            <div className="project-card">
              <AniLink cover to="/covid-in-us/" direction="down" bg="#d11b5f">
                <Img
                  fluid={data.covidProjectCard.childImageSharp.fluid}
                  alt="covid project card"
                  imgStyle={{
                    objectFit: "none",
                    objectPosition: "50% 50%",
                  }} 
                />
                <div className="card-text">
                  <h3>COVID-19 in the US</h3>
                  <h4>Tracking the spread of COVID-19 in the United States</h4>
                  <h5>Data visualization, web design and development</h5>
                </div>
              </AniLink>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    taskatProjectCard: file(relativePath: { eq: "taskat-project-card.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    covidProjectCard: file(relativePath: { eq: "covid-project-card.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    seedaProjectCard: file(relativePath: { eq: "seeda-project-card.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    htmlLogo: file(relativePath: { eq: "html-logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cssLogo: file(relativePath: { eq: "css-logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    javascriptLogo: file(relativePath: { eq: "javaScript-logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    gatsbyLogo: file(relativePath: { eq: "gatsby-logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    figmaLogo: file(relativePath: { eq: "figma-logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
