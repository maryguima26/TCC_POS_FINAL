import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import APIService from "./APIService";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

const FormPerform = (props) => {
  const [formValues, setFormValues] = useState({});
  const { tempo, quilo, esforco } = formValues;
  const [token, setToken] = useCookies(["mytoken"]);
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const insertPerform = async () => {
    const body = {
      aluno: 1,
      tempo,
      quilo,
      esforco,
      treino: 1,
    };
    console.log(body);

    await APIService.RegisterPerform(body, token["mytoken"]);
  };

  return (
    <form onSubmit={insertPerform}>
      <div className="container">
        <div className="row align-items-start">
          <label className="col-sm-4">Tempo: </label>
          <input
            className="col-sm-10"
            required
            type="text"
            id="tempo"
            placeholder="Tempo em minutos para terminar o treino"
            value={tempo}
            onChange={(e) =>
              setFormValues(() => {
                return {
                  tempo: e.target.value,
                };
              })
            }
          />
        </div>
        <br />

        <div className="row">
          <label className="col-sm-4">Quilometragem </label>
          <input
            className="col-sm-10"
            required
            type="text"
            id="quilo"
            placeholder="Quilometragem"
            value={quilo}
            onChange={(e) =>
              setFormValues(() => {
                return {
                  quilo: e.target.value,
                };
              })
            }
          />
        </div>
        <br />

        <div className="row">
          <label className="col-sm-4">Esforço: </label>
          <select
            required
            className="col-sm-10 select-control"
            value={esforco}
            onChange={(e) =>
              setFormValues(() => {
                return {
                  esforco: e.target.value,
                };
              })
            }
          >
            <option value="">Qual foi o esforço?</option>
            <option value="fácil">Fácil</option>
            <option value="razoável">Razoável</option>
            <option value="intenso">Intenso</option>
            <option value="super extenuante">Extenuante</option>
          </select>
        </div>
        <br />

        <Button
          type="button"
          variant="in"
          size="xxl"
          className="border-bottom mb-3"
          onClick={insertPerform}
        >
          Registrar informações
        </Button>
      </div>
    </form>
  );
};

export default FormPerform;
