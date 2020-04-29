import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

const TechStoreImage = "../images/techstoreHome.png";

const layer = {
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)'
}

class HeaderTechStore extends Component {
    render() {
        return (
            <div>
                <Parallax bgImage={TechStoreImage} strength={200}>
                    <div style={layer}>
                        <div id="scrollHeader">
                            <h1 className="titleProject">ColdFusion Application</h1>
                            <h4 className="subtitleProject">District Technology Store</h4>
                            <h6 className="subtitleSpanProject">January 2019 - June 2019</h6>
                        </div>
                    </div>
                </Parallax>
            </div>
        );
    }
}

export default HeaderTechStore;