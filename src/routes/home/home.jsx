import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Footer />
      <Outlet />
    </div>
  );
};

export default Home;
