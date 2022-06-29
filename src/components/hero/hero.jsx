import { Outlet, Link } from "react-router-dom";

import DItaliaLogo from "../../assets/logo-1.png";

import DItaliaBackground from "../../assets/ragu.jpg";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="https://i.imgur.com/k3E7t5I.mp4" autoPlay loop muted />
      <div className="hero-text">
        <h1 className="hero-heading">4 anos de tradição</h1>
        <span className="hero-description">
          Oferecendo massas com o mesmo cuidado artesanal, sofisticação de
          ingredientes e criatividade gastronômica.
        </span>
        <button className="hero-button">
          <Link className="hero-link" to="/rosticceria">
            <span>Saiba Mais</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
