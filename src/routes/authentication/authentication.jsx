import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

import "./authentication.scss";

const Authentication = () => {
  return (
    <section className="section-authentication">
      <div className="authentication-container">
        <div className="authentication-header">
          <span>Login</span>
        </div>
        <SignInForm />
      </div>
    </section>
  );
};

export default Authentication;
