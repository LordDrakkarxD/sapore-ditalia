import { Outlet, Link } from "react-router-dom";

import SignUpForm from "../../components/sign-up-form/sign-up-form";

import "./registration.scss";

const Registration = () => {
  return (
    <div className="authentication-container">
      <SignUpForm />
    </div>
  );
};

export default Registration;
