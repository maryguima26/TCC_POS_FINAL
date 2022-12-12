import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import Registrese from "../pages/professor/Registrese";
import Professor from "../pages/professor/Professor";
import RegistroAluno from "../pages/aluno/RegistroAluno";
import Aluno from "../pages/aluno/Aluno";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registrese />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/registroaluno" element={<RegistroAluno />} />
        <Route path="/aluno/*" element={<Aluno />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
