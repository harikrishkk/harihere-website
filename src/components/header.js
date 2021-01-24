import React from "react"
import CodeImg from "../images/code.jpeg"
import LazyHero from "react-lazy-hero"
import Navbar from "./Navbar"

const Header = () => (
  <>
    <header className="main_app_header mobile">
      <LazyHero
        color="#000"
        isCentered={true}
        opacity={0.5}
        className="lazyHero_wrapper"
        parallaxOffset={100}
        style={{ overflow: "hidden" }}
        transitionDuration={600}
        transitionTimingFunction="ease-in-out"
        imageSrc={CodeImg}
        minHeight="50vh"
      >
        <div className="logo_heading">
          <Navbar />
          <h3 className="desktop"> {"<simply-javascript/>"}</h3>
          <h3 className="mob"> {"<simply-js/>"}</h3>
          <p> After all, it's just javascript ❤️ </p>
        </div>
      </LazyHero>
    </header>
    <header className="main_app_header non-mobile">
      <LazyHero
        color="#000"
        isCentered={true}
        opacity={0.5}
        className="lazyHero_wrapper"
        parallaxOffset={100}
        style={{ overflow: "hidden" }}
        transitionDuration={600}
        transitionTimingFunction="ease-in-out"
        imageSrc={CodeImg}
        minHeight="80vh"
      >
        <div className="logo_heading">
          <Navbar />
          <h3> {"<simply-javascript/>"}</h3>
          <p> After all, it's just javascript ❤️ </p>
        </div>
      </LazyHero>
    </header>
  </>
)
export default Header
