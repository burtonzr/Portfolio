import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbarStyle">
                <div id="header">
                    <div className="container d-flex">
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li><NavLink exact={true} activeStyle={activeLink} activeClassName="is-active" to="/">Home</NavLink></li>
                                <li><NavLink activeStyle={activeLink} activeClassName="is-active" to="/TechStore">Technology Store</NavLink></li>
                                <li><NavLink activeStyle={activeLink} activeClassName="is-active" to="/Mosis">MOSIS</NavLink></li>
                                <li><NavLink activeStyle={activeLink} activeClassName="is-active" to="/Remedial">Remedial Hours Reporting</NavLink></li>
                                <li><NavLink activeStyle={activeLink} activeClassName="is-active" to="/Reports">eDataReports</NavLink></li>
                                {/*
                                <li className="drop-down"><a href="/">ColdFusion</a>
                                    <ul>
                                        <li><Link to="/TechStore">Technology Store</Link></li>
                                        <li><Link to="/Mosis">MOSIS</Link></li>
                                        <li><Link to="/Remedial">Remedial Hours Reporting</Link></li>
                                        <li><Link to="/Reports">eDataReports</Link></li>
                                    </ul>
                                </li>
                                */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

const activeLink = {
    color: '#000000',
    fontWeight: '800'
}

export default Navbar;