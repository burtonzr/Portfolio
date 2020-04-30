import React, { Component } from 'react';

var loadjs = require('loadjs');

const editproduct = "../images/editproduct.png";
const viewall     = "../images/viewallorders.png";
const addproduct  = "../images/addproduct.png";

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
                        Data Systems staff, and building administrators. 
                    </p>
                </div>
                <div className="features" style={color1}>
                    <div class="row">
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Edit Product</h5>
                            <p className="pt-2">
                                This feature allows the Technology Purchaser to click the edit product
                                button of the product that they want to edit and then they can update the 
                                name, description, model number, status, image, etc.. 
                            </p>
                            <img src={editproduct} width="90%" className="img-fluid" />
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Add Product</h5>
                            <p className="pt-2">
                                Whenever a popular product is bought by staff, the Technology Purchaser will
                                add that product to the store so that users don't have to create custom products. 
                            </p>
                            <img src={addproduct} className="img-fluid" />
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>View All Orders</h5>
                            <p className="pt-2">
                                The Technology Purchaser uses this table to see the status of orders, the total price of a 
                                order, and building information. The Technology Purchaser can cancell a order by changing the status
                                to cancelled. 
                            </p>
                            <img src={viewall} className="img-fluid" />
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
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Add to Cart</h5>
                            <p className="pt-2">
                                A user can simple add a product to their cart and then they can view
                                there cart at checkout. Ever time you add a product to your cart, you get a confirmation
                                from the shopping cart to notify you that the product was added. 
                            </p>
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Create Multiple Carts</h5>
                            <p className="pt-2">
                                You have the ability to create mutiple carts. The only time you 
                                need to create more than one cart is if some of the products in your 
                                cart are going to a different location. When completing checkout, you have to 
                                specfiy the building and room number that the order will be delivered to. 
                            </p>
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Add Custom Product to Cart</h5>
                            <p className="pt-2">
                                If you need to purchase a product that does not exist in the store, you can create custom product. 
                                All you have to do is specify the title of the product, the price, quantity, and a url of where the product 
                                is on the Internet. Then, you can add it to your cart. 
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