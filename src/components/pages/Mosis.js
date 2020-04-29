import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

const MosisHeader = "../images/MOSISHome.png";

const layer = {
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7'
}

class Mosis extends Component {
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