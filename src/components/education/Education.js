import React from "react";
import "./education.css"
const Education = () =>{
    return(
        <div className="education-section" id="education">
            <div className="education-head">
               <p>Where I Learn</p>
               <h2>My Education</h2>
            </div>
            <div className="education-body">
                <div className="rightside">
                    <div className="content">
                        <div>computer science</div>
                        <p>
                            I,m studying at The Faculty Of Computing 
                            And Information Department Of Computer 
                            Science in the final semester
                        </p>
                    </div>
                </div>
                <div className="leftside">
                    <div className="content">
                        <div>experience</div>
                        <p>
                            I gain all of my experience in The 
                            Front-End Developement with self studying
                            from online courses and my own projects
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education;