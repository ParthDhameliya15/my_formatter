import React from 'react';
import './App.css';
import './Assets/minify_code/stylece43.css'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home from "./Component/Home";
import TermOfUse from "./Component/Termofuse";
import CssMinifiers from "./Component/cssminifier";
import HTMLMinifiers from "./Component/htmlminifier";
import JavascriptBeutyfiers from "./Component/javascriptbeutyfier";
import CssBeutyfiers from "./Component/cssbeutyfier";
import HtmlBeutyfiers from "./Component/htmlbeutyfier";
import JavascriptMinifiers from "./Component/javascriptminifier";

function App() {
    return (
        <BrowserRouter>
            <div className="animation">
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route exact={true} path="/termofuse" component={TermOfUse}/>
                    <Route exact={true} path="/cssminifiers" component={CssMinifiers}/>
                    <Route exact={true} path="/htmlminifiers" component={HTMLMinifiers}/>
                    <Route exact={true} path="/javascriptbeutyfiers" component={JavascriptBeutyfiers}/>
                    <Route exact={true} path="/cssbeutyfiers" component={CssBeutyfiers}/>
                    <Route exact={true} path="/htmlbeutyfiers" component={HtmlBeutyfiers}/>
                    <Route exact={true} path="/javascriptminifiers" component={JavascriptMinifiers}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App