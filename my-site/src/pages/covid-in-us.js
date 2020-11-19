import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'



const CovidProject = ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <body className="covid-project" />
            </Helmet>
            <Header />
            <div className="project-header">
                <h1>Tracking the spread of COVID-19 in the United States</h1>
                <Img fluid={data.covidPostHeader.childImageSharp.fluid} alt="covid project home page" className="header" />
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

                    <h3>The problem with websites</h3>

                    <p>As a frequent visitor of COVID-related sites, I find the slowness of major sites amusing, but it is
                not a rare occurrence. The web has <a href="https://idlewords.com/talks/website_obesity.htm">an
                obesity crisis</a>. Websites with mostly text and a few images are filled with trackers,
                scripts, and ads. For instance, The New York Times' page for COVID-related news is almost up to 12MB
                in size. In another example, I <a href="https://www.youtube.com/watch?v=2gYd6pcebag&feature=emb_title">tested</a> John Hopkin's
                COVID dashboard; it took around 15 seconds to fully load the page.
                </p>

                    <p>
                        Frustrated with the slowness of news sites and dashboards, I decided to re-create some of the useful
                        visualizations that I have seen around the web, with an emphasis on performance. I aimed to have the
                    site load in less than 4 seconds, which is around the <a href="https://www.hobo-web.co.uk/your-website-design-should-load-in-4-seconds/">ideal load
                    time</a> for webpages. This would result in less frustrations for me and other users who are
                    possibly going to be visiting the website every day to find the latest numbers.
                </p>
                </div>
            </section>

            <section className="section-blue">
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
                    <Img fluid={data.sketch1.childImageSharp.fluid} alt="Website layout sketches where I identified the sections for visualizations and their order" className="shadow" />
                    <figcaption>Website layout sketches where I identified the sections for visualizations and their order
                </figcaption>

                    <Img fluid={data.sketch2.childImageSharp.fluid} alt="Early sketches for some of the visualiations I implemented" className="shadow" />
                    <figcaption>Early sketches for some of the visualiations I implemented</figcaption>



                    <h3>The data</h3>

                    <p>Since January, the New York Times has been tracking COVID-19 in the United States, publishing their
                    datasets on their <a href="https://github.com/nytimes/covid-19-data">GitHub repository</a> in
                    multiple datasets, stored in CSV format. I used D3.js (a
                    JavaScript library for data visualization) to fetch these datasets from GitHub. Thankfully, D3’s
                    fetch method (d3.csv) is asynchronous by design. This allows the rest of the code to run and the
                    webpage to load without waiting for a process to complete.
                </p>


                    <h3>Total COVID-19 cases and deaths in the United States</h3>

                    <p>In order to compare the difference in cases and deaths, I decided to merge two scales in one
                    visualization instead of using a unified scale or two separate visualizations. In the first
                    case,
                    since the number of cases are much larger than deaths, the line that represents deaths would
                    have
                    been flattened, making any form of comparison meaningless.
                </p>

                    <Img fluid={data.viz1.childImageSharp.fluid} alt="line chart of covid cases and deaths" className="website shadow" />
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

                    <Img fluid={data.viz2.childImageSharp.fluid} alt="map of covid cases in the united states" className="website shadow" />
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

                    <Img fluid={data.viz3.childImageSharp.fluid} alt="multiple line chart of covid cases in the us, divided by state" className="website shadow" />
                    <figcaption>Using a single scale allows us to directly compare each state to one another</figcaption>

                    <h3>Final thoughts</h3>

                    <p>This project had quite a learning curve for me. I had primarily made visualizations on <a
                        href="https://observablehq.com/">Observable</a>
                    in my notebooks using Vega-Lite and D3 (which took care of hosting and rendering), but I had never
                    implemented them on a website. However,
                    wrapping up the project made me feel more confident in my ability to learn on my own and debug
                    using Chrome’s developer tools.
                </p>

                    <p>
                        One of the reasons this project took longer than I expected was my
                        lack of understanding about the problems that could have arose. Since the project was for my own, I
                        didn't have strict deadlines. However, I have learned to manage my expectations and consider
                        possible challenges before starting a project in order to manage them in time, even for personal
                        projects which only have soft deadlines.
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