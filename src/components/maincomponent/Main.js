import React from "react";
import About from "../about/About.js"
import ProfileInfo from "../profileInfo/profileInfo.js";
import Education from "../education/Education.js";
import Skills from "../skills/Skills.js";
import "./main.css"
import Portfolio from "../portfolio/Portfolio.js";
const Main = () =>{
    return(
        <div className="main-section">
            <ProfileInfo />
            <div className="main-content">
                <About />
                <Skills />
                <Education />
                <Portfolio />
            </div>
        </div>
    )
}
export default Main;