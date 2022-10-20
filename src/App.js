import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./contexts/user";

import Home from "./routes/home/home";
import Authentication from "./routes/authentication/authentication";
import CheckOut from "./routes/checkout/checkout";
import Header from "./routes/header/header";
import Payment from "./routes/payment/payment";
import Institucional from "./routes/institucional/institucional";
import Rosticeria from "./routes/rosticeria/rosticeria";
import Enoteca from "./routes/enoteca/enoteca";
import Footer from "./components/footer/footer";
import Contato from "./routes/contato/contato";
import Delivery from "./routes/delivery/delivery";
import Gourmet from "./routes/gourmet/gourmet";
import CardapioGourmet from "./routes/cardapio-gourmet/cardapio-gourmet";
import ProductDetails from "./routes/product-details/product-details";
import Registration from "./routes/registration/registration";
import Menu from "./routes/menu/menu";
import MenuCadastro from "./routes/menu-cadastro/menu-cadastro";
import MenuPedidos from "./routes/menu-pedidos/menu-pedidos";

const App = () => {
  const { currentUser } = useContext(UserContext);

  const redirectHandler = currentUser ? (
    <Navigate to="/" />
  ) : (
    <Authentication />
  );

  const redirectLogOffUser = currentUser ? <Menu /> : <Navigate to="/" />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          {/*<Route path="payment" element={<Payment />} />
          <Route path="signin" element={<Authentication />} />*/}
          <Route path="rosticceria" element={<Rosticeria />} />
          <Route path="enoteca" element={<Enoteca />} />
          <Route
            path="institucional/quem-somos"
            element={<Institucional title="Quem Somos" />}
          />
          <Route path="delivery" element={<Delivery />} />
          <Route
            path="institucional/politica-de-privacidade"
            element={<Institucional title="Política de Privacidade" />}
          />
          <Route path="contato" element={<Contato />} />
          {/*<Route path="gourmet" element={<Gourmet />} />

          <Route path="gourmet/:id" element={<ProductDetails />} />

          <Route path="cardapio-gourmet" element={<CardapioGourmet />} />

          <Route path="auth" element={redirectHandler} />
          <Route path="signup" element={<Registration />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="menu" element={redirectLogOffUser} />
          <Route path="menu/cadastro" element={<MenuCadastro />} />
  <Route path="menu/meus-pedidos" element={<MenuPedidos />} />*/}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
