// import Header from "../components/Header"
// import Footer from "../components/Footer";
// import Content from "../components/Content";
import React, { useState } from 'react';
import HomeSchool from "../components/HomeSchool";

function Home() {
    // const [hovered, setHovered] = useState(false);
    // const toggleHover = () => setHovered(!hovered);

    return (
        <div className="wrapper home">

            {/* <div className={hovered ? 'homeSchool homeNtut' : 'homeSchool homeNtut active'}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}>
                <div className="homeBox text-center">
                    <div className="homeTitle">
                        <h1>IXD</h1>
                    </div>
                    <div className="solgan">
                        CLASS<br />
                        OF<br />
                        WEBSITE DESIGN<br />
                        AND DEVELOPMENT<br />
                    </div>
                    <a href="" className="btn-basic btn-orange">VIEW</a>
                </div>
                <div className="homeElf">
                    <span className="eye"></span>
                    <span className="eye"></span>
                </div>
            </div> */}
            <HomeSchool homeSchool="IXD" id="homeNtut" btnColor="btn-orange" />
            <HomeSchool homeSchool="DTD" id="homeNtue" btnColor="btn-green" />
            {/* <div className={hovered ? 'homeSchool homeNtue' : 'homeSchool homeNtue active'}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}>
                <div className="homeBox text-center">
                    <div className="homeTitle">
                        <h1>DTD</h1>
                    </div>
                    <div className="solgan">
                        CLASS<br />
                        OF<br />
                        WEBSITE DESIGN<br />
                        AND DEVELOPMENT<br />
                    </div>
                    <a href="" className="btn-basic btn-green">VIEW</a>
                </div>
                <div className="homeElf">
                    <span className="eye"></span>
                    <span className="eye"></span>
                </div>
            </div> */}
        </div>
    );
}

export default Home;