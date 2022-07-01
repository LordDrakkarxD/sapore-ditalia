import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./routes/home/home";
import Authentication from "./routes/authentication/authentication";
import Header from "./routes/header/header";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";
import Payment from "./routes/payment/payment";
import Institucional from "./routes/institucional/institucional";
import Rosticeria from "./routes/rosticeria/rosticeria";
import Enoteca from "./routes/enoteca/enoteca";
import Footer from "./components/footer/footer";
import Contato from "./routes/contato/contato";

import { UserContext } from "./contexts/user";

const App = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="payment" element={<Payment />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="signin" element={<Authentication />} />
          <Route path="rosticceria" element={<Rosticeria />} />
          <Route path="enoteca" element={<Enoteca />} />
          <Route
            path="institucional/quem-somos"
            element={<Institucional title="Quem Somos" />}
          />
          <Route
            path="institucional/delivery"
            element={<Institucional title="Delivery" />}
          />
          <Route
            path="institucional/politica-de-privacidade"
            element={<Institucional title="Política de Privacidade" />}
          />
          <Route path="contato" element={<Contato />} />

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
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

// <Route
//   path="signup"
//   element={currentUser ? navigate("/") : <Registration />}
// />;
