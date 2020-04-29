import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

class TechStore extends Component {
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
            </div>
        );
    }
}

export default TechStore;