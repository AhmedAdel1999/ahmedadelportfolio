import React, { useState } from "react";
import sitesInfo from "../../db";
import "./portfolio.css"
const Portfolio = () =>{
    const[val,setVal]=useState("ALL")
    const[final,setFinal]=useState([...sitesInfo])
    const filters = [
        {id:1,label:"ALL"},
        {id:2,label:"REACTJS"},
        {id:3,label:"HTML/CSS"}
    ]
    const handelFilter = (e) =>{
       setVal(e.target.value)
       if(e.target.value==="ALL"){
           setFinal([...sitesInfo])
       }else{
        setFinal([...sitesInfo.filter((x)=>x.label===e.target.value)])
       }
    }
    return(
        <div className="portfolio-section" id="portfolio">
            <div className="portfolio-head">
                <p>This is my job</p>
                <h2>My Portfolio</h2>
            </div>
            <div className="filters">
                {
                    filters.map((btn)=>{
                        return(
                            <button key={btn.id} value={btn.label}
                            className={`${val===btn.label?"activebtn":""}`}
                            onClick={handelFilter}>
                            {btn.label}
                            </button>
                        )
                    })
                }
            </div>
            <div className="portfolio-items">
                {
                    final.map((item)=>{
                        return(
                            <div className="single-item" key={item.id}>
                                <div className="item-img">
                                    <img src={item.imgUrl} alt="" loading="lazy" />
                                    <div></div>
                                    <a href={item.siteUrl} target="_blank" >view</a>
                                </div>
                                <div className="item-footer">
                                    <span>{item.siteName}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Portfolio;