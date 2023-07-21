import React, { useState } from "react"
import Image1 from "../images/superman_flying.png"
import Image2 from "../images/superman_landing.png"
import { Link } from "gatsby"

const SupermanPage = () => {
    const [image, setImage] = useState(Image1)

    const MakeSupermanFly = () => {
        setImage(Image1)
    }
    const MakeSupermanLand = () => {
        setImage(Image2)
    }
  return (
    <div>
      <h1>Superman Page</h1>
      <button onClick = {MakeSupermanFly}>Fly</button>
      <img src={image} alt = "Not found"/>
      <button onClick = {MakeSupermanLand}>Land</button>
      <p>Welcome to our website.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default SupermanPage;