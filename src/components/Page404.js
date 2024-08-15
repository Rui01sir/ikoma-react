import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Page404(){
    return(
        <div>
            <div className="banner-404">
                <img src="./img/404page.webp" alt="404page"></img>
                <h1>404 ERROR</h1>
            </div>
            <div className="banner-404-text">
                <h3>Sorry, the page you are looking for no longer exists.</h3>
                <Link to="/" alt="back-Homepage" >HOMEPAGE<img src="./img/icon-next.webp" alt="icon-next"></img></Link>
            </div>
        </div>
)}

export default Page404;
