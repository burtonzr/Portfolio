import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footerClass">
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
            </div>
        );
    }
}

export default Footer;
