import { useState } from "react";

import { Outlet, Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

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
      <NavHashLink
        className="nav-bar-link"
        smooth
        to="/#slider"
        activeClassName="active"
        activeStyle={{ color: "#ffd700" }}
      >
        Promos
      </NavHashLink>
      <NavHashLink
        className="nav-bar-link"
        smooth
        to="/#section-plans-container"
        activeClassName="active"
        activeStyle={{ color: "#ffd700" }}
      >
        Kits
      </NavHashLink>
      <NavHashLink
        className="nav-bar-link"
        smooth
        to="/#section-cta"
        activeClassName="active"
        activeStyle={{ color: "#ffd700" }}
      >
        Rosticeria
      </NavHashLink>
      {/*<Link className="nav-bar-link" to="/shop">
      Peca Ja
</Link>*/}
      <NavHashLink
        className="nav-bar-link"
        smooth
        to="/#section-cta"
        activeClassName="active"
        activeStyle={{ color: "#ffd700" }}
      >
        Delivery
      </NavHashLink>
      <Link className="nav-bar-link" to="/quem-somos">
        Quem Somos
      </Link>
      <Link className="nav-bar-link" to="/contact">
        Contato
      </Link>
    </div>
  );
};

export default NavBar;
