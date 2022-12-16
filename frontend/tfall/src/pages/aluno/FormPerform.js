import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import APIService from "./APIService";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

const FormPerform = (props) => {
  const [formValues, setFormValues] = useState({});
  const { tempo, quilometragem, esforco } = formValues;
  const [token, setToken] = useCookies(["mytoken"]);
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isClicked, setIsClicked] = useState(true);

  const insertPerform = async (e) => {
    e.preventDefault();
    const body = {
      aluno: user.id,
      tempo,
      quilometragem,
      esforco,
      treino: props.treino[0].id,
    };
    console.log(body);
    try {
      await APIService.RegisterPerform(body, token["mytoken"]);
      alert("Sua performance foi inserida corretamente");
      setIsClicked(!isClicked);
    } catch (error) {
      alert("Informações faltantes!");
    }
  };

  return (
    <div>
      {isClicked ? (
        <form onSubmit={insertPerform}>
          <div className="container">
            <div className="row align-items-start">
              <label className="col-sm-4">Tempo: </label>
              <input
                className="col-sm-10"
                required
                type="text"
                id="tempo"
                // placeholder="Tempo em min"
                value={tempo}
                onChange={(e) =>
                  setFormValues((prevState) => {
                    return {
                      ...prevState,
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
                id="quilometragem"
                // placeholder="Quantos km?"
                value={quilometragem}
                onChange={(e) =>
                  setFormValues((prevState) => {
                    return {
                      ...prevState,
                      quilometragem: e.target.value,
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
                  setFormValues((prevState) => {
                    return {
                      ...prevState,
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
              type="submit"
              variant="in"
              size="xxl"
              className="border-bottom mb-3"
              // onClick={insertPerform}
            >
              Registrar informações
            </Button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default FormPerform;
