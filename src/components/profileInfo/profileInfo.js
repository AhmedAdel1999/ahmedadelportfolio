import React from "react";
import TypeAnimation from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faWhatsapp,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profileImg from "../../img/ahmed.jpg"
import pdf from "../../img/AhmedAdel_Frontend_CV.pdf"
import "./profileInfo.css"
const ProfileInfo = () =>{
    return(
        <div className="profileInfo">
            <div className="profile-img">
               <img src={profileImg} alt="Ahmed Adel" />
            </div>
            <div className="profile-head">
                <h3>Ahmed Adel</h3>
                <p>Frontend Developer (ReactJS)</p>
            </div>
            <ul className="profile-links">
               <li>
                   <a href="https://www.linkedin.com/in/ahmed-adel-a52210232/" target="_blank">
                       <FontAwesomeIcon icon={faLinkedin} />
                    </a>
               </li>
               <li>
                   <a href="https://github.com/AhmedAdel1999" target="_blank">
                       <FontAwesomeIcon icon={faGithub} />
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