import React from "react"
import { content } from "../data/content"
const Social = () => {
  return (
    <div>
      <a
        title="Linkedin"
        className="social_icons"
        href="https://www.linkedin.com/in/harikrishkk/"
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a
        title="Github"
        className="social_icons"
        href="https://github.com/simplyjavascript"
      >
        <i className="fab fa-github-square fa-2x"></i>
      </a>
      <a
        title="Instagram"
        className="social_icons"
        href="https://www.instagram.com/hari.broo/"
      >
        <i className="fab fa-instagram fa-2x"></i>
      </a>
      <div className="queries">
        <p className="heading"> Queries ? </p>
        <span className="item">
          <i className="fas fa-mobile-alt"></i>
          <a href={`tel:${content.contactDetails.phone}`}>
            {content.contactDetails.phone}
          </a>
        </span>

        <span className="item">
          <i className="far fa-envelope"></i>
          <a href={`mailto:${content.contactDetails.email}`}>
            {content.contactDetails.email}
          </a>
        </span>
      </div>
    </div>
  )
}

export default Social
