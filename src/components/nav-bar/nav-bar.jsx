import { Outlet, Link } from "react-router-dom";

import "./nav-bar.scss";

const NavBar = ({ sticky }) => {
  return (
    <div className={`nav-bar-links-container ${sticky ? "sticky" : ""}`}>
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
