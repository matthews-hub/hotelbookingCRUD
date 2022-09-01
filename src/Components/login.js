import React, { useState } from 'react'

import { signInWithEmailAndPassword } from "firebase/auth";
import {Auth, db} from '../ConfigFirebase/firebase.js'
import '../CSS/login.css'
import { BrowserRouter, Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
 

function Login  ()  {

  const [errormsg, setErrormsg] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const handleLogin = (e)=>{
    e.preventDefault();

    signInWithEmailAndPassword(Auth, email, password)
  .then((userCredential) => {
    // Signed in 

        //  console.log(user.uid); 
    const user = userCredential.user;
  
    // ...
    console.log(user.uid)
    alert('Welcome!!...Successfully Signed In...' + '' + user.email)
    
  }).catch((error) => {
    setErrormsg(true)
    // ..
  });
  };
  // Auth.onAuthStateChanged(Users=>{
  //   console.log(Users)
  // })
  
  return (
     
      <div className='loginContainer'>
    
      <h1 style={{textAlign:"center"}}>SIGN IN</h1>
        <form onSubmit={handleLogin}>
    
          <input 
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={e=>setEmail(e.target.value)}
       
          />

          <input 
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={e=>setPassword (e.target.value)}
          required
          />
         {errormsg && <span>Wrong Email or Wrong Password</span>}
 
         <Link id='loginBtn' to={"/AdminCreate"}>Log In</Link>
 
            <div className='loginFooter'> 
            <p style={{textalign:'center'}}>Don't Have An Account Yet?</p>
 
            <FontAwesomeIcon icon={faRightLong} 
             id='logout'
             className="homeIconnn"/> 
                 
             </div>     
        </form>  
   
      
      </div>
     
  )
}

export default Login