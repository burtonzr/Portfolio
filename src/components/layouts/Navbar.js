import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbarStyle">
                <div id="header">
                    <div className="container d-flex">
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/TechStore">Technology Store</Link></li>
                                <li><Link to="/Mosis">MOSIS</Link></li>
                                <li><Link to="/Remedial">Remedial Hours Reporting</Link></li>
                                <li><Link to="/Reports">eDataReports</Link></li>
                                {/*
                                <li className="drop-down"><a href="/">ColdFusion</a>
                                    <ul>
                                        <li><Link to="/TechStore">Technology Store</Link></li>
                                        <li><Link to="/Mosis">MOSIS</Link></li>
                                        <li><Link to="/Remedial">Remedial Hours Reporting</Link></li>
                                        <li><Link to="/Reports">eDataReports</Link></li>
                                    </ul>
                                </li>
                                <li className="drop-down"><a href="/">UCM Projects</a>
                                    <ul>
                                        <li><Link to="/">R&amp;B Marketplace</Link></li>
                                        <li><Link to="/">Issue Ticketing System</Link></li>
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

export default Navbar;