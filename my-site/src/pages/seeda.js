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
          <p>Academic Project</p>
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
            course at SFU, I was introduced to SEEDA and tasked with{" "}
            <b>proposing a new design</b> for their website in order to increase
            online engagement.
          </p>

          <h3>Understanding the audience</h3>

          <p>
            At an initial meeting with SEEDA, I set out to gain an understanding
            of the company’s <b>mission, audience and personality</b>. The
            potential customers were found to be investors and engineering
            organizations that seek expert advice.
          </p>
          <p>
            Having the audience in mind, I performed a heuristic evaluation of
            the current SEEDA website in order to assess its usability. The main
            goal of this assessment was to find whether potential customers can{" "}
            <b>easily understand what SEEDA provides and make contact</b>.
          </p>
        </div>

        <section className="section-gray">
          <div className="wrap-small">
            <h3>Findings</h3>
            <p>
              After a brief evaluation of the home page, I wrote down the main
              findings which could be improved in the given timeframe of the
              project.
            </p>
            <p>
              <b>Lack of hierarchy</b>
              <br></br> Even though content is grouped, there is no visible
              hierarchy. Users would need to scroll down towards the bottom of
              the page to read about services SEEDA offers.
            </p>
            <p>
              <b>Consistency</b>
              <br></br> When the user hovers over the "More" link on the
              navigation bar, several dropdowns appear. These inner dropdowns
              have buttons that can be clicked to reveal more items, but when
              they are clicked, other items on the menu become hidden, and the
              buttons themselves disappear, showing no clear way to close the
              menu and go back to previous items.
            </p>

            <p>
              <b>Error Prevention</b>
              <br></br>
              The contact form does not inform users about possible errors, such
              as incorrect email/phone format before submission. It does however
              let users know if they have not completed a required field.
            </p>

            <p>
              <b>Efficiency of use</b>
              <br></br>
              Although some parts of the content are grouped, there is an
              overwhelming amount of links and content presented on the page
              which could result in confusion. For example, the items in the
              navigation bar are repeated on the body, resulting in redundancy.
            </p>
          </div>
        </section>

        <div className="wrap-small">
          <h3>Redefining the brand</h3>

          <ImageZoom>
            <Img
              fluid={data.seedaColors.childImageSharp.fluid}
              alt="A colour palette was created for the style guide."
              className="border"
            />
          </ImageZoom>
          <figcaption>
            A colour palette was created for the style guide.
          </figcaption>

          <p>
            Having identified the target audience, I started working on a style
            guide to summarize SEEDA’s values, ensuring a consistent, creating
            guidelines for elements that play a role in the look and feel of the
            website, to be used by designers and developers to{" "}
            <b>ensure brand cohesion</b>.
          </p>

          <h3>Putting everything together</h3>
          <p>
            Since SEEDA was already a established brand, I focused on improving
            the company's image rather than creating a new design. The resulting
            guideline was a series of <b>elements and components</b> that could
            be reused throughout the site by designers or developers, applying
            their own content without worrying about inconsistencies.
          </p>

          <ImageZoom>
            <Img
              fluid={data.seedaStyleGuide.childImageSharp.fluid}
              alt="Style guide for SEEDA. Here, one of the elements in the style guide is shown: news cards."
              className="border"
            />
          </ImageZoom>

          <figcaption>
            Style guide for SEEDA. Here, one of the elements in the style guide
            is shown: news cards.
          </figcaption>

          <ImageZoom>
            <Img
              fluid={data.seedaWireframe.childImageSharp.fluid}
              alt="A sample wireframe from the home page."
            />
          </ImageZoom>
          <figcaption>
            A sample wireframe of the home page. Real, existing content was used
            to provide an accurate overview of the flow and providing an easier
            point of reference for comparison.
          </figcaption>

          <p>
            To final build of the site fulfills the aforementioned requirements.
            Visitors are able to observe that: <br></br>
            <br></br>
            <ol type="A">
              <li>Familiarize with SEEDA as a company.</li>
              <li>Companies which are subsidiaries of or work closely with</li>
              SEEDA.
              <li>Identify what services are offered.</li>
              <li>Make contact with the company right away.</li>
            </ol>
          </p>
        </div>

        <div className="wrap-large">
          <ImageZoom>
            <Img
              fluid={data.seedaServices.childImageSharp.fluid}
              alt="Screenshot of SEEDA's home page."
            />
          </ImageZoom>
          <figcaption>
            The five services the company offers are easily identifiable in the
            redesign, and include additional descriptions.
          </figcaption>
        </div>

        <div className="wrap-small">
          <p>
            Content visibility was also improved throughout the site. On the old
            site (left), users would need to scroll down to view the content of
            the article. I addressed this issue in the redesign (right) by
            making changes to the image size and removing redundant links.
          </p>
        </div>

        <div className="wrap-large">
          <ImageZoom>
            <Img
              fluid={data.seedaArticle.childImageSharp.fluid}
              alt="Screenshot of one of SEEDA's story article."
            />
          </ImageZoom>
          <figcaption>
            Left: An article on SEEDA's old site. <br></br>Right: The same
            article on the redesigned site.
          </figcaption>
        </div>

        <div className="wrap-small">
          <h3>Building the prototype</h3>
          <p>
            After settling on the ethos of SEEDA as a company, I began making
            the vision of the new website a reality, using the existing content
            on SEEDA’s current website. The elements that were designed in the
            style guide were put together to form <b>components</b> such as
            headers and forms. These components were then combined to form
            <b> layouts</b> of the pages.
          </p>

          <p>
            The prototype was then made in Gatsby, a React-based framework. This
            allowed me to create components and layouts, minimizing the amount
            of code. The framework also allowed me to use plugins for improving
            peformance, such as automatically optimizing images, adding features
            to convert the site to a{" "}
            <a href="https://web.dev/progressive-web-apps/">
              {" "}
              progressive web app
            </a>
            . To see how the site performed, I using Google Lighthouse to audit.
          </p>

          <ImageZoom>
            <Img
              fluid={data.seedaLighthouse.childImageSharp.fluid}
              alt="Lighthouse results for SEEDA."
              className="border"
            />
          </ImageZoom>
          <figcaption>
            The results show the website is <b>fast</b> and <b>reliable</b>.
          </figcaption>
        </div>

        <div className="wrap-small">
          <p>
            The website was developed to be responsive and device-agnostic. It
            uses a grid system that automatically adapts to device’s screen
            size—no breakpoints and the same content is presented to all users,
            regardless of their platform of choice.
          </p>

          <h3>Retrospective</h3>
          <p>
            Designing a website with an existing brand was a new challenge for
            me. It required me to understand the client’s expectations and align
            my design decisions with their guidelines. The project allowed me to
            experience the process of creating and maintaining a style guide,
            building components and lay the foundations for the rest of the
            project.
          </p>

          <p>
            The protoype was published on{" "}
            <a href="https://www.netlify.com/">Netlify</a> and is hosted on
            GitHub.
          </p>

          <a
            href="https://nostalgic-lamarr-fe607b.netlify.app/"
            className="visit-website"
          >
            Visit Website
          </a>
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
    seedaServices: file(relativePath: { eq: "seeda-services.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    seedaArticle: file(relativePath: { eq: "seeda-article.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    seedaLighthouse: file(relativePath: { eq: "seeda-lighthouse.png" }) {
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
  }
`
