import React, { Component } from 'react';

var loadjs = require('loadjs');

const user        = "../images/adduser.png";
const employee    = "../images/addemployee.png";
const filter1     = "../images/filters1.png";
const filter2     = "../images/filters2.png";
const course      = "../images/course.png";
const student     = "../images/student.png";
const print       = "../images/print.png";
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
                            Administrators include Application Specialists and Web Developers that maintain the website.  
                        </p>
                    </div>
                </div>
                <div className="features">
                    <div class="row">
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Add User</h5>
                            <p className="pt-2">
                               This form is where admins add and manage MOSIS users. If a new staff member needs access to the website, 
                               this is where an admin will add them. If a staff member does not need access anymore, their status can be changed to inactive. 
                            </p>
                            <img src={user} alt="Add User" width="90%" className="img-fluid" />
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Add Employee</h5>
                            <p className="pt-2">
                               This form is where admins can add new employees that need to be reported to the Department of Secondary and Elementary Education (DESE).
                               The employee's position, position code, school, and other information are recorded. 
                            </p>
                            <img src={employee} alt="Add Employee" width="81%" className="img-fluid" />
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Search Filters</h5>
                            <p className="pt-2">
                                These search filters make it easy to find employees since there are over 2200 employees stored in the employee table.
                                Every time you change a filter, an ajax function executes a query function in the controller that generates a WHERE clause based on the search information. 
                                This is a smooth way to search for employees. The Search Employee field allows you to type the name of the employee and hitting enter will display 
                                any record with that employee name. 
                            </p>
                            <img src={filter1} alt="Search Filters 1" className="img-fluid" />
                            <img src={filter2} alt="Search Filters 2" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="mountainBackground">
                    <div className="mountainText">
                        <h1>User Features</h1>
                        <p>
                            There are only 17 users that have access to the application. These specific staff members have to
                            be manually added. There job is to record personal information about teachers and students. 
                        </p>
                    </div>
                </div>
                <div className="features">
                    <div class="row">
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Course Assignments</h5>
                            <p className="pt-2">
                               The search fields allow you to search for different Course Assignments. A teacher may have more than one course that they have 
                               been assigned to. The search fields are extremely helpful because there are thousands of course assignments.  
                            </p>
                            <img src={course} alt="Course Assignment" className="img-fluid" />
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Student Assignments</h5>
                            <p className="pt-2">
                                When a traveling teacher is reported to DESE, their students also have to be recorded. 
                                The Save Student form allows you to search and add mutiple students at once in the Select Students field. 
                            </p>
                            <img src={student} alt="Student Assignments" width="83%" className="img-fluid" />
                        </div>
                        <div class="shadow-none rounded col-12 col-sm-6 col-md-4 pt-3 mt-3">
                            <h5 style={centerFeatureTitle}>Printing Course Data</h5>
                            <p className="pt-2">
                                I used the DataTable jQuery Library to make it easy for MOSIS users to create Excel Spreadsheets, PDF, 
                                or print Course Assignment information. 
                            </p>
                            <img src={print} alt="Printing Course Data" className="img-fluid" />
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

export default Mosis;