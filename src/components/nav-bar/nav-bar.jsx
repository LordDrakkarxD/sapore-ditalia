import { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./nav-bar.scss";

const NavBar = ({ sticky }) => {
  // `nav-bar-links-container ${sticky ? "sticky" : ""}`

  return (
    <div className="nav-bar-container">
      <Link className="nav-bar-link" to="/">
        Home
      </Link>
      <Link className="nav-bar-link" to="/menu">
        Nossos Planos
      </Link>
      <Link className="nav-bar-link" to="/menu">
        Rosticeria
      </Link>
      {/*<Link className="nav-bar-link" to="/shop">
      Peca Ja
</Link>*/}
      <Link className="nav-bar-link" to="/who">
        Quem Somos
      </Link>
      <Link className="nav-bar-link" to="/contact">
        Delivery
      </Link>
      <Link className="nav-bar-link" to="/contact">
        Contato
      </Link>
    </div>
  );
};

export default NavBar;
