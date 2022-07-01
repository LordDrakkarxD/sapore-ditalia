import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./institucional.scss";

const select = [
  {
    title: "Delivery",
    text: (
      <div>
        <p></p>
        <p className="quem-somos-a">
          Para nós, a segurança do negócio é fundamental para garantir não só
          uma operação estável e proteção do seu dinheiro, mas a segurança dos
          dados de nossos clientes. Por isso nossa loja conta com:
        </p>
        <p>
          <br />
        </p>
        <p className="quem-somos-a">
          <b>Estabilidade Total</b>
        </p>
        <p className="quem-somos-a">
          Infraestrutura capaz de processar milhares de transações por segundo,
          com 99% de uptime e status page em real time.
        </p>
        <p>
          <br />
        </p>
        <p></p>
      </div>
    ),
  },
  {
    title: "Quem Somos",
    text: (
      <div>
        <p></p>
        <p className="quem-somos-a">
          Para nós, a segurança do negócio é fundamental para garantir não só
          uma operação estável e proteção do seu dinheiro, mas a segurança dos
          dados de nossos clientes. Por isso nossa loja conta com:
        </p>
        <p>
          <br />
        </p>
        <p className="quem-somos-a">
          <b>Estabilidade Total</b>
        </p>
        <p className="quem-somos-a">
          Infraestrutura capaz de processar milhares de transações por segundo,
          com 99% de uptime e status page em real time.
        </p>
      </div>
    ),
  },
  {
    title: "Contato",
    text: (
      <div>
        <p></p>
        <p className="quem-somos-a">
          Para nós, a segurança do negócio é fundamental para garantir não só
          uma operação estável e proteção do seu dinheiro, mas a segurança dos
          dados de nossos clientes. Por isso nossa loja conta com:
        </p>
        <p>
          <br />
        </p>
        <p className="quem-somos-a">
          <b>Estabilidade Total</b>
        </p>
        <p className="quem-somos-a">
          Infraestrutura capaz de processar milhares de transações por segundo,
          com 99% de uptime e status page em real time.
        </p>
      </div>
    ),
  },
  {
    title: "Política de Privacidade",
    text: (
      <div>
        <p></p>
        <p className="quem-somos-a">
          Se você está aqui é porque você quer saber mais sobre as obrigações e
          direitos que lhe correspondem como um usuário deste site, Clube Massa:
          http://www.clubemassa.com. Nosso dever é informar e o seu é estar
          devidamente informado.
        </p>
        <p></p>
      </div>
    ),
  },
];

const Institucional = ({ title }) => {
  let selected = select.find((e) => e.title === title);

  return (
    <Fragment>
      <div className="quem-somos-container">
        <div className="quem-somos-header">
          <h1 className="quem-somos-title">{selected.title}</h1>
          <span className="quem-somos-section">
            HOME / INSTITUCIONAL / {selected.title}
          </span>
        </div>
        <div className="quem-somos-content">
          <div className="quem-somos-menu">
            <div className="quem-somos-menu-title">
              <h2>Menu</h2>
              <hr />
            </div>
            <div className="quem-somos-links">
              <Link className="quem-somos-link" to="/institucional/quem-somos">
                Quem Somos
              </Link>
              <Link
                className="quem-somos-link"
                to="/institucional/politica-de-privacidade"
              >
                Política de Privacidade
              </Link>
              <Link className="quem-somos-link" to="/institucional/delivery">
                Delivery
              </Link>
              <Link className="quem-somos-link" to="/contato">
                Contato
              </Link>
            </div>
          </div>
          <div className="quem-somos-text">{selected.text}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Institucional;
