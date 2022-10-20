import { Link, Navigate } from "react-router-dom";

import { useContext, useEffect } from "react";

import { RemoveScroll } from "react-remove-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { CartContext } from "../../contexts/cart";

import CartCard from "../cart-card/cart-card";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const { setIsCartOpen } = useContext(CartContext);

  useEffect(() => {
    document.body.classList.add("body-shift");
  }, []);

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    <Navigate to="/checkout" />;
  };

  const toggleIsCartOpen = () => {
    setIsCartOpen(false);
  };

  return (
    <section className="section-cart-dropdown">
      <RemoveScroll>
        <div className="cart-dropdown-container">
          <div className="cart-title">
            <h2>Meu Carrinho</h2>
            <div className="cart-close-button" onClick={toggleIsCartOpen}>
              <FontAwesomeIcon
                icon={solid("circle-xmark")}
                className="cart-dropdown-close-button"
              ></FontAwesomeIcon>
            </div>
          </div>
          {cartItems && cartItems.length > 0 ? (
            <div className="cart-items">
              {cartItems.map((cartItem) => (
                <CartCard key={cartItem.id} cartItem={cartItem} />
              ))}
              <div className="cart-footer">
                <div className="cart-subtotal">
                  Subtotal: <span>R$ {cartTotal.toFixed(2)}</span>
                </div>
                <div className="cart-checkout">
                  <Link
                    to="/checkout"
                    onClick={toggleIsCartOpen}
                    className="checkout-button"
                  >
                    Finalizar Compra
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart-dropdown-empty">
              <span className="cart-dropdown-empty-title">
                Sua sacola está vazia.
              </span>
            </div>
          )}
        </div>
      </RemoveScroll>
    </section>
  );
};

export default CartDropdown;
