import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import APIService from "./APIService";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

function Form() {
  const [formValues, setFormValues] = useState({});
  const { nome, email, sexo, peso, altura, idade, esporte, nivel } = formValues;
  const [token, setToken] = useCookies(["mytoken"]);
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const insertAluno = async (e) => {
    e.preventDefault();
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
    console.log(body);
    await APIService.RegisterAluno(body, token["mytoken"]);
    navigate("/login2");
    try {
    } catch (error) {
      alert("Dados faltantes");
    }
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
              <option value="0">Selecione o seu nível para o esporte</option>
              <option value="1">Iniciante</option>
              <option value="2">Intermediário</option>
              <option value="3">Avançado</option>
            </select>
          </div>
          <br />
        </div>

        <Button
          type="submit"
          variant="in"
          size="xxl"
          className="border-bottom mb-3"
        >
          Registrar informações
        </Button>
      </form>
    </div>
  );
}

export default Form;
