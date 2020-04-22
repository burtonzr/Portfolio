import React, { Component } from 'react';

const BenefitsImage = "../benefitsHomepage.jpeg";
const BCMSImage     = "../bcmsHomepage.png";
const TechStore     = "../techstoreHome.png";
const MOSIS         = "../MOSISHome.png";

class Home extends Component {
    render() {
        return (
            <div>
                <section className="sectionStyle" style={{marginBottom: '400px'}}>
                    <div style={gridTitle}>
                        <h1>Wordpress</h1>
                    </div>
                    <div className="row">
                        <div className="homeGrid col-12 col-sm-6" style={{backgroundImage: "url(" + BenefitsImage + ")"}}>
                            <a rel="noopener noreferrer" href='/'>
                                Lee's Summit R-7 Benefits
                            </a>
                        </div>
                        <div className="homeGrid col-12 col-sm-6" style={{backgroundImage: "url(" + BCMSImage + ")"}}>
                            <a rel="noopener noreferrer" href='/'>
                                Bernard Campbell Middle School
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="homeGrid col-12 col-sm-6" style={{backgroundImage: "url(" + TechStore + ")"}}>
                            <a rel="noopener noreferrer" href='/'>
                                <h3>Technology Store</h3>
                            </a>
                        </div>
                        <div className="homeGrid col-12 col-sm-6" style={{backgroundImage: "url(" + MOSIS + ")"}}>
                            <a rel="noopener noreferrer" href='/'>
                                <h3>MOSIS</h3>
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
    
}

export default Home;