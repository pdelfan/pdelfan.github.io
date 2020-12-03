import React from "react"
import Layout from '../components/layout'
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Footer from '../components/footer'




const StyleGuide = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
        <body className="style-guide" />
      </Helmet>

      <div className="wrap-small">
        <h1>Style Guide</h1>
        <p>Developed using <a href="https://www.gatsbyjs.com">Gatsby</a>, styled with Sass. Each element is a react component that is inserted into a layout component.</p>
        <h2>Interaction</h2>

        <h3>In-text link</h3>
        <h4>Sample Code</h4>
        <pre className="prettyprint"><code>&lt;p&gt;This is an &lt;a href=&quot;https://google.com/&quot;&gt;in-text link&lt;/a&gt;.&lt;/p&gt;</code></pre>
        <h4>Rendered Element</h4>
        <p>This is an <a href="https://google.com/">in-text link</a>.</p>


        <h3>Footer</h3>
        <p>Footer is defined as a component. It can be reused by importing Footer from the components folder.</p>
        <h4>Sample Code</h4>
        <pre className="prettyprint"><code>&lt;Footer /&gt;</code></pre>
        <h4>Rendered Element</h4>
        <Footer />



        <h3>Project Card</h3>
        <h4>Sample Code</h4>
        <pre className="prettyprint"><code>
          &lt;div className=&quot;project-card&quot;&gt;
            &lt;Img fluid={'data.seedaProjectCard.childImageSharp.fluid'} alt=&quot;
            seeda project card&quot; /&gt;
            &lt;h3&gt;SEEDA &amp;#8250;&lt;/h3&gt;
            &lt;h4&gt;Re-imagining SEEDA's online identity&lt;/h4&gt;
            &lt;h5&gt;Branding, web design and development&lt;/h5&gt;
          &lt;/div&gt;</code></pre>

        <h4>Rendered Element</h4>
        <div className="projects">
          <div className="project-card">
            <Img fluid={data.seedaProjectCard.childImageSharp.fluid} alt="seeda project card" />
            <h3>SEEDA &#8250;</h3>
            <h4>Re-imagining SEEDA's online identity</h4>
            <h5>Branding, web design and development</h5>
          </div>
        </div>




        <h2>Text</h2>


        <h3>Headings</h3>
        <h4>Sample Code</h4>
        <pre className="prettyprint"><code>
          &lt;h1&gt;Heading 1&lt;/h1&gt;<br />
        &lt;h2&gt;Heading 2&lt;/h2&gt;<br />
        &lt;h3&gt;Heading 3&lt;/h3&gt;<br />
        &lt;h4&gt;Heading 4&lt;/h4&gt;</code></pre>

        <h4>Rendered Element</h4>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>



        <h3>Paragraphs</h3>

        <h4>Sample Code</h4>
        <pre className="prettyprint"><code>&lt;p&gt;
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem sapiente natus omnis non quasi
        voluptatum temporibus? Minus, modi voluptate distinctio nemo ea odio culpa quos dolore
        porro quis quae impedit hic labore autem doloremque similique corrupti. Consequatur
        recusandae perspiciatis magni itaque, repellendus natus consectetur aspernatur molestias
        facere odit, ratione officiis.
&lt;/p&gt;</code></pre>

        <h4>Rendered Element</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem sapiente natus omnis non quasi voluptatum
        temporibus? Minus, modi voluptate distinctio nemo ea odio culpa quos dolore porro quis quae impedit hic labore
        autem doloremque similique corrupti. Consequatur recusandae perspiciatis magni itaque, repellendus natus
        consectetur aspernatur molestias facere odit, ratione officiis.
        </p>

        <h2>Citation</h2>
        <p>Andersson, R. (2020). Inter [Font]. Retrieved from <a href="https://fonts.google.com/specimen/Inter#about">Google Fonts</a>.
        </p>
        <p>Delfanazari, P. (2020). COVID in the US. Retrieved from project reports written during Summer. </p>
        <p>United Nations. (2020) Empowerment to help others. Making masks for those in need. Image created by Guilherme Santiago. Submitted for United Nations Global Call Out To Creatives - help stop the spread of COVID-19.
       [Image] Retrieved from <a href="https://unsplash.com/photos/pjoB_6lUbLo/info">Unsplash.</a></p>
       <p>SEEDA. (n.d.). [Logo image] Retrieved from <a href="seeda.ca">SEEDA.</a></p>
       <p>SEEDA. (n.d.). [Images of SEEDA's projects] Retrieved from <a href="seeda.ca">SEEDA.</a></p>


      </div>

    </Layout>
  )
}


export default StyleGuide





export const query = graphql`
query {
  seedaProjectCard: file(relativePath: {eq: "seeda-project-card.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  },
}
`