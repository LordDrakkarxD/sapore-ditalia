import { useState, useContext, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { UserContext } from "../../contexts/user";

import FormInput from "../../components/form-input/form-input";
import Button from "../../components/button/button";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  modifyDocumentInformation,
} from "../../utils/firebase/firebase.utils";

import "./menu-cadastro.scss";

const defaultFormFields = {
  displayName: "",
};

const MenuCadastro = () => {
  const { currentUser, currentUserData, setCurrentUserData } =
    useContext(UserContext);

  let navigate = useNavigate();

  const {
    firstName,
    surName,
    displayName,
    cpf,
    email,
    birthday,
    gender,
    how,
    motivo,
  } = currentUserData;

  const { celular, telephone } = currentUserData.contact;

  const { zip, street, number, complement, district, city, state } =
    currentUserData.address;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentUserData({ ...currentUserData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await modifyDocumentInformation(currentUser, currentUserData);

      window.scrollTo(0, 0);
      navigate("/menu");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(
          "Não foi possível criar o usuário com este email, pois o mesmo já se encontra em uso"
        );
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className="section-menu-cadastro">
      <div className="menu-cadastro-container">
        <div className="menu-cadastro-header">
          <span>Meu Cadastro</span>
        </div>
        <div className="sign-up-container">
          <span>Preencha os dados abaixo para se cadastrar no site:</span>
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <div className="email-password-form">
              <FormInput
                label="Email"
                type="email"
                readOnly
                name="email"
                value=""
                placeholder={email}
              />
            </div>
            <div className="nome-id-form">
              <FormInput
                label="Nome*"
                type="text"
                readOnly
                name="firstName"
                value=""
                placeholder={firstName}
              />
              <FormInput
                label="Sobrenome*"
                type="text"
                readOnly
                name="surName"
                value=""
                placeholder={surName}
              />
              <FormInput
                label="Apelido*"
                type="text"
                onChange={handleChange}
                name="displayName"
                value={displayName}
              />
              <FormInput
                label="CPF*"
                type="text"
                step="0.01"
                maxLength={14}
                readOnly
                name="cpf"
                value=""
                placeholder={cpf}
              />
            </div>
            <div className="cel-age-form">
              <FormInput
                label="Celular*"
                type="text"
                maxLength={16}
                readOnly
                name="celular"
                value={celular}
              />
              <FormInput
                label="Telefone"
                type="number"
                maxLength={8}
                readOnly
                name="telephone"
                value={telephone}
              />
              <FormInput
                label="Data de Nascimento*"
                type="text"
                maxLength={10}
                readOnly
                name="birthday"
                value={birthday}
              />
              <div className="cel-sex-form">
                <FormInput
                  label="Sexo*"
                  type="text"
                  maxLength={10}
                  readOnly
                  name="gender"
                  value=""
                  placeholder={gender}
                />
              </div>
            </div>
            <FormInput
              label="CEP*"
              type="number"
              maxLength={8}
              readOnly
              name="zip"
              value={zip}
            />
            <div className="address-form">
              <FormInput
                label="Endereço*"
                type="text"
                readOnly
                name="street"
                value={street}
              />
              <FormInput
                label="Número*"
                type="number"
                readOnly
                name="number"
                value={number}
              />
            </div>
            <div className="address-form-2">
              <FormInput
                label="Complemento"
                type="text"
                readOnly
                name="complement"
                value={complement}
              />
              <FormInput
                label="Bairro*"
                type="text"
                readOnly
                name="district"
                value={district}
              />
              <FormInput
                label="Cidade*"
                type="text"
                readOnly
                name="city"
                value={city}
              />
              <FormInput
                label="Estado*"
                type="text"
                readOnly
                name="state"
                value={state}
              />
              <div className="cel-how-form">
                <label className="form-input-how">
                  Como você conheceu nossa loja?
                </label>
                <select className="form-control-how" value={how} readOnly>
                  <option name="Google">Google</option>
                  <option name="Facebook">Facebook</option>
                  <option name="Instagram">Instagram</option>
                  <option name="Outros">Outros</option>
                </select>
              </div>
              <FormInput
                label="Especifique:"
                type="text"
                readOnly
                name="motivo"
                value={motivo}
              />
              <div className="cel-required-form">
                <span>(*) Campos obrigatórios</span>
              </div>
            </div>
            <div className="form-submit-button">
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenuCadastro;
