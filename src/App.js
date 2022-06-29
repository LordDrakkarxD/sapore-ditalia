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
            path="institucional/seguranca"
            element={<Institucional title="Segurança" />}
          />
          <Route
            path="institucional/politica-de-privacidade"
            element={<Institucional title="Política de Privacidade" />}
          />
          <Route
            path="institucional/termos-e-condicoes"
            element={<Institucional title="Termos e Condições" />}
          />
          <Route
            path="institucional/contato"
            element={<Institucional title="Contato" />}
          />

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
    </div>
  );
};

export default App;

// <Route
//   path="signup"
//   element={currentUser ? navigate("/") : <Registration />}
// />;
