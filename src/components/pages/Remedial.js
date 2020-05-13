import React from 'react';

var loadjs = require('loadjs');

const admin = "../images/admin.png";
const user1 = "../images/user1.png";
const user  = "../images/user.png";

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
                <div className="features" style={backgroundGrey}>
                    <div className="container">
                        <div className="rounded hoverEffect">
                            <img src={admin} className="img-fluid" />
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
                <div className="features" style={backgroundGrey}>
                    <div className="container">
                        <div className="rounded hoverEffect">
                            <img src={user} className="img-fluid" />
                            <img src={user1} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const backgroundGrey = {
    backgroundColor: 'rgba(217, 217, 217, 0.5)'
}

export default Remedial;