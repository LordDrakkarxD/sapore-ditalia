import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import {
  signInWithGooglePopup,
  signInWithFacebookPopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  retrieveDocumentInformation,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const { setCurrentUser, currentUserData } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const signInWithFacebook = async () => {
    await signInWithFacebookPopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      const userData = await retrieveDocumentInformation(user);

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Faça seu login</h2>
      <Button type="button" buttonType="google" onClick={signInWithGoogle}>
        Continuar com Google
      </Button>
      <Button type="button" buttonType="facebook" onClick={signInWithFacebook}>
        Continuar com Facebook
      </Button>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          placeholder="Digite seu email"
        />
        <FormInput
          label="Senha"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <div className="buttons-container">
          <Button type="submit">Entrar</Button>
        </div>
        <Link to="forgot-password">
          <span className="forgot-account-button">Esqueceu sua senha?</span>
        </Link>
      </form>
      <div className="sign-up-button">
        <span className="sign-up-no-account">Nao tem uma conta?</span>
        <Link className="sign-up-link" to="/signup">
          Cadastre-se aqui.
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
