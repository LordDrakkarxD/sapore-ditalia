import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import Location from "../../assets/location.jpg";

import "./contato.scss";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -23.5316899,
  lng: -46.6622526,
};

const Contato = () => {
  return (
    <div className="section-contato">
      <div className="contato-container">
        <div className="contato-header">
          <span className="contato-heading">Contato</span>
          <span className="contato-text">
            Estamos aqui para te ajudar e fazer da sua experiência a melhor de
            todas. Mande suas dúvidas, críticas ou sugestões.
          </span>
        </div>
        <div className="contact-info">
          <div className="contact-info-image">
            <img src={Location} alt="example" />
          </div>
          <div className="contact-info-text">
            <p>
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
                  icon={solid("phone")}
                />
                <span>55 (11) 3667-3864</span>
              </Link>
            </p>
            <p>
              <Link
                className="social-link whatsapp"
                aria-label="whatsapp"
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
                <span>55 (11) 95958-9451</span>
              </Link>
            </p>
            <p>&nbsp;</p>
            <p>
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
                <span>contato@saporediitalia.com.br</span>
              </Link>
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              R. das Perdizes, 57 - Loja 1 - Barra Funda, São Paulo - SP,
              01156-030
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p style={{ fontWeight: 500 }}>
              Atendimento para Entregas ou Retiradas
            </p>
            <p>&nbsp;</p>
            <p>Segunda à Sábado das 09:00 às 18:00 hs</p>
            <p>Exceto Domingo e feriados.</p>
          </div>
        </div>
        {/*<div className="contact-map">
          <LoadScript googleMapsApiKey="AIzaSyATzLJhm8TaI3_AKNEGSsTdyvNqKebNoz4">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={20}
            >
            </GoogleMap>
          </LoadScript>
              </div>*/}
      </div>
    </div>
  );
};

export default Contato;
