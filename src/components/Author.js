import React from "react"
import HariImg from "../images/hari-square.jpg"
import Rocket from "../images/rocket_img.png"

import { content } from "../data/content"
import Social from "./Social"

const Author = () => {
  function createMarkup(config) {
    return { __html: config }
  }
  return (
    <div className="repeat_bg_container">
      <div className="container mtop">
        <div className="wrapper">
          <h1 className="main_heading"> Who am I ? </h1>

          <img className="main_header_img" src={HariImg} />
          <Social />
          <h2 className="main_desc">{content.intro}</h2>
          <img className="rocket_img" src={Rocket} />
          <h2
            dangerouslySetInnerHTML={createMarkup(content.training)}
            className="main_desc"
          ></h2>
        </div>

        <h1 className="main_heading"> Which one would you like to learn? </h1>
      </div>
    </div>
  )
}

export default Author
