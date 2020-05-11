import React, { Component } from 'react';

const MosisHeader = "../images/MOSISHome.png";

class HeaderMosis extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-5 col-12 headerStyle">
                        <div className="leftSection">
                            <h1 className="leftGroup">ColdFusion Application</h1>
                            <h4 className="leftTitle">MOSIS</h4>
                            <span className="leftSpan">July 2019 - September 2019</span>
                        </div>
                    </div>
                    <div className="col-sm-7 col-12 headerStyle">
                        <div className="screenshot-container-parent">
                            <div className="screenshot-container">
                                <img src={MosisHeader} className="img-fluid" alt="eDataReports Header" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMosis;