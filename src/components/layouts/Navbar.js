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
                                <li><Link to="/">Technology Store</Link></li>
                                <li><Link to="/">MOSIS</Link></li>
                                <li><Link to="/">Remedial Hours Reporting</Link></li>
                                <li><Link to="/">eDataReports</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;