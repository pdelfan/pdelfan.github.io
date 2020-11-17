import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import ProjectCard from '../components/project-card'
import Img from 'gatsby-image'




const Home = ({ data }) => {
  return (
    <Layout className="home">
      <h1 className="heading">
        Interaction design student. I create digital products on the web.
      </h1>
      <h2 className="subheading">When I have time, I also visualize data on my &nbsp;
        <a href="https://observablehq.com/@pdelfan">Observable</a> notebook,&nbsp;
        <a href="https://www.goodreads.com/user/show/32852397-pouria">log my books</a>, and &nbsp;
        <a href="https://www.flickr.com/photos/158143148@N02/">take photos</a>.
      </h2>

      <ProjectCard>
        <Img fluid={data.seedaProjectCover.childImageSharp.fluid} alt="seeda project cover" />
        <h3>SEEDA</h3>
        <h4>Re-imagining SEEDA's online identity</h4>
      </ProjectCard>

      <ProjectCard>
        <Link to="/projects/covid-in-the-us">
          <Img fluid={data.covidProjectCover.childImageSharp.fluid} alt="covid in the us project cover" />
          <h3>COVID-19 in the United States</h3>
          <h4>Tracking the numbers</h4>
        </ Link>
      </ProjectCard>


    </Layout>
  )
}

export default Home



export const query = graphql`
query MyQuery {
  seedaProjectCover: file(relativePath: {eq: "home/seeda-project.png"}) {
    ...coverImage
  },
  covidProjectCover: file(relativePath: {eq: "home/covid-project.png"}) {
    ...coverImage
  }
}
`