import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import iFood from "../../assets/IFood_logo.svg";

import "./cta.scss";

const CTA = () => {
  return (
    <div className="section-cta">
      <div className="cta-container">
        <span className="cta-span">Faça seu pedido aqui</span>
        <div className="social-links">
          <div className="social-link telefone">
            <FontAwesomeIcon className="social-icon" icon={solid("phone")} />
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default CTA;
