import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Link } from "react-router-dom";

import FormInput from "../../components/form-input/form-input";
import Button from "../../components/button/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import Location from "../../assets/location.jpg";

import "./contato.scss";

const containerStyle = {
  width: "100%",
  height: "200px",
};

const center = {
  lat: -23.5316899,
  lng: -46.6622526,
};

const defaultFormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contato = () => {
  const [val, setVal] = useState("");
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { name, email, subject, message } = formFields;

  const form = useRef();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "gmail_template", form.current, "hlnb8kJk6OGir7cnn")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    resetFormFields();
  };

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
              <div className="social-link telefone">
                <FontAwesomeIcon
                  className="social-icon"
                  icon={solid("phone")}
                />
                <span>55 (11) 2365-0401</span>
              </div>
            </p>
            <p>
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
                <span>55 (11) 98304-3845</span>
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
              R. das Perdizes, 57 - Loja 4 - Barra Funda, São Paulo - SP,
              01156-030
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p style={{ fontWeight: 500 }}>
              Atendimento para Entregas ou Retiradas
            </p>
            <p>&nbsp;</p>
            <p>Terça à Sexta das 08:00 às 17:00</p>
            <p>Sábados, Domingos e Feriados das 10:00 às 16:30</p>
          </div>
        </div>
      </div>
      <div className="map-container">
        <div className="contact-info">
          <span className="contact-info-title">Contate-nos</span>
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="email-name-form">
              <FormInput
                label="Nome *"
                type="text"
                required
                onChange={handleChange}
                name="name"
                value={name}
                placeholder=""
              />
              <FormInput
                label="Email *"
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={email}
                placeholder=""
              />
            </div>
            <FormInput
              label="Assunto"
              type="text"
              required
              onChange={handleChange}
              name="subject"
              value={subject}
              placeholder=""
            />
            <div className="message-form">
              <FormInput
                label="Mensagem *"
                type="text"
                required
                onChange={handleChange}
                name="message"
                value={message}
                placeholder=""
              />
            </div>
            <Button type="submit">Enviar</Button>
          </form>
        </div>
        <div className="contact-map">
          <LoadScript googleMapsApiKey="AIzaSyATzLJhm8TaI3_AKNEGSsTdyvNqKebNoz4">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={20}
            ></GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default Contato;
