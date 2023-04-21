//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AppContext from './context';
import About from './pages/About';
//import {Switch, Route} from "react-router-dom";
//import {Routes} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from './pages/404/404';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Contact from './pages/Contact/Conatct';
function App() {
  return (
    <Router>
     <AppContext>
      <Navbar />
         <Routes>
           <Route exact path="/" element={<About/>}/>
           <Route exact path="/Home" element={<Home/>}/>
           <Route exact path="/login" element={<Login/>}/>
           <Route exact path="/signup" element={<Signup/>}/>
           <Route exact path="/contactus" element={<Contact/>}/>
           <Route path="*" element={<ErrorPage/>}/>

          </Routes>
     </AppContext>
    </Router>
  );
}

export default App;
