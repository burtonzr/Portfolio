import React, { Component } from 'react';

const BenefitsImage = "../benefitsHomepage.jpeg";
const BCMSImage     = "../bcmsHomepage.png";
const BroncosMedia  = "../broncosmedia.png";
const lsr7district  = "../lsr7district.png";
const TechStore     = "../techstoreHome.png";
const MOSIS         = "../MOSISHome.png";

class Home extends Component {
    render() {
        return (
            <div>
                <section className="sectionStyle" style={{marginBottom: '850px'}}>
                    <div style={gridTitle}>
                        Wordpress
                        <hr className="sep" />
                    </div>
                    <div className="row">
                        <div className="homeGrid col-12 col-sm-6" style={{backgroundImage: "url(" + BenefitsImage + ")"}}>
                            <a rel="noopener noreferrer" className="visibleText" href='/'>
                                Lee's Summit R-7 Benefits
                            </a>
                        </div>
                        <div className="homeGrid col-12 col-sm-6" style={{backgroundImage: "url(" + BCMSImage + ")"}}>
                            <a rel="noopener noreferrer" className="visibleText" href='/'>
                                Bernard Campbell Middle School
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="homeGrid col-12 col-sm-6" style={{backgroundImage: "url(" + BroncosMedia + ")"}}>
                            <a rel="noopener noreferrer" className="visibleText" href='/'>
                                Broncos Media
                            </a>
                        </div>
                        <div className="homeGrid col-12 col-sm-6" style={{backgroundImage: "url(" + lsr7district + ")"}}>
                            <a rel="noopener noreferrer" className="visibleText" href='/'>
                                LSR7 District
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="homeGrid col-12 col-sm-6" style={{backgroundImage: "url(" + TechStore + ")"}}>
                            <a rel="noopener noreferrer" className="visibleText" href='/'>
                                Technology Store
                            </a>
                        </div>
                        <div className="homeGrid col-12 col-sm-6" style={{backgroundImage: "url(" + MOSIS + ")"}}>
                            <a rel="noopener noreferrer" className="visibleText" href='/'>
                                MOSIS
                            </a>
                        </div>
                    </div>
                </section>
                <div style={{backgroundColor: 'white'}}>
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
            </div>
        )
    }
}

const gridTitle = {
    fontSize: '50px',
    position: 'relative',
    float: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    padding: '2em 0'
}

export default Home;