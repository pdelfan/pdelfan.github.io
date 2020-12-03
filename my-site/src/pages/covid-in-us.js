import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'



const CovidProject = ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <body className="covid-project" />
            </Helmet>
            <div className="project-header">
                <Img fluid={data.covidPostHeader.childImageSharp.fluid} alt="covid project home page" className="header" />
            </div>

            <div className="wrap-small title">
                <h1>COVID-19 in the United States</h1>
                <h2>Tracking the spread of COVID-19 in the United States</h2>
            </div>

            <div className="project-info">
                <div>
                    <h2>Context</h2>
                    <p>Personal project</p>
                </div>
                <div>
                    <h2>Timeline</h2>
                    <p>One week</p>
                </div>
                <div>
                    <h2>My roles</h2>
                    <p>Data visualization, web design and development</p>
                </div>
                <div>
                    <h2>Tools</h2>
                    <p>HTML, CSS, JavaScript, D3.js, Vega-Lite</p>
                </div>
            </div>

            <section>
                <div className="wrap-small">
                    <h3>Overview and objective</h3>
                    <p>
                        With the Coronavirus outbreak, many informative graphs and dashboards were created on the
                        web. Having interacted with a number of them, I found them to be slow, unresponsive, and at
                        times overwhelming. Frustrated with the slowness of news sites and dashboards, I decided to re-create some of the useful
                        visualizations that I have seen around the web, with an emphasis on performance. I aimed to have the
                    site load in less than 4 seconds, which is around the <a href="https://www.hobo-web.co.uk/your-website-design-should-load-in-4-seconds/">ideal load
                    time</a> for webpages. This would result in less frustrations for me and other users who are
                    possibly going to be visiting the website every day to find the latest numbers.
                    </p>


                </div>
            </section>

            <section className="section-pink">
                <div className="wrap-small">
                    <h3>The components</h3>
                    <p>The webpage has two sections:</p>
                    <p><b>1.</b> Critical information about the coronavirus that every person needs to know</p>
                    <p><b>2.</b> Visualizations which inform viewers on the latest numbers around the country</p>

                    <p>While designing the layout, I was mindful of the implicit hierarchy of the data. I followed
                    a
                    top-down approach in representing information, starting with the overall number of cases and
                    deaths
                    in United States and breaking up the data based on U.S. states.
                    </p>
                </div>
            </section>

            <section>
                <div className="wrap-small">
                    <Img fluid={data.sketch1.childImageSharp.fluid} alt="Website layout sketches where I identified the sections for visualizations and their order" />
                    <figcaption>Website layout sketches where I identified the sections for visualizations and their order
                </figcaption>

                    <Img fluid={data.sketch2.childImageSharp.fluid} alt="Early sketches for some of the visualiations I implemented" />
                    <figcaption>Early sketches for some of the visualiations I implemented</figcaption>


                    <h3>Total COVID-19 cases and deaths in the United States</h3>

                    <p>In order to compare the difference in cases and deaths, I decided to merge two scales in one
                    visualization instead of using a unified scale or two separate visualizations. In the first
                    case,
                    since the number of cases are much larger than deaths, the line that represents deaths would
                    have
                    been flattened, making any form of comparison meaningless.
                </p>

                    <Img fluid={data.viz1.childImageSharp.fluid} alt="line chart of covid cases and deaths" />
                    <figcaption>
                        First visualization: Line chart. Using two scales prevents flattening of "deaths" and still be able
                        to compare the relative increase of each category
                </figcaption>

                    <h3>Challenges in showing multiple information</h3>

                    <p> In the early version of this visualization, I used only one scale for showing both cases and deaths
                    to simply the graph for the viewer. However, I found that a
                    unified scale would have limited the red line (deaths) in the first sixth of the scale, looking
                    almost flat. This wouldn't have been useful for demonstration purposes.
                    Using separate
                    axes, however, allowed me to observe the increase in deaths more accurately. In addition,
                    the two metrics are comparable now. One can see the rate of change for each category, noticing
                    that there has been a major increase in the number of deaths from mid-April.
                </p>


                    <h3>COVID-19 Map of cases in the U.S.</h3>

                    <p>After the audience has looked at the historical data for the aforementioned metrics, they will be
                    able to look at the overall number of cases in each state and easily compare the difference
                    through the choropleth. Each state is coloured based on a logarithmic scale that goes from light
                    pink (less than 100 cases) to dark pink (500K cases and above).
                </p>

                    <Img fluid={data.viz2.childImageSharp.fluid} alt="map of covid cases in the united states" />
                    <figcaption>The user can interact with this map by hovering over each state to see the specific number
                    for
                    each state. In the example below, Montana is hovered over, where it’s highlighted in black
                </figcaption>


                    <h3>Problem: Diverging colours or single hue?</h3>

                    <p>A few visualizations which I had
                    seen around the web had used diverging colours. However, such scheme usually indicates a
                    phenomena that go in two opposite directions. The number of cases, however, is only going to
                    increase—there is no positive side to this data. Using a single hue properly represents the
                    sequential nature of the data.</p>



                    <h3>COVID-19 deaths by state: How to compare differences in one area</h3>

                    <p>While choropleths are sufficient for showing the relative different between states across a
                    geographic area, I decided to use another form of visualization to show the difference in the
                    number of deaths between each state. Here I used small multiples through a group of area charts
                    that share a scale, allowing an easy comparison between the entirety of the data. Based on this
                    visualization, it instantly becomes clear that New York and New Jersey are doing worse than
                    other states in comparison. If that isn’t clear enough, their latest numbers which are placed at
                    the end of their x-axis clearly illustrated that.
                </p>

                    <Img fluid={data.viz3.childImageSharp.fluid} alt="multiple line chart of covid cases in the us, divided by state" />
                    <figcaption>Using a single scale allows us to directly compare each state to one another</figcaption>

                    <h3>Final thoughts</h3>

                    <p>This project had quite a learning curve for me. I had primarily made visualizations on <a
                        href="https://observablehq.com/">Observable</a>&nbsp;in my notebooks using Vega-Lite 
                        and D3, but I had never
                    implemented them on a website. However,
                    wrapping up the project made me feel more confident in my ability to learn on my own and debug
                    using Chrome’s developer tools.
                </p>

                </div>
            </section>

        </Layout>
    )
}


export default CovidProject



export const query = graphql`
query {
    covidPostHeader: file(relativePath: {eq: "covid-post.png"}) {
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