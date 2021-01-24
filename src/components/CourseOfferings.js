import React from "react"
import { content } from "../data/content"
import WeeklyCourseDetails from "./WeeklyCourseDetails"
import { AngularCourseData } from "../data/course-data"
import { ReactCourseData } from "../data/course-data-react"
const CourseOfferings = () => {
  return (
    <>
      {content.courses.map((course, idx) => {
        return (
          <React.Fragment key={course.id}>
            <div className={course.skewClass}></div>
            <div className={course.containerClass}>
              <div className="course_offerings_wrapper">
                <h3 id={course.elementId} className="course_offering_header">
                  {course.heading}
                </h3>
                <p className="course_intro">{course.content}</p>
                <p className="live-demo">
                  Live demo
                  <a
                    target="_blank"
                    className="animating_link"
                    href={course.demoUrl}
                  >
                    here:
                  </a>
                </p>
                {course.topic === "angular" && (
                  <WeeklyCourseDetails
                    btnColor={course.btnColor}
                    weeks={course.weeks}
                    key={course.id}
                    data={AngularCourseData}
                  />
                )}
                {course.topic === "react" && (
                  <WeeklyCourseDetails
                    btnColor={course.btnColor}
                    weeks={course.weeks}
                    key={course.id}
                    data={ReactCourseData}
                  />
                )}
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default CourseOfferings
