import React from 'react';
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import {Col, Row} from "reactstrap";
import Advertisement1 from "./Advertisement1";
import Advertisement2 from "./Advertisement2";

function TermOfUSe() {
    return (
        <div className="">
            <Header/>
            <Row className="">
                <Col md={12} sm={12} xs={12} lg={12} xl={12} className="container-fluid main-container-1">
                    <Advertisement1/>
                    <div>
                        <div className="wrap">
                            <div className="main">
                                <article id="post-10" className="post-10 page type-page status-publish hentry">
                                    <header className="entry-header" style={{color:"white"}}>
                                        <h1 className="entry-title">Term of Use</h1>
                                    </header>
                                    <div className="entry-content" style={{color:"white"}}>
                                        <p>1. All the tools based on open sources and free to use.</p>
                                        <p>2. We don’t store any code for you entered.</p>
                                        <p>3. We are not responsible if your code does not work after minified / beautified.</p>
                                        <p>4. We are not responsible if your website after minified / beautified.</p>
                                        <p>5. We will can modify these terms at any time without prior notice</p>
                                        <p>Thanks for use our tools!

                                        </p>
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
    );
}

export default TermOfUSe;