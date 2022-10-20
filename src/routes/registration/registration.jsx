import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

import "./registration.scss";

const Registration = () => {
  return (
    <section className="section-registration">
      <div className="registration-container">
        <div className="registration-header">
          <span>Cadastre-se</span>
        </div>
        <SignUpForm />
      </div>
    </section>
  );
};

export default Registration;
