import { useContext, useEffect, useState, Fragment } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user";

import {
  retrieveDocumentInformation,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

import Button from "../../components/button/button";

import "./menu.scss";

const Menu = () => {
  const { currentUser, setCurrentUser, currentUserData, setCurrentUserData } =
    useContext(UserContext);
  let navigate = useNavigate();

  const { displayName } = currentUserData;

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    setCurrentUserData(null);

    window.scrollTo(0, 0);
    navigate("/");
  };

  return (
    <div className="section-menu">
      <div className="menu-container">
        <div className="menu-header">
          <span>Meu Menu</span>
        </div>
        <div className="menu-options">
          <Button buttonType="label" type="button">
            Bem vindo, {displayName}
          </Button>
          <Link className="menu-option" to="/menu/cadastro">
            <Button type="button">Meu Cadastro</Button>
          </Link>
          <Link className="menu-option" to="/menu/meus-pedidos">
            <Button type="button">Meus Pedidos</Button>
          </Link>
          <Button type="button" onClick={signOutHandler}>
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
