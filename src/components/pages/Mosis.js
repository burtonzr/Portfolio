import React, { Component } from 'react';

var loadjs = require('loadjs');

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
            </div>
        );
    }
}

export default Mosis;