import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import NavBar from "../../components/nav-bar/nav-bar";
import CartIcon from "../../components/cart-icon/cart-icon";
import UserIcon from "../../components/user-icon/user-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

// import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";

// import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.scss";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);

  const linksList = {};

  return (
    <Fragment>
      <div className="navigation-container">
        <NavBar />
        <div className="nav-buttons">
          <UserIcon />
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
