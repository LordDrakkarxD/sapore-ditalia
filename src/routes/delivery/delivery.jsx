import { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import Slider from "react-slick";

import { deliveryList } from "./delivery-list";

import iFood from "../../assets/IFood_logo.svg";

//import Slider from "../../components/slider/slider";

import "./delivery.scss";

const Delivery = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="section-delivery">
      <div className="delivery-container">
        <div className="delivery-header">
          <span>Delivery</span>
        </div>
        <div className="delivery-entrega">
          <div className="delivery-entrega-image"></div>
          <div className="delivery-entrega-text">
            <h1>Vamos até você!</h1>
            <p>
              Escolha entre as nossas diversas opções de pratos e massas. Todos
              são prontos ou semi-prontos, e ótimas opções para quem, além da
              qualidade, não abre mão de praticidade. 
            </p>
            <p>&nbsp;</p>

            <p className="ifood-button">
              Faça o seu pedido por aqui --->
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
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              Lembrando que nós temos disponíveis massas gourmet para todos os
              paladares porém, somente sob encomenda. Para mais informações,
              entre em contato com nossa loja.
            </p>
            <p>&nbsp;</p>

            <p className="ifood-button">
              Entre em contato por aqui --->
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
            </p>
          </div>
        </div>
        <div className="delivery-pratos">
          <div className="delivery-items">
            <div className="delivery-item">
              <div className="delivery-item-text">
                <h1>Os pratos mais amados</h1>
                <p>Nhoque de Batata</p>
                <p>&nbsp;</p>
                <p>Nhoque de Mandioquinha</p>
                <p>&nbsp;</p>
                <p>Ravioli de carne seca com abóbora </p>
                <p>&nbsp;</p>
                <p>Ravioli de gorgonzola com pera caramelizada</p>
                <p>&nbsp;</p>
                <p>Lasanha de queijo e presunto a bolognesa </p>
                <p>&nbsp;</p>
                <p>Sorrentino de búfala com limão siciliano </p>
                <p>&nbsp;</p>
                <p>Sorrentino de gorgonzola com alho poró </p>
                <p>&nbsp;</p>
                <p>Sorrentino de búfala com geléia de pimenta </p>
                <p>&nbsp;</p>
                <p>Rondelli de búfala com tomate seco </p>
                <p>&nbsp;</p>
                <p>Rondelli 4 queijos</p>
              </div>
              <div className="delivery-item-slider">
                <Slider {...settings}>
                  {deliveryList.map((img, idx) => (
                    <div
                      className={
                        idx === imageIndex ? "slides activeSlide" : "slides"
                      }
                    >
                      <img src={img.imageUrl} alt={img.title} />
                      <h2>{img.title}</h2>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
