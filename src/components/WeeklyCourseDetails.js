import React, { useState } from "react"

const WeeklyCourseDetails = ({ weeks, btnColor, data }) => {
  const [week, setWeek] = useState(1)
  const [isVisible, setVisible] = useState(false)
  const weekArr = []
  const current = `week${week}`
  const borderColor =
    btnColor === "black" ? `weekly_content withBorder` : `weekly_content`
  for (let i = 1; i <= weeks; i++) {
    weekArr.push(i)
  }
  const handleWeek = val => {
    setVisible(true)
    setWeek(val)
  }
  return (
    <div className="weekly_wrapper">
      {weekArr.map(wk => {
        return (
          <button
            className={`weekly_btn ${btnColor}`}
            key={wk}
            onClick={() => handleWeek(wk)}
          >
            {wk}
          </button>
        )
      })}

      {isVisible && (
        <div className={borderColor}>
          <p>
            Week {week}
            <span onClick={() => setVisible(false)} className="close">
              <i className="far fa-window-close fa-2x"></i>
            </span>
          </p>
          <hr />
          {data[current].map(item => {
            return (
              <React.Fragment key={item.id}>
                <p className="topics">
                  <i className="far fa-check-square"></i>
                  {item.content}
                </p>
              </React.Fragment>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default WeeklyCourseDetails
