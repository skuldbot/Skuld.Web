import React from 'react'
import { NavLink } from 'react-router-dom';

export default class SideBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            visible: true  
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({visible: !this.state.visible})
    }

    render () {
        return (
            <div className="sidebar">
                <div className="navbar navbar-dark">
                    <NavLink to="/home" className="nav-link" style={{textAlign:"left",marginLeft:"-12.5px"}}><span className="fas fa-home"></span> Skuld</NavLink>
                    <button className="navbar-toggler" onClick={this.toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {this.state.visible ? (
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink activeClassName='active' className="nav-link" to="/commands">
                                <span className="fas fa-terminal"></span> Commands
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='active' className="nav-link" to="/credits">
                                <span className="fas fa-users"></span> Credits
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="//dashboard.skuldbot.uk">
                                <span className="fas fa-tachometer-alt"></span> Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='active' className="nav-link" to="/leaderboard">
                                <span className="fas fa-list-ol"></span> Leaderboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='active' className="nav-link" to="/legal">
                                <span className="fas fa-balance-scale"></span> Legal
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='active' className="nav-link" to="/stats">
                                <span className="fas fa-chart-area"></span> Stats
                            </NavLink>
                        </li>
                    </ul>
                ) : <br style={{display:"none"}} />}
            </div>
        );
    }
}