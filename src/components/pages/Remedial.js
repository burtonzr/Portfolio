import React from 'react';
import { Parallax } from 'react-parallax';

const RHR = "../images/RHR.png";

const layer = {
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)'
}

class Remedial extends React.Component {
    render() {
        return (
            <div>
                <Parallax bgImage={RHR} strength={250}>
                    <div style={layer}> 
                        <div id="scrollHeader">
                            <h1 className="titleWhite">ColdFusion Application</h1>
                            <h4 className="subtitleWhite">Remedial Hours Reporting</h4>
                        </div>
                    </div>
                </Parallax>
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