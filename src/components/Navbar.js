import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Navbar = () => {
  return (
    <nav className="nav">
      {/* <a href="#" className="nav-item">
        <i className="fas fa-home"></i> <span className="navText">Home</span>
      </a> */}
      <AnchorLink className="nav-item" to="/#angular-scroll" title="Angular">
        <span>
          <i className="fab fa-angular"></i>
          <span className="navText">Training</span>
        </span>
      </AnchorLink>
      <AnchorLink className="nav-item" to="/#react-scroll" title="React">
        <span>
          <i className="fab fa-react"></i>
          <span className="navText">Training</span>
        </span>
      </AnchorLink>
      <span className="nav-indicator"></span>
    </nav>
  )
}

export default Navbar
