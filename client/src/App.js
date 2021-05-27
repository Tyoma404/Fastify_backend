import './App.css';
import React from "react";
import Login from "./components/Login"
import Content from "./components/Content"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from 'react-router'

function App() {

//<Redirect to="/login"/> 
  return (
    <div className="App">
 
    <Router>
    

          <ul>  
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/content">Content</Link>
            </li>
          </ul>

          <Switch>

          <div class="Flexbox">

          
          <div className="Login">
          <Route path="/login">
            
              <Login />
            
          </Route></div>


          <div className="Content">

         <Route path="/content">
            
            <Content />
            
          </Route></div>

          </div>
        </Switch>

      
    </Router>
    </div>
  );
}

export default App;
