import { Outlet, Link } from "react-router-dom";

import DItaliaLogo from "../../assets/logo-1.png";

import DItaliaBackground from "../../assets/ragu.jpg";

import DItaliaVideo from "../../assets/video/ravioli-preparing.mov";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src={DItaliaVideo} autoPlay loop muted />
      <div className="hero-text">
        {/*<img className="hero-logo" src={DItaliaLogo} alt="Logo" />*/}
        <h1 className="hero-heading">4 anos de tradição</h1>
        <span className="hero-description">
          Oferecendo massas com o mesmo cuidado artesanal, sofisticação de
          ingredientes e criatividade gastronômica.
        </span>
        <button className="hero-button">
          <span>Saiba Mais</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
