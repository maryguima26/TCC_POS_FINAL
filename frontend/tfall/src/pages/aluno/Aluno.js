import React from "react";

import "../../App.css";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import {
  useNavigate,
  useLocation,
  Link,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

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

function Aluno() {
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  let navigate = useNavigate();
  const location = useLocation();
  const name = location.state;

  const logoutBtn = () => {
    removeToken(["mytoken"]);
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
        `}
      </style>

      <Icone />
      <Navegacao />

      <CDBContainer>
        <CDBCard style={{ width: "100%" }}>
          <div className="lead mt-2 py-r border-bottom">{name.username}</div>
          <Row>
            <Col xs="4">
              <Sidebar username={name["username"]} />
            </Col>
            <Col xs="8">
              <CDBCardBody className="py-1" style={{ padding: "20px" }}>
                <div className="content">
                  <Routes>
                    <Route path="/info" element={<SPAInfo />} />
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
}
export default Aluno;
