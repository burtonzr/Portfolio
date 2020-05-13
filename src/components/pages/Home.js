import React, { Component } from 'react';

const Benefits      = "../images/benefitsHomepage.png";
const BCMSImage     = "../images/bcmsHomepage.JPG";
const Broncos       = "../images/broncosmedia.png";
const lsr7district  = "../images/lsr7district.png";
const TechStore     = "../images/techstoreHome.png";
const MOSIS         = "../images/MOSISHome.png";
const RHR           = "../images/RHR.png";
const eDataReports  = "../images/eDataReports.png";
const MarketPlace   = "../images/marketplace.JPG";
const IssueTicket   = "../images/issueticketingsystem.JPG";

var loadjs = require('loadjs');

class Home extends Component {
    componentDidMount() {
        loadjs('main.js');
    }
    render() {
        loadjs('main.js');
        return (
            <div>
                <section className="sectionStyle" style={{marginBottom: '850px'}}>
                    <div className="gridTitle">
                        Wordpress
                        <hr className="sep" />
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 view overlay">
                            <img src={Benefits} className="img-fluid" alt="Lee's Summit R-7 Benefits"/>
                            <div className="mask rgba-orange-light">
                                <a className="hoverText" rel="noopener noreferrer" href='/'>
                                    Lee's Summit R-7 Benefits
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 view overlay">
                            <img src={BCMSImage} className="img-fluid" alt="Bernard Campbell Middle School"/>
                            <div className="mask rgba-green-light">
                                <a className="hoverText" rel="noopener noreferrer" target="_blank" href='https://bcms.lsr7.org/'>
                                    Bernard Campbell Middle School
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 view overlay">
                            <img src={Broncos} className="img-fluid" alt="Broncos Media"/>
                            <div className="mask rgba-red-light">
                                <a className="hoverText" rel="noopener noreferrer" target="_blank" href='https://broncomedia.org/'>
                                    Broncos Media
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 view overlay">
                            <img src={lsr7district} className="img-fluid" alt="LSR7 District"/>
                            <div className="mask rgba-blue-light">
                                <a className="hoverText" rel="noopener noreferrer" target="_blank" href='https://lsr7.org/'>
                                    Lee's Summit R-7 District
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="gridTitle">
                        ColdFusion Applications
                        <hr className="sep" />
                        <p>
                            All of the ColdFusion applications I have developed follow the model-view-controller (MVC) architectural pattern. 
                            These applications are internal and can only be viewed by school district staff because of the sensitive student, parent, and staff information they contain. 
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 view overlay">
                            <img src={TechStore} className="img-fluid" alt="Technology Store"/>
                            <div className="mask rgba-yellow-light">
                                <a className="hoverText" rel="noopener noreferrer" href='/Techstore'>
                                    Technology Store
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 view overlay">
                            <img src={MOSIS} className="img-fluid" alt="MOSIS"/>
                            <div className="mask rgba-blue-light">
                                <a className="hoverText" rel="noopener noreferrer" href='/Mosis'>
                                    MOSIS
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 view overlay">
                            <img src={RHR} className="img-fluid" alt="Remedial Hours Reporting"/>
                            <div className="mask rgba-green-light">
                                <a className="hoverText" rel="noopener noreferrer" href='/Remedial'>
                                    Remedial Hours Reporting
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 view overlay">
                            <img src={eDataReports} className="img-fluid" alt="eDataReports"/>
                            <div className="mask rgba-red-light">
                                <a className="hoverText" rel="noopener noreferrer" href='/Reports'>
                                    eDataReports
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="gridTitle">
                        UCM Projects
                        <hr className="sep" />
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 view overlay">
                            <img src={MarketPlace} className="img-fluid" alt="R&amp;B Marketplace"/>
                            <div className="mask rgba-blue-light">
                                <a className="hoverText" rel="noopener noreferrer" target="_blank" href='http://rbmarketplace.herokuapp.com/'>
                                    R&amp;B Marketplace
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 view overlay">
                            <img src={IssueTicket} className="img-fluid" alt="Issue Ticketing System"/>
                            <div className="mask rgba-brown-light">
                                <a className="hoverText" rel="noopener noreferrer" target="_blank" href='http://issueticketingsystem.com/'>
                                    Issue Ticketing System
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="row text-center">
                        <div className="col-12 col-sm-6 mt-2">
                            <h2>
                                <button className="footerButton">
                                    <a rel="noopener noreferrer" href="https://github.com/burtonzr" target="_blank">GitHub</a>
                                </button>
                            </h2>
                        </div>
                        <div className="col-12 col-sm-6 mt-2">
                            <h2>
                                <button className="footerButton">
                                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/zachary-burton/" target="_blank">LinkedIn</a>
                                </button>
                            </h2>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Home;