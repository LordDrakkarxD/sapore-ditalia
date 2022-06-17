import { Outlet } from "react-router-dom";

import Hero from "../../components/hero/hero";
import Header from "../../routes/header/header";
import Slider from "../../components/slider/slider";
import Plans from "../../components/plans/plans";
import HowItWorks from "../../components/how-it-works/how-it-works";

import Footer from "../../components/footer/footer";

import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-content">
        <Header />
        <Hero />
      </div>
      <Slider />
      {/*<HowItWorks />*/}
      <Plans />
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
