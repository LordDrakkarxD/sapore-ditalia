import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Registration from "./routes/registration/registration";

import { UserContext } from "./contexts/user";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Authentication />} />
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
      </Route>
    </Routes>
  );
};

export default App;

// <Route
//   path="signup"
//   element={currentUser ? navigate("/") : <Registration />}
// />;
