import React from 'react';

const RHR = "../images/RHR.png";

class HeaderRemedial extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-5 col-12 headerStyle">
                        <div className="leftSection">
                            <h1 className="leftGroup">ColdFusion Application</h1>
                            <h4 className="leftTitle">Remedial Hours Reporting</h4>
                            <span className="leftSpan">October 2019 - December 2019</span>
                        </div>
                    </div>
                    <div className="col-sm-7 col-12 headerStyle">
                        <div className="screenshot-container-parent">
                            <div className="screenshot-container">
                                <img src={RHR} className="img-fluid" alt="eDataReports Header" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderRemedial;