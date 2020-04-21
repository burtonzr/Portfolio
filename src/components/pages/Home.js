import React, { Component } from 'react';
import Benefits from './Benefits';
import BCMS from './BCMS';

const BenefitsImage = "../benefitsHomepage.jpeg";
const BCMSImage     = "../bcmsHomepage.png";

class Home extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <a href={Benefits} style={aTag}>
                            <img src={BenefitsImage} />
                        </a>
                    </div>
                    <div class="col-12 col-sm-6">
                        <a href={BCMS} style={aTag}>
                            <img src={BCMSImage} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

const aTag = {
    textDecoration: 'none'
}

export default Home;