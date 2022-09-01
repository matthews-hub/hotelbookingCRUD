import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLungs, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/navbar.css'
import Login from './login'
import { faIdCard } from '@fortawesome/free-regular-svg-icons'
import SignUp from './signup'
import { collection, getDocs } from 'firebase/firestore'
import { Auth, db } from '../ConfigFirebase/firebase'
import { getAuth, updateCurrentUser } from 'firebase/auth'
import { useAuth } from 'reactfire'

function Navbar () {
  const [loggedUser, setLoggedUser] = useState([])
  const newHotelsRef = collection(db, "Users")
 

  Auth.onAuthStateChanged(Users=>{
    console.log(Users)
    const data =  []
    getDocs(newHotelsRef).then((snapshot)=>{
      snapshot.docs.forEach(doc=>{
        data.push(doc.data())
      })
    })
    console.log(data);  
    
  })

  var el = document.getElementById('overlayBtn');
if(el){
  el.addEventListener('click', false);
}

  
 
  return (
    <>
    <header className="navbar">
        <div>
            <Link to="/LogInSignupContainer"  id='headerlogo'>Proper Hotels.com</Link>
       </div>
        <nav className="links">
             
             <div className='logOutBtn'>
            <Link to="/LogInSignupContainer">
             <FontAwesomeIcon icon={faRightToBracket} 
             id='logout'
             className="homeIconnn"/> </Link>
            </div>
            
             
        </nav>
    </header>
    </>
  )
}

export default Navbar