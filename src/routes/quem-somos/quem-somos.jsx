import { Fragment } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/footer/footer";
import Header from "../header/header";

import "./quem-somos.scss";

const select = [
  {
    title: "Segurança",
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
    title: "Termos e Condições",
    text: (
      <div>
        <p></p>
        <p className="quem-somos-a">
          O Clube de Assinaturas CLUBE MASSA, razão social CATHERINE GRAZIELLE
          FRANKE, inscrita no CNPJ 26.084.714/0001-19, localizada na AV Dom
          Pedro Segundo 655 – Centro – Presidente Venceslau-SP, a todos os
          clientes pessoa física e jurídica, será regido pelas disposições do
          presente documento (“Termos e Condições”).
        </p>
        <p></p>
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

const QuemSomos = ({ title }) => {
  let selected = select.find((e) => e.title === title);

  return (
    <Fragment>
      <Header />
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
              <Link className="quem-somos-link" to="/seguranca">
                Segurança
              </Link>
              <Link className="quem-somos-link" to="/politica-de-privacidade">
                Política de Privacidade
              </Link>
              <Link className="quem-somos-link" to="/termos-e-condicoes">
                Termos e Condições
              </Link>
              <Link className="quem-somos-link" to="/contato">
                Contato
              </Link>
            </div>
          </div>
          <div className="quem-somos-text">{selected.text}</div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default QuemSomos;
