import React,{useState} from "react"
import minify from "css-minify"
import Header from "./Header";
import Footer from "./Footer";
import {Col, Row} from "reactstrap";
import Advertisement1 from "./Advertisement1";
import Advertisement2 from "./Advertisement2";

const CssMinifiers = () => {
    const[result,setResult] = useState('');

    const onSubmit = async () => {
        const data = minify(result);
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
                <div className="wrap">
                    <div className="main">
                        <article id="post-61" className="post-61 page type-page status-publish hentry">
                            <header className="entry-header">
                                <h1 className="entry-title" style={{color:"white"}}>CSS minifier</h1>
                            </header>
                            <div className="entry-content">
                                <div className="tabs_content">
                                    <div className="minify_area css_area" id="css_minify">
                                        <div className="proccessing" />
                                        <div className="result_message messages status"><span style={{color:"white"}}>Minified, copy code in the editor below to enjoy minified code :-).</span> <a href="#" className="close_message" title="Close this message">(x)</a></div>
                                        <div className="minify_area_left">
                                            {/*<form  encType="multipart/form-data">*/}
                                                <div className="form-item">
                                                    <div className="form_item_left"><label htmlFor="css_enter_code" style={{color:"white"}}>Enter <strong>CSS</strong> code then click <strong>Minify</strong> button below to minify:</label></div>
                                                    <div className="form_item_right"><textarea cols={65} rows={8} style={{width:"99%",background:"#2e3e4e"}} onChange={(e)=>setResult(e.target.value)} name="css_enter_code" value={result} className="enter_code" defaultValue={""} /></div>
                                                </div>
                                                <div className="form-item">
                                                    <input type="submit" value="Minify CSS" onClick={onSubmit}
                                                           className="minify_submit_button"/>
                                                    <input type="reset" onClick={reset} defaultValue="Reset" className="minify_submit_button reset_minify_form" />
                                                </div>
                                            {/*</form>*/}
                                        </div>
                                    </div>
                                    {/* /.css_area !*/}
                                </div>
                            </div>{/* .entry-content */}
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
export default CssMinifiers