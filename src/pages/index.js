import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website.</p>
      <Link to="/about">Go to the About Page</Link>
      <p></p>
      <Link to="/superman">Go to the Superman Page</Link>
    </div>
  )
}

export default IndexPage;