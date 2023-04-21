//import logo from './logo.svg';
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AppContext from "./context";
import About from "./Pages/About";
//import {Switch, Route} from "react-router-dom";
//import {Routes} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/404/404";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Contact from "./Pages/Contact/Conatct";
function App() {
  return (
    <Router>
      <AppContext>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/contactus" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AppContext>
    </Router>
  );
}

export default App;
