import { useState, useContext, Fragment } from "react";

import { Outlet, Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { CartContext } from "../../contexts/cart";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import "./nav-bar.scss";

const NavBar = ({ sticky }) => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <Fragment>
      <div className="nav-bar-container">
        <Link
          className="nav-bar-link"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          Home
        </Link>
        <Link
          className="nav-bar-link"
          to="/rosticceria"
          onClick={() => window.scrollTo(0, 0)}
        >
          Rotisserie
        </Link>
        <Link
          className="nav-bar-link"
          to="/gourmet"
          onClick={() => window.scrollTo(0, 0)}
        >
          Gourmet
        </Link>
        <Link
          className="nav-bar-link"
          to="/enoteca"
          onClick={() => window.scrollTo(0, 0)}
        >
          Enoteca
        </Link>
        <Link
          className="nav-bar-link"
          to="/delivery"
          onClick={() => window.scrollTo(0, 0)}
        >
          Delivery
        </Link>
        <Link
          className="nav-bar-link"
          to="/institucional/quem-somos"
          onClick={() => window.scrollTo(0, 0)}
        >
          Institucional
        </Link>
        <Link
          className="nav-bar-link"
          to="/contato"
          onClick={() => window.scrollTo(0, 0)}
        >
          Contato
        </Link>
        <CartIcon onClick={toggleIsCartOpen} />
      </div>
      {isCartOpen && <CartDropdown />}
    </Fragment>
  );
};

export default NavBar;
