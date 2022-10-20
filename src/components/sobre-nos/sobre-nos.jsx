import { useState } from "react";

import { Link } from "react-router-dom";

import "./sobre-nos.scss";

const SobreNos = () => {
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

{
  /*<Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slides activeSlide" : "slides"}>
            <img src={img} alt={img} />
          </div>
        ))}
        </Slider>*/
}
