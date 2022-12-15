import React from "react";

import "../../App.css";
import { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, Route, Routes } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import APIService from "./APIService";
import Icone from "../../new_components/Icone";
import Navegacao from "../../new_components/Navegacao";
import Rodape from "../../new_components/Rodape";
import Sidebar from "./Sidebar";
import SPAInfo from "./SPAInfo";
import SPAPlano from "./SPAPlano";
import SPAContato from "./SPAContato";
import SPAEvolucao from "./SPAEvolucao";

import { CDBCard, CDBCardBody, CDBContainer, CDBBox } from "cdbreact";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SPAExercicio from "./SPAExercicio";

const Aluno = () => {
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const logoutBtn = () => {
    removeToken(["mytoken"]);
    // console.log(user);
  };

  useEffect(() => {
    if (!token["mytoken"]) {
      navigate("/");
    }
  }, [token]);

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

          .letter{
            text-color:#48494B;
            text-transform: capitalize

          }
        `}
      </style>

      <Icone />
      <Navegacao />

      <CDBContainer>
        <CDBCard style={{ width: "100%" }}>
          <div className="lead mt-2 py-r border-bottom">
            Olá, <strong className="letter">{user.nome}</strong>
          </div>

          <Row>
            <Col xs="4">
              <Sidebar nome={user["nome"]} />
            </Col>
            <Col xs="8">
              <CDBCardBody className="py-1" style={{ padding: "20px" }}>
                <div className="content">
                  <Routes>
                    <Route path="/info" element={<SPAInfo user={user} />} />
                    <Route
                      path="/exercicio"
                      element={<SPAExercicio user={user} />}
                    />
                    <Route path="/plano" element={<SPAPlano />} />
                    <Route path="/contato" element={<SPAContato />} />
                    <Route path="/evolucao" element={<SPAEvolucao />} />
                  </Routes>
                </div>
                <br />
              </CDBCardBody>
            </Col>
          </Row>
          <Button
            type="button"
            variant="out"
            size="xxl"
            className="border-bottom mb-3"
            onClick={logoutBtn}
          >
            Logout
          </Button>
        </CDBCard>
      </CDBContainer>

      <Rodape />
    </div>
  );
};
export default Aluno;
