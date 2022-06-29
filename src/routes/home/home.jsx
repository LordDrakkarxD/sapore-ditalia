import { Outlet } from "react-router-dom";

import Hero from "../../components/hero/hero";
import Header from "../../routes/header/header";
import Slider from "../../components/slider/slider";
import Plans from "../../components/plans/plans";
import CTA from "../../components/cta/cta";
import Delivery from "../../components/delivery/delivery";
import HowItWorks from "../../components/how-it-works/how-it-works";
import SobreNos from "../../components/sobre-nos/sobre-nos";
import Footer from "../../components/footer/footer";

import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      {/*<div className="header-content">
        <Header />
        <Hero />
  </div>*/}
      {/*<Slider />*/}
      <SobreNos />
      <Plans />
      <Delivery />
      <CTA />
      {/*<HowItWorks />*/}

      <Footer />
      <Outlet />
    </div>
  );
};

export default Home;

// <div>Hero Section</div>

//       <div>Featured In Section</div>

//       <div>How It Works + Slides</div>

//       <div>Meals Section</div>
//       <div>Testimonials Section</div>
//       <div>Pricing Section</div>
//       <div>Call To Action Section</div>
