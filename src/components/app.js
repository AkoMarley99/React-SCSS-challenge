import React, {Component} from 'react';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

import HomeOne from "./home/home"
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
    
            <HomeOne/>
              
            <Switch>
                  <Route exact path = "/home" component={HomeOne} /> 
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
