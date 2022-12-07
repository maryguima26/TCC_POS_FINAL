import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

const Sidebar = () => {
  const [token, setToken, removeToken] = useCookies(["mytoken"]);

  const initialUserState = {
    user: {},
  };
  const [user, setUser] = useState(initialUserState);

  // useEffect(() => {
  //   const getId = async (token) => {
  //     const { data } = await axios(`http://127.0.0.1:8000/api/aluno/`);

  //     console.log(data[0].user);
  //   };
  //   getId();
  // }, []);

  useEffect(() => {
    const getUser = async (token) => {
      let id = parseInt(token);
      const { data } = await axios(`http://127.0.0.1:8000/api/users/`);
      console.log(data);
    };
    getUser();
  }, []);

  // useEffect(() => {
  //   const getUser = async (id) => {
  //     // Pass our param (:id) to the API call
  //     const { data } = await axios(`http://127.0.0.1:8000/api/aluno/${id}`);
  //     setUser(data);
  //     // console.log(data[0].nome);
  //   };

  //   // Invoke the async function
  //   getUser();
  //   // console.log(user[0].nome);
  // }, []);

  return (
    <CDBSidebar
      // toggled="false"
      maxWidth="230px"
      textColor="#333"
      backgroundColor="#f0f0f0"
    >
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        {user.nome}
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to="#">
            <CDBSidebarMenuItem icon="th-large">Informações</CDBSidebarMenuItem>
          </Link>
          <Link to="#">
            <CDBSidebarMenuItem icon="sticky-note">Plano</CDBSidebarMenuItem>
          </Link>
          <Link to="#">
            <CDBSidebarMenuItem icon="envelope" iconType="solid">
              Contatar Professor
            </CDBSidebarMenuItem>
          </Link>
          <Link to="#">
            <CDBSidebarMenuItem icon="chart-line" iconType="solid">
              Evolução
            </CDBSidebarMenuItem>
          </Link>
          <Link to="#">
            <CDBSidebarMenuItem icon="user" iconType="solid">
              Logout
            </CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default Sidebar;
