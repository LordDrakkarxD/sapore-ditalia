import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import { cardapioGourmetData } from "./cardapio-gourmet-data";

import "./cardapio-gourmet.scss";

const CardapioGourmet = () => {
  return (
    <div className="section-cardapio-gourmet">
      <div className="cardapio-gourmet-container">
        <div className="cardapio-gourmet-header">
          <span>Cardápio Gourmet</span>
        </div>
        <div className="cardapio-gourmet-pratos">
          {cardapioGourmetData.map(({ title, dishes }, index) => {
            return (
              <div className={`${title}-item`}>
                {dishes.map(({ title, items }, index) => {
                  return (
                    <div className={`dicas-item-text ${title}`}>
                      <h1>{title}: </h1>
                      {items.map((item, index) => {
                        return (
                          <span className="pratos-item-desc">
                            <p className="pratos-item-name">
                              <p>{item}</p>
                              <p></p>
                            </p>
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <span className="cardapio-footer">
        Peça Já{" "}
        <div className="social-links">
          {" "}
          <div className="social-link telefone">
            <FontAwesomeIcon className="social-icon" icon={solid("phone")} />
            <span>(11) 2365-0401 /</span>
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
            <span>(11) 98304-3845</span>
          </Link>
        </div>
      </span>
    </div>
  );
};

export default CardapioGourmet;
