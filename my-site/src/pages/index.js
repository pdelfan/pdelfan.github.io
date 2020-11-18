import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <h1>I design and code products on the web.</h1>
      <Link to="/covid-in-us">Covid in the us</Link>
    </Layout>
  )
}


export default Home