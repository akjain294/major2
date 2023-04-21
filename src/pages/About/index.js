import React from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../../components/images/banner.jpeg";
import Nutrition from "../../components/images/nutrition.png";
import "./style.css";

const About = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Meal Planning</h1>
          <p>Plan your life with
          </p>
          <p>Meal Planning.</p>
          <Link to="/Home">
            <button>For More</button>
          </Link>
        </div>
        
      </div>
      <div className="home" style={{ backgroundImage: `url(${Nutrition})` }}>
        <div className="headerContainer">
          <h2>Nutrtion Planning</h2>
          <h4>Healthy diet means taking
          </h4>
          <h4>right amount of nutrients.</h4>
          <Link to="/Home">
            <button>For More</button>
          </Link>
        </div>
        
      </div>

    </Layout>
  );
};

export default About;