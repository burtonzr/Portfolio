import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const BenefitsImage = "../benefitsHomepage.jpeg";
const BCMSImage     = "../bcmsHomepage.png";

class Home extends Component {
    render() {
        return (
            <div>
                <section className="sectionStyle" style={{marginBottom: '400px'}}>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <Link to='/' style={{backgroundImage: "url('../benefitsHomepage.jpeg')"}}></Link>
                        </div>
                        <div className="col-12 col-sm-6">
                            <Link to='/' style ={ { backgroundImage: "url("+BCMSImage+")" } }></Link>
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