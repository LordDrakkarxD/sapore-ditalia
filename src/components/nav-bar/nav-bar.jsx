import { useState, useContext, Fragment } from "react";

import { Outlet, Link, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { CartContext } from "../../contexts/cart";
import { UserContext } from "../../contexts/user";

import CartIcon from "../cart-icon/cart-icon";
import UserIcon from "../user-icon/user-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./nav-bar.scss";

const NavBar = (props) => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const location = useLocation();

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    window.scrollTo(0, 0);
  };

  const handleMenu = () => {
    window.scrollTo(0, 0);
  };

  const toggleIsCartOpen = () => {
    setIsCartOpen(true);
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
        {/*<Link
          className="nav-bar-link"
          to="/gourmet"
          onClick={() => window.scrollTo(0, 0)}
        >
          Gourmet
  </Link>*/}
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
        {/*<div className="nav-bar-icons">
          {currentUser ? (
            <Link to="/menu" onClick={handleMenu}>
              <UserIcon logged={true} />
            </Link>
          ) : (
            <Link to="/auth" onClick={() => window.scrollTo(0, 0)}>
              <UserIcon logged={false} />
            </Link>
          )}
          <CartIcon onClick={toggleIsCartOpen} />
          </div>*/}
      </div>
      {/*isCartOpen && <CartDropdown />*/}
    </Fragment>
  );
};

export default NavBar;
