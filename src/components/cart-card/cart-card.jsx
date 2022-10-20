import { useContext } from "react";

import { CartContext } from "../../contexts/cart";
import { WindowPopupContext } from "../../contexts/window-popup";
import { WindowPopUpBuyContext } from "../../contexts/window-popup-buy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./cart-card.scss";

const CartCard = ({ cartItem }) => {
  const { clearItemFromCart } = useContext(CartContext);
  const { setWindowPopup } = useContext(WindowPopupContext);
  const { setProductSelected } = useContext(WindowPopUpBuyContext);
  //const { title, quantity, options, totalProduct, observation } = cartItem;
  const { title, price, quantity, option, imageUrl } = cartItem;

  // const toggleEditItem = () => {
  //   setProductSelected(cartItem);
  //   setWindowPopup(true);
  //   clearItemFromCart(cartItem);
  // };

  const toggleClearItem = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <div className="cart-card-container">
      <div className="cart-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="cart-card-description">
        <div className="cart-card-title">{`${title} (${option})`}</div>
        <div className="cart-card-quantity">{`Qtde: ${quantity}`}</div>
        <div className="cart-card-price">
          R$ {(quantity * price).toFixed(2)}
        </div>
        <div className="cart-card-remove" onClick={toggleClearItem}>
          <FontAwesomeIcon className="remove-icon" icon={solid("trash")} />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
