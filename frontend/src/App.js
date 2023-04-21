//import logo from './logo.svg';
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AppContext from "./context";
import About from "./Pages/About";
//import {Switch, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/404/404";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Contact from "./Pages/Contact/Conatct";
import { useUserContext } from "./Hooks/useUserContext";
import Loader from "./Components/Loader/Loader";

function App() {
  const { user, ready } = useUserContext();

  return (
    <Router>
      <AppContext>
        {ready ? (
          <>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/Home" element={<Home />} />
              <Route
                exact
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              {/* <Route exact path="/login" element={<Login />} /> */}
              <Route
                exact
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
              <Route exact path="/contactus" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="*" element={<Loader />} />
            </Routes>
          </>
        )}
      </AppContext>
    </Router>
  );
}

export default App;
