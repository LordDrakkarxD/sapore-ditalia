import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import DItaliaLogo from "../../assets/icon.webp";
import { UserContext } from "../../contexts/user";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={DItaliaLogo} alt="Logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          {/*<Link className="nav-link" to="/shop">
            COMO FUNCIONA
          </Link>
          <Link className="nav-link" to="/shop">
            PORQUE ASSINAR
          </Link>
          <Link className="nav-link" to="/shop">
            ESCOLHA SEU PLANO
          </Link>*/}
          <Link className="nav-link" to="/shop">
            GASTRONOMIA
          </Link>
          <Link className="nav-link" to="/shop">
            PEÇA JA
          </Link>
          <Link className="nav-link" to="/who">
            QUEM SOMOS
          </Link>
          <Link className="nav-link" to="/contact">
            CONTATO
          </Link>
          {currentUser ? (
            <span className="nav-link logged" onClick={signOutUser}>
              <FontAwesomeIcon icon={solid("user")} />
            </span>
          ) : (
            <Link className="nav-link" to="/signin">
              <FontAwesomeIcon icon={solid("user")} />
            </Link>
          )}
          <Link className="nav-link" to="/shopping-cart">
            <FontAwesomeIcon icon={solid("cart-shopping")} />
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
