import React from "react"
import Heading from "../common/title/Title"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./AWrapper"
import Title from "../common/title/Title"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome' id="about">
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.jpg' alt='' />
          </div>
          <div className='right row'>
            <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  )
}

export default AboutCard