import React from 'react';
import { Parallax } from 'react-parallax';

const RHR = "../images/RHR.png";

const layer = {
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)'
}

class HeaderRemedial extends React.Component {
    render() {
        return (
            <div>
                <Parallax bgImage={RHR} strength={250}>
                    <div style={layer}> 
                        <div id="scrollHeader">
                            <h1 className="titleWhite">ColdFusion Application</h1>
                            <h4 className="subtitleWhite">Remedial Hours Reporting</h4>
                            <span className="subsubtitleWhite">October 2019 - December 2019</span>
                        </div>
                    </div>
                </Parallax>
            </div>
        );
    }
}

export default HeaderRemedial;