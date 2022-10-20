import { useState } from "react";

import cep from "cep-promise";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.scss";

const defaultFormFields = {
  displayName: "",
  fullName: "",
  cpf: "",
  street: "",
  number: "",
  zip: "",
  district: "",
  city: "",
  state: "",
  complement: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isReadonly, setIsReadonly] = useState(false);

  const {
    displayName,
    fullName,
    cpf,
    street,
    number,
    zip,
    district,
    city,
    state,
    complement,
    email,
    password,
    confirmPassword,
  } = formFields;

  const url = () => {
    return `http://viacep.com.br/ws/${zip}/json/`;
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, {
        displayName,
        fullName,
        cpf,
        address: {
          street,
          number,
          zip,
          district,
          city,
          state,
          complement,
        },
      });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const buscaCEP = async (event) => {
    if (zip.length < 8) {
      return;
    } else {
      const addressInfo = await fetch(url(), { mode: "cors" })
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch((err) => console.log(err));

      const { bairro, cep, logradouro, localidade, uf } = addressInfo;

      setFormFields({
        ...formFields,
        street: logradouro,
        district: bairro,
        city: localidade,
        state: uf,
      });
      setIsReadonly((prevState) => !prevState);
    }
  };

  const cpfIsValid = () => {
    if (cpf.length !== 11) {
      alert("CPF deve ter 11 digitos");
      setFormFields({ ...formFields, cpf: "" });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Nao tem uma conta?</h2>
      <span>Preencha seus dados pessoais</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nickname"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Nome Completo"
          type="text"
          required
          onChange={handleChange}
          name="fullName"
          value={fullName}
        />
        <FormInput
          label="CPF"
          type="number"
          maxLength={11}
          required
          onChange={handleChange}
          onBlur={cpfIsValid}
          name="cpf"
          value={cpf}
        />
        <FormInput
          label="CEP"
          type="number"
          maxLength={8}
          required
          onChange={handleChange}
          onBlur={buscaCEP}
          name="zip"
          value={zip}
        />
        <FormInput
          label="Endereco"
          type="text"
          readOnly={isReadonly}
          required
          onChange={handleChange}
          name="street"
          value={street}
        />
        <FormInput
          label="Numero"
          type="text"
          required
          onChange={handleChange}
          name="number"
          value={number}
        />
        <FormInput
          label="Bairro"
          type="text"
          readOnly={isReadonly}
          required
          onChange={handleChange}
          name="district"
          value={district}
        />
        <FormInput
          label="Cidade"
          type="text"
          readOnly={isReadonly}
          required
          onChange={handleChange}
          name="city"
          value={city}
        />
        <FormInput
          label="UF"
          type="text"
          readOnly={isReadonly}
          required
          onChange={handleChange}
          name="state"
          value={state}
        />
        <FormInput
          label="Complemento"
          type="text"
          required
          onChange={handleChange}
          name="complement"
          value={complement}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Senha"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirmar Senha"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
