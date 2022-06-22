import { Outlet, Link } from "react-router-dom";

import DItaliaLogo from "../../assets/logo-1.png";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <img className="hero-logo" src={DItaliaLogo} alt="Logo" />
      </div>
    </div>
  );
};

export default Hero;
