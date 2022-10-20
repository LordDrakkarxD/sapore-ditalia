import { useContext } from "react";

import { Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user";

import Hero from "../../components/hero/hero";
import SobreNos from "../../components/sobre-nos/sobre-nos";
import CTA from "../../components/cta/cta";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import iFood from "../../assets/IFood_logo.svg";

import "./home.scss";

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  //console.log(currentUser);
  //console.log(currentUserData);

  return (
    <div className="home-container">
      <Hero />
      <CTA />
      <SobreNos />
      <Outlet />
    </div>
  );
};

export default Home;
