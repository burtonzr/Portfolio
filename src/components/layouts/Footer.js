import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="row text-center">
                        <div className="col-12 col-sm-6 mt-2">
                            <h2>
                                <button className="footerButton">
                                    <a href="https://github.com/burtonzr" target="_blank">GitHub</a>
                                </button>
                            </h2>
                        </div>
                        <div className="col-12 col-sm-6 mt-2">
                            <h2>
                                <button className="footerButton">
                                    <a href="https://www.linkedin.com/in/zachary-burton/" target="_blank">LinkedIn</a>
                                </button>
                            </h2>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;