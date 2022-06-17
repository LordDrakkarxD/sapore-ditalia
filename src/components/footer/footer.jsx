import { useContext } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import { UserContext } from "../../contexts/user";

import Logo from "../../assets/logo.png";

import BoletoIcon from "../../assets/cards/boleto.svg";

import EloIcon from "../../assets/cards/elo.svg";

import VisaIcon from "../../assets/cards/visa.svg";

import MasterCardIcon from "../../assets/cards/mastercard.svg";

import HyperCardIcon from "../../assets/cards/hipercard-v2.svg";

import AmexIcon from "../../assets/cards/amex-american-express-v2.svg";

import DinersIcon from "../../assets/cards/diners-club-international-v2.svg";

import PIXIcon from "../../assets/cards/pix-2.png";

import EncryptIcon from "../../assets/cards/let-s-encrypt-seeklogo.com.svg";

import PagarMeIcon from "../../assets/cards/pagarme.svg";

import "./footer.scss";

const Footer = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <Link className="footer-logo" to="/">
            <img src={Logo} className="logo" alt="Clube Massa" />
          </Link>
          <div className="social-links">
            <Link
              className="social-link facebook"
              to="#"
              onClick={(e) => {
                window.open(
                  "https://facebook.com",
                  "_blank",
                  "noopener,noreferrer"
                );
                e.preventDefault();
              }}
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={brands("facebook")}
              />
            </Link>
            <Link
              className="social-link instagram"
              to="#"
              onClick={(e) => {
                window.open(
                  "https://instagram.com",
                  "_blank",
                  "noopener,noreferrer"
                );
                e.preventDefault();
              }}
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={brands("instagram")}
              />
            </Link>
            <Link
              className="social-link youtube"
              to="#"
              onClick={(e) => {
                window.open(
                  "https://youtube.com",
                  "_blank",
                  "noopener,noreferrer"
                );
                e.preventDefault();
              }}
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={brands("youtube")}
              />
            </Link>
            <Link
              className="social-link whatsapp"
              to="#"
              onClick={(e) => {
                window.open(
                  "https://wa.me/5511959589451",
                  "_blank",
                  "noopener,noreferrer"
                );
                e.preventDefault();
              }}
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={brands("whatsapp")}
              />
            </Link>
            <Link
              className="social-link email"
              to="#"
              onClick={(e) => {
                window.location = "mailto:contato@saporediitalia.com.br";
                e.preventDefault();
              }}
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={solid("envelope")}
              />
            </Link>
          </div>
          <div className="copyright">
            Copyright © 2022 by Sapore D'Italia,
            <br />
            Inc. All Rights reserved.
          </div>
        </div>
        <div className="contact-container">
          <p className="footer-heading">Contato</p>
          <div className="contact-info-heading">
            <p className="address-info">
              R. Turiassu 340 Perdizes, apt 154 Bloco A,
              <br />
              Sao Paulo, SP 05005-000
            </p>
            <p className="contact-info">
              <Link
                className="footer-link"
                to="#"
                onClick={(e) => {
                  window.location = "tel:11 95958-9451";
                  e.preventDefault();
                }}
              >
                (11) 95958-9451
              </Link>
              <br />
              <Link
                className="footer-link"
                to="#"
                onClick={(e) => {
                  window.location = "mailto:contato@saporediitalia.com.br";
                  e.preventDefault();
                }}
              >
                contato@saporediitalia.com.br
              </Link>
            </p>
          </div>
        </div>
        <div className="nav-container">
          <p className="nav-heading">Dúvidas</p>
          <div className="footer-nav">
            {currentUser && (
              <Link className="footer-link" to="/account/orders">
                Meus Pedidos
              </Link>
            )}

            <Link className="footer-link" to="/como-comprar">
              Como Comprar
            </Link>
            <Link className="footer-link" to="/termos-e-condicoes">
              Termos e Condições
            </Link>
            <Link className="footer-link" to="/entrega">
              Entrega
            </Link>
            <Link className="footer-link" to="/troca-e-devolucao">
              Troca e Devolução
            </Link>
          </div>
        </div>
        <div className="nav-container">
          <p className="nav-heading">Institucional</p>
          <div className="footer-nav">
            <Link className="footer-link" to="/quem-somos">
              Quem Somos
            </Link>
            <Link className="footer-link" to="/seguranca">
              Segurança
            </Link>
            <Link className="footer-link" to="/politica-de-privacidade">
              Política de Privacidade
            </Link>
          </div>
        </div>
        <div className="nav-container">
          <p className="nav-heading">Formas de Pagamento</p>
          <div className="footer-cards-nav">
            <img src={VisaIcon} className="footer-card" alt="Boleto" />
            <img src={MasterCardIcon} className="footer-card" alt="Boleto" />
            <img src={AmexIcon} className="footer-card" alt="Boleto" />
            <img src={DinersIcon} className="footer-card" alt="Boleto" />
            <img src={HyperCardIcon} className="footer-card" alt="Boleto" />
            <img src={EloIcon} className="footer-card" alt="Boleto" />
            <img src={BoletoIcon} className="footer-card" alt="Boleto" />
            <img src={PIXIcon} className="footer-card" alt="Boleto" />
          </div>
        </div>
        {/*<div className="nav-container">
          <p className="nav-heading">Segurança</p>
          <div className="footer-cards-nav">
            <img src={PagarMeIcon} className="footer-card" alt="security" />
            <img src={EncryptIcon} className="footer-card" alt="security" />
          </div>
            </div>*/}
      </div>
    </div>
  );
};

export default Footer;
