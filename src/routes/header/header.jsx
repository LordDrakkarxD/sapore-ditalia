import { useState, Fragment, useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import NavBar from "../../components/nav-bar/nav-bar";
import CartIcon from "../../components/cart-icon/cart-icon";
import UserIcon from "../../components/user-icon/user-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

// import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";

// import { signOutUser } from "../../utils/firebase/firebase.utils";
import DItaliaLogo from "../../assets/logo.png";
import "./header.scss";

const Header = () => {
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
      windowHeight > 798 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  //678

  return (
    <Fragment>
      <div className={`header-container ${navOpen ? "nav-open" : ""}`}>
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
        {/*<div className="nav-buttons">
          <UserIcon />
          <CartIcon />
        </div>
  {isCartOpen && <CartDropdown />}*/}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Header;
