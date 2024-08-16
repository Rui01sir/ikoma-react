import React from "react";

function Footer(){
    return(
        <div>
            <footer>
                <div className="footer-bar">
                    <div className="nav-logo">
                        <a href="/">
                            <img src="./img/web-logo-n.webp" alt="nav-logo" />
                        </a>
                    </div>
                    <ul>
                <li><a href="#">COMPANY</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">PRODUCT</a></li>
                <li><a href="#">SUPPORT</a></li>
                <li><a href="#">CONTACT</a></li>
                    </ul>   
                </div>
                <div className="footer-text">
            <p>Absolutely supply good quality and comfort shock absorber</p>
            <div className="footer-icon">
                <ul>
                    <li><a href="#"><img src="./img/instagram.webp"></img></a></li>
                    <li><a href="#"><img src="./img/email.webp"></img></a></li>
                    <li><a href="#"><img src="./img/facebook.webp"></img></a></li>
                    <li><a href="#"><img src="./img/whatapp.webp"></img></a></li>
                </ul>
            </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-name">
            <h6>© IKOMA CO., LTD. All Rights Reserved Designed</h6>
            <p>By RUI Design Studio Inc.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer