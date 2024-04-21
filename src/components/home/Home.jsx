import React from 'react'
import AboutCard from '../about/AboutCard'
import CoursesCard from '../allcourses/CoursesCard'
import Hservice from './hero/Hservice'
import Hero from './hero/Hero'
import Hinternship from './hero/Hinternship'
import Contact from '../contact/Contact'
import Hcontact from './hero/Hcontact'

const Home = () => {
  return (
    <>
       <Hero/>
       <AboutCard/>
       <Hservice/>
       <Hinternship/>
       <Hcontact/>
    </>
  )
}

export default Home