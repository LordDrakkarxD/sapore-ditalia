import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import { UserContext } from "../../contexts/user";

import Logo from "../../assets/logo-1.png";

import iFood from "../../assets/IFood_logo.svg";

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
    <Fragment>
      {" "}
      <div className="footer">
        <div className="footer-container">
          <div className="logo-container">
            <Link className="footer-logo" to="/">
              <img src={Logo} className="logo" alt="Clube Massa" />
            </Link>
            <div className="social-links">
              <Link
                className="social-link facebook"
                aria-label="facebook"
                to="#"
                onClick={(e) => {
                  window.open(
                    "https://www.facebook.com/Sapore-D-Italia-107683985365421",
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
                aria-label="instagram"
                to="#"
                onClick={(e) => {
                  window.open(
                    "https://www.instagram.com/saporediitaliaoficial/",
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
                className="social-link whatsapp"
                aria-label="whatsapp"
                to="#"
                onClick={(e) => {
                  window.open(
                    "https://wa.me/5511983043845",
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
                aria-label="email"
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
              <Link
                className="social-link ifood"
                aria-label="ifood"
                to="#"
                onClick={(e) => {
                  window.open(
                    "https://www.ifood.com.br/delivery/sao-paulo-sp/sapore-d-italia-massas-artesanais-barra-funda/0bdc3b0b-a1a7-4f3f-b5ec-dae2806ef738?UTM_Medium=share",
                    "_blank",
                    "noopener,noreferrer"
                  );
                  e.preventDefault();
                }}
              >
                <img src={iFood} className="social-icon" alt="ifood" />
              </Link>
            </div>
          </div>
          <div className="contact-container">
            <p className="footer-heading">Contato</p>
            <div className="contact-info-heading">
              <p className="contact-info">
                Telefone: 2365-0401
                <br />
                WhatsApp: 98304-3845
              </p>
            </div>
          </div>
          <div className="nav-container">
            <p className="nav-heading">Institucional</p>
            <div className="footer-nav">
              <Link className="footer-link" to="/institucional/quem-somos">
                Quem Somos
              </Link>
              {/*<Link className="footer-link" to="/institucional/seguranca">
                Segurança
          </Link>*/}
              <Link
                className="footer-link"
                to="/institucional/politica-de-privacidade"
              >
                Política de Privacidade
              </Link>
              <Link className="footer-link" to="/institucional/delivery">
                Delivery
              </Link>
              <Link className="footer-link" to="/contato">
                Contato
              </Link>
            </div>
          </div>
          <div className="nav-container">
            <p className="nav-heading">Formas de Pagamento</p>
            <div className="footer-cards-nav">
              <img src={VisaIcon} className="footer-card" alt="Boleto" />
              <img src={MasterCardIcon} className="footer-card" alt="Boleto" />
              {/*<img src={AmexIcon} className="footer-card" alt="Boleto" />
              <img src={DinersIcon} className="footer-card" alt="Boleto" />
              <img src={HyperCardIcon} className="footer-card" alt="Boleto" /*/}
              <img src={EloIcon} className="footer-card" alt="Boleto" />
              {/*<img src={BoletoIcon} className="footer-card" alt="Boleto" />*/}
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
      <hr />
      <div className="copyright">
        Copyright © 2022 por Sapore D Italia Massas Artesanais LTDA. Todos os
        Direitos Reservados.
      </div>
    </Fragment>
  );
};

export default Footer;
