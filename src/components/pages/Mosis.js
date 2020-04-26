import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

const MosisHeader = "../images/MOSISHome.png";

const layer = {
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7'
}

class Mosis extends Component {
    render() {
        return (
            <div>
                <Parallax bgImage={MosisHeader} strength={200}>
                    <div style={layer}>
                        <div id="scrollHeader">
                            <h1 id="titleTechstore">ColdFusion Application</h1>
                            <h4 id="subtitleTechstore">MOSIS</h4>
                        </div>
                    </div>
                </Parallax>
                <div className="mt-5">
                    <h1 className="text-center">MOSIS</h1>
                </div>
            </div>
        );
    }
}

export default Mosis;