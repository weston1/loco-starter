import PropTypes from "prop-types";
import React from "react";
import "./Footer.css";

const Footer = ({ siteTitle }) => (
  <div className="page-footer">
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.google.com">some chronic.</a>
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
