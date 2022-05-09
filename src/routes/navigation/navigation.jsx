import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import DItaliaLogo from "../../assets/icon.webp";

import "./navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={DItaliaLogo} alt="Logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
