import React, { Component } from "react";
import { Location } from "@reach/router";
import { Link } from "gatsby";
import { FiMenu, FiX, FiMessageCircle } from "react-icons/fi";
import "./Nav.css";

export class Navigation extends Component {
  state = {
    active: false,
    currentPath: false,
  };

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname });

  handleMenuToggle = () => this.setState({ active: !this.state.active });

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle();

  render() {
    const { active } = this.state,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? "active" : ""
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      );

    return (
      <nav className={`Nav ${active ? "Nav-active" : ""}`}>
        <div className="Nav--Container">
          <Link to="/" onClick={this.handleLinkClick}>
            Hi
          </Link>
          <div className="Nav--Links">
            <a href="/" className="NavLink">
              Hi
            </a>
            <div className="row">
              <a href="/contact/" className="NavLink">
                <FiMessageCircle size="40px" />
              </a>
            </div>
          </div>

          <button
            className="Nav--MenuButton"
            aria-label="Menu Toggle"
            onClick={this.handleMenuToggle}
          >
            {active ? <FiX size="1rem" /> : <FiMenu size="1rem" className="" />}
          </button>
        </div>
      </nav>
    );
  }
}

export default () => (
  <Location>{(route) => <Navigation {...route} />}</Location>
);
