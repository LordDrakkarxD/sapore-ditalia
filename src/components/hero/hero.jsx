import { Outlet, Link } from "react-router-dom";

import DItaliaLogo from "../../assets/logo-1.png";

import DItaliaBackground from "../../assets/ragu.jpg";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="https://i.imgur.com/k3E7t5I.mp4" autoPlay loop muted />
      <div className="hero-text">
        <h1 className="hero-heading">Sapore D Italia</h1>
        <span className="hero-description">
          Especialista em massas e molhos frescos feitos artesanalmente.
        </span>
        <button className="hero-button">
          <Link
            className="hero-link"
            to="/rosticceria"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span>Saiba Mais</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
