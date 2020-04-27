import React from 'react';
import Media from 'react-media';
import { Parallax } from 'react-parallax';

const headerImage = "../images/zach.JPG";
const mobileImage = "../images/zach-mobile2.JPG";

const styling = {
    opacity: '.8'
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <Media query="(min-width: 1001px)" render={() => (
                    <section className="sectionParallaxStyle">
                        <Parallax bgImage={headerImage} style={styling} strength={330}>
                            <div id="scrollHeader">
                                <h1 className="title">Zach Burton</h1>
                                <h4 className="subtitle">Web Developer</h4>
                            </div>
                        </Parallax>
                    </section>
                )} />
                <Media query="(max-width: 1000px)" render={() => (
                    <section className="sectionParallaxStyle">
                        <Parallax bgImage={mobileImage} style={styling} strength={330}>
                            <div id="scrollHeader">
                                <h1 className="title">Zach Burton</h1>
                                <h4 className="subtitle">Web Developer</h4>
                            </div>
                        </Parallax>
                    </section>
                )}/>
            </div>
        );
    }
}

export default Header;