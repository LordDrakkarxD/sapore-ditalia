import { useContext } from "react";

import { WindowPopUpBuyContext } from "../../contexts/window-popup-buy";
import { WindowPopupContext } from "../../contexts/window-popup";

import BuyOptionsPopup from "../buy-options-popup/buy-options-popup";

import "./product-card.scss";

const ProductCard = ({ item, section }) => {
  const { isWindowPopup, setWindowPopup } = useContext(WindowPopupContext);
  const { setProductSelected } = useContext(WindowPopUpBuyContext);

  const { title, price, imageUrl, description, servings } = item;

  const toggleWindowPopup = () => {
    setWindowPopup(true);
    setProductSelected({
      ...item,
      quantity: 1,
      section,
    });
  };

  return (
    <div>
      <div className="product-card-container" onClick={toggleWindowPopup}>
        <div className="product-card-footer">
          <div className="product-card-details">
            <span className="product-card-name">{title}</span>
            <span className="product-card-description">{description}</span>
            <span className="product-card-servings">
              {servings &&
                (servings > 1
                  ? `Serve ${servings} pessoas`
                  : `Serve ${servings} pessoa`)}
            </span>
          </div>
          <span className="product-card-price">R$ {price.toFixed(2)}</span>
        </div>
        <div className="product-card-image">
          <img className="product-image" src={imageUrl} alt={`${title}`} />
        </div>
      </div>
      <BuyOptionsPopup trigger={isWindowPopup} />
    </div>
  );
};

export default ProductCard;
