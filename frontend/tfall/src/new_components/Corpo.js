import React from "react";
import {
  CDBCard,
  CDBPane,
  CDBCheckbox,
  CDBCardBody,
  CDBCardTitle,
  CDBContainer,
} from "cdbreact";
import Image from "react-bootstrap/Image";
import imagem from "../imgs/imagem.jpg";

function Corpo() {
  return (
    <CDBContainer>
      <CDBCard style={{ width: "100%" }}>
        <CDBCardBody className="py-1">
          <div className="lead mt-2 py-r border-bottom">Triatlo para Todos</div>
          <div className="py-3">
            <div className="d-flex flex-column align-items-center">
              <Image
                alt="logo"
                src={imagem}
                width="50%"
                className="fluid"
                shadow="dark"
              />
              <div className="my-5 mb-2 h6">
                O melhor aplicativo de treinos focado nos seus objetivos
              </div>
              <p className="py-1 my-3 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
}

export default Corpo;
