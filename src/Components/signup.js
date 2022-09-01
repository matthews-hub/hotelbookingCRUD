import React, { useState } from 'react'
import '../CSS/signup.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Auth, db} from '../ConfigFirebase/firebase.js';
import { addDoc, collection } from 'firebase/firestore'


function SignUp () {
  const [openModal, setOpenModal] = useState('')
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = (e)=>{
    e.preventDefault(); 
    // const Auth = getAuth();
    createUserWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        addDoc(collection(db,'Users'),{email:user.email,name:name,surname:surname,id:user.uid})
        alert('Succesfully registered as Admin' + 'Now click Log In to Continue')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        console.log(email);
        // ..
      });

  };

  return (
     
      <div className='loginContainer'>
     <h1 style={{textAlign:"center"}}>SIGN UP</h1>
        <form onSubmit={handleSignUp}>
          <input 
          type="username"
          name="username"
          placeholder="Enter Your Name"
          required
          onChange={e=>setName(e.target.value)}
          />
           <input 
          type="username"
          name="username"
          placeholder="Enter Your Surname"
          required
          onChange={e=>setSurname(e.target.value)}
          />

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
          required
          onChange={e=>setPassword(e.target.value)}
          />
           <button type="submit" id='loginBtn' exact path='/LogInSignupContainer'>REGISTER</button>
        </form>
     
      </div>
    
  )
}

export default SignUp
