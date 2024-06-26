import React from "react"
import "../../allcourses/courses.css"
import { online } from "../../../dummydata"

import Title from "../../common/title/Title"

const Hservice = () => {
  return (
    <>
      <section className='online' id="service">
        <div className='container'>
          <Title subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hservice