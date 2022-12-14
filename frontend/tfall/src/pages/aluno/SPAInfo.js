import { Button } from "react-bootstrap";
import React from "react";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBIcon,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from "cdbreact";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SPAInfo(props) {
  return (
    <div>
      <CDBCard style={{ width: "100%" }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4"> Informações do Aluno </p>
          </div>
          {/* <div className="form-row mb-n4">{props.user.nome}</div> */}
          <Row>
            <Col xs="4" className="me-auto">
              Idade:{" "}
            </Col>
            <Col xs="8" className="me-auto">
              {props.user.idade}{" "}
            </Col>
            <Col xs="4" className="me-auto">
              E-mail:{" "}
            </Col>
            <Col xs="8" className="me-auto">
              {props.user.email}{" "}
            </Col>
            <Col xs="4" className="me-auto">
              Sexo:{" "}
            </Col>
            <Col xs="8" className="me-auto">
              {props.user.sexo}{" "}
            </Col>
            <Col xs="4" className="me-auto">
              Altura:{" "}
            </Col>
            <Col xs="8" className="me-auto">
              {props.user.altura}{" "}
            </Col>
            <Col xs="4" className="me-auto">
              Esporte:{" "}
            </Col>
            <Col xs="8" className="me-auto">
              {props.user.esporte}{" "}
            </Col>
            <Col xs="4" className="me-auto">
              Nível:{" "}
            </Col>
            <Col xs="8" className="me-auto">
              {props.user.nivel}{" "}
            </Col>
          </Row>
          <CDBBtn color="dark" className="btn-block my-3 mx-0">
            Editar informações
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </div>
  );
}
export default SPAInfo;
