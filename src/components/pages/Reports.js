import React from 'react';

var loadjs = require('loadjs');

const reportuser  = "../images/reportuser.png";
const reportadmin = "../images/reportadmin.png";

class Reports extends React.Component {
    componentDidMount() {
        loadjs('main.js');
    }

    render() {
        return (
            <div>
                <section className="content">
                    <div className="gridTitle">
                        eDataReports<br />
                        <hr className="sep" />
                        <p>
                            This application allows technology staff to run batch files and crystal reports.  
                        </p>
                    </div>
                    <div className="mountainBackground">
                        <div className="mountainText">
                            <h1>Administrator Features</h1>
                            <p>
                                Administrators include web developers, data support, and the data systems director. These staff members have to be manually added as administrators.
                                They can add reports, add users, and view report logs. If a teacher or non-technology staff member needs to run reports, then they need to contact
                                an administrator so that an administrator can maually add them to the user table. 
                            </p>
                        </div>
                    </div>
                    <div className="features" style={backgroundGrey}>
                        <p className="summary">
                            When adding reports, you have to specify what the url parameters are for the report. 
                        </p>
                        <div className="container">
                            <div className="rounded hoverEffect">
                                <img src={reportadmin} alt="Admin View to Add Reports" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="mountainBackground">
                        <div className="mountainText">
                            <h1>User Features</h1>
                            <p>
                                Regular users, which include teachers or HR staff, are only using the application to run and view report information. 
                                If they are a teacher at Lee's Summit High School, then they can only view secondary reports and reports associated with Lee's Summit High School.
                                Only administrators can view all report categories and reports associated with all schools.  
                            </p>
                        </div>
                    </div>
                    <div className="features" style={backgroundGrey}>
                        <p className="summary">
                            When a user logs into the application, the reports are filtered by what their primary school is and the school quarter. Then, they can 
                            choose which report that they what to run based on what they have access to. 
                        </p>
                        <div className="container">
                            <div className="rounded hoverEffect">
                                <img src={reportuser} alt="Regular User View to Run Reports" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="row text-center">
                        <div className="col-12 col-sm-6 mt-2">
                            <h2>
                                <button className="footerButton">
                                    <a rel="noopener noreferrer" href="https://github.com/burtonzr" target="_blank">GitHub</a>
                                </button>
                            </h2>
                        </div>
                        <div className="col-12 col-sm-6 mt-2">
                            <h2>
                                <button className="footerButton">
                                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/zachary-burton/" target="_blank">LinkedIn</a>
                                </button>
                            </h2>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

const backgroundGrey = {
    backgroundColor: 'rgba(217, 217, 217, 0.5)'
}

export default Reports;