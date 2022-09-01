import logo from './logo.svg';
import './App.css';
import AdminCreate from './Components/adminCreate.js'
import AdminTable from './Components/adminTable.js'
import Login from './Components/login';
import SignUp from './Components/signup';
import Navbar from './Components/navbar'
import Footer from './Components/footer'
 
import { BrowserRouter, BrowserRouter as Router, Navigate, Route, Routes, Switch} from 'react-router-dom'
import LogInSignupContainer from './Components/logInSignupContainer';
import { useState } from 'react';
import { Auth } from './ConfigFirebase/firebase';

function App() {
const [isLoggedIn, setIsLoggedIn] =useState(false);
Auth.onAuthStateChanged(Users=>{
 
  setIsLoggedIn(true)
})
  return (
    <div className="App">
      <BrowserRouter>
     
      <Navbar/>
 
         {!isLoggedIn&&<LogInSignupContainer exact path="/Admincreate" />}
          
          <Routes >
              <Route exact path="/LogInSignupContainer" element={<LogInSignupContainer/>}></Route>
            </Routes>
          
            <Routes >
              <Route exact path="/Admincreate" element={<AdminCreate/>}></Route>
            </Routes>
           
            <Routes >
              <Route exact path="/Admincreate" element={<AdminTable/>}></Route>
            </Routes>
          <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
