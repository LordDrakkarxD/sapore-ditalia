import { useState, useContext, useEffect, Fragment } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import { CartContext } from "../../contexts/cart";

import NavBar from "../../components/nav-bar/nav-bar";
// import CartIcon from "../../components/cart-icon/cart-icon";
// import UserIcon from "../../components/user-icon/user-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import DItaliaLogo from "../../assets/logo-1.png";

import iFood from "../../assets/IFood_logo.svg";

// import { UserContext } from "../../contexts/user";
// import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./header.scss";

const Header = () => {
  const location = useLocation();
  const { isCartOpen } = useContext(CartContext);

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 725 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  //678

  return (
    <Fragment>
      <div className="mobile-div-container">
        {/*<div className="mobile-div">
          <div className="mobile-icon">
            <img className="header-logo" src={DItaliaLogo} alt="Logo" />
          </div>
          <span className="mobile-text">
            Nosso site está em manutenção, mas não se preocupe, você pode fazer
            seus pedidos por aqui!
          </span>
          <div className="mobile-buttons">
            <Link
              className="social-link ifood"
              aria-label="ifood"
              to="#"
              onClick={(e) => {
                window.open(
                  "https://www.ifood.com.br/delivery/sao-paulo-sp/sapore-d-italia-massas-artesanais-barra-funda/0bdc3b0b-a1a7-4f3f-b5ec-dae2806ef738?UTM_Medium=share",
                  "_blank",
                  "noopener,noreferrer"
                );
                e.preventDefault();
              }}
            >
              <img src={iFood} className="social-icon" alt="ifood" />
            </Link>
            <Link
              className="social-link whatsapp"
              aria-label="whatsapp"
              to="#"
              onClick={(e) => {
                window.open(
                  "https://wa.me/5511983043845",
                  "_blank",
                  "noopener,noreferrer"
                );
                e.preventDefault();
              }}
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={brands("whatsapp")}
              />
            </Link>
            <Link
              className="social-link facebook"
              aria-label="facebook"
              to="#"
              onClick={(e) => {
                window.open(
                  "https://www.facebook.com/Sapore-D-Italia-107683985365421",
                  "_blank",
                  "noopener,noreferrer"
                );
                e.preventDefault();
              }}
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={brands("facebook")}
              />
            </Link>
            <Link
              className="social-link instagram"
              aria-label="instagram"
              to="#"
              onClick={(e) => {
                window.open(
                  "https://www.instagram.com/saporediitaliaoficial/",
                  "_blank",
                  "noopener,noreferrer"
                );
                e.preventDefault();
              }}
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={brands("instagram")}
              />
            </Link>
          </div>
            </div>*/}
      </div>
      <section className="section-header">
        <div className={`header-falso ${stickyClass}`}></div>
        <div
          className={`header-container ${stickyClass} ${
            navOpen ? "nav-open" : ""
          } ${location.pathname.includes("/gourmet") ? "gourmet" : ""}`}
        >
          <Link className="header-logo-link" to="/">
            <img className="header-logo" src={DItaliaLogo} alt="Logo" />
          </Link>
          <NavBar />
          <button className="btn-mobile-nav" onClick={toggleNav}>
            <FontAwesomeIcon
              icon={solid("bars")}
              className="icon-mobile-nav"
              name="menu-outline"
            />
            <FontAwesomeIcon
              icon={solid("x")}
              className="icon-mobile-nav"
              name="close-outline"
            />
          </button>
        </div>
        {/*isCartOpen && <CartDropdown />*/}
        <Outlet />
      </section>
    </Fragment>
  );
};

export default Header;
