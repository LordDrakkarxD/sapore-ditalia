import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import { CartContext } from "../../contexts/cart";

import CartCard from "../cart-card/cart-card";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const categories = cartItems.map((cartItem) => cartItem.section);

  const categoriesUnique = [...new Set(categories)];

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const toggleIsCartOpen = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-close-button" onClick={toggleIsCartOpen}>
        <FontAwesomeIcon
          icon={solid("x")}
          className="cart-dropdown-close-button"
        ></FontAwesomeIcon>
      </div>
      {cartItems && cartItems.length > 0 ? (
        <div>
          <div className="cart-dropdown-header">
            <div className="cart-header-title">Pedido</div>
            <div className="cart-header-restaurant">Restaurante</div>
          </div>
          <div className="cart-items">
            {categoriesUnique.map((category) => (
              <div className="cart-section" key={category}>
                <div className="cart-section-title">{category}</div>
                {cartItems.map((cartItem) =>
                  cartItem.section === category ? (
                    <CartCard key={cartItem.id} cartItem={cartItem} />
                  ) : (
                    ""
                  )
                )}
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <div className="cart-footer-subtotal">
              <div className="cart-footer-subtotal-title">Subtotal</div>
              <div className="cart-footer-subtotal-price">
                R$ {cartTotal.toFixed(2)}
              </div>
            </div>
            <div className="cart-footer-delivery">
              <div className="cart-footer-delivery-info">
                <div className="cart-footer-delivery-title">
                  Taxa de entrega
                </div>
                <div className="cart-footer-delivery-price">Grátis</div>
              </div>
              <div className="cart-footer-delivery-content">
                <div className="cart-footer-total">
                  <div className="cart-footer-total-title">Total</div>
                  <div className="cart-footer-total-price">
                    R$ {cartTotal.toFixed(2)}
                  </div>
                </div>
                <Link
                  className="cart-footer-button"
                  to="/payment"
                  onClick={toggleIsCartOpen}
                >
                  <span className="cart-footer-button-info">
                    Escolher forma de pagamento
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-dropdown-empty">
          <div className="cart-dropdown-empty-img">
            <FontAwesomeIcon
              icon={solid("burger")}
              className="cart-dropdown-empty"
            ></FontAwesomeIcon>
          </div>
          <span className="cart-dropdown-empty-title">
            Ops, parece que sua sacola esta vazia.
          </span>
          <span className="cart-dropdown-empty-content">Adicione items!</span>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
