import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import CssMinifier from "./Component/cssminifier";

const App = props => {
  return (
      <>
        <BrowserRouter>
          <div className="animation">
            <Switch>
              <Route  path="/cssminifiers" component={CssMinifier}/>
            </Switch>
          </div>
        </BrowserRouter>
      </>
  )
};

export default App;




