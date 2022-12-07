import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import APIService from "./APIService";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBIcon,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from "cdbreact";

function Form() {
  const [formValues, setFormValues] = useState({});
  const { nome, email, sexo, peso, altura, idade, esporte, nivel } = formValues;
  const [token, setToken] = useCookies(["mytoken"]);
  let navigate = useNavigate();

  const insertAluno = () => {
    const body = {
      nome,
      email,
      sexo,
      peso,
      altura,
      idade,
      esporte,
      nivel,
    };
    APIService.RegisterAluno(body, token["mytoken"]).then(navigate("/aluno"));
  };

  return (
    <div>
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
              <option value="MUSCULACAO">Musculação</option>
              <option value="NATACAO">Natação</option>
              <option value="CORRIDA">Corrida</option>
              <option value="CICLISMO">Ciclismo</option>
              <option value="DUATLO">Duatlo</option>
              <option value="TRIATLO">Triatlo</option>
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
              <option value="0">Selecione o seu nível para o esporte</option>
              <option value="1">Iniciante</option>
              <option value="2">Intermediário</option>
              <option value="3">Avançado</option>
            </select>
          </div>
          <br />
        </div>

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
    </div>
  );
}

export default Form;
