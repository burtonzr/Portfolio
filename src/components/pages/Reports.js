import React from 'react';
import { Parallax } from 'react-parallax';

const eDataReports = "../images/eDataReports.png";

class Reports extends React.Component {
    render() {
        return (
            <div>
                <section className="sectionParallaxStyle">
                    <Parallax bgImage={eDataReports} strength={250}>
                        <div id="scrollHeader">
                            <h1 className="title">ColdFusion Application</h1>
                            <h4 className="subtitle">eDataReports</h4>
                        </div>
                    </Parallax>
                </section>
                <div className="gridTitle">
                    eDataReports<br />
                    <hr className="sep" />
                    <p>
                        This web application that allows specified staff to run batch files and crystal reports.
                    </p>
                </div>
            </div>
        );
    }
}

export default Reports;