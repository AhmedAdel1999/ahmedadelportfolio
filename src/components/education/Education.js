import React from "react";
import Fade from 'react-reveal/Fade';
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
                    <Fade right>
                        <div className="content">
                            <div>computer science</div>
                            <p>
                                I have graduated From The Faculty Of Computing 
                                And Information, Department Of Computer 
                                Science with good gpa (2018 - 2022)
                            </p>
                        </div>
                    </Fade> 
                </div>
                <div className="leftside">
                    <Fade left>
                        <div className="content">
                            <div>experience</div>
                            <p>
                                <h4 style={{fontWeight:"bold"}}>Lucidya-لوسيديا :</h4><br />
                                it was a data analysis company,we have our own project.
                                that analyzing customer’s  data on social media sites and giving them negative and positive comments.
                                i was working with the frontend team on this project to fix bugs and issues.
                                (1/9/2022 - 10/1/2023)
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
export default Education;