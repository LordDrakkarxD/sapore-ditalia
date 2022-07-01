import { Link } from "react-router-dom";

import Tomato from "https://i.imgur.com/gWCE33c.mp4";

import "./sobre-nos.scss";

const SobreNos = () => {
  return (
    <div className="section-sobre-nos">
      <div className="sobre-nos-container">
        <div className="sobre-nos-video">
          <video src={Tomato} autoPlay loop muted />
        </div>
        <div className="sobre-nos-text">
          <h1>Paixão</h1>
          <p>
            Cada criação é tratada como uma obra única desenhada com carinho.
          </p>
          <p>&nbsp;</p>
          <p>
            Elevamos a definição de "massa" a um nível nunca explorado, cada
            item exala sofisticação.
          </p>
          <p>&nbsp;</p>
          <p>
            Fazemos a fusão das tradições centenárias da família italiana com
            todas as inovações da culinária contemporânea unindo o antigo ao
            novo para criar uma experiência de encantamento inesperado para o
            paladar.
          </p>
          <p>&nbsp;</p>
          <p>
            Nosso trabalho se destaca pela qualidade dos ingredientes, o cuidado
            na preparação e sofisticação nos sabores.
          </p>
          <p>&nbsp;</p>
          <p>
            Nossos recheios se apresentam sutilmente, surpreendendo a cada
            nuance, tomando forma lentamente em uma experiência sensorial
            inesquecível.
          </p>
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
