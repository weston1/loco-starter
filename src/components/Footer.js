import PropTypes from "prop-types";
import React from "react";
import "./Footer.css";

const Footer = ({ siteTitle }) => (
  <div className="page-footer">
    <div>LOGO</div>
    <footer>
      © {new Date().getFullYear()}, Made with
      {` `}
      <a href="https://www.coastal-division.com">some chronic.</a>
    </footer>
  </div>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
