import { Outlet, Link } from "react-router-dom";

import DItaliaLogo from "../../assets/logo.png";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <img className="hero-logo" src={DItaliaLogo} alt="Logo" />
        <span className="hero-heading">Cozinhar é uma arte!</span>
      </div>
    </div>
  );
};

export default Hero;
