import React from 'react';

var loadjs = require('loadjs');

const editproduct = "../images/editproduct.png";
const viewall     = "../images/viewallorders.png";
const addproduct  = "../images/addproduct.png";

class Reports extends React.Component {
    componentDidMount() {
        loadjs('main.js');
    }

    render() {
        return (
            <div>
                <div className="gridTitle">
                    eDataReports<br />
                    <hr className="sep" />
                    <p>
                        This web application allows specified staff to run batch files and crystal reports.
                    </p>
                </div>
                <div className="gridTitle" style={color1}>
                    Adminstrator Features
                    <hr className="sep" />
                    <p>
                        The staff members that get admistrative access are the Technology Purchaser, 
                        Data Systems staff, and building administrators. 
                    </p>
                </div>
                <div className="features" style={color1}>
                    <div class="row">
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Edit Product</h5>
                            <p className="pt-2">
                                
                            </p>
                            <img src={editproduct} width="90%" className="img-fluid" />
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Add Product</h5>
                            <p className="pt-2">
                               
                            </p>
                            <img src={addproduct} className="img-fluid" />
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>View All Orders</h5>
                            <p className="pt-2">
                                
                            </p>
                            <img src={viewall} className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="gridTitle" style={color1}>
                    User Features
                    <hr className="sep" />
                    <p>
                        Regular users include most staff members that might need technology parts or equipment, 
                        like a new laptop or power adapter. 
                    </p>
                </div>
                <div className="features" style={color1}>
                    <div class="row">
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Add to Cart</h5>
                            <p className="pt-2">
                                
                            </p>
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Create Multiple Carts</h5>
                            <p className="pt-2">
                                
                            </p>
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Add Custom Product to Cart</h5>
                            <p className="pt-2">
                               
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const centerFeatureTitle = {
    textAlign: 'center'
}

const color1 = {
    backgroundColor: '#ecf2f9'
}

export default Reports;