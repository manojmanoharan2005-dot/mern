import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
      <Link to ='/home'>Home Page</Link>
      <Link to ='/state'>State Page</Link>
    </div>
  )
}

export default About
