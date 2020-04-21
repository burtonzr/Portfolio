import React, { Component } from 'react';
import Benefits from './Benefits';
import BCMS from './BCMS';

const BenefitsImage = "../benefitsHomepage.jpeg";
const BCMSImage     = "../bcmsHomepage.png";

class Home extends Component {
    render() {
        return (
            <div>
                <section className="sectionStyle" style={{marginBottom: '400px'}}>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <a href={Benefits} style={aTag}>
                                <img src={BenefitsImage} />
                            </a>
                        </div>
                        <div className="col-12 col-sm-6">
                            <a href={BCMS} style={aTag}>
                                <img src={BCMSImage} />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const aTag = {
    textDecoration: 'none'
}

export default Home;