import React from "react";

import "../../App.css";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { UserContext } from "../../context/UserContext";

import Icone from "../../new_components/Icone";
import Navegacao from "../../new_components/Navegacao";
import Rodape from "../../new_components/Rodape";

import { CDBCard, CDBCardBody, CDBContainer } from "cdbreact";
import Form from "./Form";

const RegistroAluno = () => {
  const [token, setToken, removeToken] = useCookies(["mytoken"]);

  const [alunos, setAlunos] = useState([]);
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <style type="text/css">
        {`
          .btn-in {
            background-color: #333333;
            color: white;
          }
          .btn-out {
            background-color: #A52A2A;
            color: white;
          }

          .btn-xxl {
            padding: 0.5rem 0.5rem;
            font-size: 1.2rem;
          }
        `}
      </style>
      <Icone />
      <Navegacao />

      <CDBContainer>
        <CDBCard style={{ width: "100%" }}>
          <CDBCardBody className="py-1" style={{ padding: "20px" }}>
            <div className="lead mt-2 py-r border-bottom">Olá, Aluno(a)</div>
            <br />
            <div>
              {" "}
              Preencha suas informações para que um de nossos professores monte
              o plano ideal para você!
            </div>
            <br />

            <Form />
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>

      <Rodape />
    </div>
  );
};

export default RegistroAluno;
