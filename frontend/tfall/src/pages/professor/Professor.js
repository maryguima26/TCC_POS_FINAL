import React from "react";
import "../../App.css";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import DicasList from "./DicasList";
import Form from "./Form";
import Icone from "../../new_components/Icone";
import Navegacao from "../../new_components/Navegacao";
import Rodape from "../../new_components/Rodape";

import { CDBCard, CDBCardBody, CDBContainer } from "cdbreact";
import Button from "react-bootstrap/Button";

const Professor = () => {
  const [dicas, setDicas] = useState([]);
  const [editDicas, setEditDicas] = useState(null);
  const [alunos, setAlunos] = useState([]);
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  let navigate = useNavigate();

  const getAlunos = () => {
    fetch("http://127.0.0.1:8000/api/aluno/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token["mytoken"]}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setAlunos(resp))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAlunos();
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/dicas/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token["mytoken"]}`,
        // Authorization: `Token 3efdb00ecf3504c8e839a3b97bfb083f2556599c`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setDicas(resp))
      .catch((error) => console.log(error));
  }, []);

  const editBtn = (dica) => {
    setEditDicas(dica);
  };

  const updatedInformation = (dica) => {
    const new_dica = dicas.map((mydica) => {
      if (mydica.id === dica.id) {
        return dica;
      } else {
        return mydica;
      }
    });

    setDicas(new_dica);
  };

  const dicaForm = () => {
    setEditDicas({
      title: "",
      description: "",
    });
  };

  const insertedInformation = (dica) => {
    const new_dica = [...dicas, dica];
    setDicas(new_dica);
  };

  const deleteBtn = (dica) => {
    const new_dicas = dicas.filter((mydica) => {
      if (mydica.id === dica.id) {
        return false;
      }
      return true;
    });
    setDicas(new_dicas);
  };

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
          <CDBCardBody className="py-1">
            <div className="lead mt-2 py-r border-bottom">Área das Dicas</div>
            <div className="py-3">
              <div className="d-flex justify-content-around">
                <Button
                  type="button"
                  variant="in"
                  size="xxl"
                  className="border-bottom mb-3"
                  onClick={dicaForm}
                >
                  Nova Dica
                </Button>
                <Button
                  type="button"
                  variant="out"
                  size="xxl"
                  className="border-bottom mb-3"
                  onClick={logoutBtn}
                >
                  Logout
                </Button>
              </div>
              <div className="d-flex flex-column align-items-center">
                <DicasList
                  dicas={dicas}
                  alunos={alunos}
                  editBtn={editBtn}
                  deleteBtn={deleteBtn}
                />

                {editDicas ? (
                  <Form
                    dica={editDicas}
                    alunos={alunos}
                    updatedInformation={updatedInformation}
                    insertedInformation={insertedInformation}
                  />
                ) : null}
              </div>
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>

      <Rodape />
    </div>
  );
};

export default Professor;
