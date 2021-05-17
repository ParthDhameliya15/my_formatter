import React from 'react'
import {Link, useHistory} from "react-router-dom";


const Header = () =>{
    let history = useHistory();
    const path=history.location.pathname;

    return(
        <>
                <div className="header_wrap">
                    <div className="header_wrap_2">
                        <div className="header">
                            <h2><a href="../../public/index.html" title="Minify Code" style={{color:"white"}}>Code Formatter</a></h2>
                            <h3 className="site-description" style={{color:"white"}}>The tools to minify and beautify JavaScript, CSS and HTML codes</h3>
                        </div>
                    </div>
                </div>
            <div className="header_menu_wrap" style={{display:"flex", justifyContent:"center"}}>
                <div className="nav nav-tabs" id="nav-tab" role="tablist" style={{textAlign:"center"}}>
                    <button className={`nav-link ${path==="/javascriptminifiers/" && "active"}`} id="nav-home-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                            aria-selected="true"><Link to="/javascriptminifiers/">JavaScript minifier</Link>
                    </button>
                    <button className={`nav-link ${path==="/cssminifiers/" && "active"}`} id="nav-profile-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                            aria-selected="false"><Link to="/cssminifiers/">CSS minifier</Link>
                    </button>
                    <button className={`nav-link ${path==="/htmlminifiers/" && "active"}`} id="nav-contact-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                            aria-selected="false"><Link to="/htmlminifiers/">HTML minifier</Link>
                    </button>
                    <button className={`nav-link ${path==="/javascriptbeutyfiers/" && "active"}`} id="nav-home-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                            aria-selected="true"><Link to="/javascriptbeutyfiers/">JavaScript beautifier</Link>
                    </button>
                    <button className={`nav-link ${path==="/cssbeutyfiers/" && "active"}`} id="nav-profile-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                            aria-selected="false"><Link to="/cssbeutyfiers/">CSS beautifier</Link>
                    </button>
                    <button className={`nav-link ${path==="/htmlbeutyfiers/" && "active"}`} id="nav-contact-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                            aria-selected="false"><Link to="/htmlbeutyfiers/">HTML beautifier</Link>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Header