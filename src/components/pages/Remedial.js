import React from 'react';

var loadjs = require('loadjs');

const admin = "../images/admin.png";
const user1 = "../images/user1.png";
const user  = "../images/user.png";
const subj  = "../images/subject.png";

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
                            The staff members that get administrative access are Web Developers, Application Specalists, and the District MOSIS Specialist. 
                        </p>
                    </div>
                </div>
                <div className="features" style={backgroundGrey}>
                    <p className="summary">
                        The District MOSIS Specialist needs to be able to create Excel Spreadsheets of tutoring minutes to create reports. 
                        I used DataTables (Table Plug-In for jQuery) so that the District MOSIS Specialist can search for specific data and create Excel Spreadsheets for reports. 
                        The table where the records are displayed is not shown because it shows student information. 
                    </p>
                    <div className="container">
                        <div className="rounded hoverEffect">
                            <img alt="Admin Screen" src={admin} className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="mountainBackground">
                    <div className="mountainText">
                        <h1>User Features</h1>
                        <p>
                            Regular users are teachers or educators that report tutoring minutes.  
                        </p>
                    </div>
                </div>
                <div className="features" style={backgroundGrey}>
                    <p className="summary">
                        When an educator needs to report tutoring minutes for a student, they will add a student to the application. 
                        An educator can type and search for the student's name and then select all of the days they were tutored. More than one tutoring entry can be entered at once.
                        The date field allows you to select mutiple dates (mutiple select). The table where the records are displayed is not shown because it shows student information. 
                        When you add a student, it automatically grabs their student number and grade level. You can select the subject, rationale, and time frame of the tutoring session. 
                        The Time In and Time Out fields will calcuate the total minutes the student was tutored. 
                    </p>
                    <div className="container">
                        <div className="rounded hoverEffect">
                            <img src={user} alt="Form" className="img-fluid" />
                            <img src={user1} alt="Search" className="img-fluid" />
                            <img src={subj} alt="Table" className="img-fluid" />
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