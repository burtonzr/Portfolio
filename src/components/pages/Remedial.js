import React from 'react';

var loadjs = require('loadjs');

const editproduct = "../images/editproduct.png";
const viewall     = "../images/viewallorders.png";
const addproduct  = "../images/addproduct.png";

class Remedial extends React.Component {
    componentDidMount() {
        loadjs('main.js');
    }

    render() {
        return (
            <div>
                <div className="gridTitle">
                    Remedial Hours Reporting<br />
                    <hr className="sep" />
                    <p>
                        This application allows kindergarten through 6th grade teachers to record tutoring minutes for students. 
                        The total minutes will get reported to DESE (Missouri Department of Elementary and Secondary Education).  The original application was written in .NET. I redeveloped the application using ColdFusion, JavaScript, and SQL Server using the Model-View-Controller architectural pattern. 
                        Google authentication was implemented to improve security. 
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
                            <img src={editproduct} alt="" width="90%" className="img-fluid" />
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Add Product</h5>
                            <p className="pt-2">
                                
                            </p>
                            <img src={addproduct} alt="" className="img-fluid" />
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>View All Orders</h5>
                            <p className="pt-2">
                                
                            </p>
                            <img src={viewall} alt="" className="img-fluid" />
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

export default Remedial;