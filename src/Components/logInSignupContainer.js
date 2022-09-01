import React, { useRef, useState } from 'react'
import '../CSS/logInSignupContainer.css'
import Login from './login'
import SignUp from './signup'

function LogInSignupContainer() {
    const [isLoggedIn, setIsLoggedIn] =useState(false);
    const [login, setLogin] = useState(true)
    

    const logInSignupContainerRef= useRef(null);

    const handleClick = ()=>{
        setLogin(!login);

        logInSignupContainerRef.current.classList.toggle('active');
    }

  return (
    <div className='loginSignUpContainer' ref={logInSignupContainerRef}>
        <Login />

        <div className='sideDiv'>
        
          
            <button type='button' onClick={handleClick}> {login ? 'Sign Up' : 'Log in'} </button>
        </div>
        <SignUp/>
    </div>
  )
}

export default LogInSignupContainer