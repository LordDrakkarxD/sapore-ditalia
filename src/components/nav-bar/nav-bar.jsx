import { Outlet, Link } from "react-router-dom";

import DItaliaLogo from "../../assets/logo.png";

import "./nav-bar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar-links-container">
      <Link className="nav-bar-link" to="/">
        Home
      </Link>
      <Link className="nav-bar-link" to="/menu">
        Gastronomia
      </Link>
      {/*<Link className="nav-bar-link" to="/shop">
        Peca Ja
  </Link>*/}
      <Link className="nav-bar-link" to="/who">
        Quem Somos
      </Link>
      <Link className="nav-bar-link" to="/contact">
        Contato
      </Link>
    </div>
  );
};

export default NavBar;

{
  /*<Link className="nav-link" to="/shop">
        Como Funciona
      </Link>
      <Link className="nav-link" to="/shop">
        Porque Assinar
      </Link>
      <Link className="nav-link" to="/shop">
        Escolha seu Plano
      </Link>*/
}
