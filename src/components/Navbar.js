import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        if (location.pathname === '/Page404') {
            setSelectedLanguage('CN');
        } else {
            setSelectedLanguage('EN');
        }
    }, [location.pathname]);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    useEffect(() => {
        const navMenu = document.querySelector('nav ul');
        if (menuActive) {
            navMenu.classList.add('active');
            document.body.classList.add('no-scroll');
        } else {
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    }, [menuActive]);


    return (
        <div>
            <nav>
                <div className="navbar">
                    <div className="nav-logo">
                        <a href="/Hompage">
                            <img src="./img/web-logo-n.webp" alt="nav-logo"/>
                        </a>
                    </div>
                    <ul>
                        <li><a href="#">COMPANY</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">PRODUCT</a></li>
                        <li><a href="#">SUPPORT</a></li>
                        <li><a href="#">CONTACT</a></li>
                        <div className="language">
                            <a
                                href="/"
                                style={{ fontWeight: selectedLanguage === 'EN' ? 'bold' : 'normal' }}
                            >
                                EN
                            </a>
                            /
                            <a
                                href="/Page404"
                                style={{ fontWeight: selectedLanguage === 'CN' ? 'bold' : 'normal' }}
                            >
                                CN
                            </a>
                        </div>
                    </ul>
                    <button 
                        className={`menu-toggle ${menuActive ? 'active' : ''}`} 
                        aria-label="Toggle menu" 
                        onClick={toggleMenu}
                    >
                    </button>
                    {/* <button className="menu-toggle" aria-label="Toggle menu">
                        <img src="./img/bar-icon.svg" alt="bar-icon"/>
                    </button> */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
