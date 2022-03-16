import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faLocationDot,faEnvelope,faStar,faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import "./about.css"
const About = () =>{
    return(
        <div className="about-section" id="about">
            <div className="about-head">
                <p>My Little Story</p>
                <h2>About Me</h2>
            </div>
            <div className="presentation">
                <p>
                    I am a talented Front end Developer From Egypt.
                    I develop websites. I,m in The Final Semester in Computer Science.
                    Interested in trying to keep up with modern and modern designs, 
                    and taking care of web features, while maintaining ease of use, 
                    and maximizing the benefit of simplicity and elegance, are the controls 
                    that we commit to in all my projects.
                </p>
            </div>
            <div className="info">
               <div className="personal-info">
                   <h3>personal information</h3>
                   <table>
                       <tbody>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faPen} />
                                    <span>Full Name</span>
                                </td>
                                <td>Ahmed Adel Elsayed</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faStar} />
                                    <span>D.O.B</span>
                                </td>
                                <td>August 15, 1999</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <span>ADDRESS</span>
                                </td>
                                <td>Egypt, Cairo</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span>E-MAIL</span>
                                </td>
                                <td>ahmedmansour.20172021@gmail.com</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                    <span>PHONE</span>
                                </td>
                                <td>01129580881</td>
                            </tr>
                       </tbody>
                   </table>
               </div>
               <div className="languages">
                   <h3>languages</h3>
                   <div className="arabic">
                       <h4>Arabic</h4>
                       <div className="progress">
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                        </div>
                    </div>
                   <div className="english">
                       <h4>English</h4>
                       <div className="progress">
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About