import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ImageZoom from "../components/ImageZoom"

const SeedaProject = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <body className="visuals-project" />
      </Helmet>
      <div className="project-header">
        <Img
          fluid={data.visualspostHeader.childImageSharp.fluid}
          alt="taskat project home page"
          className="header"
        />
      </div>

      <div className="wrap-small title">
        <h1>Visuals</h1>
        <h2>Curated collection of my miscellaneous graphic design work</h2>
      </div>

      <div className="project-info">
        <div>
          <h2>Timeline</h2>
          <p>2018-2021</p>
        </div>

        <div>
          <h2>Tools</h2>
          <p>Figma, Adobe Photoshop</p>
        </div>
      </div>

      <section>
        <div className="wrap-small">
          <h3>Overview</h3>
          <p>
            This is a collection of works that I have done throughout the years.
          </p>

          <h3>SFU Academic Integrity</h3>
          <p>
            A series of posters designed in a course project for Simon Fraser
            University to promote academic integrity.
          </p>
        </div>

        <div className="wrap-large">
          <div className="posters">
            <Img
              fluid={data.poster1.childImageSharp.fluid}
              alt="visuals project card"
            />
            <Img
              fluid={data.poster2.childImageSharp.fluid}
              alt="visuals project card"
            />
            <Img
              fluid={data.poster3.childImageSharp.fluid}
              alt="visuals project card"
            />
            <Img
              fluid={data.poster4.childImageSharp.fluid}
              alt="visuals project card"
            />
            <Img
              fluid={data.poster5.childImageSharp.fluid}
              alt="visuals project card"
            />
            <Img
              fluid={data.poster6.childImageSharp.fluid}
              alt="visuals project card"
            />
          </div>

          <div className="wrap-small">
            <h3>Design for Challenge #3</h3>
            <p>
              A design challenge for SFU students to design a logo for the
              School of Interactive Arts and Technology.
            </p>
          </div>

          <div className="logos">
            <Img
              fluid={data.logo1.childImageSharp.fluid}
              alt="visuals project card"
            />
            <Img
              fluid={data.logo2.childImageSharp.fluid}
              alt="visuals project card"
            />
            <Img
              fluid={data.logo3.childImageSharp.fluid}
              alt="visuals project card"
            />
            <Img
              fluid={data.logo4.childImageSharp.fluid}
              alt="visuals project card"
            />
            <Img
              fluid={data.logo5.childImageSharp.fluid}
              alt="visuals project card"
            />
            <Img
              fluid={data.logo6.childImageSharp.fluid}
              alt="visuals project card"
            />
          </div>


        </div>
      </section>
    </Layout>
  )
}

export default SeedaProject

export const query = graphql`
  query {
    visualspostHeader: file(
      relativePath: { eq: "visuals-project-header.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cycle: file(relativePath: { eq: "taskat-cycle.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    poster1: file(relativePath: { eq: "posters/poster1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    poster2: file(relativePath: { eq: "posters/poster2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    poster3: file(relativePath: { eq: "posters/poster3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    poster4: file(relativePath: { eq: "posters/poster4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    poster5: file(relativePath: { eq: "posters/poster5.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    poster6: file(relativePath: { eq: "posters/poster6.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo1: file(relativePath: { eq: "posters/logos/logo1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo2: file(relativePath: { eq: "posters/logos/logo2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo3: file(relativePath: { eq: "posters/logos/logo3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo4: file(relativePath: { eq: "posters/logos/logo4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo5: file(relativePath: { eq: "posters/logos/logo5.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo6: file(relativePath: { eq: "posters/logos/logo6.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
