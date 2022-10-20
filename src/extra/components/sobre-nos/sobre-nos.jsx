import { useState } from "react";

import Slider from "react-slick";
import { Link } from "react-router-dom";

import agnolotiBeterraba from "../../assets/slider/Agnolotti com massa de beterraba.jpg";
import agnolotiRagu from "../../assets/slider/Agnolotti com recheio de ragu de cogumelos.jpg";
import agnolotiOsso from "../../assets/slider/Agnolotti de ossobuco.jpg";

import ravioliBerinjela from "../../assets/slider/Ravioli de berinjela defumada.jpg";
import ravioliBeterraba from "../../assets/slider/Ravioli de beterraba.jpg";
import ravioliCacau from "../../assets/slider/Ravioli de cacau.jpg";
import ravioliCamarao from "../../assets/slider/Ravioli de camarão com alho poro.jpg";
import ravioliPicadinho from "../../assets/slider/Ravioli de picadinho paulista.jpg";
import ravioliPupunha from "../../assets/slider/Ravioli de pupunha com abobora e molho de cogumelos.jpg";
import ravioliNegro from "../../assets/slider/Ravioli negro com recheio de lagosta.jpg";

import sofiatelliQueijo from "../../assets/slider/Sofiatelli de queijo de cabra nozes na manteiga e salvia.jpg";

import sorrentinoLagostim from "../../assets/slider/Sorrentino de Lagostim.jpg";
import sorrentinoOssobuco from "../../assets/slider/Sorrentino de Ossobuco.jpg";
import sorrentinoNegroSalmao from "../../assets/slider/Sorrentino negro com recheio de salmão defumado.jpg";
import sorrentinoNegroBranco from "../../assets/slider/Sorrentino negro e branco.jpg";

import talhariniNegro from "../../assets/slider/Talharini negro ao molho de camarão cítrico.jpg";

import "./sobre-nos.scss";

const images = [
  agnolotiBeterraba,
  agnolotiRagu,
  agnolotiOsso,
  ravioliBerinjela,
  ravioliBeterraba,
  ravioliCacau,
  ravioliCamarao,
  ravioliPicadinho,
  ravioliPupunha,
  ravioliNegro,
  sofiatelliQueijo,
  sorrentinoLagostim,
  sorrentinoOssobuco,
  sorrentinoNegroSalmao,
  sorrentinoNegroBranco,
  talhariniNegro,
];

const SobreNos = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="section-sobre-nos">
      <div className="sobre-nos-container">
        <div className="sobre-nos-video">
          <video src="https://i.imgur.com/gWCE33c.mp4" autoPlay loop muted />
        </div>
        <div className="sobre-nos-text">
          <h1>HISTÓRIA DE PAIXÃO</h1>
          <p>
            Especialista em massas e molhos frescos feitos artesanalmente,
            nossos produtos são produzidos a partir da fusão das tradições
            centenárias da família italiana com todas as inovações da culinária
            contemporânea unindo o antigo ao novo para criar uma experiência de
            encantamento jamais visto para o paladar.
          </p>
          <p>&nbsp;</p>
          <p>
            Nosso trabalho se destaca pela qualidade dos ingredientes, o cuidado
            na preparação e sofisticação nos sabores.
          </p>
          <p>&nbsp;</p>
          <p>
            Nossos produtos utilizam matérias primas premium originárias de
            diversas partes do planeta, combinadas de forma imprevistas e
            inovadoras e ainda preservando sua harmonia singular. Seus recheios
            que se apresentam sutilmente, surpreendem a cada nuance, tomando
            forma lentamente em uma experiência sensorial inesquecível.
          </p>
          <p>&nbsp;</p>
          <p>
            Cada criaçao é tratada como uma obra única desenhada com carinho.
            Levamos a definição de -Massa- a um nível jamais explorado, cada
            item exala sofisticação.
          </p>
        </div>
      </div>
      {/*<Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slides activeSlide" : "slides"}>
            <img src={img} alt={img} />
          </div>
        ))}
        </Slider>*/}
      <div className="rotisserie-preview-container">
        <div className="rotisserie-preview-text">
          <h1>CASA NOSTRA</h1>
          <p>
            Diferenciada principalmente pela sua qualidade, a marca possui
            fabricação própria, onde produz todos os seus produtos artesanais,
            que estão à disposição na loja diariamente.
          </p>
          <p>&nbsp;</p>
          <p>
            Com uma extensa variedade de pratos prontos ou semiprontos para o
            dia a dia ou para comemorações e festas, a Rosticceria oferece
            ótimas opções para quem, além da qualidade, não abre mão de
            praticidade.
          </p>
          <p>&nbsp;</p>
          <p>Desfrute da Rosticceria por encomendas ou retirada na loja.</p>
        </div>
        <div className="rotisserie-preview-video">
          <video src="https://i.imgur.com/sXtWiPy.mp4" autoPlay loop muted />
        </div>
      </div>
      <div className="enoteca-preview-container">
        <div className="enoteca-text">
          <h1 className="enoteca-heading">Enoteca</h1>
          <span className="enoteca-description">
            Descubra os prazeres da combinação de uma boa massa com um bom
            vinho.
          </span>
          <button className="enoteca-button">
            <Link
              className="enoteca-link"
              to="/enoteca"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span>Saiba Mais</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
