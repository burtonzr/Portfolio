import React from 'react';
import { Parallax } from 'react-parallax';

const RHR = "../images/RHR.png";

class Remedial extends React.Component {
    render() {
        return (
            <div>
                <section className="sectionParallaxStyle">
                    <Parallax bgImage={RHR} strength={250}>
                        <div id="scrollHeader">
                            <h1 className="title">ColdFusion Application</h1>
                            <h4 className="subtitle">Remedial Hours Reporting</h4>
                        </div>
                    </Parallax>
                </section>
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