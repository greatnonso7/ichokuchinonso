import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <p>
      <Link to="/contact/">Contact</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <Header headerText="Hello Gatsby" />
    <p>what a world</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
