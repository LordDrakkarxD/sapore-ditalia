import { useContext } from "react";

import { CartContext } from "../../contexts/cart";
import { WindowPopupContext } from "../../contexts/window-popup";
import { WindowPopUpBuyContext } from "../../contexts/window-popup-buy";

import "./cart-card.scss";

const CartCard = ({ cartItem }) => {
  const { clearItemFromCart, cartTotal } = useContext(CartContext);
  const { setWindowPopup } = useContext(WindowPopupContext);
  const { setProductSelected } = useContext(WindowPopUpBuyContext);
  const {
    imageUrl,
    price,
    name,
    quantity,
    options,
    description,
    totalProduct,
    observation,
  } = cartItem;

  console.log(totalProduct);

  const obs = "Quero Milho";

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
          {quantity}x {name}
        </div>
        <div className="cart-card-price">R$ {totalProduct.toFixed(2)}</div>
      </div>
      {options ? (
        <div className="cart-card-options">
          {Object.values(options).map((option) => (
            <div key={option.name} className="cart-card-option">
              {option.id}: {option.name}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="cart-card-obs">Obs.: {observation}</div>
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
