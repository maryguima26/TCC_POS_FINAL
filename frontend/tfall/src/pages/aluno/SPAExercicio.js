import { Button } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
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
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import FormPerform from "./FormPerform";
import APIService from "./APIService";

function SPAExercicio(props) {
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [treino, setTreino] = useState([]);
  const [isClicked, setIsClicked] = useState(true);

  const obtainTreino = async () => {
    const treino = await APIService.RetrieveTreino(props.user.nome, token);
    setTreino(treino);
    // console.log(treino);
    setIsClicked(!isClicked);
  };

  const insertPerformance = () => {
    setIsClicked(isClicked);
  };
  return (
    <div>
      <div>
        <CDBCard style={{ width: "100%" }}>
          <CDBCardBody className="mx-4">
            <div className="text-center mt-4 mb-2">
              <p className="h4"> Treino do dia </p>
              {isClicked ? (
                <div>
                  <Button
                    type="button"
                    variant="in"
                    size="xxl"
                    className="border-bottom mb-3"
                    onClick={obtainTreino}
                  >
                    Mostrar treinos
                  </Button>
                </div>
              ) : (
                <div>
                  <div>{treino[0].descricao}</div>
                  <div className="d-flex flex-column align-items-center">
                    <FormPerform treino={treino} />
                  </div>
                </div>
              )}
            </div>
            {/* <div className="form-row mb-n4">{props.user.nome}</div> */}
          </CDBCardBody>
        </CDBCard>
      </div>
    </div>
  );
}
export default SPAExercicio;
