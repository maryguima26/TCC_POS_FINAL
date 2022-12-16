import React from "react";

import "../../App.css";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { UserContext } from "../../context/UserContext";

import Icone from "../../new_components/Icone";
import Navegacao from "../../new_components/Navegacao";
import Rodape from "../../new_components/Rodape";
import APIService from "./APIService";
import { Button } from "react-bootstrap";

import { CDBCard, CDBCardBody, CDBContainer } from "cdbreact";
import Form from "./Form";

const RegistroAluno = () => {
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  const [alunos, setAlunos] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [formValues, setFormValues] = useState({});
  const { nome, email, sexo, peso, altura, idade, esporte, nivel } = formValues;

  let navigate = useNavigate();

  const insertAluno = async () => {
    const usuario = user.user_id;

    const body = {
      user: usuario,
      nome,
      email,
      sexo,
      peso,
      altura,
      idade,
      esporte,
      nivel,
    };

    // await APIService.UpdateAluno(body, token["mytoken"]);
    console.log(usuario);
  };
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
          <CDBCardBody className="py-1" style={{ padding: "20px" }}>
            <div className="lead mt-2 py-r border-bottom">Olá, Aluno(a)</div>
            <br />
            <div>
              {" "}
              Preencha suas informações para que um de nossos professores monte
              o plano ideal para você!
            </div>
            <br />

            <form onSubmit={insertAluno}>
              <div className="container">
                <div className="row align-items-start">
                  <label className="col-sm-2">Nome: </label>
                  <input
                    className="col-sm-10"
                    required
                    type="text"
                    id="nome"
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) =>
                      setFormValues((prevState) => {
                        return {
                          ...prevState,
                          nome: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <br />

                <div className="row">
                  <label className="col-sm-2">Email: </label>
                  <input
                    className="col-sm-10"
                    required
                    type="email"
                    id="email"
                    placeholder="email@email.com"
                    value={email}
                    onChange={(e) =>
                      setFormValues((prevState) => {
                        return {
                          ...prevState,
                          email: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <br />

                <div className="row">
                  <label className="col-sm-2">Sexo: </label>
                  <select
                    required
                    className="col-sm-10 select-control"
                    value={sexo}
                    onChange={(e) =>
                      setFormValues((prevState) => {
                        return {
                          ...prevState,
                          sexo: e.target.value,
                        };
                      })
                    }
                  >
                    <option value="">Selecione o sexo</option>
                    <option value="F">Feminino</option>
                    <option value="M">Masculino</option>
                  </select>
                </div>
                <br />

                <div className="row">
                  <label className="col-sm-2">Peso: </label>
                  <input
                    className="col-sm-10"
                    required
                    type="text"
                    id="peso"
                    placeholder="Peso em kg"
                    value={peso}
                    onChange={(e) =>
                      setFormValues((prevState) => {
                        return {
                          ...prevState,
                          peso: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <br />

                <div className="row">
                  <label className="col-sm-2">Altura: </label>
                  <input
                    className="col-sm-10"
                    required
                    type="text"
                    id="altura"
                    placeholder="Altura em cm"
                    value={altura}
                    onChange={(e) =>
                      setFormValues((prevState) => {
                        return {
                          ...prevState,
                          altura: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <br />

                <div className="row">
                  <label className="col-sm-2">Idade: </label>
                  <input
                    className="col-sm-10"
                    required
                    type="text"
                    id="idade"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) =>
                      setFormValues((prevState) => {
                        return {
                          ...prevState,
                          idade: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <br />

                <div className="row">
                  <label className="col-sm-2">Esporte: </label>
                  <select
                    required
                    className="select-control col-sm-10"
                    value={esporte}
                    onChange={(e) =>
                      setFormValues((prevState) => {
                        return {
                          ...prevState,
                          esporte: e.target.value,
                        };
                      })
                    }
                  >
                    <option value="0">Selecione o esporte</option>
                    <option value="1">Triatlo</option>
                    <option value="2">Duatlo</option>
                    <option value="3">Corrida</option>
                    <option value="4">Ciclismo</option>
                    <option value="5">Natação</option>
                    <option value="6">Musculação</option>
                  </select>
                </div>
                <br />

                <div className="row">
                  <label className="col-sm-2">Nível: </label>
                  <select
                    required
                    className="select-control col-sm-10"
                    value={nivel}
                    onChange={(e) =>
                      setFormValues((prevState) => {
                        return {
                          ...prevState,
                          nivel: e.target.value,
                        };
                      })
                    }
                  >
                    <option value="0">
                      Selecione o seu nível para o esporte
                    </option>
                    <option value="1">Iniciante</option>
                    <option value="2">Intermediário</option>
                    <option value="3">Avançado</option>
                  </select>
                </div>
                <br />
              </div>
              {}
              <Button
                type="button"
                variant="in"
                size="xxl"
                className="border-bottom mb-3"
                onClick={insertAluno}
              >
                Registrar informações
              </Button>
            </form>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>

      <Rodape />
    </div>
  );
};

export default RegistroAluno;
