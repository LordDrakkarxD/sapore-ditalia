import { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import { WindowPopUpBuyContext } from "../../contexts/window-popup-buy";
import { WindowPopupContext } from "../../contexts/window-popup";
import { CartContext } from "../../contexts/cart";

import OptionsCard from "../options-card/options-card";

import "./buy-options-popup.scss";

const BuyOptions = ({ trigger }) => {
  const { productSelected, itemsTotal, setItemsTotal, formData, formTotal } =
    useContext(WindowPopUpBuyContext);
  const { setWindowPopup } = useContext(WindowPopupContext);
  const { addItemToCart, cartTotal } = useContext(CartContext);
  const [characterCount, setCharacterCount] = useState(0);
  const [observation, setObservation] = useState("");

  const { name, price, imageUrl, description, servings, options } =
    productSelected;

  const toggleCharacterCount = (e) => {
    setCharacterCount(e.target.value.length);
    setObservation(e.target.value);
  };

  const toggleWindowPopupOverlay = (e) => {
    e.stopPropagation();

    e.nativeEvent.stopImmediatePropagation();

    if (e.target === e.currentTarget) {
      setWindowPopup(false);
    }
  };

  const toggleWindowPopup = () => {
    setWindowPopup(false);
  };

  const toggleAddQuantity = () => {
    setItemsTotal(itemsTotal + 1);
  };

  const toggleReduceQuantity = () => {
    setItemsTotal(itemsTotal - 1);
  };

  const addProductToCart = () => {
    const totalProduct = (price + formTotal) * itemsTotal;

    addItemToCart({
      ...productSelected,
      quantity: itemsTotal,
      totalProduct,
      options: formData,
      observation,
    });
    setItemsTotal(1);
    toggleWindowPopup();
  };

  return trigger ? (
    <div
      className="buy-options-popup-container"
      onClick={toggleWindowPopupOverlay}
    >
      <div className="buy-options-popup">
        <div className="dish-container">
          <div className="dish-content">
            <div className="dish-content-img-container">
              <img className="dish-content-img" src={imageUrl} alt="food" />
            </div>
            <div className="dish-content-header">
              <div className="dish-content-nav-header">
                <div className="dish-content-nav-header-title">{name}</div>
                <button
                  className="dish-content-nav-header-btn"
                  onClick={toggleWindowPopup}
                >
                  <FontAwesomeIcon
                    icon={solid("x")}
                    className="dish-content-nav-btn"
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>
            <div className="dish-content-scrolling">
              <p className="dish-content-details">{description}</p>
              <p className="dish-content-additional-details">
                {servings &&
                  (servings > 1
                    ? `Serve ${servings} pessoas`
                    : `Serve ${servings} pessoa`)}
              </p>
              <div className="dish-content-container">
                <span className="dish-price">R$ {price.toFixed(2)}</span>
              </div>
              <form>
                {options.map((option) => (
                  <OptionsCard key={option.id} option={option} />
                ))}
              </form>
              <div className="dish-content-observation">
                <div className="dish-observation-container">
                  <div className="dish-observation-header">
                    <label className="dish-observation-header-title">
                      Algum comentário?
                    </label>
                    <span className="dish-observation-header-counter">
                      {characterCount} / 140
                    </span>
                  </div>
                  <textarea
                    className="dish-observation-text"
                    placeholder="Ex: tirar a cebola, maionese à parte etc."
                    maxLength="140"
                    onChange={toggleCharacterCount}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="dish-content-action">
              <div className="dish-buy-options">
                <div className="dish-buy-counter">
                  <button
                    disabled={itemsTotal === 1 ? true : false}
                    className="dish-modifier-button"
                    onClick={toggleReduceQuantity}
                  >
                    <FontAwesomeIcon
                      icon={solid("minus")}
                      className="add-minus-icon"
                    ></FontAwesomeIcon>
                  </button>
                  <span className="dish-buy-counter-number">{itemsTotal}</span>
                  <button
                    className="dish-modifier-button"
                    onClick={toggleAddQuantity}
                  >
                    <FontAwesomeIcon
                      icon={solid("plus")}
                      className="add-plus-icon"
                    ></FontAwesomeIcon>
                  </button>
                </div>
                <button className="dish-buy-button" onClick={addProductToCart}>
                  <span className="dish-add">Adicionar</span>
                  <span className="dish-price">
                    R$ {((price + formTotal) * itemsTotal).toFixed(2)}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default BuyOptions;

<div className="dish-action-content"></div>;
