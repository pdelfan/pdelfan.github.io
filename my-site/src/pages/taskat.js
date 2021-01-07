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
        <body className="taskat-project" />
      </Helmet>
      <div className="project-header">
        <Img
          fluid={data.taskatpostHeader.childImageSharp.fluid}
          alt="taskat project home page"
          className="header"
        />
      </div>

      <div className="wrap-small title">
        <h1>TasKat</h1>
        <h2>Helping parents and children manage tasks</h2>
      </div>

      <div className="project-info">
        <div>
          <h2>Context</h2>
          <p>Academic Group Project</p>
        </div>
        <div>
          <h2>Team Members</h2>
          <p>Team members: Chell Li, Dennis Limbo, Tracy Chen, Timothy Tembo</p>
        </div>

        <div>
          <h2>Timeline</h2>
          <p>One month</p>
        </div>
        <div>
          <h2>My roles</h2>
          <p>UI/UX Design, Research </p>
        </div>
        <div>
          <h2>Tools</h2>
          <p>Figma</p>
        </div>
      </div>

      <section>
        <div className="wrap-small">
          <h3>Overview and objective</h3>
          <p>
            This group project is a design proposal for an advanced
            human-computer interaction course. We identified issues that
            parents/guardians and children have been dealing with since the
            COVID-19 pandemic and designed a multi-platform app called TasKat.
          </p>

          <p>
            The app provides an opportunity to improve children’s time
            management skills by helping their guardians plan their child’s
            daily activities, communicate with them whenever they are able to,
            and be notified as their children complete their tasks.
          </p>

          <h3>Process</h3>
          <p>
            Throughout our project, we used Donald Schön's{" "}
            <b>"reflective practice"</b>
            as a guide for our design process, identifying problems and
            reflecting back on them to improve our work.
          </p>

          <ImageZoom>
            <Img
              fluid={data.cycle.childImageSharp.fluid}
              alt="The reflective cycle"
            />
          </ImageZoom>
          <figcaption>The Reflective Cycle</figcaption>
        </div>

        <section className="section-blue">
          <div className="wrap-small">
            <h3>Problem</h3>

            <p>
              <b>Audience:</b> Children aged 8-12 and their guardians whose
              children stay at home during school hours as a result of the
              pandemic, requiring guidance and monitoring for completing chores
              and school-related tasks.
            </p>
            <p>
              <b>Need:</b> Help children plan their tasks and remind them when
              they are due, notifying the guardians when they are completed.
            </p>

            <p>
              <b>Opportunity:</b> How might we help children navigate through
              the app and manage their tasks without being overhwlemed?
            </p>

            <p>
              We looked at similar existing applications, including Bloomz and
              Child Reward. Our team found them to be complex for children, not
              providing feedback to users as they completed tasks, and an
              overall lack of sound design decisions for providing a friendly
              and engaging experience.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap-small">
            <h3>Research</h3>
            <p>
              In order to familiarize ourselves with design methods and
              guidelines for children, I looked at relevant literature to{" "}
              understand <b>how children’s abilities change with age</b>, their
              interaction with software.
            </p>

            <p>
              I identified the mental and intellectual growth level of the
              children ages 8-12. Since tasks are time bound, we wanted to make
              sure children are able to understand when they are supposed to
              complete tasks. Based on a literature review, I found the ability
              to judge future and past time relative to current time is
              developed between ages 7 to 10. They also become adept at
              categorizing items, which we paid special attention to in our
              design.
            </p>
            <p>
              In order to understand how children might use the software, I
              planned to adapt Gordon Pask’s <b>“conversation theory”</b> to
              have potential users externalize their thoughts as they interact
              with the application. A teach-back scenario could also be
              arranged, where we would ask the user to{" "}
              <b>
                teach an imaginary peer how to complete a specific task they
                have been assigned
              </b>
              .
              <Img
                fluid={data.companion.childImageSharp.fluid}
                alt="Taskat's onboarding example"
                className="image-small"
              />
              <figcaption>
                Example of an onboarding page. The little companion helps users
                become familiar through a step-by-step process.
              </figcaption>
            </p>

            <p>
              I also looked at Debra Gelman’s book, “Design for Kids”. She wrote
              that interactions can be complex as long as the children have been
              taught the more simple operations and methods. To achieve this, an
              animated character on the screen could teach children how to
              navigate through the app. We achieved this by including a thorough
              onboarding experience which included guidance from a virtual cat
              companion.
            </p>
          </div>
        </section>

        <div className="wrap-small">
          <h3>Designing the app</h3>
          <p>
            After gaining a sufficient understanding of our goals and possible
            constraints, our team distributed began designing the app on Figma.
            The main components are designed based on these two goals, which are
            <b> To Do</b>, <b>Calendar</b>, <b>Fun Feed</b> and <b>Profile</b>{" "}
            views. I worked on the Calendar and Profile views.
          </p>
        </div>

        <div className="wrap-small">
          <div className="two-column">
            <p>
              After tasks are added, users are able to have on overview of
              future and current tasks on the <i>Calendar</i> page, which I
              designed. Based on the research, I decided to colour code the
              tasks, making it{" "}
              <b>
                easy for children to recognize which type of tasks are due for
                each day
              </b>
              .
            </p>

            <Img
              fluid={data.calendar.childImageSharp.fluid}
              alt="TasKat's calendar page"
            />
          </div>
        </div>

        <div className="wrap-small">
          <div className="two-column">
            <Img
              fluid={data.day.childImageSharp.fluid}
              alt="Taskat's day page"
            />

            <p>
              When the users tap on a specific day, they can see tasks that are
              due on that day. The blue gradient on the left side represents the
              time of the day (morning, noon, afternoon, night). As the child
              scrolls down, the colour becomes darker, indicating{" "}
              <b>the passage of time</b>. For younger children, this is a more
              understandable way of showcasing the difference in time.
            </p>
          </div>
        </div>

        <div className="wrap-small">
          <div className="two-column">
            <p>
              Tapping on a task would show details about the task. This includes
              the due date of the task, the category it belongs to, and
              information about the task. In our proposal, we assumed the app
              could either retrieve information from the school for
              school-related tasks, or be completed by the guardians.
            </p>
            <Img
              fluid={data.task.childImageSharp.fluid}
              alt="Taskat's specific task page"
            />
          </div>
        </div>

        <div className="wrap-small">
          <h3>Reflection and future considerations</h3>
          <p>
            TasKat was a great opportunity for me to practice my research and
            design skills. It allowed me to have an in-depth look at issues in
            human-computer interaction, make predictions and look for relevant
            research to test and adjust or inform my design decisions.
            Throughout the process, I also gained an understanding of Figma and
            learn how to create a unified user interface and a helpful
            onboarding. Our team had a great time dealing with challenges,
            discussing design decisions and reaching our goals. I couldn't have
            asked for a better team.
          </p>

          <a
            href="https://www.figma.com/proto/aWN6i3ai1msLZc3HRsB8o9/IAT-351?node-id=186%3A4891&scaling=scale-down"
            className="visit-website"
          >
            Visit Prototype
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default SeedaProject

export const query = graphql`
  query {
    taskatpostHeader: file(relativePath: { eq: "taskat-project-card.png" }) {
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
    companion: file(relativePath: { eq: "taskat-companion.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    calendar: file(relativePath: { eq: "taskat-calendar.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    day: file(relativePath: { eq: "taskat-day.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    task: file(relativePath: { eq: "taskat-task.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
