import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Sobre from "./new_components/Sobre";
import Contato from "./new_components/Contato";
import Triatlo from "./new_components/Triatlo";
import Duatlo from "./new_components/Duatlo";
import Gym from "./new_components/Gym";
import Login from "./pages/professor/Login";
import LoginAluno from "./pages/aluno/LoginAluno";
import Registrese from "./pages/professor/Registrese";
import Professor from "./pages/professor/Professor";
import RegistroAluno from "./pages/aluno/RegistroAluno";
import Aluno from "./pages/aluno/Aluno";
import PrivateRoutes from "./Routes/private.routes";
import PublicRoutes from "./Routes/public.routes";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
// import { AuthContext } from "./context/AuthContext";
// import AuthProvider from "./context/AuthContext";
import { UserContext } from "./context/UserContext";

function Router() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <UserContext.Provider value={value}>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Registrese />} />
            <Route path="/professor" element={<Professor />} />
            <Route path="/registroaluno" element={<RegistroAluno />} />
            <Route path="/aluno/*" element={<Aluno />} />
            <Route path="/" element={<App />} />
            <Route path="/about" element={<Sobre />} />
            <Route path="/contact" element={<Contato />} />
            <Route path="/triathlon" element={<Triatlo />} />
            <Route path="/duathlon" element={<Duatlo />} />
            <Route path="/gym" element={<Gym />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login2" element={<LoginAluno />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </UserContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
