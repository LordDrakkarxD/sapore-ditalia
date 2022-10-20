import { useContext } from "react";

import { CartContext } from "../../contexts/cart";
import { WindowPopupContext } from "../../contexts/window-popup";
import { WindowPopUpBuyContext } from "../../contexts/window-popup-buy";

import "./cart-card.scss";

const CartCard = ({ cartItem }) => {
  const { clearItemFromCart } = useContext(CartContext);
  const { setWindowPopup } = useContext(WindowPopupContext);
  const { setProductSelected } = useContext(WindowPopUpBuyContext);
  const { title, quantity, options, totalProduct, observation } = cartItem;

  const toggleEditItem = () => {
    setProductSelected(cartItem);
    setWindowPopup(true);
    clearItemFromCart(cartItem);
  };

  const toggleClearItem = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <div className="cart-card-container">
      <div className="cart-card-header">
        <div className="cart-card-title">
          {quantity}x {title}
        </div>
        <div className="cart-card-price">R$ {totalProduct.toFixed(2)}</div>
      </div>
      {options ? (
        <div className="cart-card-options">
          {Object.values(options).map((option) => (
            <div key={option.id} className="cart-card-option">
              {option.id}: {option.name}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {observation && <div className="cart-card-obs">Obs.: {observation}</div>}
      <div className="cart-card-buttons">
        <button className="cart-card-edit" onClick={toggleEditItem}>
          <span>Editar</span>
        </button>
        <button className="cart-card-remove" onClick={toggleClearItem}>
          <span>Remover</span>
        </button>
      </div>
    </div>
  );
};

export default CartCard;
