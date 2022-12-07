import React, { useEffect, useState } from "react";
import APIService from "./APIService";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import { CDBCard, CDBCardBody, CDBContainer } from "cdbreact";
import Icone from "../../new_components/Icone";
import Navegacao from "../../new_components/Navegacao";
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logo from "../../imgs/logo-sembg.png";
import Button from "react-bootstrap/Button";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["mytoken"]);
  const [isLogin, setLogin] = useState(true);
  let navigate = useNavigate();

  const loginBtn = async () => {
    const body = {
      username,
      password,
    };
    try {
      const resp = await APIService.LoginUser(body);
      setToken("mytoken", resp.token);
      navigate("/professor");
    } catch (error) {
      alert("Confira seus dados");
    }
  };

  const registerBtn = async () => {
    const body = {
      username,
      password,
    };
    try {
      const resp1 = await APIService.RegisterUser(body);
      loginBtn();
    } catch (error) {
      alert("Confira seus dados");
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

      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="50px" />
              <span className="ml-3 h2 font-weight">TFAll</span>
            </a>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5">
            &copy; TFAll, 2022. All rights reserved.
          </small>
        </CDBBox>
      </CDBFooter>
    </div>
  );
}

export default Login;
