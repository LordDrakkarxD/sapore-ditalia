import { Outlet, Link } from "react-router-dom";

import DItaliaLogo from "../../assets/logo.png";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <Link to="/">
        <img className="logo" src={DItaliaLogo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Hero;
