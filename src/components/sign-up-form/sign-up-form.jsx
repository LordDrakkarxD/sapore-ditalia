import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  sendOutEmailVerification,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.scss";

const defaultFormFields = {
  displayName: "",
  firstName: "",
  surName: "",
  telephone: "",
  street: "",
  number: "",
  zip: "",
  district: "",
  city: "",
  state: "",
  complement: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  motivo: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isReadonly, setIsReadonly] = useState(false);
  const [gender, setGender] = useState("Masculino");
  const [birthday, setBirthday] = useState("");
  const [cpf, setCPF] = useState("");
  const [celular, setCelular] = useState("");
  const [how, setHow] = useState("Google");

  let navigate = useNavigate();

  const {
    displayName,
    firstName,
    surName,
    telephone,
    street,
    number,
    zip,
    district,
    city,
    state,
    complement,
    email,
    confirmEmail,
    password,
    confirmPassword,
    motivo,
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
      alert("As senhas precisam ser exatamente iguais.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, {
        displayName,
        firstName,
        surName,
        cpf,
        birthday,
        gender,
        contact: { celular, telephone },
        how,
        motivo,
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

      //await sendOutEmailVerification(user);

      resetFormFields();

      window.scrollTo(0, 0);
      navigate("/");
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
    if (cpf.length !== 14) {
      alert("CPF deve ter 14 dígitos");
      setFormFields({ ...formFields, cpf: "" });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleCellphone = (e) => {
    console.log(e.target.value.length);

    if (e.target.value.length == 2) {
      e.target.value = "(" + e.target.value + ") ";
    } else if (e.target.value.length == 6 || e.target.value.length == 11) {
      e.target.value += "-";
    }

    setCelular(e.target.value);
  };

  const handleCPF = (e) => {
    if (e.target.value.length == 3 || e.target.value.length == 7) {
      e.target.value += ".";
    } else if (e.target.value.length == 11) {
      e.target.value += "-";
    }

    setCPF(e.target.value);
  };

  const handleBirthday = (e) => {
    if (e.target.value.length == 2 || e.target.value.length == 5) {
      e.target.value += "/";
    }

    setBirthday(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleHow = (e) => {
    setHow(e.target.value);
  };

  return (
    <div className="sign-up-container">
      <span>Preencha os dados abaixo para se cadastrar no site:</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="email-password-form">
          <FormInput
            label="Email*"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            autoFocus
          />
          <FormInput
            label="Confirmar seu email*"
            type="email"
            required
            onChange={handleChange}
            name="confirmEmail"
            value={confirmEmail}
          />
          <FormInput
            label="Senha*"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <FormInput
            label="Confirmar sua senha*"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
        </div>
        <div className="nome-id-form">
          <FormInput
            label="Nome*"
            type="text"
            required
            onChange={handleChange}
            name="firstName"
            value={firstName}
          />
          <FormInput
            label="Sobrenome*"
            type="text"
            required
            onChange={handleChange}
            name="surName"
            value={surName}
          />
          <FormInput
            label="Apelido*"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
          <FormInput
            label="CPF*"
            type="text"
            step="0.01"
            maxLength={14}
            required
            onChange={handleCPF}
            onBlur={cpfIsValid}
            name="cpf"
            value={cpf}
            placeholder="xxx.xxx.xxx-xx"
          />
        </div>
        <div className="cel-age-form">
          <FormInput
            label="Celular*"
            type="text"
            maxLength={16}
            required
            onChange={handleCellphone}
            name="celular"
            value={celular}
            placeholder="(xx) x-xxxx-xxxx"
          />
          <FormInput
            label="Telefone"
            type="number"
            maxLength={8}
            onChange={handleChange}
            name="telephone"
            value={telephone}
          />
          <FormInput
            label="Data de Nascimento*"
            type="text"
            required
            maxLength={10}
            onChange={handleBirthday}
            name="birthday"
            value={birthday}
            placeholder="dd/mm/aaaa"
          />
          <div className="cel-sex-form">
            <label className="form-input-gender">Sexo*</label>
            <select
              className="form-control-gender"
              value={gender}
              onChange={handleGender}
            >
              <option name="Masculino">Masculino</option>
              <option name="Feminino">Feminino</option>
            </select>
          </div>
        </div>
        <FormInput
          label="CEP*"
          type="number"
          maxLength={8}
          required
          onChange={handleChange}
          onBlur={buscaCEP}
          name="zip"
          value={zip}
        />
        <div className="address-form">
          <FormInput
            label="Endereço*"
            type="text"
            required
            readOnly={isReadonly}
            onChange={handleChange}
            name="street"
            value={street}
          />
          <FormInput
            label="Número*"
            type="number"
            required
            onChange={handleChange}
            name="number"
            value={number}
          />
        </div>
        <div className="address-form-2">
          <FormInput
            label="Complemento"
            type="text"
            onChange={handleChange}
            name="complement"
            value={complement}
          />
          <FormInput
            label="Bairro*"
            type="text"
            readOnly={isReadonly}
            required
            onChange={handleChange}
            name="district"
            value={district}
          />
          <FormInput
            label="Cidade*"
            type="text"
            readOnly={isReadonly}
            required
            onChange={handleChange}
            name="city"
            value={city}
          />
          <FormInput
            label="Estado*"
            type="text"
            readOnly={isReadonly}
            required
            onChange={handleChange}
            name="state"
            value={state}
          />
          <div className="cel-how-form">
            <label className="form-input-how">
              Como você conheceu nossa loja?
            </label>
            <select
              className="form-control-how"
              value={how}
              onChange={handleHow}
            >
              <option name="Google">Google</option>
              <option name="Facebook">Facebook</option>
              <option name="Instagram">Instagram</option>
              <option name="Outros">Outros</option>
            </select>
          </div>
          <FormInput
            label="Especifique:"
            type="text"
            onChange={handleChange}
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
  );
};

export default SignUpForm;
