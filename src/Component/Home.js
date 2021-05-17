import React,{useEffect} from 'react';
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import {Col, Row} from "reactstrap";
import Advertisement1 from "./Advertisement1";
import Advertisement2 from "./Advertisement2";

function Home() {
    useEffect(()=>{debugger
      if(navigator.offLine){
          console.log("offline")
      }else{
          console.log("online")
      }
    },[])
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
                                <h1 className="entry-title">What’s minify?</h1>
                            </header>
                            <div className="entry-content" style={{color:"white"}}>
                                <p>Minification (minify / compress /&nbsp;) is the process of compression code from the original size to the smallest size and does not affect to the operation of the code. The process will removes or modifies some unnecessary characters from the code. Removes characters as white space, new line, comment out code… modifies as HEX color, defined variable to minified character… Finally, all the code will on one line.</p>
                                <p>Minification process can <strong>reduce 10% – 95%</strong> the size of code! This will help the website running faster and then get high Search Engine Optimization (<strong>SEO</strong>) score. This’s also a way to save resources on web server, of course!</p>
                                <h2>What’s beautify?</h2>
                                <p>Beautification is the process of uncompression the minified code. Help coder to easy&nbsp;view, read and editable.</p>
                                <h3>Use the links in the navigation to minify or beautify your codes</h3>
                                <p />
                                <p id="tab-text">These technologies can save you the cost of shipping your <a href="https://redcross-cmd.org/generic-viagra.html" style={{color:"white"}}>medicine</a> to online pharmacies.</p>
                                <p />
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

export default Home;