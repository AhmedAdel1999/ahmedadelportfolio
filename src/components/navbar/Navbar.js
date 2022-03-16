import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from "react-responsive";
import "./navbar.css"
const Navbar = () =>{
    const switchToggle = useMediaQuery({maxWidth:992})
    const[toggle,setToggle]=useState(false)
    const[val,setVal]=useState("#about")
    const links=[
        {id:1,label:"#about"},
        {id:2,label:"#skills"},
        {id:3,label:"#education"},
        {id:4,label:"#portfolio"},
    ]

    const handleClick = (e) => {
        e.preventDefault()
        setToggle(false)
        setVal(e.target.name)
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
        window.scrollTo({
            left:0,
            top: location,
        })
      }
    return(
        <nav className="navbar-section">
            <div className="logo">
                <a to="#about">
                    Ahmed Adel
                </a>
            </div>
            {
                switchToggle&&
                <div className="toggler" onClick={()=>setToggle(!toggle)}>
                    {
                        toggle?
                        <FontAwesomeIcon icon={faTimes} />
                        :
                        <FontAwesomeIcon icon={faBars} />
                    }
                </div>
            }
            <ul className={`links ${toggle?"show":""}`}>
                {
                    links.map((item)=>{
                        return(
                            <li key={item.id}>
                                <a onClick={handleClick} 
                                href={item.label}
                                name={item.label}
                                className={`${val===item.label?"active":""}`}
                                >
                                    {item.label.slice(1)}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
export default Navbar