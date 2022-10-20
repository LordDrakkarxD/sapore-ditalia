import { Link } from "react-router-dom";

import Pomodoro from "../../assets/pomodoro.jpg";
import Bolonhesa from "../../assets/bolonhesa.jpg";
import MolhoBranco from "../../assets/molhobranco.jpg";
import FrutosDoMar from "../../assets/molho-frutos-do-mar.jpg";
import Pesto from "../../assets/pesto.webp";

import EnotecaVinhos from "../../assets/Enoteca-vinhos.jpg";

import Vinhos from "../../assets/vinhos/vinhos.pdf";

import "./enoteca.scss";

const Enoteca = () => {
  return (
    <div className="section-enoteca">
      <div className="enoteca-container">
        <div className="enoteca-header">
          <span>Enoteca</span>
        </div>
        <div className="enoteca-vinhos">
          <div className="enoteca-vinhos-text">
            <h1>Nossos Vinhos</h1>
            <p>
              A nossa enoteca está repleta de vinhos de todos os preços e de
              todas as partes do mundo. 
            </p>
            <p>&nbsp;</p>
            <p>
              O enólogo da casa está sempre apto a ajudar na sua escolha, entre
              em contato para fazer o seu pedido.
            </p>
            <p>&nbsp;</p>
            <p>
              Todo mês além da seleção da nossa enoteca separamos alguns rótulos
              para facilitar a sua escolha.
            </p>
            <p>&nbsp;</p>
            <p>
              Confira nossos{" "}
              <a
                href={Vinhos}
                className="cardapio-link"
                target="_blank"
                rel="noreferrer"
              >
                <span>vinhos.</span>
              </a>
            </p>
          </div>
          <div className="enoteca-vinhos-image">
            <img src={EnotecaVinhos} alt="vinho" />
          </div>
        </div>
        <div className="enoteca-harmonia">
          <div className="harmonia-header">
            <span className="harmonia-heading">Harmonização</span>
            <span className="harmonia-text">
              Os vinhos são o acompanhamento ideal para qualquer menu não só por
              ser uma bebida.
              <br />
              Um bom vinho com os molhos realça o sabor dos alimentos.
            </span>
          </div>
          <div className="harmonia-items">
            <div className="harmonia-item">
              <div className="harmonia-item-image">
                <img src="https://i.imgur.com/KiaeyD0.jpg" alt="example" />
              </div>
              <div className="harmonia-item-text">
                <h1>Pomodoro</h1>
                <p>
                  Os molhos mais comuns para o macarrão são os à base de tomate.
                  Nesse caso, os vinhos para acompanhar pedem acidez
                  pronunciada. Tintos como os da região de Chianti normalmente
                  fazem bonito. Mas como o prato é simples e versátil, também
                  aceita outras opções, como tintos feitos com a uva Merlot ou
                  ainda rosés um pouco mais encorpados, tais quais os argentinos
                  ou brasileiros.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  TOMATE – Tintos leves e com boa acidez (Chianti, Merlot) e
                  rosés em geral.
                </p>
              </div>
            </div>
            <div className="harmonia-item">
              <div className="harmonia-item-text">
                <h1>Bolonhesa</h1>
                <p>
                  Os amantes de uma boa massa normalmente não dispensam um molho
                  à bolonhesa. Mas pode se tornar melhor ainda se acompanhado de
                  um tinto elaborado com a variedade Cabernet Sauvignon. Esses
                  vinhos têm acidez presente e são encorpados o suficiente para
                  fazer um bom casamento com o prato.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  CARNE – Tintos um pouco mais encorpados (Cabernet Sauvignon).
                </p>
              </div>
              <div className="harmonia-item-image">
                <img src="https://i.imgur.com/xObUMGr.jpg" alt="example" />
              </div>
            </div>
            <div className="harmonia-item">
              <div className="harmonia-item-image">
                <img src="https://i.imgur.com/8q0pctA.jpg" alt="example" />
              </div>
              <div className="harmonia-item-text">
                <h1>Molho Branco</h1>
                <p>
                  Para as massas com molhos cremosos ou de queijos, a dica é
                  experimentar com um branco, que pode ser da uva Chardonnay.
                  Mas tintos delicados como Pinot Noir ou ainda o francês
                  Beaujolais também são bem aceitos.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  QUEIJO – Brancos mais encorpados (Chardonnay) ou tintos
                  delicados (Pinot Noir, Beaujolais).
                </p>
              </div>
            </div>
            <div className="harmonia-item">
              <div className="harmonia-item-text">
                <h1>Molho com Frutos do Mar</h1>
                <p>
                  Embora menos consumidas no Brasil, as massas com frutos do mar
                  e peixes também seguem a mesma filosofia de harmonização dos
                  outros pratos feitos com esses ingredientes: vinhos brancos e
                  rosés para acompanhar.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>FRUTOS DO MAR – Brancos e rosés em geral.</p>
              </div>
              <div className="harmonia-item-image">
                <img src="https://i.imgur.com/UA269Ea.jpg" alt="example" />
              </div>
            </div>
            <div className="harmonia-item">
              <div className="harmonia-item-image">
                <img src={Pesto} alt="example" />
              </div>
              <div className="harmonia-item-text">
                <h1>Pesto</h1>
                <p>
                  Um prato simples como o macarrão al pesto, que tem manjericão
                  e queijo parmesão como ingredientes principais, vai muito bem
                  com os brancos feitos com a uva Sauvignon Blanc ou Torrontés.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  AL PESTO – Brancos leves e frescos (Sauvignon Blanc,
                  Torrontés).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enoteca;
