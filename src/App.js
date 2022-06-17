import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./routes/home/home";
import Authentication from "./routes/authentication/authentication";
import Header from "./routes/header/header";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";
import Payment from "./routes/payment/payment";

import { UserContext } from "./contexts/user";

const App = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="payment" element={<Payment />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="signin" element={<Authentication />} />
        {/*
            <Route
              path="signup"
              element={
                currentUser ? (
                  setTimeout(() => {
                    navigate("/");
                  }, 5000)
                ) : (
                  <Registration />
                )
              }
            />
            */}
      </Routes>
    </div>
  );
};

export default App;

// <Route
//   path="signup"
//   element={currentUser ? navigate("/") : <Registration />}
// />;
