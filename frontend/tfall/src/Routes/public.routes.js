import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import Sobre from "../new_components/Sobre";
import Contato from "../new_components/Contato";
import Triatlo from "../new_components/Triatlo";
import Duatlo from "../new_components/Duatlo";
import Gym from "../new_components/Gym";
import Login from "../pages/professor/Login";
import LoginAluno from "../pages/aluno/LoginAluno";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/about" element={<Sobre />} />
        <Route path="/contact" element={<Contato />} />
        <Route path="/triathlon" element={<Triatlo />} />
        <Route path="/duathlon" element={<Duatlo />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<LoginAluno />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
