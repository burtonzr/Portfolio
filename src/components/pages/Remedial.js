import React from 'react';

var loadjs = require('loadjs');

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
            </div>
        );
    }
}

export default Remedial;