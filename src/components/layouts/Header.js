import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

const headerImage = "../my-photo.jfif";
const mobileImage = "../mobileSeattleHeader.jfif";

const styling = {
    opacity: '.8'
}

class Header extends Component {
    render() {
        return (
            <div>
                <section className="sectionStyle">
                    <Parallax bgImage={headerImage} style={styling} strength={450} onScroll={this.handleScroll}>
                        <div id="scrollHeader">
                            <h1 className="title">Hello, I am Zach Burton</h1>
                            <h4 className="subtitle">Web Designer / Web Developer</h4>
                        </div>
                    </Parallax>
                </section>
            </div>
        )
    }
}

export default Header;