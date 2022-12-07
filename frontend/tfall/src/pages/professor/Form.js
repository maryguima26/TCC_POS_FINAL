import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import APIService from "./APIService";
import Button from "react-bootstrap/Button";

function Form({ dica, updatedInformation, insertedInformation, alunos }) {
  const [formValues, setFormValues] = useState({});
  const { title, description } = formValues;
  const [token, setToken] = useCookies(["mytoken"]);

  useEffect(() => {
    setFormValues({ ...dica });
  }, [dica]);

  const updateDica = () => {
    const body = {
      title,
      description,
      aluno: formValues.alunoId,
    };
    APIService.UpdateDica(dica.id, body, token["mytoken"]).then(
      updatedInformation
    );
  };

  const insertDica = () => {
    const body = {
      title,
      description,
      aluno: formValues.alunoId,
    };
    APIService.InsertDica(body, token["mytoken"]).then(insertedInformation);
  };

  return (
    <div>
      <style type="text/css">
        {`
        .btn-flat2 {
        background-color: #454B1B;
        color: white;
        }

        .btn-xxl2 {
        padding: 0.5rem 0.5rem;
        font-size: 1.2rem;
        }
        `}
      </style>

      {dica ? (
        <form onSubmit={dica.id ? updateDica : insertDica}>
          <div className="mb-3">
            <label htmlFor="title" className="select-label">
              Aluno
            </label>
            <select
              required
              className="form-control"
              onChange={(e) =>
                setFormValues((prevState) => {
                  return {
                    ...prevState,
                    alunoId: e.target.value,
                  };
                })
              }
            >
              <option value="">Escolha o aluno</option>;
              {alunos.map((aluno) => {
                return <option value={aluno.id}>{aluno.nome}</option>;
              })}
            </select>
            <br />
            <label htmlFor="title" className="form-label">
              Título
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="title"
              placeholder="Please Enter The Title"
              value={title}
              onChange={(e) =>
                setFormValues((prevState) => {
                  return {
                    ...prevState,
                    title: e.target.value,
                  };
                })
              }
            />

            <label htmlFor="description" className="form-label">
              Descrição
            </label>
            <textarea
              required
              className="form-control"
              id="description"
              rows="5"
              value={description}
              onChange={(e) =>
                setFormValues((prevState) => {
                  return {
                    ...prevState,
                    description: e.target.value,
                  };
                })
              }
            ></textarea>
            <br />

            {dica.id ? (
              <button type="submit" className="btn btn-success">
                Update Dica
              </button>
            ) : (
              <Button
                type="submit"
                variant="flat2"
                size="xxl2"
                className="border-bottom mb-3"
              >
                Inserir Dica
              </Button>
            )}
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default Form;
