import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default AboutPage