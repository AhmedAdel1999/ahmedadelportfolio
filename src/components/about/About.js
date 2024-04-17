import React from "react";
import Fade from 'react-reveal/Fade';
import AnimatedText from 'react-animated-text-content';
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
            <AnimatedText
                type="words" // animate words or chars
                animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                }}
                animationType="float"
                interval={0.02}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
                >
                I am a talented React JS Developer. Have more than two years of experience in this field. I develop websites Interested in trying to keep up with modern
                designs, and taking care of web features, while maintaining ease of use, and maximizing the benefit of simplicity
                and elegance, and the controls that we commit to in all my projects.
                </AnimatedText>
                
            </div>
            <div className="info">
               <div className="personal-info">
                   <Fade left>
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
                   </Fade>   
               </div>
               <div className="languages">
                   <Fade right>
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
                   </Fade>
                </div>
            </div>
        </div>
    )
}
export default About