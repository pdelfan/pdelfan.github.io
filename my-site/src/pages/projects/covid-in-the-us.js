import React from "react"
import Layout from '../../components/layout'
import project from "../../components/projects.scss"




const CovidInTheUS = () => {
  return (
    <Layout className={project}>
      <h1>COVID-19 in the United States</h1>
      <h2>Tracking the spread of COVID-19 in the United States</h2>


      <h3>Overview and objective</h3>
      <p>With the Coronavirus outbreak, many informative graphs and dashboards were created on the
      web. Having interacted with a number of them, I found them to be slow, unresponsive, and at
      times overwhelming. This is also what I was told by some of my family members to whom I
      recommended some of these websites. Around this time, I was taking a data visualization
      course at SFU and becoming familiar with this area and how to implement such systems.
      </p>
      <p>
        This motivated me to design a webpage on
        COVID-19 to inform my relatives who live in the U.S. The site was designed with a
        captivating
        aesthetic, communicating information through one visualization at a time, step by step. The
        main idea was to implement this webpage with an exceptional level of performance. After all,
        it was going to be used by my family and occasionally myself.
      </p>

    </Layout>
  )
}

export default CovidInTheUS