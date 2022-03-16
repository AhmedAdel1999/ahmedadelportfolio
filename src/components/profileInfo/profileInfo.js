import React from "react";
import Typical from 'react-typical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faWhatsapp,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profileImg from "../../img/ahmed.jpg"
import pdf from "../../img/AhmedAdelFinalCv.pdf"
import "./profileInfo.css"
const ProfileInfo = () =>{
    return(
        <div className="profileInfo">
            <div className="profile-img">
               <img src={profileImg} alt="Ahmed Adel" />
            </div>
            <div className="profile-head">
                <h3>Ahmed Adel</h3>
                <p>
                    <span>I,M A </span>
                    <Typical
                        steps={['Front-end Developer',1000,'Talanted Programmer',1000]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </p>
            </div>
            <ul className="profile-links">
               <li>
                   <a href="https://www.linkedin.com/in/ahmed-adel-a52210232/" target="_blank">
                       <FontAwesomeIcon icon={faLinkedin} />
                    </a>
               </li>
               <li>
                   <a href="https://www.facebook.com/profile.php?id=100009419612365" target="_blank">
                       <FontAwesomeIcon icon={faFacebook} />
                    </a>
               </li>
               <li>
                   <a href="https://api.whatsapp.com/send?phone=201129580881/" target="_blank">
                       <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
               </li>
            </ul>
            <div className="profile-footer">
                <a href={pdf} download={true}>Download CV</a>
            </div>
        </div>
    )
}
export default ProfileInfo;