import React, { Component } from 'react';

const TechStoreImage = "../images/techstoreHome.png";

class HeaderTechStore extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-5 col-12 headerStyle">
                        <div className="leftSection">
                            <h1 className="leftGroup">ColdFusion Application</h1>
                            <h4 className="leftTitle">District Technology Store</h4>
                            <span className="leftSpan">January 2019 - June 2019</span>
                        </div>
                    </div>
                    <div className="col-sm-7 col-12 headerStyle">
                        <div className="screenshot-container-parent">
                            <div className="screenshot-container">
                                <img src={TechStoreImage} className="img-fluid" alt="eDataReports Header" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTechStore;