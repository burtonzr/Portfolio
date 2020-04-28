import React from 'react';
import { Parallax } from 'react-parallax';

const eDataReports = "../images/eDataReports.png";

const layer = {
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)'
}

class Reports extends React.Component {
    render() {
        return (
            <div>
                <Parallax bgImage={eDataReports} strength={250}>
                    <div style={layer}>
                        <div id="scrollHeader">
                            <h1 className="titleWhite">ColdFusion Application</h1>
                            <h4 className="subtitleWhite">eDataReports</h4>
                        </div>
                    </div>
                </Parallax>
                <div className="gridTitle">
                    eDataReports<br />
                    <hr className="sep" />
                    <p>
                        This web application allows specified staff to run batch files and crystal reports.
                    </p>
                </div>
            </div>
        );
    }
}

export default Reports;