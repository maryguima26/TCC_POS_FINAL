import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "../../App.css";
import APIService from "./APIService";
import { CDBCard, CDBCardBody, CDBContainer } from "cdbreact";
import Button from "react-bootstrap/Button";

function DicasList(props) {
  const [token] = useCookies(["mytoken"]);

  const editBtn = (dica) => {
    props.editBtn(dica);
  };

  const deleteBtn = (dica) => {
    APIService.DeleteDica(dica.id, token["mytoken"])
      .then(() => props.deleteBtn(dica))
      .catch((error) => console.log(error));
  };

  const getAlunoName = (alunoId) => {
    const alunoEncontrado = props.alunos.find((item) => item.id === alunoId);
    return alunoEncontrado ? alunoEncontrado.nome : "Not found";
  };

  return (
    <div className="App">
      <style type="text/css">
        {`
        .btn-del {
          background-color: #A52A2A;
          color: white;
        }
        .btn-up {
          background-color: #556B2F;
          color: white;
        }

        .btn-xxl {
          padding: 0.5rem 0.5rem;
          font-size: 1.2rem;
        }
        `}
      </style>

      {props.dicas &&
        props.dicas.map((dica) => {
          return (
            <CDBCard key={dica.id} className="d-flex justify-content-start">
              <div className="container">
                <h4>Aluno: {getAlunoName(dica.aluno)}</h4>
                <p>{dica.description}</p>
              </div>
              <div className="row">
                <div className="col">
                  <Button
                    type="button"
                    variant="up"
                    size="xxl"
                    className="border-bottom mb-3"
                    onClick={() => editBtn(dica)}
                  >
                    Update
                  </Button>
                </div>
                <div className="col">
                  <Button
                    type="button"
                    variant="del"
                    size="xxl"
                    className="border-bottom mb-3"
                    onClick={() => deleteBtn(dica)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </CDBCard>
          );
        })}
    </div>
  );
}

export default DicasList;
