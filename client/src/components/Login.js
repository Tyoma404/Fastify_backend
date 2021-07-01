import { useState } from "react"
import { useHistory } from "react-router-dom";


function Login (props){
    let history = useHistory();

      
    //   const logValue = !state.isLogin ? <a href="/content">LogIn</a> 
    //     : <a href="/">LogOut</a>

//<button onclick="()=> console.log(state.isLogin)">gtgtgt</button>



const handler = ()=>{
 
  let authPromise =  new Promise(function(resolve,reject){
  

    setTimeout(()=>{
    if(!props.logged)
      {resolve("res") 
      console.log("succes logged")}
    else {reject("ualready logged")
    console.log("failed logged")}
  
  }
  , 1000)
  
  })


  authPromise.then(()=>{props.logHandler();
  history.push(!props.logged ? "/content" : "/")})

  .catch((log)=>console.log(log))
 
}





    return(
        
        <>
        <button onClick={handler}>{!props.logged ? "LogIn" : "LogOut"}</button> 
        </>

    )
}

export default Login