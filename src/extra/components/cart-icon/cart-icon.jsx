import { useContext } from "react";

import { CartContext } from "../../contexts/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import "./cart-icon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount, cartTotal, cartItems } =
    useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const isCartFull = () => {
    return cartItems.length && cartItems.length > 0 ? "ativo" : "";
  };

  return (
    <div
      className={`cart-icon-container ${isCartFull()}`}
      onClick={toggleIsCartOpen}
    >
      <FontAwesomeIcon icon={solid("bag-shopping")} className="cart-icon" />
      <p className="cart-info">
        <span className="cart-cost">R$ {cartTotal.toFixed(2)}</span>
        <span className="cart-items">
          {cartCount > 1 ? `${cartCount} itens` : `${cartCount} item`}
        </span>
      </p>
    </div>
  );
};

export default CartIcon;
