import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Author from "../components/Author"
import CourseOfferings from "../components/CourseOfferings"
import "../scss/styles.scss"
const IndexPage = () => (
  <div className="rootWrapper">
    <SEO title="Harihere.com | Angular Training Toronto | React Training Toronto" />
    <Header />
    <Author />
    <CourseOfferings />

    <footer>
      Copyright @ 2020 - Made with <i className="fas fa-heart"></i> by Hari
    </footer>
  </div>
)

export default IndexPage
