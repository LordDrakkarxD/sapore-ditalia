import { Outlet } from "react-router-dom";

import HowItWorks from "../../components/how-it-works/how-it-works";

import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <HowItWorks />
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
