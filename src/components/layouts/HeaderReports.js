import React from 'react';
import { Parallax } from 'react-parallax';

const eDataReports = "../images/eDataReports.png";

const layer = {
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)'
}

class HeaderReports extends React.Component {
    render() {
        return (
            <div>
                <Parallax bgImage={eDataReports} strength={250}>
                    <div style={layer}>
                        <div id="scrollHeader">
                            <h1 className="titleWhite">ColdFusion Application</h1>
                            <h4 className="subtitleWhite">eDataReports</h4>
                            <span className="subsubtitleWhite">December 2019 - Present</span>
                        </div>
                    </div>
                </Parallax>
            </div>
        )
    }
}

export default HeaderReports;