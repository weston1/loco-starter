import React from "react"
import PropTypes from "prop-types"
import Image from "./image"
import "./PageHeader.css"

const PageHeader = ({ backgroundImage }) => {
  return (
    <div className="PageHeader relative">
      <div className="container relative col-lg-5 mx-auto">
        <h1 className="PageHeader--Title">Replace</h1>
        <h2 data-scroll data-scroll-speed="1">
          Replace
        </h2>
        <p data-scroll data-scroll-speed="2">
          Hello replace
        </p>
      </div>
    </div>
  )
}

export default PageHeader
