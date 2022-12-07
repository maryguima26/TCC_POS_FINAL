import React from "react";
import "../../App.css";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import DicasList from "./DicasList";
import Form from "./Form";
import Icone from "../../new_components/Icone";
import Navegacao from "../../new_components/Navegacao";

import { CDBCard, CDBCardBody, CDBContainer } from "cdbreact";
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logo from "../../imgs/logo-sembg.png";

import Button from "react-bootstrap/Button";

function Registrese() {
  return (
    <div>
      <Icone />
      <Navegacao />
      <CDBContainer></CDBContainer>
    </div>
  );
}

export default Registrese;
