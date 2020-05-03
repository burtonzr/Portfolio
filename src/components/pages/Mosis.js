import React, { Component } from 'react';

var loadjs = require('loadjs');

const editproduct = "../images/editproduct.png";
const viewall     = "../images/viewallorders.png";
const addproduct  = "../images/addproduct.png";
const mountain    = "../images/mountainbackground.jpg";

class Mosis extends Component {
    componentDidMount() {
        loadjs('main.js');
    }

    render() {
        return (
            <div>
                <div className="gridTitle">
                    MOSIS<br />
                    <hr className="sep" />
                    <p>
                        The MOSIS application collects data, course information, and student assignments for traveling educators. 
                        This information will be sent to the Missouri Department of Elementary and Secondary Education (DESE). 
                        It is written in ColdFusion, JavaScript (jQuery), and SQL Server.
                    </p>
                </div>
                <div className="mountainBackground">
                    <div className="mountainText">
                        <h1>Administrator Features</h1>
                        <p>
                            The staff members that get administrative access are the Technology Purchaser, 
                            Data Systems staff, and building administrators. 
                        </p>
                    </div>
                </div>
                <div className="features">
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
                <div className="mountainBackground">
                    <div className="mountainText">
                        <h1>User Features</h1>
                        <p>
                            Regular users include most staff members that might need technology parts or equipment, 
                            like a new laptop or power adapter. 
                        </p>
                    </div>
                </div>
                <div className="features">
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

const mountainBackground = {
    backgroundImage: 'url(' + mountain + ')',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    opacity: '0.6'
}

export default Mosis;