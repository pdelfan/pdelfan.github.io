import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const SeedaProject = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <body className="seeda-project" />
      </Helmet>
      <div className="project-header">
        <Img
          fluid={data.seedaPostHeader.childImageSharp.fluid}
          alt="covid project home page"
          className="header"
        />
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

      <section>
        <div className="wrap-small">
          <h3>Overview and objective</h3>
          <p>
            SEEDA is an engineering consulting company that helps clients
            deliver successful projects. Through a web design and development
            course at SFU, I was introduced to SEEDA and tasked with creating a
            new design for their website in order to increase online engagement.
          </p>

          <h3>Redefining the brand</h3>
          <p>
            At an initial meeting with SEEDA, I set out to gain an understanding
            of the company’s mission, audience and personality. I narrowed down
            potential customers to investors and engineering organizations that
            seek expert advice.
          </p>

          <Img
            fluid={data.seedaColors.childImageSharp.fluid}
            alt="A colour palette was created for the style guide."
            className="border"
          />
          <figcaption>
            A colour palette was created for the style guide.
          </figcaption>

          <p>
            Having identified the target audience, I started working on a style
            guide to summarize SEEDA’s values, ensuring a consistent, creating
            guidelines for elements that play a role in the look and feel of the
            website, to be used by designers and developers to ensure brand
            cohesion.
          </p>

          <Img
            fluid={data.seedaStyleGuide.childImageSharp.fluid}
            alt="Style guide for SEEDA. Here, one of the elements in the style guide is shown: news cards."
            className="border"
          />
          <figcaption>
            Style guide for SEEDA. Here, one of the elements in the style guide
            is shown: news cards.
          </figcaption>

          <h3>Putting everything together</h3>

          <Img
            fluid={data.seedaWireframe.childImageSharp.fluid}
            alt="A sample wireframe from the home page."
            className="wrap-large"
          />

          <h3>Building the website</h3>
          <p>
            After settling on the ethos of SEEDA as a company, I began making
            the vision of the new website a reality, using the existing content
            on SEEDA’s current website. The elements that were designed in the
            style guide were put together to form components such as headers and
            forms. These components were then combined to form layouts of the
            pages.
          </p>
        </div>

        <div className="background-seeda">
          <Img
            fluid={data.seedaDevices.childImageSharp.fluid}
            alt="Home page of the website."
            className="wrap-large"
          />
        </div>

        <div className="wrap-small">
          <p>
            The website was developed to be responsive and device-agnostic. It
            uses a grid system that automatically adapts to device’s screen
            size—no breakpoints and the same content is presented to all users,
            regardless of their platform of choice.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default SeedaProject

export const query = graphql`
  query {
    seedaPostHeader: file(relativePath: { eq: "seeda-pages.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    seedaHome: file(relativePath: { eq: "seeda-post.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    seedaColors: file(relativePath: { eq: "seeda-colors.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    seedaStyleGuide: file(relativePath: { eq: "seeda-style-guide.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    seedaWireframe: file(relativePath: { eq: "seeda-w.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    seedaDevices: file(relativePath: { eq: "seeda-devices.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
