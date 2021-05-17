import React from 'react'
import {Link} from "react-router-dom";

const Footer = () =>{

    return(
        <>
            <div className="footer">
                <div className="footer_menu">
                    <div className="menu-footer-container"><ul id="menu-footer" className="menu"><li id="menu-item-102" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-102"><Link to="/" style={{color:"white"}}>Home</Link></li>
                        <li id="menu-item-99" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99"><Link to="/termofuse" style={{color:"white"}}>Term of use</Link></li>
                        <li id="menu-item-101" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101" style={{color:"white"}}>Contact: info@codeformatter.com</li>
                    </ul></div>
                </div>
                <div className="copyright" style={{color:"white"}}>2021 Minify Code - The tools to minify and beautify JavaScript, CSS and HTML codes</div>
            </div>
        </>
    )
}
export default Footer