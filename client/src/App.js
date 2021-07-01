import './App.css';
import React from "react";
import Login from "./components/Login"
import Content from "./components/Content"

import { useState } from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from 'react-router'



function App() {


const [isLogged, setLogged] = useState(false)

const [urls, setUrls] = useState(["photo_2021-05-12_08-30-18.jpg"])

const logHandler = ()=> {
  setLogged(!isLogged)
  if(!isLogged) getUrls()
  
}


async function getUrls(){
  console.log("got urls")
}

//<Redirect to="/login"/> 
  return (
    <div className="App">
 
    <Router>
    <div className="header">
  <div></div>
    <div className="logo_container"><img src="https://e7.pngegg.com/pngimages/448/766/png-clipart-question-mark-computer-icons-others-text-logo.png" alt="" class="logo"/></div>
    <div className="menu">
      <button>Button</button>
      <button>Button</button>
    <Login logHandler={logHandler} logged={isLogged}/>
    </div>
    <div></div>
    </div>
  

          <Switch>

          {/* <div class="Flexbox"> */}

          
          {/*  <div className="Login">
          <Route path="/login">
            
              <Login />
              </Route>  
         </div> */}


          <div className="Content">

         <Route path="/content">
            
            <Content imgUrls={urls}/>
            
          </Route></div>

          {/* </div> */}
        </Switch>

      
    </Router>
    </div>
  );
}

export default App;
