import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

const headerImage = "../images/my-photo.jfif";
const mobileImage = "../images/mobileSeattleHeader.jfif";

const styling = {
    opacity: '.8'
}

class Header extends Component {
    render() {
        return (
            <div>
                <section className="sectionParallaxStyle">
                    <Parallax bgImage={headerImage} style={styling} strength={300}>
                        <div id="scrollHeader">
                            <h1 className="title">Zach Burton</h1>
                            <h4 className="subtitle">Web Developer</h4>
                        </div>
                    </Parallax>
                </section>
            </div>
        )
    }
}

export default Header;