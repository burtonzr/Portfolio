import React from 'react';

var loadjs = require('loadjs');

class Reports extends React.Component {
    componentDidMount() {
        loadjs('main.js');
    }

    render() {
        return (
            <div>
                <div className="gridTitle">
                    eDataReports<br />
                    <hr className="sep" />
                    <p>
                        This web application allows specified staff to run batch files and crystal reports.
                    </p>
                </div>
            </div>
        );
    }
}

export default Reports;