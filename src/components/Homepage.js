import React, { useEffect, useRef } from "react";
import {Link} from "react-router-dom"

function Homepage(){
    return(
        <div>
            <div className="home-banner">
                <img src="./img/home-banner.webp" alt="home-banner"></img>
                <div className="contact-us-btn">
                    <Link to="#">
                        <div className="contact-us-text">CONTACT US 
                            <img src="./img/icon-next.webp" alt="icon-next"></img>
                        </div>
                        <img src="./img/contact-us-btn.webp" alt="contact-us-btn"></img>
                    </Link>
                </div>
                <div className="home-banner-text">
                    <h2>Absolutely supply good quality and comfort shock absorber</h2>
                </div>
            </div>

            <div className="box-1">
        <div className="box-2" onclick="window.location.href='#'">
            <div className="box-3">
                <img src="./img/Rectangle 64.png" alt="news-img"></img>
            </div>
            <div className="box-4">
                <h3>NEWS</h3>
                <img src="./img/icon-next.webp" alt="icon-next-box"></img>
            </div>
        </div>
        <div className="box-2" style={{backgroundColor: '#FF9900'}} onclick="window.location.href='#'">
            <div className="box-3">
                <img src="./img/Rectangle 52.png" alt="news-img"></img>
            </div>
            <div className="box-4">
                <h3>PRODUCT</h3>
                <img src="./img/icon-next.webp" alt="icon-next-box"></img>
            </div>
        </div>
        <div className="box-2" style={{backgroundColor: '#3B322E'}} onclick="window.location.href='#'">
            <div className="box-3">
                <img src="./img/Rectangle 51.png" alt="news-img"></img>
            </div>
            <div className="box-4">
                <h3 style={{color: '#FFF'}}>SUPROT</h3>
                <img src="./img/Vector 10.png" alt="icon-next-box" ></img>
            </div>
        </div>
     </div>

        </div>
    )

}

export default Homepage;
