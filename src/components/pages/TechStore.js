import React, { Component } from 'react';

var loadjs = require('loadjs');

const editproduct = "../images/editproduct.png";

class TechStore extends Component {

    componentDidMount() {
        loadjs('main.js');
    }

    render() {
        return (
            <div>
                <div className="gridTitle">
                    District Technology Store
                    <hr className="sep" />
                    <p>
                        I developed the new District Technology Store, which is a service catalog/e-commerce website that allows technology specialists and staff to purchase technology parts and equipment. 
                        This application uses Google Authentication (OAuth2 API) to check if the user has a proper Google Account and is a LSR7 staff member. 
                        The application was developed using ColdFusion, JavaScript (jQuery), and SQL Server.
                    </p>
                </div>
                <div className="gridTitle" style={color1}>
                    Adminstrator Features
                    <hr className="sep" />
                    <p>
                        The staff members that get admistrative access are the Technology Purchaser, 
                        Data Systems staff, and building adminstrators. 
                    </p>
                </div>
                <div className="features" style={color1}>
                    <div class="row">
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3">
                            <h5 style={centerFeatureTitle}>Edit Product</h5>
                            <p className="pt-2">
                                This feature allows the Technology Purchaser to click the edit product
                                button of the product that they want to edit and then they can update the 
                                name, description, model number, status, image, etc.. 
                            </p>
                            <img src={editproduct} className="img-fluid" />
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3">
                            <h5 style={centerFeatureTitle}>Add Product</h5>
                            <p className="pt-2">

                            </p>
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3">
                            <h5 style={centerFeatureTitle}>View All Orders</h5>
                            <p className="pt-2">

                            </p>
                        </div>
                    </div>
                </div>
                <div className="gridTitle" style={color1}>
                    Average User Features
                    <hr className="sep" />
                    <p>
                        Regular users include most staff members that might need technology parts or equipment, 
                        like a new laptop or power adapter. 
                    </p>
                </div>
                <div className="features" style={color1}>
                    <div class="row">
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4">
                            <h5 style={centerFeatureTitle}>Add to Cart</h5>
                            <p className="pt-2">
                                This feature allows the Technology Purchaser to click the edit product
                                button of the product that they want to edit and then they can update the 
                                name, description, model number, status, image, etc.. 
                            </p>
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4">
                            <h5 style={centerFeatureTitle}>Create Multiple Carts</h5>
                            <p className="pt-2">
                                This feature allows the Technology Purchaser to click the edit product
                                button of the product that they want to edit and then they can update the 
                                name, description, model number, status, image, etc.. 
                            </p>
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4">
                            <h5 style={centerFeatureTitle}>Add Custom Product to Cart</h5>
                            <p className="pt-2">
                                This feature allows the Technology Purchaser to click the edit product
                                button of the product that they want to edit and then they can update the 
                                name, description, model number, status, image, etc.. 
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

export default TechStore;