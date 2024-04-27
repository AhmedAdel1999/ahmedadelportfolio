import React, { useEffect, useState } from "react";
import mixitup from "mixitup";
import sitesInfo from "../../db";
import "./portfolio.css"
const Portfolio = () =>{

    const filters = [
        {id:1,label:"ALL"},
        {id:2,label:"REACTJS"},
        {id:3,label:"HTMLCSS"}
    ]

    const[val,setVal]=useState("REACTJS")
    const handelFilter = (e) =>{
        setVal(e.target.value)
    }
    
    useEffect(() => {
        mixitup(".portfolio-items", {
          selectors: {
            target: ".single-item",
          },
          animation: {
            duration: 500
          }
        });
    }, []);

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
                            className={`control mixitup-control ${val===btn.label?"activebtn":""}`}
                            onClick={handelFilter}
                            data-filter={`.${btn.label}`}
                            >
                            {btn.label}
                            </button>
                        )
                    })
                }
            </div>
            <div className="portfolio-items">
                {
                    sitesInfo.map((item)=>{
                        return(
                            <div className={`single-item ${item.class}`} key={item.id}>
                                <div className="item-img">
                                    <img src={item.imgUrl} alt={`${item.siteName} image`} loading="lazy" />
                                    <div className="cover"></div>
                                    <div className="media">
                                        <a href={item.siteUrl} target="_blank" >Live</a>
                                        <a href={item.githubUrl} target="_blank" >Github</a>
                                    </div>
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