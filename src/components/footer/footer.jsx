import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import { UserContext } from "../../contexts/user";

import "./footer.scss";

const Footer = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="company-container">
          <div className="company-details">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://assets.betalabs.net/production/clubemassa/images/stores/1/logo-menor.png"
                  alt="Clube Massa"
                />
              </Link>
            </div>
            <p>
              Rua Rui Barbosa, 867, Vila Carmem, Presidente Venceslau SP CEP
              19400-000
            </p>
          </div>
          <div className="company-details">
            <p>CATHERINE GRAZIELLE FRANKE ME,</p>
            <p>26084714000119</p>
          </div>
        </div>
        <div className="institutional-container">
          <div className="institutional-links">
            <div className="nav-link">
              <h2>Institucional</h2>
              <Link className="link" to="/quem-somos">
                Quem Somos
              </Link>
              <Link className="link" to="/seguranca">
                Segurança
              </Link>
              <Link className="link" to="/politica-de-privacidade">
                Política de Privacidade
              </Link>
            </div>
            <div className="nav-link">
              <h2>Serviços</h2>
              <Link className="link" to="/central-de-atendimento">
                Central de Atendimento
              </Link>
              <Link className="link" to="/fale-conosco">
                Fale Conosco
              </Link>
            </div>
          </div>
          <div className="institutional-links">
            <div>
              <div className="nav-link">
                <h2>Dúvidas</h2>
                {currentUser && (
                  <Link className="link" to="/account/orders">
                    Meus Pedidos
                  </Link>
                )}

                <Link className="link" to="/como-comprar">
                  Como Comprar
                </Link>
                <Link className="link" to="/termos-e-condicoes">
                  Termos e Condições
                </Link>
                <Link className="link" to="/entrega">
                  Entrega
                </Link>
                <Link className="link" to="/troca-e-devolucao">
                  Troca e Devolução
                </Link>
              </div>
            </div>
          </div>
          <div className="institutional-links">
            <div className="nav-link">
              <h2>Atendimento</h2>
              <Link className="link" to="mailto:comercial@massadamamma.com.br ">
                comercial@massadamamma.com.br{" "}
              </Link>
            </div>
          </div>
          <div className="institutional-links">
            <div className="nav-link">
              <h2>Redes Sociais</h2>
              <div className="social-links">
                <Link
                  className="social-link facebook"
                  to={{ pathname: "https://facebook.com" }}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={brands("facebook")} />
                </Link>
                <Link
                  className="social-link instagram"
                  to={{ pathname: "https://instagram.com" }}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={brands("instagram")} />
                </Link>
                <Link
                  className="social-link youtube"
                  to={{ pathname: "https://youtube.com" }}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={brands("youtube")} />
                </Link>
              </div>
            </div>
          </div>
          <div className="institutional-links">
            <div className="nav-link">
              <h2>Formas de Pagamento</h2>
              <img
                src="https://assets.betalabs.net/production/clubemassa/images/stores/1/bandeiras.jpg"
                alt="bandeiras"
              />
            </div>
          </div>
          <div className="institutional-links">
            <div className="nav-link">
              <h2>Segurança</h2>
              <img
                src="https://assets.betalabs.net/production/clubemassa/images/stores/1/ssl.jpg"
                alt="security"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
