import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

const MosisHeader = "../images/MOSISHome.png";

const layer = {
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7'
}

class HeaderMosis extends Component {
    render() {
        return (
            <div>
                <Parallax bgImage={MosisHeader} strength={250}>
                    <div style={layer}>
                        <div id="scrollHeader">
                            <h1 className="title">ColdFusion Application</h1>
                            <h4 className="subtitle">MOSIS</h4>
                            <h6 className="subtitleSpan">July 2019 - September 2019</h6>
                        </div>
                    </div>
                </Parallax>
            </div>
        );
    }
}

export default HeaderMosis;