import React from "react";
import LightSpeed from 'react-reveal/LightSpeed';
import "./skills.css"
const Skills = () =>{
    return(
        <div className="skills-section" id="skills">
           <div className="skills-header">
               <p>What I am good at</p>
               <h2>My Skills</h2>
           </div>
           <div className="main-skills">
               <LightSpeed cascade>javascrip</LightSpeed>
               <LightSpeed cascade>typescript</LightSpeed>
               <LightSpeed cascade>react js</LightSpeed>
               <LightSpeed cascade>redux toolkit</LightSpeed>
               <LightSpeed cascade>context api</LightSpeed>
               <LightSpeed cascade>react hooks</LightSpeed>
               <LightSpeed cascade>react query</LightSpeed>
               <LightSpeed cascade>restful api</LightSpeed>
               <LightSpeed cascade>material ui</LightSpeed>
               <LightSpeed cascade>styled components</LightSpeed>
               <LightSpeed cascade>framer motion</LightSpeed>
               <LightSpeed cascade>git,Github</LightSpeed>
               <LightSpeed cascade>html</LightSpeed>
               <LightSpeed cascade>css</LightSpeed>
               <LightSpeed cascade>sass</LightSpeed>
               <LightSpeed cascade>tailwind css</LightSpeed>
               <LightSpeed cascade>jquery</LightSpeed>
               <LightSpeed cascade>bootstrap</LightSpeed>
               <LightSpeed cascade>json</LightSpeed>
            </div>
        </div>
    )
}
export default Skills