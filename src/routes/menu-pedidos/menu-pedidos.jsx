import { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { UserContext } from "../../contexts/user";

import FormInput from "../../components/form-input/form-input";
import Button from "../../components/button/button";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  modifyDocumentInformation,
} from "../../utils/firebase/firebase.utils";

import "./menu-pedidos.scss";

const defaultFormFields = {
  displayName: "",
};

const MenuPedidos = () => {
  const { currentUser, currentUserData, setCurrentUserData } =
    useContext(UserContext);

  return (
    <div className="section-menu-pedidos">
      <div className="menu-pedidos-container">
        <div className="menu-pedidos-header">
          <span>Meus Pedidos</span>
        </div>
        <div className="sign-up-container">
          <span>Lista de Pedidos:</span>
        </div>
      </div>
    </div>
  );
};

export default MenuPedidos;
