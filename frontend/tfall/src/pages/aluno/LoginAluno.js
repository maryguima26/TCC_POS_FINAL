import React, { useEffect, useState, useContext } from "react";
import APIService from "./APIService";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import { CDBCard, CDBCardBody, CDBContainer } from "cdbreact";
import Icone from "../../new_components/Icone";
import Navegacao from "../../new_components/Navegacao";
import Rodape from "../../new_components/Rodape";
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logo from "../../imgs/logo-sembg.png";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../context/UserContext";

function LoginAluno() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["mytoken"]);
  const [isLogin, setLogin] = useState(true);
  // const [user, setUser] = useState([]);
  const { user: user, setUser: setUser } = useContext(UserContext);
  const { user: aluno, setUser: setAluno } = useContext(UserContext);

  let navigate = useNavigate();

  const loginBtn = async () => {
    const body = {
      username,
      password,
    };
    try {
      const user = await APIService.LoginUser(body);
      setUser(user);
      setToken("mytoken", user.token);
      const aluno = await APIService.GetAlunos(user, user.token);
      setAluno(aluno[0]);
      navigate("/aluno");
    } catch (error) {
      console.log(error);
      alert("Confira seus dados");
    }
  };

  const registerBtn = async () => {
    let is_aluno = true;
    let is_professor = false;
    const body = {
      username,
      password,
      is_aluno,
      is_professor,
    };
    try {
      const registra_aluno = await APIService.RegisterUser(body);
      const user = await APIService.LoginUser(body);
      setToken("mytoken", user.token);
      setUser(user);
      navigate("/registroaluno");
    } catch (error) {
      alert("Um usuário com esse nome já existe");
    }
  };

  return (
    <div className="App">
      <style type="text/css">
        {`
        .btn-flat {
        background-color: #333333;
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

      <Icone />
      <Navegacao />

      <CDBContainer>
        <CDBCard style={{ width: "100%" }}>
          <CDBCardBody className="py-1">
            {isLogin ? (
              <div className="lead mt-2 py-r border-bottom">Login</div>
            ) : (
              <div className="lead mt-2 py-r border-bottom">Registre-se</div>
            )}
            <div className="py-3">
              <div className="d-flex flex-column align-items-center">
                <br />
                <br />

                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Login
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Insira o seu usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <br />
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Insira a sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {isLogin ? (
                  <Button
                    type="button"
                    variant="up"
                    size="xxl"
                    className="border-bottom mb-3"
                    onClick={loginBtn}
                  >
                    Login
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="up"
                    size="xxl"
                    className="border-bottom mb-3"
                    onClick={registerBtn}
                  >
                    Registre-se
                  </Button>
                )}

                <div className="mb-3">
                  <br />
                  {isLogin ? (
                    <h5>
                      {" "}
                      Se você não tem conta, por favor{" "}
                      <Button
                        className="btn btn-primary"
                        onClick={() => setLogin(false)}
                      >
                        Registre-se
                      </Button>
                    </h5>
                  ) : (
                    <h5>
                      Se você tem conta, por favor, faça o{" "}
                      <Button
                        className="btn btn-primary"
                        onClick={() => setLogin(true)}
                      >
                        Login
                      </Button>
                    </h5>
                  )}
                </div>
              </div>
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>

      <Rodape />
    </div>
  );
}

export default LoginAluno;
