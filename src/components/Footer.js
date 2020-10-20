import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.slangww.com">some chronic.</a>
    </footer>
  </>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
