import Salada from "../../assets/salad.jpg";
import Carne from "../../assets/meat.jpg";
import Peixe from "../../assets/fish.jpg";
import Pasta from "../../assets/ragu-5.jpg";

import EnotecaVinhos from "../../assets/Enoteca-vinhos.jpg";

import "./rosticeria.scss";

const Rosticeria = () => {
  return (
    <div className="section-rosticeria">
      <div className="rosticeria-container">
        <div className="rosticeria-header">
          <span>Rosticceria</span>
        </div>
        <div className="rosticeria-meals">
          <div className="rosticeria-meals-text">
            <h1>Nossos Pratos</h1>
            <p>
              Entre em contato para fazer o seu pedido imediato ou encomendas
              programadas.
            </p>
            <p>&nbsp;</p>
            <p>
              Lembrando que estamos com vocês para todas as datas celebrativas
              como: Páscoa, Natal, Pessah, Dia das Mães, Dia dos Pais… e
              recomendamos fazer as encomendas com antecedência!
            </p>
            <p>&nbsp;</p>
            <p>Confira nosso cardápio.</p>
          </div>
          <div className="rosticeria-meals-image">
            <img src={Pasta} alt="pasta" />
          </div>
        </div>
        <div className="rosticeria-dicas">
          <div className="dicas-header">
            <span className="dicas-heading">Dicas de Preparo</span>
            <span className="dicas-text">
              Preparamos algumas dicas simples e práticas para que você tenha
              uma excelente refeição.
            </span>
          </div>
          <div className="dicas-items">
            <div className="dicas-item">
              <div className="dicas-item-image">
                <img src={Salada} alt="example" />
              </div>
              <div className="dicas-item-text">
                <h1>Saladas</h1>
                <p>
                  Sempre deverão ser guardadas no refrigerador até a hora de
                  servir. As saladas de alcachofra, berinjela assada e muitas
                  outras da Paola podem ser servidas junto com saladas de folhas
                  para enriquecer ainda mais a mesa.
                </p>
              </div>
            </div>
            <div className="dicas-item">
              <div className="dicas-item-text">
                <h1>Carnes e Aves ao Molho</h1>
                <p>
                  Levar ao forno pré aquecido à 150°C durante uns 15 a 20
                  minutos e coberto com papel de alumínio.
                </p>
              </div>
              <div className="dicas-item-image">
                <img src={Carne} alt="example" />
              </div>
            </div>
            <div className="dicas-item">
              <div className="dicas-item-image">
                <img src={Peixe} alt="example" />
              </div>
              <div className="dicas-item-text">
                <h1>Peixes</h1>
                <p>
                  Cobrir com papel alumínio e levar ao forno pré aquecido à
                  180°C durante 15 minutos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rosticeria-massas">
          <div className="rosticeria-massas-text">
            <h1>Massas</h1>
            <p>
              <b>Forno</b>: Coloque uma camada de molho no fundo de uma travessa
              refratária e distribua a massa por cima garantindo que haja molho
              entre elas. Coloque mais molho por cima, espalhe queijo parmesão
              ralado se quiser e cubra com papel de alumínio. Aqueça durante
              20min. em forno médio (180°C) preaquecido. Tire o papel alumínio.
              e leve novamente ao forno descoberto e deixe gratinar mais uns 5
              min.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              <b>Escaldada</b>: Escalde a massa em água fervente por 1 a 2
              minutos aproximadamente. Aqueça o molho separadamente. Escorra a
              massa com ajuda de uma escumadeira ou um coador próprio para
              massa. Disponha a massa no prato ou na travessa que for servir.
              Cubra com o molho quente e na quantidade a seu gosto ou leve à
              mesa em separado. Espalhe queijo parmesão se desejar.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              <b>Microondas</b>: Coloque uma camada de molho no fundo de um
              prato próprio para micro-ondas. Distribua a massa, cubra com molho
              e após com filme próprio para este uso. Perfure o filme. leve ao
              forno de micro-ondas em potência média por dois minutos. Embora
              não seja recomendado o uso de microondas para aquecer e cozinhar
              massas, em alguns casos pode ser uma opção em função da
              praticidade e da rapidez.
            </p>
          </div>
          <div className="rosticeria-massas-image"></div>
        </div>
      </div>
    </div>
  );
};

export default Rosticeria;
