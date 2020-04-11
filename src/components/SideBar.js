import React from "react";
import { NavLink } from "react-router-dom";
import { isMobile } from "react-device-detect";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: !isMobile || window.innerWidth > 767.98,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if ((!isMobile && !this.state.visible) || window.innerWidth > 767.98) {
      this.setState({ visible: true });
    } else if (isMobile || window.innerWidth <= 767.98) {
      this.setState({ visible: false });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  toggleMenu() {
    this.setState({ visible: !this.state.visible });
  }

  hideMenu() {
    if (isMobile || window.innerWidth <= 767.98) {
      this.setState({ visible: false });
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="navbar navbar-dark">
          <NavLink to="/home" className="nav-link" onClick={this.hideMenu}>
            <span className="fas fa-home"></span> Skuld
          </NavLink>
          <button className="navbar-toggler" onClick={this.toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {this.state.visible ? (
          <ul className="nav flex-column">
            <li className="nav-item" onClick={this.hideMenu}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/commands"
              >
                <span className="fas fa-terminal"></span> Commands
              </NavLink>
            </li>
            <li className="nav-item" onClick={this.hideMenu}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/credits"
              >
                <span className="fas fa-users"></span> Credits
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="//dashboard.skuldbot.uk">
                <span className="fas fa-tachometer-alt"></span> Dashboard
              </a>
            </li>
            <li className="nav-item" onClick={this.hideMenu}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/legal"
              >
                <span className="fas fa-balance-scale"></span> Legal
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="//stats.skuldbot.uk">
                <span className="fas fa-chart-area"></span> Stats
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="//status.skuldbot.uk">
                <span className="fas fa-signal"></span> Status
              </a>
            </li>
          </ul>
        ) : (
          <br style={{ display: "none" }} />
        )}
      </div>
    );
  }
}
