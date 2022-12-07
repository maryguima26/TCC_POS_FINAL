import React from "react";

import "../../App.css";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Icone from "../../new_components/Icone";
import Navegacao from "../../new_components/Navegacao";
import Rodape from "../../new_components/Rodape";
import Sidebar from "./Sidebar";

import { CDBCard, CDBCardBody, CDBContainer, CDBBox } from "cdbreact";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Aluno() {
  const [token, setToken, removeToken] = useCookies(["mytoken"]);

  const initialUserState = {
    user: {},
    token: token["mytoken"],
  };
  const [user, setUser] = useState(initialUserState);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(`http://127.0.0.1:8000/api/aluno/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    setUser();

    getUser();
  }, []);

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
          <div className="lead mt-2 py-r border-bottom">Olá, criatura</div>
          {/* <div className="lead mt-2 py-r border-bottom">Olá, {user.nome}</div> */}

          <Row>
            <Col xs="4">{/* <Sidebar /> */}</Col>
            <Col xs="8">
              <CDBCardBody className="py-1" style={{ padding: "20px" }}>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book. It usually
                  begins with: “Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.” The purpose of lorem ipsum is to create
                  a natural looking block of text (sentence, paragraph, page,
                  etc.) that doesn't distract from the layout. A practice not
                  without controversy, laying out pages with meaningless filler
                  text can be very useful when the focus is meant to be on
                  design, not content.
                </p>
                <br />
              </CDBCardBody>
            </Col>
          </Row>
        </CDBCard>
      </CDBContainer>

      <Rodape />
    </div>
  );
}
export default Aluno;
