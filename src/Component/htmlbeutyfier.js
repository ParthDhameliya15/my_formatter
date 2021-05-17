import React,{useState} from "react"
import formatter from 'html-formatter';
import Header from "./Header";
import Footer from "./Footer";
import {Col, Row} from "reactstrap";
import Advertisement1 from "./Advertisement1";
import Advertisement2 from "./Advertisement2";

const HtmlBeutyfiers = () => {
    const [result, setResult] = useState('');
    const onSubmit = async () => {
        const data = await formatter.render(result);
        setResult(data);
    };

    const reset = async () => {
        setResult("")
    };
    return(
        <div className="">
            <Header/>
            <Row className="">
                <Col md={12} sm={12} xs={12} lg={12} xl={12} className="container-fluid main-container-1">
                    <Advertisement1/>
            <div>

                {/* /.header_wrap !*/}
                {/*<div className="header_menu_wrap">*/}
                {/*    <div className="header_menu">*/}
                {/*        <div className="menu-header-menu-container"><ul id="menu-header-menu" className="nav"><li id="menu-item-76" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"><Link to="/javascriptminifiers/">JavaScript minifier</Link></li>*/}
                {/*            <li id="menu-item-75" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75"><Link to="/cssminifiers/">CSS minifier</Link></li>*/}
                {/*            <li id="menu-item-74" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74"><Link to="/htmlminifiers/">HTML minifier</Link></li>*/}
                {/*            <li id="menu-item-73" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73"><Link to="/javascriptbeutyfiers/">JavaScript beautifier</Link></li>*/}
                {/*            <li id="menu-item-72" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-72"><Link to="/cssbeutyfiers/">CSS beautifier</Link></li>*/}
                {/*            <li id="menu-item-71" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-65 current_page_item menu-item-71"><Link to="/htmlbeutyfiers/">HTML beautifier</Link></li>*/}
                {/*        </ul></div>*/}
                {/*        <a href="#" className="menu-icon mobile-version">Menu</a>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div className="wrap">
                    <div className="main">
                        <article id="post-59" className="post-59 page type-page status-publish hentry">
                            <header className="entry-header">
                                <h1 className="entry-title" style={{color:"white"}}>HTML beautifier</h1>
                            </header>
                            <div className="entry-content">
                                <div className="tabs_content">
                                    <div className="minify_area js_area" id="js_minify">
                                        <div className="proccessing"/>
                                        <div className="result_message messages status"><span style={{color:"white"}}>Beautified, copy code in the editor below to enjoy beautified code :-).</span>
                                            <a href="#" className="close_message" title="Close this message">(x)</a>
                                        </div>
                                        <div className="minify_area_left">
                                            <div className="form-item">
                                                <div className="form_item_left"><label
                                                    htmlFor="html_enter_code" style={{color:"white"}}>Enter <strong>HTML</strong> code then
                                                    click <strong>Beautify HTML</strong> button below to Beautify:</label></div>
                                                <div className="form_item_right">
                                                    <textarea cols={65} rows={8}
                                                              style={{width:"99%",background:"#2e3e4e"}}
                                                              onChange={(e) => setResult(e.target.value)}
                                                              name="html_enter_code" value={result} className="enter_code"
                                                              defaultValue={""}/>
                                                </div>
                                            </div>
                                            <div className="form-item">
                                                <input type="submit" value="Beautify HTML" onClick={onSubmit}
                                                       className="minify_submit_button"/>
                                                <input type="reset" onClick={reset} defaultValue="Reset"
                                                       className="minify_submit_button reset_minify_form"/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.js_area !*/}
                                </div>
                            </div>
                            {/* .entry-content */}
                        </article>{/* #post */}
                        <div id="comments" className="comments-area">
                        </div>{/* #comments .comments-area */}
                    </div>
                    {/* /.main !*/}
                    <Footer/>
                    {/* /.footer !*/}
                </div>
            </div>
                    <Advertisement2/>
                </Col>
            </Row>
        </div>
    )
}
export default HtmlBeutyfiers