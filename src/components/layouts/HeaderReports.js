import React from 'react';

const header = "../images/eDataReports.png";

class HeaderReports extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-5 headerStyle">
                        <div className="leftSection">
                            <h1 className="leftGroup">ColdFusion Application</h1>
                            <h4 className="leftTitle">eDataReports</h4>
                            <span className="leftSpan">December 2019 - May 2020</span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 headerStyle">
                        <div className="screenshot-container-parent">
                            <div className="screenshot-container">
                                <img src={header} className="img-fluid" alt="eDataReports Header" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderReports;